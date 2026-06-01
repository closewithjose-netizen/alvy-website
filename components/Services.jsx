const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We work around your business hours and coordinate the crew so the job finishes on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Going on the market? Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🔑',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — no single rooms, no accent walls. A coordinated crew that moves room to room and finishes on the date we committed to.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, stucco. Prep that actually lasts. Full homes only — we do not take partial exteriors.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Big house? We put multiple painters on it simultaneously. A 4,000 sq ft repaint should not drag on for a month.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, and commercial properties across Newport News and Hampton. Spec-grade coatings for high-traffic surfaces.',
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
            Full projects. Real crew. No single rooms, no side hustles.
          </h2>
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
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/50">
          Minimum job size applies. We do not take accent walls, single rooms, touch-ups, or handyman work.
        </p>
      </div>
    </section>
  );
}
