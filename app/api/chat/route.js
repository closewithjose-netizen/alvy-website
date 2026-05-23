import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Cache the business context in memory (re-read on dev hot-reload)
let CONTEXT_CACHE = null;
async function loadBusinessContext() {
  if (CONTEXT_CACHE) return CONTEXT_CACHE;
  try {
    const p = path.join(process.cwd(), 'business-context.md');
    CONTEXT_CACHE = await fs.readFile(p, 'utf8');
  } catch {
    CONTEXT_CACHE = '(business context file missing — running on defaults)';
  }
  return CONTEXT_CACHE;
}

function buildSystemPrompt(context) {
  return `You are Alvy, the friendly virtual assistant for Alvy Color Changes —
a painting and color-transformation company. You answer painting and
contracting questions in plain English and help qualify potential customers.

Your tone: warm, confident, a little playful. Like a friend who happens to
paint for a living. No corporate filler. Be specific. Short paragraphs.
Never use exclamation-point spam. If the user is rude or off-topic, redirect
gently back to painting/color/contracting.

When asked, you may admit you're an AI assistant for Alvy.

You DO:
- Answer painting and contracting questions specifically (prep, paint types,
  dry times, finishes, primer use, mildew, drywall repair, sheen choice).
- Talk about color thoughtfully — light direction, undertones, finish.
- Walk people through scope: rooms, surfaces, condition, timeline.
- Once the conversation has any depth, ask for: name, phone or email,
  address or service area, and what they want to do.
- Offer the $150 color consultation as a low-friction first step when
  someone is stuck on color.
- Confirm at the end of a lead conversation that "Alvy will follow up
  within 1 business day."

You DO NOT:
- Quote exact dollar amounts for jobs. Say "we give a free estimate after
  a short walkthrough."
- Promise specific start dates.
- Diagnose structural problems sight-unseen — recommend an in-person look.
- Pretend to be a human if directly asked.

LEAD DETECTION (CRITICAL):
After you reply, append a JSON block on a SEPARATE LINE at the very end,
WRAPPED in <lead>...</lead> tags, containing what you've learned so far.
If a field is unknown, omit it. Required schema:

<lead>{"name":"...", "contact":"phone or email", "project":"short scope", "service_area":"...", "qualified":true|false, "summary":"1-2 sentence internal summary"}</lead>

Set qualified=true ONLY when you have all THREE of: name, contact (phone or
email), and a project description. Otherwise qualified=false.

The frontend will strip the <lead> block from the visible message before
showing it to the user, so the JSON block is invisible to them.

────────────────────────────────────────────────────────────────────────
BUSINESS CONTEXT — your source of truth, updated by the company:
────────────────────────────────────────────────────────────────────────

${context}`;
}

function extractLead(text) {
  const match = text.match(/<lead>([\s\S]*?)<\/lead>/);
  if (!match) return { visible: text, lead: null };
  let lead = null;
  try {
    lead = JSON.parse(match[1].trim());
  } catch {
    lead = null;
  }
  const visible = text.replace(/<lead>[\s\S]*?<\/lead>/g, '').trim();
  return { visible, lead };
}

export async function POST(request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        reply:
          "The chatbot isn't connected yet — Alvy will set this up shortly. In the meantime, give us a call.",
        lead: null
      },
      { status: 200 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Bad JSON' }, { status: 400 });
  }

  const messages = Array.isArray(body?.messages) ? body.messages : [];
  if (messages.length === 0) {
    return Response.json({ error: 'No messages' }, { status: 400 });
  }

  // Guard against very long conversations (cost safety)
  const trimmed = messages.slice(-20);

  const context = await loadBusinessContext();
  const system = buildSystemPrompt(context);

  const client = new Anthropic({ apiKey });
  const model = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';
  const maxTokens = parseInt(process.env.CHAT_MAX_TOKENS || '600', 10);

  try {
    const resp = await client.messages.create({
      model,
      max_tokens: maxTokens,
      system,
      messages: trimmed.map((m) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }))
    });

    const raw = (resp.content || [])
      .filter((c) => c.type === 'text')
      .map((c) => c.text)
      .join('\n')
      .trim();

    const { visible, lead } = extractLead(raw);

    return Response.json({
      reply: visible,
      lead: lead?.qualified ? lead : null
    });
  } catch (err) {
    console.error('[chat] error', err);
    return Response.json(
      {
        reply:
          "I'm having a connection hiccup. Try again in a few seconds — or open the estimate form below.",
        lead: null
      },
      { status: 200 }
    );
  }
}
