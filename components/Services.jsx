const services = [
  {
    title: 'Interior painting',
    blurb:
      'Walls, trim, ceilings, accent walls. Sharp lines, no roller marks, clean job sites.',
    icon: '🛋'
  },
  {
    title: 'Exterior painting',
    blurb:
      'Siding, doors, fences, stucco refresh. Prep that actually lasts through a winter.',
    icon: '🏡'
  },
  {
    title: 'Cabinet refinishing',
    blurb:
      'Sprayed, smooth, factory-finish kitchens and baths. New look without new boxes.',
    icon: '🪵'
  },
  {
    title: 'Color consultations',
    blurb:
      'Samples on your wall, written palette, 45 minutes. $150, credited if we get the job.',
    icon: '🎨'
  },
  {
    title: 'Unit turns',
    blurb:
      'Property managers — fast, repeatable, paint+patch turnover work between tenants.',
    icon: '🔑'
  },
  {
    title: 'Wallpaper + repairs',
    blurb:
      'Removal, drywall repair, texture matching. The annoying stuff before the fun part.',
    icon: '🩹'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="pill">What we do</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-4">
            We paint, finish, and help you stop second-guessing the color.
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
