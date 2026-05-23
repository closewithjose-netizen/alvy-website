'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Floating chatbot widget. Sits bottom-right. Opens into a panel.
 *
 *  - Sends conversation to /api/chat which proxies to Claude.
 *  - When the conversation has captured name + contact + project, the API
 *    flips `leadCaptured: true` and we POST to /api/lead to write to Monday
 *    and the Google Sheet.
 */
export default function Chatbot({ openOnLoad = false }) {
  const [open, setOpen] = useState(openOnLoad);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hey — I'm Alvy's assistant. Tell me what you're trying to paint, refinish, or figure out and I'll point you the right way. (You can also just ask me painting questions.)"
    }
  ]);
  const [sending, setSending] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages, open]);

  // Open the chatbot from anywhere on the page via window event
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('alvy:open-chat', handler);
    return () => window.removeEventListener('alvy:open-chat', handler);
  }, []);

  async function send(text) {
    const userMessage = text ?? input;
    if (!userMessage.trim() || sending) return;

    setInput('');
    setSending(true);

    const next = [...messages, { role: 'user', content: userMessage }];
    setMessages(next);

    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next })
      });

      const j = await r.json();

      const reply = {
        role: 'assistant',
        content: j.reply || "Hmm, I lost that one — say it again?"
      };
      setMessages((m) => [...m, reply]);

      // If the API extracted a lead, push it to the lead endpoint
      if (j.lead && !leadCaptured) {
        setLeadCaptured(true);
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lead: j.lead,
            conversation: [...next, reply]
          })
        }).catch(() => {});
      }
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I'm having trouble reaching the server. Try again in a sec, or call us directly."
        }
      ]);
    } finally {
      setSending(false);
    }
  }

  const quickStarts = [
    'I want to paint my kitchen cabinets',
    'How much for a 3-bed interior?',
    'Help me pick a color',
    'I need an estimate'
  ];

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full bg-ink text-cream pl-4 pr-5 py-3 shadow-2xl shadow-ink/30 hover:bg-brand transition-colors"
          aria-label="Open chat"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
          </span>
          <span className="font-medium">Chat with Alvy</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 w-auto sm:w-[400px] max-h-[80vh] flex flex-col rounded-3xl bg-white shadow-2xl shadow-ink/20 border border-ink/5 overflow-hidden animate-fade-up">
          <header className="flex items-center justify-between px-5 py-4 bg-ink text-cream">
            <div>
              <div className="text-xs uppercase tracking-wider opacity-70">
                Alvy Color Changes
              </div>
              <div className="font-display text-lg">How can we help?</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-white/10"
              aria-label="Close chat"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-cream"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-ink text-cream rounded-br-md'
                      : 'bg-white text-ink border border-ink/5 rounded-bl-md'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="bg-white border border-ink/5 rounded-2xl rounded-bl-md px-4 py-2.5">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickStarts.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs rounded-full bg-brand-soft text-brand-dark px-3 py-1.5 hover:bg-brand hover:text-white transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 px-3 py-3 border-t border-ink/5 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about painting, color, prep, anything…"
              className="flex-1 rounded-full bg-cream px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
              disabled={sending}
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              className="rounded-full bg-brand text-white p-2.5 disabled:opacity-40 hover:bg-brand-dark transition-colors"
              aria-label="Send"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>

          {leadCaptured && (
            <div className="px-4 py-2 text-[11px] text-center text-brand-dark bg-brand-soft">
              ✓ Got it — Alvy will follow up within 1 business day.
            </div>
          )}
        </div>
      )}
    </>
  );
}
