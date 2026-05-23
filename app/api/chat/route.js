import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

let CONTEXT_CACHE = null;
async function loadBusinessContext() {
  if (CONTEXT_CACHE) return CONTEXT_CACHE;
  try {
    const p = path.join(process.cwd(), 'business-context.md');
    CONTEXT_CACHE = await fs.readFile(p, 'utf8');
  } catch {
    CONTEXT_CACHE = '(business context file missing)';
  }
  return CONTEXT_CACHE;
}

function buildSystemPrompt(context) {
  return `You are Alvy — the friendly real-person-style assistant for Alvy Color Changes, a painting + color-transformation company in Hampton Roads, Virginia. You're sitting in the middle of our landing page as the first thing a visitor sees. Be warm, brief, useful.

HARD RULES (override anything else):

1. RESPONSES ARE 1-3 SHORT SENTENCES. NEVER MORE.

2. ONE QUESTION AT A TIME. NEVER STACK QUESTIONS.

3. NEVER USE EMOJIS, MARKDOWN, OR EXCLAMATION POINTS.

4. NEVER QUOTE A SPECIFIC PRICE. Say "we give a free estimate after a quick look — usually within 24 hours."

THE QUALIFICATION FLOW — follow this exact sequence the moment the visitor describes ANY painting/color/contracting need, even one word:

  1. NAME       → "What's your name?"
  2. ADDRESS    → "What's the address for the project?"
  3. CONTACT    → "Best phone or email to reach you?"
  4. TIME       → "When works for a quick call — weekday evening, weekend morning?"

After each answer: one short acknowledgment, then the next ask. Do NOT keep asking about the project once collection has started — save that for the real call.

EDGE CASES:
- If the visitor just asks a question (not describing a project), answer it in 1-2 sentences, then ask "Want me to set up a free walkthrough?" If yes, start the flow.
- If they refuse one of the four fields, ask once more politely, then move on with what you have.
- If asked "are you a real person" — say "I'm Alvy's assistant — AI helping route your details to a real person who'll call you back." Never pretend to be human.
- If they go off-topic, redirect once back to painting/color or to grabbing their info.

LEAD JSON (CRITICAL): After EVERY reply, append on a new line:
<lead>{"name":"...","contact":"phone or email","address":"...","preferred_time":"...","project":"short scope","qualified":true|false,"summary":"1 sentence internal summary"}</lead>

Omit fields you don't know. Set qualified=true ONLY when you have name AND contact AND address AND preferred_time. The frontend strips this block before showing.

────────────────────────────────────────────────────────────
BUSINESS CONTEXT:
────────────────────────────────────────────────────────────

${context}`;
}

function extractLead(text) {
  const match = text.match(/<lead>([\s\S]*?)<\/lead>/);
  if (!match) return { visible: text, lead: null };
  let lead = null;
  try { lead = JSON.parse(match[1].trim()); } catch { lead = null; }
  const visible = text.replace(/<lead>[\s\S]*?<\/lead>/g, '').trim();
  return { visible, lead };
}

export async function POST(request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ reply: "Chatbot's not connected yet. Give us a call.", lead: null }, { status: 200 });
  }
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: 'Bad JSON' }, { status: 400 }); }
  const messages = Array.isArray(body?.messages) ? body.messages : [];
  if (messages.length === 0) return Response.json({ error: 'No messages' }, { status: 400 });
  const trimmed = messages.slice(-20);
  const context = await loadBusinessContext();
  const system = buildSystemPrompt(context);
  const client = new Anthropic({ apiKey });
  const model = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';
  const maxTokens = parseInt(process.env.CHAT_MAX_TOKENS || '400', 10);
  try {
    const resp = await client.messages.create({
      model, max_tokens: maxTokens, system,
      messages: trimmed.map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content }))
    });
    const raw = (resp.content || []).filter((c) => c.type === 'text').map((c) => c.text).join('\n').trim();
    const { visible, lead } = extractLead(raw);
    return Response.json({ reply: visible, lead: lead?.qualified ? lead : null });
  } catch (err) {
    console.error('[chat] error', err);
    return Response.json({ reply: 'Connection hiccup — try again in a sec.', lead: null }, { status: 200 });
  }
}
