import { colors } from '../lib/colors';

// Homepage feature for the newest Hue Roads issue. Always shows the first
// entry in lib/colors.js, so publishing a new issue = adding it at the top.
export default function FeaturedColor() {
  const c = colors[0];
  if (!c) return null;
  return (
    <section id="hue-roads" className="py-16 sm:py-20 bg-white">
      <div className="container-page grid lg:grid-cols-[minmax(0,420px)_1fr] gap-10 lg:gap-16 items-center">
        <a href={`/colors/${c.slug}`} className="block group">
          <img
            src={c.cover}
            alt={`Hue Roads ${c.issue} cover featuring ${c.name} ${c.code}`}
            className="w-full max-w-sm mx-auto lg:mx-0 shadow-xl shadow-ink/20 group-hover:shadow-2xl transition"
            width={1080}
            height={1350}
            loading="lazy"
          />
        </a>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-ink/50">
            Hue Roads · The Hampton Roads Color Report · {c.issue}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-4 leading-tight">
            {c.name} <span className="text-ink/40">{c.code}</span>
          </h2>
          <p className="font-display italic text-2xl text-ink/80 mt-2">{c.headline}</p>
          <p className="mt-5 text-ink/75 leading-relaxed max-w-xl">{c.dek}</p>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-14 w-14 rounded-xl border border-ink/10" style={{ background: c.hex }} aria-hidden />
            <div className="text-sm text-ink/70">
              <div className="font-semibold text-ink">{c.tag}</div>
              <div>{c.brand} · LRV {c.lrv} · {c.use}</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`/colors/${c.slug}`} className="btn-primary">See the color guide</a>
            <a href="#estimate" className="btn-ghost">Plan my paint job</a>
          </div>
        </div>
      </div>
    </section>
  );
}
