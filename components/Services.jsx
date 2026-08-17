const services = [
  {
    title: 'Commercial Interior',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We work around your hours and finish on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — no single rooms. A coordinated crew, owner-supervised from scope to final walkthrough.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors — prep that holds. Full homes only, done the right way.',
    icon: '🏘',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters on site simultaneously. A 4,000 sq ft repaint does not drag on for a month.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior',
    blurb:
      'Storefronts, building facades, commercial properties across Hampton Roads. Spec-grade finishes built to last.',
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
            Commercial painting is our primary focus. We do full residential projects too — no single rooms, no touch-ups.
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
              <h3 className={`font-display text-xl font-semibold ${s.featured ? 'text-white' : ''}`}>
                {s.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${s.featured ? 'text-white/80' : 'text-ink/70'}`}>
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/50">
          We do not take accent walls, single rooms, or handyman work. Full projects only — $3,500 minimum.
        </p>
      </div>
    </section>
  );
}
