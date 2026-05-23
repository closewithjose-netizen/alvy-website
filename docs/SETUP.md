# Alvy Color Changes — Setup Walkthrough

This is the no-skip-steps guide. Follow it top-to-bottom and you'll have
the site live, the chatbot answering, leads landing in Monday + Sheets,
and the auto-update agent watching your business-context file.

Estimated time: **45–60 minutes**, most of which is waiting for accounts
to verify.

---

## Step 1 — Put the code on GitHub

1. Create a new repo on github.com (let's call it `alvy-color-changes`).
   Make it **private** unless you want the world to read your business
   context.
2. From a terminal:
   ```bash
   cd alvy-color-changes
   git init
   git add .
   git commit -m "initial: alvy site + agent"
   git remote add origin git@github.com:closewithjose-netizen/alvy-color-changes.git
   git branch -M main
   git push -u origin main
   ```

## Step 2 — Get an Anthropic API key (for the chatbot + agent)

This is **separate** from your Claude.ai subscription. Tokens are billed
per use, ~$0.25 per million input tokens for Haiku.

1. Go to https://console.anthropic.com/settings/keys.
2. Sign in (you can use the same Google/email you use for Claude.ai).
3. Click **Create Key** → name it `alvy-site` → copy the `sk-ant-...` value.
   **You only see it once.** Paste it somewhere safe.
4. Go to **Plans & Billing** and add $10 in credits to start. That lasts
   a long time for a lead-bot — typical conversations are a fraction of a
   cent.
5. **Cost cap (recommended):** under **Limits**, set a monthly spend cap
   of $20. The chatbot will degrade gracefully if you hit it.

## Step 3 — Deploy to Vercel

1. Go to https://vercel.com → **Add New → Project**.
2. Import the `alvy-color-changes` GitHub repo.
3. Framework is auto-detected as Next.js. Leave defaults.
4. **Environment Variables** section — add at minimum:
   - `ANTHROPIC_API_KEY` = your `sk-ant-...` value
   - `ANTHROPIC_MODEL` = `claude-haiku-4-5-20251001` (cheap, fast)
5. Click **Deploy**. After ~2 minutes you'll have a `https://alvy-color-changes.vercel.app`.
6. (Optional) Hook up your real domain under **Project → Domains**.

✅ At this point the site is live with the rotating headline and a working
chatbot. Lead capture is still off until Step 4.

## Step 4 — Wire up Monday.com lead capture

1. **Get your API token:** Monday → your avatar (top right) → **Developers**
   → **My Access Tokens** → copy your personal token.
2. **Create a "Leads" board** if you don't already have one. Add columns
   for: Name (text), Contact (text), Project (long text), Status (status),
   Source (text — set default "Website chatbot").
3. **Get the board ID:** open the board, look at the URL —
   `monday.com/boards/1234567890` — that number is your board ID.
4. In Vercel → Project → Settings → Environment Variables, add:
   - `MONDAY_API_TOKEN` = your personal token
   - `MONDAY_BOARD_ID` = the number from the URL
   - `MONDAY_GROUP_ID` = `topics` (the default group; or copy a specific
     group's ID from the board settings if you want them landing elsewhere)
5. **Redeploy** (Vercel → Deployments → ... → Redeploy) to pick up the
   new env vars.

ℹ️ The current code creates the item with the full lead in the item name +
a detailed update. To send fields into specific columns, edit
`columnValues` in `app/api/lead/route.js` and use your column IDs (Monday
docs: "How to find column IDs"). I deliberately kept this generic so it
won't crash on a fresh board.

## Step 5 — Wire up the Google Sheet lead log

1. **Create a Google Sheet** called "Alvy Leads". Add a header row:
   `Timestamp | Name | Contact | Project | Service Area | Summary | Conversation`.
2. **Create a Google Cloud service account:**
   - Go to https://console.cloud.google.com → create a new project
     "alvy-website" if you don't have one.
   - **APIs & Services → Library** → enable **Google Sheets API**.
   - **IAM & Admin → Service Accounts → Create Service Account** →
     name it `alvy-sheets-writer`. No roles needed.
   - Click the created account → **Keys → Add Key → Create new key →
     JSON**. Download the file.
3. **Share the sheet with the service account** — open the Sheet, click
   **Share**, paste the service account email (looks like
   `alvy-sheets-writer@alvy-website.iam.gserviceaccount.com`), give it
   **Editor** access.
4. **Get the Sheet ID** — it's the long string in the Sheet URL:
   `docs.google.com/spreadsheets/d/<THIS PART>/edit`.
5. In Vercel env vars, add:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` = the service account's email
   - `GOOGLE_PRIVATE_KEY` = the `private_key` value from the JSON file.
     **Paste it inside double quotes** so the `\n` characters are
     preserved.
   - `GOOGLE_SHEET_ID` = the long string from the URL
   - `GOOGLE_SHEET_TAB` = `Leads` (or whatever the tab is named)
6. Redeploy.

## Step 6 — Turn on the auto-update agent

The agent needs two things in GitHub:

### 6a. A GitHub personal access token

1. https://github.com/settings/personal-access-tokens/new
2. Token name: `alvy-agent`. Expires: 1 year. Repository access:
   only `closewithjose-netizen/alvy-color-changes`. Permissions:
   - **Contents** → Read and write
   - **Pull requests** → Read and write
3. Generate → copy the token (you only see it once).

### 6b. Add secrets to GitHub Actions

In the repo on GitHub: **Settings → Secrets and variables → Actions →
New repository secret**. Add:

- `ANTHROPIC_API_KEY` — same key from Step 2
- `GH_AGENT_TOKEN` — the PAT from Step 6a
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`,
  `GOOGLE_SHEET_TAB` — for the daily lead digest

That's it. The agent will:

- Run every Monday morning automatically
- Open a Pull Request titled "🎨 Agent site refresh — YYYY-MM-DD"
- You review the diff, click **Merge**, Vercel auto-deploys

To trigger it manually any time: GitHub repo → **Actions** tab → **Alvy
site agent** → **Run workflow**.

## Step 7 — Edit your business plan and let the agent do the work

Open `business-context.md` in the repo, edit anything (services, pricing
posture, recent updates), commit + push. That push triggers the agent.
A PR will show up within a few minutes.

This is the loop you wanted: **you write business updates in plain English,
the agent updates the site.**

---

## Cost expectations (rough)

| Item | Typical monthly cost |
|---|---|
| Vercel hobby tier | Free |
| Anthropic Haiku chatbot | $1–5 (depends on conversation volume) |
| Anthropic agent run (weekly Sonnet) | $0.50–2 |
| Monday.com | already paying |
| Google Sheets | Free |
| **Total marginal** | **~$5–10/month** |

## Troubleshooting

- **Chatbot says "isn't connected yet":** `ANTHROPIC_API_KEY` is missing
  or wrong in Vercel. Re-paste, redeploy.
- **Leads not in Monday but in Sheet:** check `MONDAY_API_TOKEN` and
  board ID. Look at `/api/lead` logs in Vercel → Deployments → Functions.
- **Agent PR never opens:** check **Actions** tab on GitHub for the
  workflow run log. Most failures are a missing secret.
- **Rotating headline isn't updating:** the agent appends new phrases
  on each run; force a refresh by running `npm run agent` locally or
  by clicking "Run workflow" in Actions.
