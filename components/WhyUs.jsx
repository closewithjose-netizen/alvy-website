const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows which product belongs in which environment and why. A medical office gets antimicrobial paint. A high-traffic door gets a commercial-grade coating. We spec correctly before we ever quote — not after.'
  },
  {
    headline: 'Coordinated professional crew, owner-supervised.',
    body:
      'Every job is supervised by Jose from scope to final walkthrough. Multiple painters on big jobs so timelines hold. When you contact Alvarez Painters, you are talking to Jose — not a call center, not a franchise rep.'
  },
  {
    headline: 'A guarantee you can actually hold us to.',
    body:
      '3-year no-peel, no-blister warranty on every job. On-time guarantee — we finish when we said, or you get an account credit. Free estimate within 24 hours, always.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Three reasons clients do not call anyone else.
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
