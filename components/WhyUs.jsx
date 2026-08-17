const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows what product belongs where and why. Medical-grade antimicrobial for exam rooms. Commercial-grade door coatings for high-traffic entries. We spec correctly before we quote — not after.'
  },
  {
    headline: 'Coordinated professional crew.',
    body:
      'Every job is owner-supervised from scope to final walkthrough. Big jobs get multiple painters on site simultaneously so your timeline does not slip.'
  },
  {
    headline: 'Owner-operated — Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you reach Jose. Not a call center, not a franchise rep. One person who knows your project start to finish.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual English and Spanish — owner and crew. Every client gets the same professionalism and respect.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If something fails within three years, we make it right. No arguments, no qualifiers.'
  },
  {
    headline: 'On-time guarantee — or you get an account credit.',
    body:
      'We tell you when we will finish and we finish then. If we run past the agreed date, you get a credit. We back it up because we rarely need to use it.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six things that separate us from the next painter on the list.
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
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-wrap gap-6 text-sm text-cream/50">
          <span>5.0 on Google &middot; 25+ reviews</span>
          <span>Licensed &amp; insured in Virginia</span>
          <span>Serving all of Hampton Roads</span>
        </div>
      </div>
    </section>
  );
}
