const pillars = [
  {
    headline: 'Professional female crew.',
    body:
      'Most of our painters are women. Clients — especially homeowners — consistently say they felt more at ease having our crew in their space. It is our most consistent compliment and our clearest differentiator.'
  },
  {
    headline: 'Spec-level product expertise.',
    body:
      'Medical office gets antimicrobial paint. High-traffic door gets a commercial-grade coating. We know which product belongs where and why — before we quote, not after. Competitors ask someone else. We come with the full package.'
  },
  {
    headline: 'Owner-operated.',
    body:
      'When you contact Alvarez Painters, you are talking to Jose. Not a call center, not a franchise rep. Jose answers personally and stays on the job from estimate to final walkthrough.'
  },
  {
    headline: 'Latino-owned. Bilingual. LGBTQ+ friendly.',
    body:
      'Jose Melendez Alvarez, Newport News. Bilingual owner and crew — English and Spanish. All clients treated with the same professionalism and respect, full stop.'
  },
  {
    headline: '3-year warranty on every job.',
    body:
      'No-peel, no-blister guarantee. If something fails inside three years, we come back and make it right. No runaround.'
  },
  {
    headline: 'On-time guarantee.',
    body:
      'We finish when we said we would, or you get an account credit. That is a real promise, not a tagline.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-ink text-cream">
      <div className="container-page">
        <span className="pill bg-cream/10 text-cream">Why us</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4 max-w-3xl">
          Six things that make Alvarez Painters the easy call.
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
