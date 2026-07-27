import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../../components/Footer';
import { posts, getPost } from '../../../lib/posts';

const SITE_URL = 'https://alvarezpainters.com';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Alvarez Painters`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.date
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description
    }
  };
}

function formatDate(iso) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function Block({ block }) {
  if (block.type === 'h2') {
    return (
      <h2 className="font-display text-2xl font-semibold mt-10 mb-4">
        {block.text}
      </h2>
    );
  }
  if (block.type === 'ul') {
    return (
      <ul className="list-disc pl-6 space-y-2 my-5 text-ink/80 leading-relaxed">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === 'es') {
    return (
      <p className="mt-10 rounded-2xl bg-white border border-ink/10 p-6 text-ink/80 leading-relaxed">
        {block.text}
      </p>
    );
  }
  return <p className="my-5 text-ink/80 leading-relaxed">{block.text}</p>;
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: 'Jose Melendez Alvarez',
      jobTitle: 'Owner, Alvarez Painters'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alvarez Painters',
      url: SITE_URL,
      telephone: '+1-757-719-6269'
    }
  };

  return (
    <main className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <header className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold">
          Alvarez <span className="text-brand">Painters</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink/60">
          <Link href="/blog" className="hover:text-ink">Blog</Link>
          <Link href="/#estimate" className="hover:text-ink">Free estimate</Link>
          <a
            href="tel:+17577196269"
            className="text-brand hover:text-brand-dark font-medium"
          >
            (757) 719-6269
          </a>
        </nav>
      </header>

      <article className="container-page pt-10 pb-16 max-w-3xl">
        <div className="text-xs uppercase tracking-wider text-ink/40">
          {formatDate(post.date)} · {post.readingTime} · Jose Melendez Alvarez
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
          {post.title}
        </h1>
        <div className="mt-8">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-ink text-cream p-8">
          <div className="font-display text-xl font-semibold">
            Thinking about a full repaint or a cabinet color change?
          </div>
          <p className="text-cream/70 mt-2 text-sm leading-relaxed">
            We handle full commercial and residential projects across Hampton
            Roads. Free estimate within 24 hours. Bilingual English and
            Spanish.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#estimate" className="btn-primary">
              Get my free estimate
            </Link>
            <a href="tel:+17577196269" className="btn-secondary !text-cream !border-cream/30 hover:!bg-cream/10">
              (757) 719-6269
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
