const pillars = [
  {
    headline: 'Professional female crew.',
    body:
      'Most of our painters are women. Clients — especially homeowners — consistently say they felt more at ease having our crew in their space. It is our most consistent compliment and the sharpest thing that sets us apart in this market.'
  },
  {
    headline: 'Spec-level product expertise.',
    body:
      'We know which product belongs in which environment and why. Medical offices get antimicrobial paint. High-traffic doors get commercial-grade coatings. We spec before we quote — not after.'
  },
  {
    headline: 'Owner-operated. Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you reach Jose — not a call center, not a franchise rep. He answers, he quotes, and his name is on the warranty.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual owner and crew — English and Spanish. Every client treated with the same professionalism and respect, full stop.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If it fails, we come back and make it right — no negotiation, no paperwork.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said we would — or you get an account credit. Not a hedge, not a disclaimer. A promise with a consequence attached.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six things that make Alvarez Painters the right call.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
