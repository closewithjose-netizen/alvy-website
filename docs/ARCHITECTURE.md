# Architecture overview

For when you want to know what's where.

## Folder layout

```
alvy-color-changes/
├── app/
│   ├── api/
│   │   ├── chat/route.js       # Claude chatbot proxy
│   │   ├── headlines/route.js  # serves rotating-headline list
│   │   └── lead/route.js       # Monday + Sheets writer
│   ├── globals.css             # Tailwind base + brand styles
│   ├── layout.jsx              # HTML shell + font loader
│   └── page.jsx                # landing page composition
│
├── components/
│   ├── Chatbot.jsx             # floating chat widget + Claude wiring
│   ├── FAQ.jsx                 # accordion FAQ
│   ├── Footer.jsx
│   ├── RotatingHeadline.jsx    # animated keyword swap in the hero
│   ├── Services.jsx            # what-we-do grid
│   └── WhyUs.jsx               # three-pillar wedge section
│
├── scripts/
│   ├── agent-update.mjs        # the self-updating agent
│   └── lead-digest.mjs         # daily lead summary
│
├── .github/workflows/
│   ├── agent-update.yml        # weekly + on-push + manual
│   └── lead-digest.yml         # daily 9am ET
│
├── business-context.md         # THE SOURCE OF TRUTH — edit this
├── .env.example                # all env vars documented
├── docs/
│   ├── SETUP.md                # step-by-step deploy guide
│   └── ARCHITECTURE.md         # you are here
└── README.md
```

## Data flow

### A visitor lands on the page
1. Browser loads `app/page.jsx`
2. `RotatingHeadline` mounts, fetches `/api/headlines`
3. `/api/headlines` reads `business-context.md`, parses §8 bullets,
   returns them as JSON
4. The headline cycles through that list

### A visitor opens the chat
1. They click the launcher or any "Chat with Alvy" CTA
2. `Chatbot` panel opens, shows quick-start chips
3. Each message POSTs to `/api/chat`
4. `/api/chat` builds a system prompt from `business-context.md` and
   forwards to Claude (Haiku by default)
5. Claude responds with a visible message + a `<lead>...</lead>` JSON
   block at the end. The route strips the block, returns the visible
   text to the user, and surfaces the lead JSON to the frontend
6. When `lead.qualified === true`, the frontend POSTs to `/api/lead`
7. `/api/lead` writes to Monday + Sheets in parallel

### The agent runs (weekly or on-push or manual)
1. GitHub Actions checks out the repo
2. `node scripts/agent-update.mjs` runs
3. The script reads `business-context.md` + the editable JSX components
4. Sends everything to Claude (Sonnet) with the system prompt from
   `agent-update.mjs`
5. Claude returns JSON: { summary, headline_additions, edits, no_op }
6. Script writes the new file contents to the working tree
7. Script appends new headline phrases to §8 of `business-context.md`
8. Script commits to a new branch, pushes it, opens a PR via REST API
9. You review the diff and merge — Vercel auto-deploys

### The digest runs (daily)
1. GH Action runs `scripts/lead-digest.mjs`
2. It reads the Google Sheet for rows in the last 24h
3. Formats a summary
4. POSTs the summary to your `DIGEST_WEBHOOK_URL` (a Zapier or Make
   webhook you configure) which forwards it as email

## Why this shape

- **Single source of truth:** `business-context.md` is the only file you
  edit by hand. The agent translates plain-English updates into JSX.
- **Safety:** the agent never pushes to `main`. It opens a PR. You
  approve every change before it goes live.
- **Cheap:** Haiku for the chatbot (sub-cent conversations), Sonnet
  for the agent (a few cents per run, weekly).
- **Replaceable parts:** the lead writer is two independent
  integrations behind `Promise.allSettled` — if Monday breaks the Sheet
  still gets the lead.
- **No vendor lock-in for the front-end:** plain Next.js. Move it to
  Netlify, Cloudflare Pages, or self-host — nothing in the code is
  Vercel-specific.
