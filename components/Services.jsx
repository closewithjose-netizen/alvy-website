const services = [
  {
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical spaces, multi-location programs. We spec the right product for each environment and work around your business hours so nothing stops.',
    icon: '🏢',
    featured: true
  },
  {
    title: 'Pre-Listing Paint Refresh',
    blurb:
      'Going on the market? Jose is a licensed VA Realtor — he knows what buyers notice and what listing photos need. Scoped in 48 hours, on the wall in a week.',
    icon: '🏷',
    featured: false
  },
  {
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only. A coordinated crew of 8 painters who show up together, execute together, and finish on the date we promised. No single rooms.',
    icon: '🛋',
    featured: false
  },
  {
    title: 'Full Exterior Repaints',
    blurb:
      'Siding, doors, trim, stucco — prepped right so it lasts. Full home exterior only. We don\'t do fence panels while we\'re at it.',
    icon: '🏡',
    featured: false
  },
  {
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      'Big houses need a real crew, not a side hustle. Multiple painters running simultaneously means a 4,000 sq ft repaint finishes in days, not a month.',
    icon: '📐',
    featured: false
  },
  {
    title: 'Commercial Exterior Painting',
    blurb:
      'Storefronts, building facades, parking structures. Spec-grade products chosen for weather, substrate, and how long you need it to hold.',
    icon: '🏗',
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
            Full projects only. Commercial-first. Done when we said.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-6 hover:shadow-xl hover:shadow-ink/5 transition-shadow ${
                s.featured
                  ? 'bg-brand text-white border-brand col-span-full sm:col-span-2 lg:col-span-1'
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
          We do not take single rooms, accent walls, touch-ups, or handyman work. Full projects only — minimum job size applies.
        </p>
      </div>
    </section>
  );
}
