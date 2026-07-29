const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows what product belongs where and why. Medical-grade antimicrobial for exam rooms. Commercial-grade coatings for high-traffic doors. We spec correctly before we ever pick up a brush — not after.'
  },
  {
    headline: 'Coordinated professional crew.',
    body:
      'Owner-supervised from scope to final walkthrough. Multiple painters on big jobs so timelines hold. You get a crew that moves, not a solo operator who disappears for a week.'
  },
  {
    headline: 'Owner-operated — Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. He handles the estimate, the schedule, and the walkthrough.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual English and Spanish owner and crew. Every client gets the same professionalism and respect — no exceptions.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If something goes wrong with the paint job inside three years, we come back and make it right. No haggling.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said, or you get an account credit. Estimate in 24 hours. Start dates honored. Finish dates honored.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six reasons clients stop looking after the first job.
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
