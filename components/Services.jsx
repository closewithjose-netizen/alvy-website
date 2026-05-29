const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail spaces, medical offices, multi-location programs. We coordinate a crew, work around your business hours, and finish on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏷️',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. A coordinated crew of 8 painters who show up together, work together, and hand you back a finished house — not a month-long project.',
    icon: '🛋️',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, stucco. Proper surface prep that actually lasts. Full homes only — no single elevations, no patch jobs.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters on site simultaneously. A 4,000 sq ft repaint doesn't drag on for a month. Detailed scope, daily progress, finished when we said.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building exteriors, multi-tenant properties. Spec-grade products, minimal disruption to your tenants and customers.',
    icon: '🏗️',
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
            Full projects. Real crews. No small jobs.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We focus on complete commercial spaces and full residential repaints.
            No accent walls, no single rooms, no touch-ups. If you need the whole
            thing done right, that's exactly what we do.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
