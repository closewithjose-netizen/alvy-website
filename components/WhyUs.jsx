const pillars = [
  {
    headline: 'Spec-level product expertise.',
    body:
      'Jose knows which product belongs in which environment and why. Medical offices get antimicrobial paint. High-traffic doors get commercial-grade coatings. We spec correctly before we ever pick up a brush — competitors rely on others for this. We come with a full package.'
  },
  {
    headline: 'Coordinated professional crew, owner-supervised.',
    body:
      'Every job is scaled to the scope and supervised by Jose from the initial walkthrough to the final punch list. Multiple painters on big jobs so timelines hold. When we say a date, we mean it — or you get an account credit.'
  },
  {
    headline: 'Jose answers the phone.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose — not a call center, not a franchise rep, not a dispatcher. Owner-operated means one point of contact, start to finish.'
  },
  {
    headline: 'Three-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If something fails within three years, we make it right. No arguing, no fine print.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. Bilingual English and Spanish — owner and crew. Every client is treated with the same professionalism and respect, full stop.'
  },
  {
    headline: '5.0 on Google. 25+ reviews.',
    body:
      'Every review is from a real client on a real project. We do not chase five stars — we earn them by finishing what we started, on time, and exactly as scoped.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six reasons clients do not look for another painter.
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
