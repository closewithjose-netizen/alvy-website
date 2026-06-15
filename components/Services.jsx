const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We work around your business hours and finish on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏠',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. A coordinated crew that moves room to room, finishes clean, and hands you back your house on the date we promised.',
    icon: '🛋️',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors, fences. Proper prep that holds up through a Virginia winter — not just looks good on install day.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Multiple painters working simultaneously so a 4,000 sq ft repaint doesn't drag on for a month. Detailed scope, daily progress.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, multi-unit exteriors. Spec-grade products selected for durability and your local weather.',
    icon: '🏗️',
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
            Full projects. Real crews. No small jobs.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We focus on complete commercial and residential paint projects — not accent walls, not single rooms, not touch-ups. If you have a full space that needs to look right, we're the right fit.
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
              <h3
                className={`font-display text-xl font-semibold ${
                  s.featured ? 'text-cream' : ''
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  s.featured ? 'text-cream/80' : 'text-ink/70'
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
