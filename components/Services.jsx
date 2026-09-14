const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail spaces, medical offices, multi-location programs. We work around your business hours and coordinate the crew so the job finishes on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'A complete repaint scoped for homes going on the market. We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — no single rooms, no accent walls. A coordinated crew, owner-supervised from scope to final walkthrough.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, and every surface that faces the weather. Prep that actually lasts. Full home projects only.',
    icon: '☀️',
    featured: false
  },
  {
    title: 'Large Homes — 3,000+ sq ft',
    blurb:
      'Multiple painters on the job simultaneously so a 4,000 sq ft repaint does not drag on for a month. Big jobs are where we shine.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, facades, and building exteriors across Hampton Roads. Spec-grade products selected for the environment and substrate.',
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
            Commercial painting is our primary business. Full residential projects are our secondary one.
          </h2>
          <p className="mt-4 text-ink/60 text-sm leading-relaxed">
            We do not take small jobs — no accent walls, no single rooms, no touch-ups. Full projects, coordinated crew, owner-supervised.
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
