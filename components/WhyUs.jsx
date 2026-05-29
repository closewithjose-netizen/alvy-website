const pillars = [
  {
    headline: 'Professional female crew.',
    body:
      'Most of our painters are women. Clients — especially homeowners — consistently say they felt more at ease with our crew in their space. It is our most consistent compliment and our sharpest differentiator.'
  },
  {
    headline: 'Spec-level product expertise.',
    body:
      'We know which product belongs in which environment and why. Medical office gets antimicrobial paint. High-traffic door gets a commercial-grade coating. We spec before we quote — not after.'
  },
  {
    headline: 'Owner-operated. Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. One point of contact from estimate to final walkthrough.'
  },
  {
    headline: 'Latino-owned · Bilingual · LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. English and Spanish — owner and crew. Every client treated with the same professionalism and respect.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. Commercial or residential. If it fails, we come back. No argument, no runaround.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said we would. If we miss the date we committed to, you get an account credit. We have never had to write one.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six things that set us apart from every other crew on the Peninsula.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
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
