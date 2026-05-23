'use client';

import { useEffect, useRef, useState } from 'react';

const DEFAULT_TOPICS = [
  'painting kitchen cabinets',
  'what color works in a north-facing room',
  'how long an interior repaint takes',
  "exterior siding that won't peel",
  'a free estimate this week',
  'color help that actually helps',
  'cabinet refinishing in a 90s kitchen',
  'matching the white you already have'
];

export default function HeroChat() {
  const [mode, setMode] = useState('idle');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [sending, setSending] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [topics, setTopics] = useState(DEFAULT_TOPICS);
  const [topicIndex, setTopicIndex] = useState(0);
  const [topicPhase, setTopicPhase] = useState('in');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/headlines')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (!cancelled && j?.words?.length) setTopics(j.words); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (mode !== 'idle') return;
    const out = setTimeout(() => setTopicPhase('out'), 2200);
    const next = setTimeout(() => {
      setTopicIndex((i) => (i + 1) % topics.length);
      setTopicPhase('in');
    }, 2700);
    return () => { clearTimeout(out); clearTimeout(next); };
  }, [topicIndex, topics.length, mode]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  async function send(text) {
    const userMessage = (text ?? input).trim();
    if (!userMessage || sending) return;
    setInput('');
    if (mode === 'idle') setMode('live');
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
      const reply = { role: 'assistant', content: j.reply || 'One sec — say that again?' };
      setMessages((m) => [...m, reply]);
      if (j.lead && !leadCaptured) {
        setLeadCaptured(true);
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lead: j.lead, conversation: [...next, reply] })
        }).catch(() => {});
      }
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Connection hiccup. Try again in a sec — or call us directly.' }]);
    } finally {
      setSending(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }

  if (mode === 'idle') {
    return (
      <div className="w-full max-w-2xl mx-auto text-center animate-fade-up">
        <h1 className="font-display text-7xl sm:text-8xl font-semibold tracking-tight leading-none">Hey.</h1>
        <p className="mt-6 text-xl sm:text-2xl text-ink/70 leading-snug">
          Ask me about{' '}
          <span className="relative inline-block">
            <span
              key={topicIndex}
              className={`inline-block text-brand font-medium transition-all duration-500 ${topicPhase === 'in' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}
            >
              {topics[topicIndex] || 'painting'}
            </span>
            <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full shimmer-underline" />
          </span>
        </p>
        <form onSubmit={(e) => { e.preventDefault(); send(); }} className="mt-10">
          <div className="flex items-center gap-2 bg-white rounded-full shadow-xl shadow-brand/10 border border-ink/5 pl-6 pr-2 py-2 focus-within:shadow-2xl focus-within:shadow-brand/20 transition-shadow">
            <input
              ref={inputRef}
              autoFocus
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 bg-transparent py-3 text-base sm:text-lg focus:outline-none placeholder:text-ink/30"
            />
            <button type="submit" disabled={!input.trim()} className="rounded-full bg-brand text-white p-3 disabled:opacity-30 hover:bg-brand-dark transition-colors" aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="mt-3 text-xs text-ink/40">Real human follow-up within 1 business day · Free estimates</p>
        </form>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {['I need an estimate', 'Help me pick a color', 'How much for cabinets?'].map((q) => (
            <button key={q} onClick={() => send(q)} className="text-xs rounded-full bg-white/70 backdrop-blur text-ink/70 border border-ink/10 px-3 py-1.5 hover:bg-brand hover:text-white hover:border-brand transition-colors">
              {q}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto h-[calc(100dvh-180px)] sm:h-[600px] flex flex-col animate-fade-up">
      <div className="flex items-center gap-3 mb-3 px-1">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
        </span>
        <span className="text-sm font-medium">Alvy</span>
        <button
          onClick={() => { setMode('idle'); setMessages([]); setLeadCaptured(false); }}
          className="ml-auto text-xs text-ink/40 hover:text-ink"
        >
          New chat
        </button>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-1 py-2 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm sm:text-base leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'bg-ink text-cream rounded-br-md' : 'bg-white text-ink border border-ink/5 shadow-sm rounded-bl-md'}`}>
              {m.content}
            </div>
          </div>
        ))}
        {sending && (
          <div className="flex justify-start">
            <div className="bg-white border border-ink/5 shadow-sm rounded-2xl rounded-bl-md px-4 py-3">
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-ink/40 animate-bounce" />
              </span>
            </div>
          </div>
        )}
      </div>
      {leadCaptured && (
        <div className="px-4 py-2 mb-2 text-[11px] text-center text-brand-dark bg-brand-soft rounded-full">
          ✓ Got it. We'll follow up within 1 business day.
        </div>
      )}
      <form onSubmit={(e) => { e.preventDefault(); send(); }} className="mt-3">
        <div className="flex items-center gap-2 bg-white rounded-full shadow-lg shadow-brand/10 border border-ink/5 pl-5 pr-2 py-1.5">
          <input
            ref={inputRef}
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type…"
            disabled={sending}
            className="flex-1 bg-transparent py-2.5 text-base focus:outline-none placeholder:text-ink/30"
          />
          <button type="submit" disabled={!input.trim() || sending} className="rounded-full bg-brand text-white p-2.5 disabled:opacity-30 hover:bg-brand-dark transition-colors" aria-label="Send">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
