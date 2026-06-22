const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail spaces, medical offices, multi-location programs. We coordinate a full crew, work around your business hours, and finish on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Scoped for homes going on the market. Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏷️'
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — no single rooms, no accent walls. A coordinated crew that works together, finishes together, and leaves the place clean.',
    icon: '🛋️'
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors, and everything in between. Prep that lasts. Full homes only.',
    icon: '🏡'
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters on site simultaneously so a 4,000 sq ft repaint does not drag on for a month. Detailed scope, daily progress, finished on the date we promised.',
    icon: '📐'
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, and exterior surfaces for commercial properties. Right product for the substrate, right schedule for your business.',
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
            Full projects. Real crew. Commercial first.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We do not take single rooms, accent walls, or touch-ups. We are a full-project operation — commercial spaces and complete home repaints.
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
