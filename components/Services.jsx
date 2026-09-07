const services = [
  {
    title: 'Commercial interior painting',
    blurb:
      'Offices, restaurants, retail spaces, medical offices, multi-location programs. We work around your business hours and spec the right product for the environment.',
    icon: '🏢'
  },
  {
    title: 'Pre-listing paint refresh',
    blurb:
      'Complete interior or exterior repaint scoped for homes going on the market. We know what buyers notice and what listing photos need.',
    icon: '🔑'
  },
  {
    title: 'Full interior repaints',
    blurb:
      'Full homes only. Coordinated crew, owner-supervised from scope to final walkthrough. No single rooms, no accent walls.',
    icon: '🛋'
  },
  {
    title: 'Full exterior repaints',
    blurb:
      'Siding, doors, trim, and surface prep that lasts. Full homes only — we do the complete job or we are not the right fit.',
    icon: '🏡'
  },
  {
    title: 'Large homes 3,000+ sq ft',
    blurb:
      'Multiple painters on the job simultaneously so a big repaint finishes on schedule. Detailed scope, daily progress, done when we said.',
    icon: '📐'
  },
  {
    title: 'Commercial exterior painting',
    blurb:
      'Storefronts, building facades, and multi-unit exteriors. Spec-grade coatings matched to the substrate and the environment.',
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
            Full projects. Commercial and residential. Done right.
          </h2>
          <p className="mt-4 text-ink/60 text-sm leading-relaxed">
            We are a full-project operation — not single rooms, accent walls, or patch jobs. Commercial interior is our primary focus. Full home repaints are our residential lane.
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
