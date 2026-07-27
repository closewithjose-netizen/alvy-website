const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We coordinate the crew, work around your hours, and finish on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Scoped for homes going on the market. Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. A coordinated crew that shows up together, works together, and finishes on the date we said.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, stucco. Prep that holds through a Virginia winter. Full homes only — no single-surface patch work.',
    icon: '🏘',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters on site simultaneously. A 4,000 sq ft repaint should not take a month. It does not, with us.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, facades, building exteriors. Spec-grade products, surface prep included, finished on your timeline.',
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
            Full projects only. Commercial first, residential when it is the right fit.
          </h2>
          <p className="text-ink/60 mt-4 text-sm leading-relaxed">
            No accent walls. No single rooms. No touch-ups. We are a crew-based operation built for complete commercial and residential paint projects.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow ${
                s.featured
                  ? 'bg-brand text-cream border-brand'
                  : 'bg-white border-ink/5'
              }`}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className={`font-display text-xl font-semibold ${s.featured ? 'text-cream' : ''}`}>
                {s.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${s.featured ? 'text-cream/80' : 'text-ink/70'}`}>
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
