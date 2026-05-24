const pillars = [
  {
    title: 'Owner-operated.',
    body:
      "When you text Alvy, you're texting Jose. Not a call center in Texas. Not a franchise sales rep."
  },
  {
    title: 'Licensed VA Realtor.',
    body:
      "Jose knows how listings work, what an HOA approval letter actually says, and how military move clocks tick."
  },
  {
    title: 'Bilingual — English & Spanish.',
    body: 'Important in a base community. ¿Hablamos español? Claro que sí.'
  },
  {
    title: 'Crew built for big jobs.',
    body:
      "We're not a one-person operation. We can put multiple painters on a 3,000+ sq ft house or a commercial space and still keep your job clean."
  },
  {
    title: '3-year warranty.',
    body:
      "No-peel, no-blister guarantee on every job. If the finish fails on us, we come back."
  },
  {
    title: 'On-time guarantee.',
    body:
      "We finish when we said we would, or you get an account credit. Your time matters."
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
