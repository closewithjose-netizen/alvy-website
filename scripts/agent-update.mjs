#!/usr/bin/env node
/**
 * Alvy Color Changes — Auto-Update Agent
 *
 * What it does:
 *   1. Reads business-context.md (your single source of truth)
 *   2. Reads the current site components (Services, WhyUs, FAQ, RotatingHeadline)
 *   3. Asks Claude to propose updates so the site stays in sync with the
 *      business context — and to suggest one or two creative new rotating
 *      headlines for the hero each run.
 *   4. Applies the proposed edits to the working tree.
 *   5. If running inside GitHub Actions (or with $GH_AGENT_TOKEN set),
 *      pushes the changes to a new branch and opens a Pull Request.
 *
 * Run it locally:   npm run agent
 * Run it in CI:     see .github/workflows/agent-update.yml
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const DRY_RUN = process.argv.includes('--dry-run');

// Files the agent is allowed to touch
const EDITABLE = [
  'business-context.md',
  'components/Services.jsx',
  'components/WhyUs.jsx',
  'components/FAQ.jsx',
  'components/RotatingHeadline.jsx',
  'app/page.jsx'
];

async function readFiles() {
  const out = {};
  for (const rel of EDITABLE) {
    try {
      out[rel] = await fs.readFile(path.join(ROOT, rel), 'utf8');
    } catch {
      out[rel] = null;
    }
  }
  return out;
}

const SYSTEM_PROMPT = `You are the auto-update agent for the Alvy Color Changes
website. Your job is to keep the public landing page in sync with the
\`business-context.md\` file, and to refresh the rotating-headline list with
one or two new creative phrases each run.

The site is a Next.js 14 App Router project using Tailwind. You will receive:
  - The current business-context.md
  - The current state of the editable site components

Your output must be a JSON object — no other text — with this exact shape:

{
  "summary": "2-3 sentence plain-English description of what you changed and why",
  "headline_additions": ["new rotating phrase", "another new one"],
  "edits": [
    { "path": "components/Services.jsx", "content": "<entire new file contents>" }
  ],
  "no_op": false
}

Rules:
- ONLY include files in the "edits" array that you are actually changing.
- The "content" field is the COMPLETE new file contents, not a diff.
- Preserve JSX/Tailwind structure. Do not break imports or component exports.
- Be conservative. If business-context.md hasn't materially changed since
  the components reflect it, return { "no_op": true, "summary": "No
  material changes needed." } and nothing else.
- "headline_additions" are appended to the bullet list in
  business-context.md §8. Make them specific, playful, on-brand for Alvy.
  Avoid generic phrases like "professional painter."
- Brand voice: warm, confident, a little playful. Like a friend who happens
  to paint for a living. No corporate filler. No exclamation-point spam.

Return ONLY the JSON object. No prose, no markdown fences.`;

async function planUpdates(files) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY not set');
  }
  const client = new Anthropic({ apiKey });

  const userBundle = Object.entries(files)
    .filter(([, c]) => c !== null)
    .map(
      ([p, c]) =>
        `--- BEGIN FILE: ${p} ---\n${c}\n--- END FILE: ${p} ---`
    )
    .join('\n\n');

  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: 8000,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content:
          'Here is the current state. Decide what (if anything) to update.\n\n' +
          userBundle
      }
    ]
  });

  const text = (resp.content || [])
    .filter((c) => c.type === 'text')
    .map((c) => c.text)
    .join('\n')
    .trim();

  // Strip code-fences if Claude wrapped the JSON
  const cleaned = text
    .replace(/^```(?:json)?\n?/, '')
    .replace(/\n?```$/, '')
    .trim();

  return JSON.parse(cleaned);
}

async function applyHeadlineAdditions(additions) {
  if (!additions?.length) return false;
  const p = path.join(ROOT, 'business-context.md');
  const md = await fs.readFile(p, 'utf8');

  // Find the §8 bullet block and append new bullets at the bottom of it.
  const re =
    /(##\s*8\.\s*Rotating headline keywords[\s\S]*?\n)((?:[-*]\s+.+\n)+)/i;
  const match = md.match(re);
  if (!match) return false;

  const existingBullets = match[2];
  const norm = (s) =>
    s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').toLowerCase().trim();
  const existingPhrases = new Set(
    existingBullets
      .split('\n')
      .filter(Boolean)
      .map((l) => norm(l.replace(/^[-*]\s+/, '')))
  );
  const newBullets = additions
    .filter((a) => a && !existingPhrases.has(norm(a)))
    .map((a) => `- ${a}`)
    .join('\n');
  if (!newBullets) return false;

  const updated = md.replace(re, `${match[1]}${existingBullets}${newBullets}\n`);
  await fs.writeFile(p, updated);
  return true;
}

async function applyEdits(edits) {
  let n = 0;
  for (const e of edits || []) {
    if (!EDITABLE.includes(e.path)) {
      console.warn(`[agent] refusing to write outside allow-list: ${e.path}`);
      continue;
    }
    if (typeof e.content !== 'string' || e.content.length < 10) continue;
    await fs.writeFile(path.join(ROOT, e.path), e.content);
    n++;
  }
  return n;
}

function gitStatusChanged() {
  try {
    const out = execSync('git status --porcelain', { encoding: 'utf8' });
    return out.trim().length > 0;
  } catch {
    return false;
  }
}

function sh(cmd) {
  return execSync(cmd, { stdio: 'inherit' });
}

async function openPullRequest(summary) {
  const token = process.env.GH_AGENT_TOKEN || process.env.GITHUB_TOKEN;
  if (!token) {
    console.log(
      '[agent] no GH_AGENT_TOKEN — skipping PR. Changes left in working tree.'
    );
    return;
  }
  const repo = process.env.GITHUB_REPOSITORY; // e.g. "user/repo" (set in Actions)
  if (!repo) {
    console.log('[agent] GITHUB_REPOSITORY not set — skipping PR.');
    return;
  }

  const date = new Date().toISOString().slice(0, 10);
  const branch = `agent/update-${date}-${Date.now().toString(36)}`;

  sh(`git config user.name  "alvy-agent[bot]"`);
  sh(`git config user.email "alvy-agent@users.noreply.github.com"`);
  sh(`git checkout -b ${branch}`);
  sh(`git add -A`);
  sh(`git commit -m "agent: site refresh ${date}\n\n${summary.replace(/"/g, '\\"')}"`);

  // Push using the token
  sh(
    `git push https://x-access-token:${token}@github.com/${repo}.git ${branch}`
  );

  // Open a PR via the GitHub REST API
  const prRes = await fetch(`https://api.github.com/repos/${repo}/pulls`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body: JSON.stringify({
      title: `🎨 Agent site refresh — ${date}`,
      head: branch,
      base: 'main',
      body: [
        '## What changed',
        '',
        summary,
        '',
        '---',
        '_This PR was opened automatically by the Alvy site agent. Review the diff, then merge to publish._'
      ].join('\n')
    })
  });

  if (!prRes.ok) {
    console.error('[agent] PR API failed:', await prRes.text());
  } else {
    const pr = await prRes.json();
    console.log(`[agent] PR opened: ${pr.html_url}`);
  }
}

/* ─── main ────────────────────────────────────────────────────────────── */
async function main() {
  console.log(`[agent] starting. model=${MODEL}  dry-run=${DRY_RUN}`);
  const files = await readFiles();
  const plan = await planUpdates(files);

  console.log('[agent] plan:', JSON.stringify(plan, null, 2).slice(0, 500));

  if (plan.no_op) {
    console.log('[agent] no-op:', plan.summary);
    return;
  }

  if (DRY_RUN) {
    console.log('[agent] dry-run, not writing.');
    return;
  }

  const editsApplied = await applyEdits(plan.edits);
  const headlinesAdded = await applyHeadlineAdditions(
    plan.headline_additions
  );

  console.log(
    `[agent] applied ${editsApplied} edits, headlines updated: ${headlinesAdded}`
  );

  if (!gitStatusChanged()) {
    console.log('[agent] nothing to commit.');
    return;
  }

  await openPullRequest(plan.summary || 'Site refresh');
}

main().catch((err) => {
  console.error('[agent] fatal:', err);
  process.exit(1);
});
