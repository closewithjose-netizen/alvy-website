import { google } from 'googleapis';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/lead
 *
 * Body: { lead: { name, contact, project, service_area, summary }, conversation: [...] }
 *
 * Fans the lead out to:
 *   1. Monday.com (creates an item on the configured board)
 *   2. Google Sheets (appends a row)
 *   3. Email notification (optional — uses a webhook you wire up if you like)
 *
 * Each integration is independent — if Monday fails, the Sheet still gets it.
 */
export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (!body?.lead) {
    return Response.json({ error: 'Missing lead' }, { status: 400 });
  }

  const { lead, conversation = [] } = body;
  const conversationText = conversation
    .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
    .join('\n\n');

  const results = await Promise.allSettled([
    pushToMonday(lead, conversationText),
    appendToSheet(lead, conversationText)
  ]);

  return Response.json({
    ok: true,
    monday: results[0].status,
    sheet: results[1].status,
    error: results
      .filter((r) => r.status === 'rejected')
      .map((r) => String(r.reason))
  });
}

/* ─── Monday.com ──────────────────────────────────────────────────────── */
async function pushToMonday(lead, conversationText) {
  const token = process.env.MONDAY_API_TOKEN;
  const boardId = process.env.MONDAY_BOARD_ID;
  if (!token || !boardId) {
    throw new Error('Monday not configured');
  }
  const groupId = process.env.MONDAY_GROUP_ID || 'topics';

  // Monday's column_values is a JSON-encoded string keyed by column ID.
  // We use a generic "text" payload so the user can map their columns
  // later. To send to specific columns, replace the keys below with the
  // column IDs from their board.
  const columnValues = {
    // Open the board → Settings (top-right) → "Developers" → see column IDs.
    // For now we stuff everything in the item name + a single update.
  };

  const itemName = `${lead.name || 'Unknown'} — ${lead.project || 'New lead'}`;

  const mutation = `
    mutation CreateLead($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
      create_item(
        board_id: $boardId,
        group_id: $groupId,
        item_name: $itemName,
        column_values: $columnValues
      ) { id }
    }`;

  const r = await fetch('https://api.monday.com/v2', {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
      'API-Version': '2024-04'
    },
    body: JSON.stringify({
      query: mutation,
      variables: {
        boardId: String(boardId),
        groupId,
        itemName,
        columnValues: JSON.stringify(columnValues)
      }
    })
  });

  const data = await r.json();
  if (data.errors) {
    throw new Error(`Monday: ${JSON.stringify(data.errors)}`);
  }
  const itemId = data?.data?.create_item?.id;

  // Attach the conversation as an update on the item
  if (itemId) {
    const update = `
      mutation AddUpdate($itemId: ID!, $body: String!) {
        create_update(item_id: $itemId, body: $body) { id }
      }`;
    const updateBody = [
      `Contact: ${lead.contact || '—'}`,
      `Service area: ${lead.service_area || '—'}`,
      `Summary: ${lead.summary || '—'}`,
      '',
      '── Full conversation ──',
      conversationText
    ].join('\n');

    await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        'API-Version': '2024-04'
      },
      body: JSON.stringify({
        query: update,
        variables: { itemId: String(itemId), body: updateBody }
      })
    });
  }

  return { itemId };
}

/* ─── Google Sheets ───────────────────────────────────────────────────── */
async function appendToSheet(lead, conversationText) {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tab = process.env.GOOGLE_SHEET_TAB || 'Leads';

  if (!email || !key || !sheetId) {
    throw new Error('Google Sheets not configured');
  }

  const auth = new google.auth.JWT({
    email,
    key: key.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const row = [
    new Date().toISOString(),
    lead.name || '',
    lead.contact || '',
    lead.project || '',
    lead.service_area || '',
    lead.summary || '',
    conversationText
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tab}!A:G`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] }
  });

  return { appended: true };
}
