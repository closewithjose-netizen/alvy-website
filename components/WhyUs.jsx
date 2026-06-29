const pillars = [
  {
    headline: 'Professional female crew.',
    body:
      'Most of our painters are women. Clients — especially homeowners — consistently say they felt more comfortable with our crew in their space. It is our most consistent compliment.'
  },
  {
    headline: 'Spec-level product expertise.',
    body:
      'We know which product belongs in which environment before we ever quote. Medical offices get antimicrobial coatings. High-traffic doors get commercial-grade finishes. We come with a full package — competitors rely on others for this.'
  },
  {
    headline: 'Owner-operated. Jose answers.',
    body:
      'When you contact Alvarez Painters, you reach Jose directly. Not a call center, not a franchise rep. He answers personally and stays on the job from estimate to final walkthrough.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual owner and crew. Every client treated with the same professionalism and respect — no exceptions.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. Commercial or residential. If it fails within three years, we make it right.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said we would. If we miss the date, you get an account credit. We have not had to issue one yet.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six reasons clients keep calling us back.
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
