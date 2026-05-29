'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What kind of projects do you take?',
    a: 'Full commercial and residential paint projects. We focus on complete interiors, complete exteriors, and commercial spaces — not single rooms, accent walls, or patch jobs.'
  },
  {
    q: 'Do you paint commercial buildings?',
    a: 'Yes — commercial interior and exterior is our primary focus. Offices, restaurants, retail spaces, medical offices, multi-location programs. We work around your business hours and coordinate a crew so the job finishes on schedule.'
  },
  {
    q: 'Do you work with multi-location businesses?',
    a: 'Yes. If you own or manage more than one location, we can build a program around your sites. One relationship, one vendor, consistent results across all your locations.'
  },
  {
    q: 'What does spec-grade painting mean?',
    a: 'It means we know which product belongs in which environment and why. A medical office gets antimicrobial paint. A high-traffic door gets a commercial-grade coating. We spec the right product before we quote, not after.'
  },
  {
    q: 'Why is most of your crew women?',
    a: 'Because they are the best painters we have found. Our clients — especially homeowners — consistently say they felt more comfortable having our crew in their space. It is something we are proud of.'
  },
  {
    q: 'Can you handle a 3,000+ sq ft house?',
    a: "Yes — that is where we shine. We put multiple painters on a big job simultaneously so a 4,000 sq ft repaint does not drag on for a month. Detailed scope, daily progress, finished on the date we promised."
  },
  {
    q: 'How fast can you get me an estimate?',
    a: '24 hours from the time you reach out — usually faster. For commercial projects we come to your space. For residential we do a quick walkthrough. Estimates are always free.'
  },
  {
    q: 'What is the pre-listing paint refresh?',
    a: 'A complete interior or exterior repaint scoped specifically for homes going on the market. Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.'
  },
  {
    q: 'What neighborhoods do you serve?',
    a: 'Newport News, Hampton, and York County are our primary areas. We regularly work in Kiln Creek, Port Warwick, Hidenwood, Riverside, Merry Point Estates, Hilton Village, Fox Hill, Farmington, Olde Wythe, and Phoebus. Commercial work throughout the Jefferson Ave, Oyster Point, and Mercury Blvd corridors.'
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed in Virginia under Alvy Color Changes LLC (DBA Alvarez Painters) and insured. Every job is backed by our 3-year no-peel, no-blister warranty and on-time guarantee.'
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Always. No obligation, no hard sell. Commercial or residential — free estimate within 24 hours.'
  },
  {
    q: '¿Hablan español?',
    a: 'Sí. Jose y parte del equipo hablan español. Escríbenos en el chat — te respondemos en el idioma que prefieras.'
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
          Questions we actually get asked.
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
          <a href="#estimate" className="text-brand underline underline-offset-4 hover:text-brand-dark">
            Fill out the form above
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
