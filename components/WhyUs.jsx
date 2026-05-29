const pillars = [
  {
    headline: 'A professional female crew.',
    body:
      'Most of our painters are women. Clients — especially homeowners — consistently say they felt at ease and trusted us in their space. It is our most consistent compliment and the thing competitors cannot copy.'
  },
  {
    headline: 'We spec before we quote.',
    body:
      'Medical office gets antimicrobial paint. High-traffic door gets a commercial-grade coating. We know which product belongs in which environment and why — before we ever pick up a brush.'
  },
  {
    headline: 'Jose answers the phone.',
    body:
      'No call center, no franchise rep, no assistant. When you contact Alvarez Painters, you are talking to Jose. Every estimate, every question, every update comes directly from him.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News based. The crew is bilingual — reach out in Spanish or English, you will get the same quality of service either way.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If something goes wrong with our work in three years, we come back and make it right. No fine print, no runaround.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said, or you get an account credit. We build schedules we can keep and we keep them. If we say Thursday, we mean Thursday.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six things that make us worth calling.
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
