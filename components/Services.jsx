const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail spaces, medical offices, multi-location programs. We work around your business hours and finish on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Scoped for homes going on the market. Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need.',
    icon: '🪧',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. A coordinated crew, clean job sites, and a finish that holds up. No single rooms, no accent walls.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors, and everything between. Prep that actually lasts — not a coat of paint slapped over a problem.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'We put multiple painters on a big job at once so it finishes on the date we said, not a month later.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, multi-unit properties. Spec-grade coatings built for commercial exposure.',
    icon: '🏗',
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
            Commercial spaces and full home repaints — that is the whole list.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We do not take single rooms, accent walls, or touch-ups. Full projects only. Minimum job size applies.
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
              <p className={`mt-2 text-sm leading-relaxed ${
                s.featured ? 'text-white/80' : 'text-ink/70'
              }`}>
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
