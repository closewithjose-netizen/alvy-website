const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We coordinate the crew, work around your business hours, and finish on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Going on the market? Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — no single rooms, no accent walls. A coordinated crew that moves through the whole house and leaves it finished, not halfway done.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors, soffits. Surface prep done right so the finish lasts through a Virginia summer and beyond.',
    icon: '🏘',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters on-site simultaneously. A 4,000 sq ft repaint does not drag on for a month. Detailed scope up front, daily progress, done on the date we said.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, parking structures. Spec-grade coatings for high-UV and high-traffic environments.',
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
            Commercial painting is our primary focus. Full residential projects are our secondary.
          </h2>
          <p className="text-ink/60 mt-4 text-sm leading-relaxed">
            We do not take small jobs — no accent walls, no single rooms, no touch-ups. Full projects only.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow ${
                s.featured
                  ? 'bg-brand/5 border-brand/20'
                  : 'bg-white border-ink/5'
              }`}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              {s.featured && (
                <span className="inline-block text-xs font-medium text-brand bg-brand/10 rounded-full px-3 py-1 mb-2">
                  Primary focus
                </span>
              )}
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
