import Link from 'next/link';
import Footer from '../../components/Footer';
import { colors } from '../../lib/colors';

const SITE_URL = 'https://alvarezpainters.com';

export const metadata = {
  title: 'Hue Roads: The Hampton Roads Color Report | Alvarez Painters',
  description:
    'Hue Roads is the Hampton Roads color report from Alvarez Painters: the colors worth living with, how they feel, where to use them, and how to choose early.',
  alternates: { canonical: `${SITE_URL}/colors` }
};

export default function ColorsIndex() {
  return (
    <main className="bg-cream min-h-screen">
      <header className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold">
          Alvarez <span className="text-brand">Painters</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink/60">
          <Link href="/blog" className="hover:text-ink">Blog</Link>
          <a href="tel:+17577196269" className="text-brand hover:text-brand-dark font-medium">(757) 719-6269</a>
        </nav>
      </header>
      <section className="container-page pt-8 pb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-ink/50">The Hampton Roads Color Report</div>
        <h1 className="font-display text-5xl font-semibold mt-3">Hue Roads</h1>
        <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
          The colors worth living with in Hampton Roads homes, what they feel like, and how to choose
          one early so the job is done right the first time. By Alvarez Painters.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {colors.map((c) => (
            <Link key={c.slug} href={`/colors/${c.slug}`} className="group">
              <img src={c.cover} alt={`Hue Roads ${c.issue}: ${c.name} ${c.code}`} className="w-full shadow-md group-hover:shadow-xl transition" loading="lazy" />
              <div className="mt-3 text-xs uppercase tracking-wider text-ink/50">{c.issue} · {c.tag}</div>
              <div className="font-display text-xl font-semibold mt-1">{c.name} <span className="text-ink/40">{c.code}</span></div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
