const services = [
  {
    title: 'Commercial Interior',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We work around your business hours and coordinate the crew so the job finishes on schedule.',
    icon: '🏢'
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Scoped for homes going on the market. We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏡'
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — no single rooms. A coordinated crew, sharp lines, clean job sites, finished on the date we said.',
    icon: '🛋'
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, and everything in between. Prep that actually holds through a Hampton Roads winter.',
    icon: '🎨'
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'We put multiple painters on big jobs simultaneously. A 4,000 sq ft repaint does not drag on for a month.',
    icon: '🏠'
  },
  {
    title: 'Commercial Exterior',
    blurb:
      'Storefronts, building facades, and commercial properties across all of Hampton Roads. One vendor, consistent results.',
    icon: '🏗'
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
          <p className="mt-3 text-ink/60 text-sm leading-relaxed">
            We do not take single rooms, accent walls, or touch-ups. Every project is a full scope — commercial or residential — with a coordinated crew and an owner who answers the phone.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-white border border-ink/5 p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow"
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
