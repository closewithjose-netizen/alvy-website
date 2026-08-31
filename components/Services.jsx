const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We work around your business hours and coordinate a crew so the job finishes on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week. Full interior or exterior — not a touch-up.',
    icon: '🔑',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. Coordinated crew, owner-supervised start to finish. No single rooms, no accent walls — the whole job done right.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors — full exterior. Prep that lasts. A crew that shows up and finishes on the date we gave you.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'We put multiple painters on big jobs simultaneously. A 4,000 sq ft repaint does not drag on for a month. Detailed scope, daily progress.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, commercial properties across Hampton Roads. Spec-grade products, proper surface prep, on-time finish.',
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
            Commercial-first. Full projects only. Done right.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We are a crew-based operation. No accent walls, no single rooms, no touch-up calls.
            If you have a full commercial space or a full home repaint, we are the right fit.
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
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="text-ink/70 mt-2 text-sm leading-relaxed">
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink/60">
          Not sure if your project qualifies?{' '}
          <a
            href="#estimate"
            className="text-brand underline underline-offset-4 hover:text-brand-dark"
          >
            Request a free estimate
          </a>{' '}
          — Jose will tell you straight.
        </p>
      </div>
    </section>
  );
}
