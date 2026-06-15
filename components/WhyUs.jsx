const pillars = [
  {
    headline: 'Professional female crew.',
    body:
      'Most of our painters are women. Clients — especially homeowners — consistently say they felt more at ease with our crew in their space. It is our most consistent compliment and a real differentiator in this market.'
  },
  {
    headline: 'Spec-level product expertise.',
    body:
      'We know which product belongs in which environment before we ever pick up a brush. Medical office gets antimicrobial paint. High-traffic door gets a commercial-grade coating. Competitors guess. We spec correctly.'
  },
  {
    headline: 'Owner-operated. Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you reach Jose. Not a call center, not a franchise rep. He shows up for the estimate, he manages the job, and his number is the one on the card.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual English and Spanish — owner and crew. Every client treated with the same professionalism and respect. No exceptions.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If it fails inside three years, we come back and make it right. No argument, no invoice.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said we would, or you get an account credit. Estimate in 24 hours. Start dates honored. Finish dates honored.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six reasons clients don't look for another painter after us.
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
