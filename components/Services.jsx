const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail spaces, medical suites, multi-location programs. We coordinate the crew and work around your hours so your business keeps running.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Homes going on the market. We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Complete homes only — no single rooms, no accent walls. A coordinated crew that leaves your space looking like it got new walls, not a touch-up.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors, fences. Proper surface prep first — because a paint job is only as good as what it sticks to.',
    icon: '🏘',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'We put multiple painters on the job simultaneously. A 4,000 sq ft repaint does not drag on for a month. Detailed scope, daily progress, done when we said.',
    icon: '📐',
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
            Full projects. Commercial first. No small jobs.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We take complete commercial and residential paint projects — not accent walls, single rooms, or touch-ups. If you have a real scope, we are the right crew.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow ${
                s.featured
                  ? 'bg-brand text-white border-brand col-span-full lg:col-span-1'
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
      </div>
    </section>
  );
}
