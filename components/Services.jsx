const services = [
  {
    title: 'Commercial interior painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We coordinate around your business hours so operations keep moving.',
    icon: '🏢'
  },
  {
    title: 'Pre-listing paint refresh',
    blurb:
      'We know what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏡'
  },
  {
    title: 'Full interior repaints',
    blurb:
      'Full homes only — no single rooms. A coordinated crew, owner-supervised from scope to final walkthrough.',
    icon: '🛋'
  },
  {
    title: 'Full exterior repaints',
    blurb:
      'Complete exterior repaints for homes and commercial buildings. Prep that actually lasts.',
    icon: '🎨'
  },
  {
    title: 'Large homes 3,000+ sq ft',
    blurb:
      'Multiple painters on the job simultaneously. A 4,000 sq ft repaint does not drag on for a month.',
    icon: '📐'
  },
  {
    title: 'Multi-location programs',
    blurb:
      'One relationship, one vendor, consistent results across all your sites. Built for franchise owners, restaurant groups, and retail chains.',
    icon: '🗺️'
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
