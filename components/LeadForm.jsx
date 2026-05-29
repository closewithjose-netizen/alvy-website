'use client';

import { useEffect, useRef, useState } from 'react';

const DEFAULT_TOPICS = [
  'commercial painting in Newport News',
  'painting your office or retail space',
  'our professional painting crew',
  'a multi-location painting program',
  'how we work around your business hours',
  'spec-grade paint for medical offices',
  'a free commercial estimate this week',
  'a full interior repaint',
  'pre-listing paint for your home',
  'painting a 3,000+ sq ft house',
  'our 3-year warranty',
  'the on-time guarantee'
];

const TIMELINES = [
  'ASAP',
  'Within 2 weeks',
  'This month',
  'Next month',
  'Just gathering info'
];

const COMMERCIAL_TYPES = [
  'Office',
  'Restaurant',
  'Retail',
  'Medical / dental',
  'Hotel / motel',
  'Auto dealership',
  'Multi-location program',
  'Other'
];

const RESIDENTIAL_SCOPES = [
  'Full interior',
  'Full exterior',
  'Both interior + exterior',
  'Pre-listing refresh',
  '3,000+ sq ft home'
];

export default function LeadForm() {
  const [topics, setTopics] = useState(DEFAULT_TOPICS);
  const [topicIndex, setTopicIndex] = useState(0);
  const [topicPhase, setTopicPhase] = useState('in');
  const [lane, setLane] = useState('commercial');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: COMMERCIAL_TYPES[0],
    address: '',
    scope: RESIDENTIAL_SCOPES[0],
    timeline: TIMELINES[0]
  });
  const firstFieldRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/headlines')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!cancelled && j?.words?.length) setTopics(j.words);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (submitted) return;
    const out = setTimeout(() => setTopicPhase('out'), 2200);
    const next = setTimeout(() => {
      setTopicIndex((i) => (i + 1) % topics.length);
      setTopicPhase('in');
    }, 2700);
    return () => { clearTimeout(out); clearTimeout(next); };
  }, [topicIndex, topics.length, submitted]);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function valid() {
    if (!form.name.trim()) return false;
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return false;
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) return false;
    if (!form.address.trim()) return false;
    if (lane === 'commercial' && !form.businessName.trim()) return false;
    return true;
  }

  async function submit(e) {
    e.preventDefault();
    if (!valid() || submitting) return;
    setSubmitting(true);
    setError(null);

    const lead = lane === 'commercial'
      ? {
          name: form.name.trim(),
          contact: `${form.email.trim()} · ${form.phone.trim()}`,
          project: `Commercial — ${form.businessType} (${form.businessName.trim()})`,
          service_area: form.address.trim(),
          summary: `Commercial ${form.businessType.toLowerCase()} project for ${form.businessName.trim()}. Timeline: ${form.timeline}.`,
          lane: 'commercial',
          email: form.email.trim(),
          phone: form.phone.trim(),
          business_name: form.businessName.trim(),
          business_type: form.businessType,
          address: form.address.trim(),
          timeline: form.timeline
        }
      : {
          name: form.name.trim(),
          contact: `${form.email.trim()} · ${form.phone.trim()}`,
          project: `Residential — ${form.scope}`,
          service_area: form.address.trim(),
          summary: `Residential ${form.scope.toLowerCase()}. Timeline: ${form.timeline}.`,
          lane: 'residential',
          email: form.email.trim(),
          phone: form.phone.trim(),
          scope: form.scope,
          address: form.address.trim(),
          timeline: form.timeline
        };

    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead, conversation: [] })
      });
      if (!r.ok) throw new Error(`status ${r.status}`);
      setSubmitted(true);
    } catch (err) {
      setError("Couldn't send that. Try again, or call (757) 719-6269.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center animate-fade-up">
        <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight leading-none">Got it.</h1>
        <p className="mt-6 text-xl text-ink/70 leading-snug">Jose will reach out within 24 hours with a time for the walkthrough.</p>
        <p className="mt-2 text-sm text-ink/50">Need to talk sooner? Call <a href="tel:+17577196269" className="text-brand font-medium">(757) 719-6269</a>.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-up">
      <div className="text-center">
        <h1 className="font-display text-6xl sm:text-7xl font-semibold tracking-tight leading-none">Free estimate.</h1>
        <p className="mt-5 text-lg sm:text-xl text-ink/70 leading-snug">
          Get a real number for{' '}
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
      </div>

      <form onSubmit={submit} className="mt-8 bg-white rounded-3xl shadow-xl shadow-brand/10 border border-ink/5 p-6 sm:p-8">
        <div className="flex items-center justify-center gap-1 mb-6 bg-ink/5 rounded-full p-1 w-full sm:w-auto sm:mx-auto sm:max-w-sm">
          {[{ id: 'commercial', label: 'Commercial' }, { id: 'residential', label: 'Residential' }].map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setLane(opt.id)}
              className={`flex-1 text-sm font-medium rounded-full py-2 px-4 transition-colors ${lane === opt.id ? 'bg-white text-ink shadow-sm' : 'text-ink/50 hover:text-ink'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Your name">
            <input ref={firstFieldRef} type="text" autoComplete="name" required value={form.name} onChange={(e) => update('name', e.target.value)} className="form-input" placeholder="Jose Alvarez" />
          </Field>
          <Field label="Phone">
            <input type="tel" autoComplete="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className="form-input" placeholder="(757) 555-0100" />
          </Field>
          <Field label="Email" full>
            <input type="email" autoComplete="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="form-input" placeholder="you@yourbusiness.com" />
          </Field>
        </div>

        {lane === 'commercial' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <Field label="Business name">
              <input type="text" required value={form.businessName} onChange={(e) => update('businessName', e.target.value)} className="form-input" placeholder="Acme Dental Group" />
            </Field>
            <Field label="Space type">
              <select value={form.businessType} onChange={(e) => update('businessType', e.target.value)} className="form-input">
                {COMMERCIAL_TYPES.map((t) => (<option key={t}>{t}</option>))}
              </select>
            </Field>
            <Field label="Project address" full>
              <input type="text" autoComplete="street-address" required value={form.address} onChange={(e) => update('address', e.target.value)} className="form-input" placeholder="11820 Jefferson Ave, Newport News, VA" />
            </Field>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <Field label="Project address" full>
              <input type="text" autoComplete="street-address" required value={form.address} onChange={(e) => update('address', e.target.value)} className="form-input" placeholder="123 Kiln Creek Pkwy, Newport News, VA" />
            </Field>
            <Field label="Scope" full>
              <select value={form.scope} onChange={(e) => update('scope', e.target.value)} className="form-input">
                {RESIDENTIAL_SCOPES.map((s) => (<option key={s}>{s}</option>))}
              </select>
            </Field>
          </div>
        )}

        <Field label="Timeline" full>
          <select value={form.timeline} onChange={(e) => update('timeline', e.target.value)} className="form-input mt-3">
            {TIMELINES.map((t) => (<option key={t}>{t}</option>))}
          </select>
        </Field>

        <button type="submit" disabled={submitting || !valid()} className="mt-6 w-full rounded-full bg-brand text-white font-medium text-base py-3.5 disabled:opacity-40 hover:bg-brand-dark transition-colors">
          {submitting ? 'Sending…' : 'Get my free estimate'}
        </button>

        {error && (<p className="mt-3 text-sm text-center text-red-600">{error}</p>)}

        <p className="mt-4 text-center text-xs text-ink/40">Real human follow-up within 24 hours. Free estimates. No spam.</p>
      </form>

      <p className="mt-4 text-center text-xs text-ink/40">
        Prefer to talk? Call <a href="tel:+17577196269" className="text-brand font-medium">(757) 719-6269</a> — Jose answers.
      </p>
    </div>
  );
}

function Field({ label, children, full }) {
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="block text-xs font-medium text-ink/60 mb-1.5">{label}</span>
      {children}
    </label>
  );
}
