const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We work around your business hours and coordinate a crew so the job stays on schedule.',
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
      'Full homes only — no single rooms. A coordinated crew that finishes when we said, not whenever the schedule allows.',
    icon: '🛋️'
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, and everything in between. Prep that actually holds through a Hampton Roads winter.',
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
      'Storefronts, building facades, and commercial properties across all of Hampton Roads.',
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
            Full projects only. Commercial first, residential when it fits.
          </h2>
          <p className="mt-3 text-ink/60 text-sm leading-relaxed">
            No accent walls, no single rooms, no touch-ups. We take complete
            commercial and residential paint projects — and we finish them on
            schedule.
          </p>
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
      </div>
    </section>
  );
}
