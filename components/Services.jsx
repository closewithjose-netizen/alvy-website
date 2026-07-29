const services = [
  {
    title: 'Commercial Interior',
    blurb:
      'Offices, restaurants, retail, medical, multi-location programs. We work around your business hours and coordinate the crew so your timeline holds.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏷️',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — not single rooms. A coordinated crew, sharp lines, clean job site, finished when we said.',
    icon: '🛋️',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, stucco refresh. Prep that actually lasts. Full homes only.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'We put multiple painters on a big job simultaneously — so a 4,000 sq ft repaint does not drag on for a month.',
    icon: '📐',
    featured: false
  }
];

export default function Services() {
  return (
    <section id="offers" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="pill">What we do</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4">
            Full projects. Commercial and residential. No small jobs.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We do not take accent walls, single rooms, or touch-ups. If you have a full commercial space or a full home repaint, we are the right fit.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow ${
                s.featured
                  ? 'bg-brand text-white border-brand lg:col-span-1'
                  : 'bg-white border-ink/5'
              }`}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3
                className={`font-display text-xl font-semibold ${
                  s.featured ? 'text-white' : ''
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  s.featured ? 'text-white/80' : 'text-ink/70'
                }`}
              >
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
