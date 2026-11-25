import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../../components/Footer';
import LeadForm from '../../../components/LeadForm';
import { colors, getColor, INSTAGRAM_URL } from '../../../lib/colors';

const SITE_URL = 'https://alvarezpainters.com';

export function generateStaticParams() {
  return colors.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const color = getColor(params.slug);
  if (!color) return {};
  const url = `${SITE_URL}/colors/${color.slug}`;
  const title = `${color.name} ${color.code}: ${color.tag} | Hue Roads by Alvarez Painters`;
  return {
    title,
    description: color.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: color.metaDescription,
      type: 'article',
      url,
      images: [{ url: `${SITE_URL}${color.cover}`, width: 1080, height: 1350 }]
    },
    twitter: { card: 'summary_large_image', title, description: color.metaDescription }
  };
}

function Swatch({ hex, size = 'lg' }) {
  const cls = size === 'lg' ? 'h-40' : 'h-16';
  return <div className={`${cls} w-full rounded-xl border border-ink/10`} style={{ background: hex }} />;
}

export default function ColorPage({ params }) {
  const color = getColor(params.slug);
  if (!color) notFound();

  return (
    <main className="bg-cream min-h-screen">
      <header className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold">
          Alvarez <span className="text-brand">Painters</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink/60">
          <Link href="/colors" className="hover:text-ink">Hue Roads</Link>
          <Link href="/blog" className="hover:text-ink">Blog</Link>
          <a href="tel:+17577196269" className="text-brand hover:text-brand-dark font-medium">
            (757) 719-6269
          </a>
        </nav>
      </header>

      {/* Hero: cover + facts */}
      <section className="container-page pt-6 pb-14 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-ink/50">
            Hue Roads · {color.issue} · The Hampton Roads Color Report
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold mt-4 leading-tight">
            {color.name} <span className="text-ink/40">{color.code}</span>
          </h1>
          <p className="font-display italic text-2xl text-ink/80 mt-3">{color.headline}</p>
          <p className="mt-5 text-ink/75 leading-relaxed max-w-xl">{color.dek}</p>

          <div className="mt-8 grid grid-cols-[160px_1fr] gap-6 items-center max-w-md">
            <div className="bg-white p-2.5 shadow-sm">
              <Swatch hex={color.hex} />
              <div className="font-display text-lg font-semibold mt-2">{color.name}</div>
              <div className="text-xs tracking-wider text-ink/60">{color.code}</div>
            </div>
            <dl className="text-sm space-y-2">
              <div className="flex gap-3"><dt className="w-16 text-ink/50">Brand</dt><dd>{color.brand}</dd></div>
              <div className="flex gap-3"><dt className="w-16 text-ink/50">Hex</dt><dd>{color.hex}</dd></div>
              <div className="flex gap-3"><dt className="w-16 text-ink/50">LRV</dt><dd>{color.lrv}</dd></div>
              <div className="flex gap-3"><dt className="w-16 text-ink/50">Use</dt><dd>{color.use}</dd></div>
              <div className="flex gap-3"><dt className="w-16 text-ink/50">Status</dt><dd>{color.tag}</dd></div>
            </dl>
          </div>
        </div>
        <img
          src={color.cover}
          alt={`Hue Roads ${color.issue} cover featuring ${color.name} ${color.code}`}
          className="w-full max-w-md mx-auto lg:ml-auto shadow-xl"
          width={1080}
          height={1350}
        />
      </section>

      {/* How it feels */}
      <section className="bg-white py-14">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={color.room}
            alt={`A living room with walls in ${color.name}, shown for mood`}
            className="w-full rounded-2xl"
            loading="lazy"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold">How it feels</h2>
            {color.feels.map((t) => (
              <p key={t} className="mt-4 text-ink/75 leading-relaxed">{t}</p>
            ))}
            <p className="mt-4 text-xs text-ink/40">Room image is a mood illustration, not an Alvarez Painters job.</p>
          </div>
        </div>
      </section>

      {/* Where to use it + pairings */}
      <section className="container-page py-14 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-3xl font-semibold">Where to use it</h2>
          <ul className="mt-6 space-y-4">
            {color.rooms.map((r) => (
              <li key={r.room} className="border-l-2 border-sage pl-4">
                <div className="font-semibold">{r.room}</div>
                <div className="text-ink/70 text-sm mt-1">{r.note}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold">What to pair it with</h2>
          <p className="text-sm text-ink/60 mt-2">Coordinating colors listed by {color.brand}.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {color.pairings.map((p) => (
              <div key={p.code} className="bg-white rounded-xl p-3 border border-ink/10">
                <Swatch hex={p.hex} size="sm" />
                <div className="font-semibold mt-2 text-sm">{p.name}</div>
                <div className="text-xs text-ink/50">{p.code}</div>
                <div className="text-xs text-ink/70 mt-2 leading-snug">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test it + plan ahead */}
      <section className="bg-sage-soft py-14">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">Test it before you buy</h2>
            <ol className="mt-6 space-y-3 list-decimal pl-5 text-ink/80">
              {color.test.map((t) => <li key={t}>{t}</li>)}
            </ol>
            <h3 className="font-display text-2xl font-semibold mt-10">Where to get it</h3>
            <p className="mt-3 text-ink/80 leading-relaxed">{color.whereToGet}</p>
          </div>
          <div className="flex flex-col items-center">
            <video
              src={color.video}
              poster={color.videoPoster}
              className="w-full max-w-xs rounded-2xl shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <p className="mt-4 text-center text-ink/80 max-w-xs">
              Planning a paint job? Decide the color early and get it right the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="estimate" className="container-page py-14 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-display text-3xl font-semibold">Thinking about {color.name}?</h2>
          <p className="mt-4 text-ink/75 leading-relaxed">
            Tell us about the room. We help you choose the color and sheen before anything is bought, then
            plan the job so it is done right the first time. Free estimate within 24 hours. Bilingual English and Spanish.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+17577196269" className="btn-primary">(757) 719-6269</a>
            {INSTAGRAM_URL ? (
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn-ghost">
                Follow Hue Roads on Instagram
              </a>
            ) : null}
          </div>
        </div>
        <LeadForm />
      </section>

      <section className="container-page pb-12 text-xs text-ink/50">
        Sources:{' '}
        {color.sources.map((s, i) => (
          <span key={s.url}>
            {i > 0 ? ' · ' : ''}
            <a href={s.url} target="_blank" rel="noopener nofollow" className="underline hover:text-ink">
              {s.label}
            </a>
          </span>
        ))}
        . Screen colors are approximate; always check a physical sample.
      </section>

      <Footer />
    </main>
  );
}
