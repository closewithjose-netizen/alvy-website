const areas = [
  {
    city: 'Newport News',
    blurb:
      "Home base. We paint across Hidenwood, Riverside, Merry Point Estates, Hilton Village, North End / Huntington Heights, Denbigh, Port Warwick, and Kiln Creek — plus the commercial corridors on Jefferson Ave, Warwick Blvd, and the Oyster Point business district.",
    neighborhoods: [
      'Hidenwood',
      'Riverside',
      'Merry Point Estates',
      'Hilton Village',
      'North End / Huntington Heights',
      'Denbigh',
      'Port Warwick',
      'Kiln Creek',
      'Oyster Point'
    ]
  },
  {
    city: 'Hampton · York · Poquoson',
    blurb:
      "Fox Hill, Farmington, Olde Wythe, Wythe, Phoebus, Riverdale, and the waterfront pockets where Hampton's character lives — plus York County and Poquoson. Storm-exposed trim, salt-air siding, and commercial work along Mercury Blvd and Coliseum Drive.",
    neighborhoods: [
      'Fox Hill',
      'Farmington',
      'Olde Wythe',
      'Wythe',
      'Phoebus',
      'Riverdale',
      'York County',
      'Poquoson'
    ]
  },
  {
    city: 'Southside — Norfolk to Suffolk',
    blurb:
      'We crossed the water in 2026 and the calendar filled fast. Full repaints and commercial interiors in Norfolk, Virginia Beach, Chesapeake, Portsmouth, and Suffolk — including recent full-home color transformations in Norfolk. Same standard, same on-time guarantee, both sides of the bridge.',
    neighborhoods: [
      'Norfolk',
      'Virginia Beach',
      'Chesapeake',
      'Portsmouth',
      'Suffolk'
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
          All of Hampton Roads. Both sides of the water.
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
