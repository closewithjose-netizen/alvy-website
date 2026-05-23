#!/usr/bin/env node
/**
 * Lead digest — reads the Google Sheet log and emails you a summary of
 * leads collected in the last N days. Runs daily via GitHub Actions.
 *
 * To send the email, this hits a simple webhook (Zapier, Make, or Resend).
 * Set DIGEST_WEBHOOK_URL in your env, and the digest will POST a JSON
 * body like { subject, html, text } that your automation forwards as an
 * email to LEAD_NOTIFY_EMAIL.
 *
 * If DIGEST_WEBHOOK_URL is unset, the digest just prints to stdout
 * (which still ends up in the GitHub Actions log).
 */

import { google } from 'googleapis';

const DAYS = parseInt(process.env.DIGEST_DAYS || '1', 10);

async function fetchRows() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tab = process.env.GOOGLE_SHEET_TAB || 'Leads';
  if (!email || !key || !sheetId) {
    throw new Error('Google Sheets not configured');
  }
  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
  });
  const sheets = google.sheets({ version: 'v4', auth });
  const r = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tab}!A:G`
  });
  return r.data.values || [];
}

function withinWindow(isoTs, days) {
  const t = Date.parse(isoTs);
  if (Number.isNaN(t)) return false;
  return Date.now() - t < days * 86400 * 1000;
}

function makeDigest(rows) {
  // rows[0] is the header row if present
  const data = rows.filter(
    (r, i) => i > 0 && r[0] && withinWindow(r[0], DAYS)
  );
  const subject = `Alvy leads — ${data.length} in the last ${DAYS} day${DAYS === 1 ? '' : 's'}`;
  if (data.length === 0) {
    return {
      subject,
      text: `No new leads in the last ${DAYS} day(s).`,
      html: `<p>No new leads in the last ${DAYS} day(s).</p>`
    };
  }
  const text = data
    .map(
      ([ts, name, contact, project, area, summary]) =>
        `• ${name || 'Unknown'} — ${contact || 'no contact'}\n  Project: ${project || '—'}\n  Area: ${area || '—'}\n  Summary: ${summary || '—'}\n  (${ts})`
    )
    .join('\n\n');
  const html =
    '<h2>' +
    subject +
    '</h2><ul>' +
    data
      .map(
        ([ts, name, contact, project, area, summary]) =>
          `<li><strong>${name || 'Unknown'}</strong> — ${contact || 'no contact'}<br>Project: ${project || '—'}<br>Area: ${area || '—'}<br>${summary || ''}<br><small>${ts}</small></li>`
      )
      .join('') +
    '</ul>';
  return { subject, text, html };
}

async function main() {
  const rows = await fetchRows();
  const digest = makeDigest(rows);
  console.log(digest.text);

  const webhook = process.env.DIGEST_WEBHOOK_URL;
  if (!webhook) return;

  await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: process.env.LEAD_NOTIFY_EMAIL,
      ...digest
    })
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
