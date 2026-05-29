import { google } from 'googleapis';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/lead
 *
 * Body: { lead: { ... }, conversation?: [...] }
 *
 * Fans the lead out to:
 *   1. Monday.com (creates an item on the configured board)
 *   2. Instant notification webhook (Zapier/Make → email + SMS) — optional
 *   3. Google Sheets append — optional
 *
 * Each integration is independent — if Monday fails, the notify webhook
 * still fires, and vice versa.
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
    notify(lead),
    appendToSheet(lead, conversationText)
  ]);

  return Response.json({
    ok: true,
    monday: results[0].status,
    notify: results[1].status,
    sheet: results[2].status,
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

  const itemName = `${lead.name || 'Unknown'} — ${lead.project || 'New lead'}`;

  // Generic payload — column IDs can be wired later via Monday board settings.
  const columnValues = {};

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

  // Attach full lead details as an update on the item.
  if (itemId) {
    const update = `
      mutation AddUpdate($itemId: ID!, $body: String!) {
        create_update(item_id: $itemId, body: $body) { id }
      }`;

    const lines = [
      `Lane: ${lead.lane || '—'}`,
      `Name: ${lead.name || '—'}`,
      `Email: ${lead.email || '—'}`,
      `Phone: ${lead.phone || '—'}`,
      `Address: ${lead.address || lead.service_area || '—'}`,
      lead.business_name ? `Business: ${lead.business_name} (${lead.business_type || '—'})` : null,
      lead.scope ? `Scope: ${lead.scope}` : null,
      `Timeline: ${lead.timeline || '—'}`,
      `Summary: ${lead.summary || '—'}`
    ].filter(Boolean);

    if (conversationText) {
      lines.push('', '── Conversation log ──', conversationText);
    }

    await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        'API-Version': '2024-04'
      },
      body: JSON.stringify({
        query: update,
        variables: { itemId: String(itemId), body: lines.join('\n') }
      })
    });
  }

  return { itemId };
}

/* ─── Instant notification (email + SMS via Zapier/Make) ──────────────── */
async function notify(lead) {
  const webhook = process.env.LEAD_NOTIFY_WEBHOOK_URL;
  if (!webhook) {
    throw new Error('Notify webhook not configured');
  }

  const subject =
    lead.lane === 'commercial'
      ? `New commercial lead — ${lead.business_name || lead.name}`
      : `New residential lead — ${lead.name}`;

  const smsBody = [
    `${lead.lane === 'commercial' ? 'COMMERCIAL' : 'RESIDENTIAL'} lead`,
    `${lead.name} · ${lead.phone}`,
    lead.business_name ? `${lead.business_name} (${lead.business_type})` : lead.scope,
    lead.address,
    `Timeline: ${lead.timeline}`
  ].filter(Boolean).join('\n');

  const html = [
    `<h2>${subject}</h2>`,
    `<p><strong>Name:</strong> ${escapeHtml(lead.name || '')}</p>`,
    `<p><strong>Phone:</strong> <a href="tel:${escapeHtml(lead.phone || '')}">${escapeHtml(lead.phone || '')}</a></p>`,
    `<p><strong>Email:</strong> <a href="mailto:${escapeHtml(lead.email || '')}">${escapeHtml(lead.email || '')}</a></p>`,
    lead.business_name ? `<p><strong>Business:</strong> ${escapeHtml(lead.business_name)} (${escapeHtml(lead.business_type || '')})</p>` : '',
    lead.scope ? `<p><strong>Scope:</strong> ${escapeHtml(lead.scope)}</p>` : '',
    `<p><strong>Address:</strong> ${escapeHtml(lead.address || lead.service_area || '')}</p>`,
    `<p><strong>Timeline:</strong> ${escapeHtml(lead.timeline || '')}</p>`,
    `<p><strong>Summary:</strong> ${escapeHtml(lead.summary || '')}</p>`
  ].filter(Boolean).join('\n');

  const r = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: process.env.LEAD_NOTIFY_EMAIL || 'jose@alvarezpainters.com',
      sms_to: process.env.LEAD_NOTIFY_SMS || '+17577196269',
      subject,
      text: smsBody,
      html,
      lead
    })
  });

  if (!r.ok) {
    throw new Error(`Notify webhook ${r.status}`);
  }
  return { sent: true };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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
    lead.lane || '',
    lead.name || '',
    lead.email || '',
    lead.phone || '',
    lead.business_name || '',
    lead.business_type || '',
    lead.scope || '',
    lead.address || lead.service_area || '',
    lead.timeline || '',
    lead.summary || '',
    conversationText
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tab}!A:L`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] }
  });

  return { appended: true };
}
