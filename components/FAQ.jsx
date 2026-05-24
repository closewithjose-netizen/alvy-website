'use client';

import { useState } from 'react';

const faqs = [
  {
    q: "What's a PCS Move-In Refresh?",
    a: "It's a fixed-price painting package built specifically for military families relocating to Hampton Roads. We work backward from your report date — 7, 10, or 14-day turn options, photo documentation throughout, and an inspection-grade finish. You give us the keys; we hand you back a move-in-ready house."
  },
  {
    q: 'How fast can you get me an estimate?',
    a: "24 hours from the time you reach out — usually faster. Jose is an owner-operator, so when you text Alvy, you're texting him directly. Estimates are always free."
  },
  {
    q: 'Do you paint commercial buildings?',
    a: 'Yes — interior and exterior. Offices, retail, restaurants, common areas, property-manager spaces. We work around your hours so the business keeps moving, and we coordinate a crew so the job finishes on schedule.'
  },
  {
    q: 'Can you handle a 3,000+ sq ft house?',
    a: "Yes — that's actually where we shine. We have a crew that can put multiple painters on a big house simultaneously, so a 4,000 sq ft repaint doesn't drag on for a month. Detailed scope up front, daily progress, finished on the date we promised."
  },
  {
    q: 'What does a pre-listing paint refresh cost?',
    a: 'Depends on size and scope. We give a real number after a quick walkthrough — usually within 24 hours. No "starts at" hand-waves, and the estimate is always free.'
  },
  {
    q: 'Do you work with property managers?',
    a: 'Yes — turnover painting is one of our core services. We already work with ABBITT Realty. Fixed room-by-room pricing, 24-48 hour estimates, photo documentation, and invoicing formatted for owner approval.'
  },
  {
    q: 'What neighborhoods do you serve?',
    a: "Newport News, Hampton, and Williamsburg are our primary service areas. We regularly work in Hidenwood, Riverside, Merry Point Estates, Hilton Village, North End, Fox Hill, Farmington, Olde Wythe, Kingsmill, Ford's Colony, and Governor's Land. Other locations by request."
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed in Virginia and insured. Every job is backed by our 3-year no-peel, no-blister warranty and on-time guarantee.'
  },
  {
    q: 'Do you offer military discounts?',
    a: 'Our PCS Move-In Refresh package is priced specifically for military families — we bake the savings into the package pricing instead of stacking discounts. You get a clean fixed number that matches BAH-budget realities.'
  },
  {
    q: 'What about cabinet refinishing?',
    a: "We do it occasionally, but it's not our main focus. If cabinets are part of a bigger PCS or pre-listing job, we'll include them. For cabinet-only work, ask Alvy in the chat and we'll point you in the right direction."
  },
  {
    q: '¿Hablan español?',
    a: 'Sí. Jose y parte del equipo hablan español. Escríbenos en el chat — te respondemos en el idioma que prefieras.'
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes — estimates are always free. No obligation, no hard sell.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
};

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-ink/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-page max-w-3xl">
        <span className="pill">FAQ</span>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 leading-tight">
          Questions Peninsula homeowners actually ask.
        </h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left py-5 flex items-start gap-4 group"
              aria-expanded={open === i}
            >
              <span
                className={`mt-1 inline-block w-6 h-6 shrink-0 rounded-full border border-ink/20 grid place-items-center text-xs transition-transform ${
                  open === i
                    ? 'rotate-45 bg-brand text-white border-brand'
                    : 'group-hover:border-brand/50'
                }`}
              >
                +
              </span>
              <div className="flex-1">
                <h3 className="font-display text-base sm:text-lg font-semibold">
                  {f.q}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
                >
                  <p className="text-ink/70 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/60">
          Still have a question?{' '}
          <a href="#chat" className="text-brand underline underline-offset-4 hover:text-brand-dark">
            Ask Alvy in the chat above
          </a>{' '}
          or call us at{' '}
          <a href="tel:+17577196269" className="text-brand underline underline-offset-4 hover:text-brand-dark">
            (757) 719-6269
          </a>.
        </p>
      </div>
    </section>
  );
}
