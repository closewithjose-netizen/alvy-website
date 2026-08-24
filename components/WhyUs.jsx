const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows what product belongs in which environment and why. Medical offices get antimicrobial paint. High-traffic doors get commercial-grade coatings. We spec correctly before we ever pick up a brush — competitors rely on others for this knowledge.'
  },
  {
    headline: 'Coordinated professional crew.',
    body:
      'A crew scaled to each job, owner-supervised from scope to final walkthrough. Multiple painters on big jobs so timelines hold. Not a one-person side hustle with a helper.'
  },
  {
    headline: 'Owner-operated. Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. You get one point of contact who knows your job from day one to done.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual English and Spanish — owner and crew. Every client treated with the same professionalism and respect, full stop.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If it fails within three years, we make it right. That is not a marketing line — it is in writing on every project.'
  },
  {
    headline: 'On-time guarantee or you get a credit.',
    body:
      'We finish when we said we would. If we run over, you get an account credit. Holding a timeline is not a favor — it is the job.'
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
