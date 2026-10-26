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
      'We have prepped listings across Hampton Roads. We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏷'
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — not single rooms or accent walls. A coordinated crew that moves through your home efficiently and leaves it cleaner than they found it.',
    icon: '🛋'
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, trim, doors, and fences. Prep that actually holds through a Virginia winter. Full homes only.',
    icon: '🏡'
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'We put multiple painters on big jobs simultaneously. A 4,000 sq ft repaint does not drag on for a month. Detailed scope, daily progress, finished on the date we promised.',
    icon: '📐'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="pill">What we do</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4">
            Full projects. Commercial first. Done right.
          </h2>
          <p className="mt-4 text-ink/60 text-sm leading-relaxed">
            We are a full-project operation — no single rooms, no accent walls, no touch-ups.
            Commercial interior is our primary focus. Residential full repaints for the right homes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow ${
                s.featured
                  ? 'bg-brand/5 border-brand/20 sm:col-span-2 lg:col-span-1'
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
      </div>
    </section>
  );
}
