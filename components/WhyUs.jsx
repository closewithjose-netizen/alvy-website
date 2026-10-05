const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows which product belongs in which environment and why. Medical-grade antimicrobial for healthcare spaces. Commercial-grade door coatings for high-traffic entries. We spec correctly before we ever pick up a brush — not after.'
  },
  {
    headline: 'Coordinated crew, owner on every job.',
    body:
      'Multiple painters on big jobs so timelines hold. Jose supervises from scope to final walkthrough. When you contact Alvarez Painters, you are talking to Jose — not a call center, not a franchise rep.'
  },
  {
    headline: 'We finish when we said we would.',
    body:
      'Estimate in 24 hours. Start dates honored. Finish dates honored. If we run over, you get an account credit. The on-time guarantee is in writing.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If it fails in three years, we fix it. That is what spec-grade prep and the right product actually buys you.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Owner and crew are bilingual — English and Spanish. All clients treated with the same professionalism and respect, full stop.'
  },
  {
    headline: '5.0 on Google. 25+ reviews.',
    body:
      'Not curated. Not from friends. From real commercial and residential clients across Hampton Roads. Licensed and insured in Virginia under Alvy Color Changes LLC.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six things that actually matter when you are hiring a painting crew.
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
