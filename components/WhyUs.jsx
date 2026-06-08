const pillars = [
  {
    headline: 'Professional female crew.',
    body:
      'Most of our painters are women. Our clients — homeowners and business owners alike — consistently say they felt more at ease having our crew in their space. It is our most consistent compliment and our clearest differentiator.'
  },
  {
    headline: 'Spec-level product expertise.',
    body:
      'We know which product belongs in which environment and why. Medical office gets antimicrobial paint. High-traffic commercial door gets Forte. We spec correctly before we ever pick up a brush — not after.'
  },
  {
    headline: 'Owner-operated. Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. He answers, he scopes the job, he shows up. That is the whole model.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Jose and the crew speak English and Spanish — write to us in either. Every client is treated with the same professionalism and respect, full stop.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If something fails within three years, we come back and make it right. No negotiation, no fine print.'
  },
  {
    headline: 'On-time guarantee or you get an account credit.',
    body:
      'We finish when we said we would. If we miss the date we committed to, you receive an account credit. We have not needed to issue one yet.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six reasons clients don't go looking for another painter.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {pillars.map((p, i) => (
            <div key={i}>
              <div className="font-display text-5xl text-brand mb-3">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug">
                {p.headline}
              </h3>
              <p className="text-cream/70 mt-2 text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
