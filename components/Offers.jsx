const offers = [
  {
    tag: 'Featured — Commercial',
    title: 'Commercial Interior Painting',
    blurb:
      'Offices, restaurants, retail, medical and dental spaces. We spec the right product for the environment — antimicrobial coatings for medical, high-durability finishes for high traffic — and we work around your business hours so you never close for paint.',
    tiers: [
      'Offices and professional spaces — scheduled around your team, zero disruption',
      'Restaurants and retail — night and weekend work, open on time every morning',
      'Medical and dental — spec-grade antimicrobial systems, documented product selection',
      'Multi-location programs — one vendor, consistent results across every site'
    ]
  },
  {
    tag: 'For Sellers',
    title: 'Pre-Listing Paint Refresh',
    blurb:
      "Days-on-market is real money. A complete repaint scoped for homes going on the market — we've prepped listings across Hampton Roads and we know what buyers notice and what listing photos reward. Scoped in 48 hours, on the wall in a week."
  },
  {
    tag: 'Residential',
    title: 'Full Interior Repaints',
    blurb:
      'Full homes only — every room, one continuous standard. One color strategy, real prep, clean lines. The kind of repaint that changes how the whole house feels and lives.'
  },
  {
    tag: 'Residential',
    title: 'Full Exterior Repaints',
    blurb:
      'Complete exterior repaints built for Hampton Roads weather — salt air, storm exposure, and sun. Real prep before any paint goes on, and a 3-year no-peel, no-blister warranty behind it.'
  },
  {
    tag: 'Big Houses',
    title: 'Large Homes 3,000+ sq ft',
    blurb:
      "Estate-scale homes need coordination, not a side hustle. We put multiple painters on the job simultaneously so a 4,000 sq ft repaint doesn't drag on for a month. Detailed scope, daily progress, finished on the date we promised."
  }
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 sm:py-28 border-t border-ink/5">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="pill">What we do</span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 leading-tight">
            Full projects. Commercial first. Done on schedule.
          </h2>
        </div>

        {/* Featured commercial card */}
        <article className="rounded-3xl bg-ink text-cream p-8 sm:p-10 mb-6 shadow-2xl shadow-ink/20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(232,84,43,0.6), transparent)' }}
          />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider mb-4">
              <span className="rounded-full bg-brand text-white px-2.5 py-1">
                {offers[0].tag}
              </span>
              <span className="opacity-60">Our primary focus</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-snug">
              {offers[0].title}
            </h3>
            <p className="mt-3 text-cream/80 text-base sm:text-lg leading-relaxed max-w-3xl">
              {offers[0].blurb}
            </p>
            <ul className="mt-6 space-y-2">
              {offers[0].tiers.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-cream/90">
                  <span className="text-brand mt-1">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-cream/60">
              Spec-level product expertise. Owner-supervised. Bilingual. Free estimate within 24 hours.
            </p>
            <a
              href="#estimate"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-brand hover:text-white transition-colors"
            >
              Get a free commercial estimate — Jose answers personally →
            </a>
          </div>
        </article>

        {/* Other 4 offers in 2-col grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {offers.slice(1).map((o) => (
            <article
              key={o.title}
              className="rounded-3xl bg-white border border-ink/5 p-7 hover:border-brand/30 hover:shadow-xl hover:shadow-ink/5 transition-all"
            >
              <span className="text-xs uppercase tracking-wider text-brand-dark font-medium">
                {o.tag}
              </span>
              <h3 className="font-display text-xl font-semibold mt-2 leading-snug">
                {o.title}
              </h3>
              <p className="mt-3 text-ink/70 text-sm leading-relaxed">
                {o.blurb}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/60">
          Full projects only — no accent walls, single rooms, or touch-ups. Every
          job starts with a <strong className="text-ink">free estimate</strong> —
          usually within 24 hours.{' '}
          <a href="#estimate" className="text-brand underline underline-offset-4 hover:text-brand-dark">
            Request yours
          </a>{' '}
          and Jose follows up personally.
        </p>
      </div>
    </section>
  );
}
