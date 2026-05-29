const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We spec the right product for the environment and coordinate a crew that finishes on schedule.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏷️'
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. A coordinated crew covers every room — walls, trim, ceilings — and leaves the place cleaner than they found it.',
    icon: '🛋️'
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, stucco. Surface prep that actually holds through a Virginia summer. Full homes only.',
    icon: '🏡'
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'We put multiple painters on a big job simultaneously. A 4,000 sq ft repaint does not drag on for a month — detailed scope, daily progress, finished when we said.',
    icon: '📐'
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, office buildings, restaurant exteriors. We work around your hours and keep the job site clean so your business keeps moving.',
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
            Full projects only. Commercial first. Done right.
          </h2>
          <p className="text-ink/60 mt-3 text-sm leading-relaxed">
            We do not take accent walls, single rooms, or touch-ups. If you have a complete commercial space or a full home repaint, we are built for it.
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
