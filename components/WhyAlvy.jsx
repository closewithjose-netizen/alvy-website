const pillars = [
  {
    title: 'Owner-operated.',
    body:
      "When you contact Alvarez Painters, you're talking to Jose. Not a call center. Not a franchise sales rep. The owner scopes your job and supervises it."
  },
  {
    title: 'Spec-level product expertise.',
    body:
      'We know what product belongs where and why. Antimicrobial systems for medical spaces, commercial-grade coatings for high-traffic doors, the right primer for salt-air exteriors. We spec correctly before we ever pick up a brush.'
  },
  {
    title: 'Coordinated professional crew.',
    body:
      'A coordinated crew scaled to your job, owner-supervised from scope to final walkthrough. Multiple painters on big jobs so timelines hold.'
  },
  {
    title: 'Latino-owned · Bilingual · LGBTQ+ friendly.',
    body:
      'English and Spanish, on the phone and on the job. Every client treated with the same professionalism and respect. ¿Hablamos español? Claro que sí.'
  },
  {
    title: '3-year warranty.',
    body:
      'No-peel, no-blister guarantee on every job. If the finish fails on us, we come back.'
  },
  {
    title: 'On-time guarantee.',
    body:
      'We finish when we said we would, or you get an account credit. Your time matters.'
  }
];

export default function WhyAlvy() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-white border-t border-ink/5">
      <div className="container-page">
        <span className="pill">Why us</span>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 max-w-3xl leading-tight">
          Why we're different (and why it matters).
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-12">
          {pillars.map((p, i) => (
            <div key={p.title} className="group">
              <div className="font-display text-4xl text-brand/40 font-semibold group-hover:text-brand transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-lg font-semibold mt-2">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
