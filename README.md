# Alvy Color Changes — website + self-updating agent

A Next.js 14 landing site with:

- A rotating-keyword headline that reads from your business context file
- A Claude-powered chatbot that answers painting questions and qualifies leads
- Lead capture that pushes to Monday.com and a Google Sheet
- A scheduled **auto-update agent** that re-reads your business plan every week
  and opens a Pull Request with proposed site updates (so nothing goes live
  without your eyes on it)
- A daily lead digest workflow

## How the pieces fit

```
business-context.md ──┐
                      ▼
       ┌─────── auto-update agent (weekly GH Action) ─────► PR for you to review
       │
       ▼
landing page (Next.js)
       │
       ├── /api/headlines  → reads §8 of business-context.md
       ├── /api/chat       → proxies to Claude, qualifies leads
       └── /api/lead       → writes to Monday + Google Sheets
                                                 │
                                                 ▼
                                       daily digest workflow → email
```

## Quick start (5 minutes locally)

```bash
npm install
cp .env.example .env.local
# Fill in ANTHROPIC_API_KEY (the only required one to test the chatbot)
npm run dev
# → open http://localhost:3000
```

That's enough to see the rotating headline + a working chatbot. Lead capture
needs the Monday and/or Sheets vars filled in.

## Full setup

See **[docs/SETUP.md](docs/SETUP.md)** for the step-by-step walkthrough —
getting API keys, creating the Monday board, sharing the Google Sheet,
deploying to Vercel, and turning on the agent.

## The auto-update agent

Run it once locally to see it in action:

```bash
ANTHROPIC_API_KEY=sk-ant-... npm run agent
```

It reads `business-context.md` + the editable site components, asks Claude
what's stale, and rewrites whichever files need updating. With
`GH_AGENT_TOKEN` set and `GITHUB_REPOSITORY` set (GitHub Actions does this
automatically), it pushes a branch and opens a PR.

The schedule is **every Monday at 9am ET**. You can also trigger it manually
from the Actions tab, or just push a change to `business-context.md` —
that triggers a run too.

## Editing your own context

You almost never touch the JSX. You edit `business-context.md`. The agent
takes care of the rest on its next run.
