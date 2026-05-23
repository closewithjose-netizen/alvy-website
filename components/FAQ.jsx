'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How much does it cost to paint a room?',
    a: "Most interior rooms fall in a reasonable range depending on size, prep, ceiling height, and how many color changes are involved. We give a free estimate after a quick walkthrough — usually within 24 hours of you reaching out."
  },
  {
    q: 'How long does it take?',
    a: "A single room is usually 1–2 days. A full interior repaint of a 3-bed house typically runs 4–6 days. Cabinets take 3–5 days with dry time between coats."
  },
  {
    q: 'Do you move furniture?',
    a: "Yes — we move it to the center of the room and cover it. We ask you to take down wall art and valuables ahead of time."
  },
  {
    q: 'Will you help me pick colors?',
    a: "That's literally the name of the company. Book a $150 color consultation and we'll bring physical samples to your space, put them on the wall in the right light, and leave you with a written palette. If you book the job, the $150 comes off the invoice."
  },
  {
    q: 'What paint do you use?',
    a: "Mid- to high-grade Benjamin Moore and Sherwin Williams by default. If you want a different brand or finish, we'll match the spec."
  },
  {
    q: 'Do you do exteriors in winter?',
    a: "Only when temperatures cooperate. Cold-weather exterior painting can fail. We schedule exteriors in the warm season and use the off-season for interiors + cabinets."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-page max-w-3xl">
        <span className="pill">FAQ</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4">
          The questions we hear all the time.
        </h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left py-5 flex items-start gap-4 group"
              aria-expanded={open === i}
            >
              <span
                className={`mt-1 inline-block w-6 h-6 rounded-full border border-ink/20 grid place-items-center text-xs transition-transform ${
                  open === i ? 'rotate-45 bg-brand text-white border-brand' : ''
                }`}
              >
                +
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{f.q}</h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-40 mt-2' : 'max-h-0'
                  }`}
                >
                  <p className="text-ink/70 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
