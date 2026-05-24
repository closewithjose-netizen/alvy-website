const offers = [
  {
    tag: 'Featured',
    title: 'PCS Move-In Refresh — Military Families',
    blurb:
      "You just got orders. The house needs to be livable by your report date. We've moved a few of you in ourselves — fixed packages, 7-14 day turn, photo documentation. Built around your timeline, not ours.",
    tiers: [
      'Essentials — interior touch-up, neutral repaint of main rooms + bedrooms, 7-day turn',
      'Full Refresh — full interior + exterior touch-up + trim, 10-day turn',
      'Premium — full interior + full exterior + cabinet refresh, 14-day turn'
    ],
    cta: 'Tell Alvy you’re PCSing in the chat above'
  },
  {
    tag: 'For Realtors & Sellers',
    title: 'Pre-Listing Paint Refresh',
    blurb:
      "Days-on-market is real money. Neutral interior + exterior touch-up + trim, scoped in 48 hours, on the wall in a week. Jose is a licensed VA Realtor too — he knows what your listing photos need and what your buyers will look at twice."
  },
  {
    tag: 'For Property Managers',
    title: 'Turnover Paint Program',
    blurb:
      'Fixed room-by-room pricing. 24-48 hour estimates. Photo before/after. Owner-friendly invoicing. Already trusted by ABBITT Realty. Try us on one unit — no long-term commitment.'
  },
  {
    tag: 'For Older Homes',
    title: 'Lead-Safe Historic Repaint',
    blurb:
      'Hilton Village. North End / Huntington Heights. Olde Wythe. Your historic home deserves more than rolled-on latex. EPA RRP certified, original detail respected, lead-safe documented.'
  },
  {
    tag: 'Cabinets',
    title: 'Cabinet Refinishing',
    blurb:
      'Yellowed cabinets are usually humidity + grease + the wrong paint. We strip, prep, and spray-finish. Done right, once.'
  }
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 sm:py-28 border-t border-ink/5">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="pill">What we build for</span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-4 leading-tight">
            Five jobs we do better than anyone else on the Peninsula.
          </h2>
        </div>

        {/* Featured PCS card */}
        <article className="rounded-3xl bg-ink text-cream p-8 sm:p-10 mb-6 shadow-2xl shadow-ink/20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider mb-4">
            <span className="rounded-full bg-brand text-white px-2.5 py-1">
              {offers[0].tag}
            </span>
            <span className="opacity-60">Most-requested package</span>
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
            Inspection-grade prep. Documented. Bilingual crew. Free estimate within 24 hours.
          </p>
          <a
            href="#chat"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-brand hover:text-white transition-colors"
          >
            Start a chat — Jose answers personally →
          </a>
        </article>

        {/* Other offers in a 2-column grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {offers.slice(1).map((o) => (
            <article
              key={o.title}
              className="rounded-3xl bg-white border border-ink/5 p-7 hover:shadow-xl hover:shadow-ink/5 transition-shadow"
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
          Every job starts with a <strong className="text-ink">free estimate</strong>{' '}
          — usually within 24 hours.{' '}
          <a href="#chat" className="text-brand underline underline-offset-4 hover:text-brand-dark">
            Start a chat
          </a>{' '}
          and Jose follows up personally.
        </p>
      </div>
    </section>
  );
}
