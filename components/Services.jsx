const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail spaces, medical suites, multi-location programs. We work around your business hours and coordinate the crew so the timeline holds.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'We have prepped listings across Hampton Roads. We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. A coordinated crew, sharp lines, no roller marks, clean job sites every day. We finish when we said we would.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, stucco. Prep that actually holds through a Virginia winter. Full home projects only — no spot jobs.',
    icon: '🎨',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Big jobs need a real crew. We put multiple painters on simultaneously so a 4,000 sq ft repaint does not drag on for a month.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, commercial properties throughout Hampton Roads. One vendor, consistent results, on schedule.',
    icon: '🏗',
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
            We are a crew-based operation. We take complete projects — full interiors, full exteriors, full commercial spaces. Not single rooms, not accent walls, not touch-ups.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow ${
                s.featured
                  ? 'bg-brand text-white border-brand'
                  : 'bg-white border-ink/5'
              }`}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className={`font-display text-xl font-semibold ${
                s.featured ? 'text-white' : ''
              }`}>{s.title}</h3>
              {s.featured && (
                <span className="inline-block mt-1 mb-2 text-xs font-medium bg-white/20 text-white rounded-full px-2 py-0.5">
                  Primary focus
                </span>
              )}
              <p className={`mt-2 text-sm leading-relaxed ${
                s.featured ? 'text-white/80' : 'text-ink/70'
              }`}>
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
