const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces. Spec-grade products, coordinated crew, finished on schedule. We work around your hours.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Multi-Location Programs',
    blurb:
      'One relationship, one vendor, consistent results across all your sites. Built for franchise owners, restaurant groups, and retail chains.',
    icon: '📍',
    featured: false
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. A coordinated crew that shows up together, works together, and finishes when we said. No single rooms.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors, soffits. Prep that actually lasts. Full home only — we are not a patch-and-go crew.',
    icon: '🎨',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters on a big job simultaneously. A 4,000 sq ft repaint does not have to drag on for a month.',
    icon: '📐',
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
            Commercial spaces. Full home repaints. Done right, done on time.
          </h2>
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
              <h3 className={`font-display text-xl font-semibold ${
                s.featured ? 'text-cream' : ''
              }`}>{s.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${
                s.featured ? 'text-cream/80' : 'text-ink/70'
              }`}>
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/50">
          We do not take single rooms, accent walls, touch-ups, or handyman work. Full projects only — $3,500 minimum.
        </p>
      </div>
    </section>
  );
}
