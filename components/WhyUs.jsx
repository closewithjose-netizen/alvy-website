const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'We know which product belongs in which environment and why. A medical office gets antimicrobial paint. A high-traffic door gets a commercial-grade coating. We spec correctly before we ever pick up a brush.'
  },
  {
    headline: 'Coordinated professional crew.',
    body:
      'Owner-supervised from scope to final walkthrough. Multiple painters on big jobs so timelines hold. You get a crew, not a guy with a van.'
  },
  {
    headline: 'Owner-operated — Jose answers.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. He scopes the job, supervises the work, and does the final walkthrough himself.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News. Bilingual English and Spanish — owner and crew. All clients treated with the same professionalism and respect.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If something fails inside three years, we come back and make it right. No negotiating, no fine print.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said, or you get an account credit. Start dates honored. Finish dates honored. It is a commitment, not a rough estimate.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six reasons the crews who cut corners do not last around here.
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
