const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail spaces, medical offices, multi-location programs. We work around your business hours and scale the crew so your timeline holds.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Going on the market? We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏷️'
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — coordinated crew, sharp lines, clean job sites. No single rooms, no accent walls.',
    icon: '🛋️'
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, stucco refresh. Prep that actually lasts. Full homes only.',
    icon: '🏡'
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'We put multiple painters on big jobs simultaneously. A 4,000 sq ft repaint does not drag on for a month.',
    icon: '📐'
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, commercial properties throughout Hampton Roads. Scheduled around your operations.',
    icon: '🏗️'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="pill">What we do</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4">
            Commercial spaces and full home repaints. Full projects only.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl bg-white border p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow ${
                s.featured
                  ? 'border-brand/30 ring-1 ring-brand/20'
                  : 'border-ink/5'
              }`}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="text-ink/70 mt-2 text-sm leading-relaxed">
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/50">
          We do not take single rooms, accent walls, touch-ups, or handyman work. If you have a full project, we are the right fit.
        </p>
      </div>
    </section>
  );
}
