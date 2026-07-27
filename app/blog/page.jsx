import Link from 'next/link';
import Footer from '../../components/Footer';
import { posts } from '../../lib/posts';

const SITE_URL = 'https://alvarezpainters.com';

export const metadata = {
  title: 'Painting Advice from the Field | Alvarez Painters Blog',
  description:
    'Straight answers on paint colors, staining, and full repaints from Alvarez Painters — a commercial and residential painting company serving Newport News, Hampton, Norfolk, and Hampton Roads, VA.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Painting Advice from the Field | Alvarez Painters',
    description:
      'Paint colors, staining, and full repaints. Real advice from real jobs in Hampton Roads, VA.',
    type: 'website',
    url: `${SITE_URL}/blog`
  }
};

function formatDate(iso) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <main className="bg-cream min-h-screen">
      <header className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold">
          Alvarez <span className="text-brand">Painters</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink/60">
          <Link href="/" className="hover:text-ink">Home</Link>
          <Link href="/#estimate" className="hover:text-ink">Free estimate</Link>
          <a
            href="tel:+17577196269"
            className="text-brand hover:text-brand-dark font-medium"
          >
            (757) 719-6269
          </a>
        </nav>
      </header>

      <section className="container-page pt-10 pb-20">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-2xl">
          Advice from the field
        </h1>
        <p className="text-ink/60 mt-4 max-w-xl">
          Colors, staining, and full repaints. What we tell clients on real
          walkthroughs in Hampton Roads — written down.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl bg-white border border-ink/10 p-7 hover:border-brand/40 hover:shadow-lg transition-all"
            >
              <div className="text-xs uppercase tracking-wider text-ink/40">
                {formatDate(post.date)} · {post.readingTime}
              </div>
              <h2 className="font-display text-xl font-semibold mt-3 group-hover:text-brand transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-ink/60 mt-3 leading-relaxed">
                {post.description}
              </p>
              <div className="mt-5 text-sm font-medium text-brand">
                Read the article →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
