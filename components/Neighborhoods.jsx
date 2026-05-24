const areas = [
  {
    city: 'Newport News',
    blurb:
      "We paint homes across Hidenwood, Riverside, Merry Point Estates, Hilton Village, North End / Huntington Heights, Denbigh, Port Warwick, Kiln Creek, and the rest of the 23606 corridor. Mid-century ranches, historic shipyard housing, waterfront colonials — we've worked on all of them. If you're near Newport News Shipbuilding or Joint Base Langley-Eustis, you're in our daily lane.",
    neighborhoods: [
      'Hidenwood',
      'Riverside',
      'Merry Point Estates',
      'Hilton Village',
      'North End / Huntington Heights',
      'Denbigh',
      'Port Warwick',
      'Kiln Creek'
    ]
  },
  {
    city: 'Hampton',
    blurb:
      "We paint homes in Fox Hill, Farmington, Olde Wythe, Wythe, Phoebus, Riverdale, and the older waterfront pockets where Hampton's character lives. Storm-exposed trim, salt-air siding, and the kind of mid-century homes that need real prep — we know how those age.",
    neighborhoods: ['Fox Hill', 'Farmington', 'Olde Wythe', 'Wythe', 'Phoebus', 'Riverdale']
  },
  {
    city: 'Williamsburg',
    blurb:
      "Historic and high-end homes in Kingsmill, Ford's Colony, Governor's Land, Powhatan Secondary, and the colonial-adjacent neighborhoods where craftsmanship still matters. HOA color approvals, brick-and-trim detailing, retiree-owned homes — we handle the conversations and the work.",
    neighborhoods: [
      'Kingsmill',
      "Ford's Colony",
      "Governor's Land",
      'Powhatan Secondary'
    ]
  }
];

export default function Neighborhoods() {
  return (
    <section
      id="neighborhoods"
      className="py-20 sm:py-28 border-t border-ink/5"
    >
      <div className="container-page">
        <span className="pill">Where we work</span>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 max-w-3xl leading-tight">
          Newport News, Hampton & Williamsburg.
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {areas.map((a) => (
            <article
              key={a.city}
              className="rounded-3xl bg-white border border-ink/5 p-7"
            >
              <h3 className="font-display text-2xl font-semibold">{a.city}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                {a.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {a.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="text-[11px] rounded-full bg-brand-soft text-brand-dark px-2.5 py-1"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
