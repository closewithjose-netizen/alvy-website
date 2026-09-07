const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows what product belongs where and why. Medical-grade antimicrobial for clinic walls. Commercial-grade coatings for high-traffic doors. We spec correctly before we ever quote — not after.'
  },
  {
    headline: 'Coordinated crew, owner-supervised.',
    body:
      'Multiple painters on big jobs so timelines hold. Jose is on every project from scope to final walkthrough — not handing you off to a crew you have never met.'
  },
  {
    headline: 'Jose answers the phone.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. One person, accountable for the whole job.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If it fails, we come back and fix it. That is the job.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said, or you get an account credit. Estimate in 24 hours. Start dates honored. Finish dates honored.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual English and Spanish — owner and crew. Every client treated with the same professionalism and respect.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six things that make the difference on a real job.
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
