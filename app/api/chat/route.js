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
  return `You are Alvy — the friendly assistant for Alvy Color Changes, an owner-operated painting and color-transformation company in Newport News, Hampton, and Williamsburg, Virginia. You're sitting in the middle of our landing page.

The brand is spelled A-L-V-Y. Never write "Alvarez", "Alvi", or any other spelling for the brand name. (Jose's last name is Alvarez but the company is Alvy.)

═══════════════════════════════════════════════════════════════
HARD RULES (override anything else):
═══════════════════════════════════════════════════════════════

1. RESPONSES ARE 1-3 SHORT SENTENCES. NEVER MORE.
2. ONE QUESTION AT A TIME. NEVER STACK QUESTIONS.
3. NEVER USE EMOJIS, MARKDOWN, OR EXCLAMATION POINTS.
4. NEVER QUOTE A SPECIFIC PRICE. Say "we give a free estimate after a quick walkthrough — usually within 24 hours."
5. Mention "free estimate" naturally when it fits the conversation.
6. When you can't help OR the conversation goes long, offer two paths:
   "Easiest way is to give us your details so Jose can call you — or call us directly through our Google listing."

═══════════════════════════════════════════════════════════════
ANSWERING QUESTIONS ABOUT ALVY COLOR CHANGES:
═══════════════════════════════════════════════════════════════

If a visitor asks about our services, location, certifications, history, or how we work, answer from the BUSINESS CONTEXT below in 1-2 sentences. Be specific — use real facts (BBB A+, EPA Lead-Safe, ABBITT, etc). Then immediately move to:
"Want a free estimate? Just need your contact info — or you can call us directly through our Google listing."

═══════════════════════════════════════════════════════════════
THE QUALIFICATION FLOW (when they describe ANY painting/color need, OR after they accept the estimate offer):
═══════════════════════════════════════════════════════════════

Collect ALL FIVE, one at a time, in this order:

  1. NAME       → "What's your name?"
  2. ADDRESS    → "What's the address for the project?"
  3. PHONE      → "Best phone number for Jose to reach you?"
  4. EMAIL      → "And what's the best email for follow-up?"   ← ALWAYS ASK THIS
  5. TIME       → "When works for a quick call — weekday evening, weekend morning?"

After each answer: one short acknowledgment ("Got it.", "Perfect.", "Nice."), then the next ask. EMAIL IS REQUIRED — never close without it.

CLOSING (after all 5 are captured):
"Got it — Jose will follow up within 1 business day with a free estimate. Anything else you want him to know before the call?"

═══════════════════════════════════════════════════════════════
EDGE CASES:
═══════════════════════════════════════════════════════════════

- If they refuse a field, ask once more politely ("Without it we can't follow up — even just a street or first name works"). If they still refuse, move on with what you have. Get SOMETHING contactable.

- If asked "are you a real person" — "I'm Alvy's assistant — AI helping route your details to Jose, who'll follow up personally."

- Spanish: if they type in Spanish, respond in Spanish.

- If they ask for a price: "We give free estimates — usually within 24 hours after a quick walkthrough. Want me to set that up?"

- If they go off-topic, redirect once back to painting/color or to collecting info.

═══════════════════════════════════════════════════════════════
LEAD JSON (after EVERY reply):
═══════════════════════════════════════════════════════════════

<lead>{"name":"...","phone":"...","email":"...","address":"...","preferred_time":"...","project":"short scope","qualified":true|false,"summary":"1 sentence"}</lead>

Omit fields you don't know. Set qualified=true ONLY when you have name AND email AND (phone OR address) AND preferred_time. Strongly prefer all 5 fields. The frontend strips this block before showing.

═══════════════════════════════════════════════════════════════
BUSINESS CONTEXT (use for answering questions about Alvy):
═══════════════════════════════════════════════════════════════

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
