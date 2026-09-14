const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows which product belongs in which environment and why. Medical-grade antimicrobial for exam rooms. Commercial-grade coatings for high-traffic doors. We spec correctly before we ever pick up a brush — competitors rely on others for this. We come with a full package.'
  },
  {
    headline: 'Coordinated professional crew.',
    body:
      'Every job is owner-supervised from scope to final walkthrough. Multiple painters on large jobs so timelines hold. When we say it finishes Thursday, it finishes Thursday.'
  },
  {
    headline: 'Owner-operated — Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. One person responsible for the entire job, start to finish.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual English and Spanish. All clients treated with the same professionalism and respect — no exceptions.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If it fails, we come back and fix it. That is the whole warranty. No fine print, no pro-rated tables.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said we would, or you get an account credit. Not a slogan — it is the standard we hold ourselves to on every project.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six reasons clients do not shop around after working with us.
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
