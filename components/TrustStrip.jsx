const stats = [
  { big: '5.0', small: 'on Google · 25+ reviews' },
  { big: '3-yr', small: 'warranty on every job' },
  { big: '24h', small: 'estimate turnaround' },
  { big: 'On-time', small: 'guaranteed — or we credit you' }
];

export default function TrustStrip() {
  return (
    <section
      id="trust"
      className="bg-white border-y border-ink/5"
    >
      <div className="container-page py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((s) => (
            <div key={s.small} className="text-center sm:text-left">
              <div className="font-display text-2xl sm:text-3xl font-semibold text-brand">
                {s.big}
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-wider text-ink/50 mt-1 leading-tight">
                {s.small}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
