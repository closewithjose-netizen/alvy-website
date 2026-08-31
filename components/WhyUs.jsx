const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows what product belongs in which environment and why. Medical-grade antimicrobial, commercial-grade door coatings, high-traffic surfaces — we spec correctly before we ever pick up a brush. Competitors rely on others for this. We come with the full package.'
  },
  {
    headline: 'Coordinated professional crew.',
    body:
      'Multiple painters on big jobs so timelines hold. Owner-supervised from scope to final walkthrough. We scale the crew to the job — not the other way around.'
  },
  {
    headline: 'Owner-operated. Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. He picks up, he follows up, he shows up.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual English and Spanish — owner and crew. All clients treated with the same professionalism and respect.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. Commercial or residential — if it fails, we come back. No argument, no fine print.'
  },
  {
    headline: 'On-time guarantee or you get an account credit.',
    body:
      'We finish when we said. If we do not, you get a credit. That is how confident we are in our process.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six things that make the difference.
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
