const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We work around your business hours and coordinate the crew so the job finishes on schedule.',
    icon: '🏢'
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🔑'
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — no single rooms, no accent walls. A coordinated crew that moves through your home without dragging it out for weeks.',
    icon: '🛋'
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors, stucco. Prep that actually holds through a Virginia summer and a mid-Atlantic winter.',
    icon: '🏡'
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters on the job at once. A 4,000 sq ft repaint should not take a month. Ours does not.',
    icon: '📐'
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, parking structures. Correct surface prep and spec-grade coatings that last.',
    icon: '🏗'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="pill">What we do</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4">
            Full projects only — commercial and residential, done right.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-white border border-ink/5 p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="text-ink/70 mt-2 text-sm leading-relaxed">
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
