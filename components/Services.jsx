const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail spaces, medical offices, multi-location programs. We spec the right product, coordinate a full crew, and work around your business hours.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Scoped specifically for homes going on the market. Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need.',
    icon: '🏠',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Complete interior repaints for full homes. No single rooms, no accent walls — a coordinated crew that finishes on the date we promised.',
    icon: '🛋️',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, and surface prep that holds through a Virginia winter. Full homes only.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters working simultaneously. A 4,000 sq ft repaint shouldn't drag on for a month — and with us, it won't.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Commercial-grade prep and coatings for storefronts, building facades, and exterior common areas. Done on your schedule.',
    icon: '🏗️',
    featured: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="pill">What we do</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4">
            Full projects. Full crew. No small jobs.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We are a crew-based operation. Commercial interior is our primary focus.
            Residential full repaints are our secondary. We do not do accent walls,
            single rooms, or touch-ups.
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
              {s.featured && (
                <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider bg-white/20 text-white rounded-full px-3 py-1">
                  Primary focus
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
