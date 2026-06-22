const pillars = [
  {
    headline: 'Professional female crew.',
    body:
      'Most of our painters are women. Clients — especially homeowners — consistently say they felt more comfortable with our crew in their space. It is our most consistent compliment and our clearest edge in a market full of rough-looking operations.'
  },
  {
    headline: 'Spec-level product expertise.',
    body:
      'We know which product belongs in which environment and why. Medical office gets antimicrobial paint. High-traffic door gets a commercial-grade coating. We spec correctly before we ever pick up a brush — competitors rely on others for this. We come with the full package.'
  },
  {
    headline: 'Owner-operated. Jose answers personally.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. Jose Melendez Alvarez — Newport News based, licensed VA Realtor, bilingual. He answers.'
  },
  {
    headline: 'Full crew. Full commitment.',
    body:
      'Eight painters who show up together, execute together, and finish on schedule. No subcontracting, no gaps, no surprises. A coordinated crew built for commercial projects and large homes — not a one-person side hustle.'
  },
  {
    headline: '3-year warranty. No-peel, no-blister.',
    body:
      'Every job is backed by a 3-year warranty on workmanship and materials. If it peels or blisters, we come back and fix it. No arguments.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said we would — or you get an account credit. We schedule with real dates and honor them. If we say Friday, we mean Friday.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six reasons Alvarez Painters is a different kind of crew.
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
        <div className="mt-12 flex flex-wrap gap-3 text-sm text-cream/60">
          <span className="rounded-full border border-cream/20 px-4 py-1.5">Latino-owned</span>
          <span className="rounded-full border border-cream/20 px-4 py-1.5">Bilingual English + Spanish</span>
          <span className="rounded-full border border-cream/20 px-4 py-1.5">LGBTQ+ friendly</span>
          <span className="rounded-full border border-cream/20 px-4 py-1.5">Licensed &amp; Insured in Virginia</span>
          <span className="rounded-full border border-cream/20 px-4 py-1.5">5.0 Google · 25+ reviews</span>
        </div>
      </div>
    </section>
  );
}
