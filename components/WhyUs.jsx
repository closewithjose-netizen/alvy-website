const pillars = [
  {
    headline: 'Color is the actual product.',
    body:
      'Most painters hand you a fan deck and shrug. We walk the rooms with you, talk about light direction, put real samples on your wall, and you decide with confidence.'
  },
  {
    headline: 'We show up when we say we will.',
    body:
      "Estimate in 24 hours. Start dates honored. Finish dates honored. If we say Tuesday, we're knocking on the door Tuesday."
  },
  {
    headline: 'Clean enough to invite the in-laws over mid-job.',
    body:
      'Drop cloths every day. Daily clean-up. No paint on the lawn, no roller covers in the bushes. You can keep living in the house while we work.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Three reasons you'll never call another painter.
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
