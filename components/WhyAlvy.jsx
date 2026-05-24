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
    title: 'EPA Lead-Safe Certified.',
    body:
      "Required for pre-1978 homes. Most painters in this market aren't."
  },
  {
    title: 'BBB A+ Accredited.',
    body: '25+ 5-star reviews. BuildZoom top 22% of licensed VA contractors.'
  },
  {
    title: 'Hampton Roads native.',
    body:
      'Newport News-based. We work the Peninsula every day — not "covering" it from Southside.'
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
            <div key={p.title}>
              <div className="font-display text-4xl text-brand/40 font-semibold">
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
