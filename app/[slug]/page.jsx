import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../components/Footer';
import { servicePages, getServicePage } from '../../lib/servicePages';

const SITE_URL = 'https://alvarezpainters.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const page = getServicePage(params.slug);
  if (!page) return {};
  const url = `${SITE_URL}/${page.slug}`;
  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: 'website',
      url
    }
  };
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
  return <p className="my-5 text-ink/80 leading-relaxed">{block.text}</p>;
}

export default function ServicePage({ params }) {
  const page = getServicePage(params.slug);
  if (!page) notFound();

  const url = `${SITE_URL}/${page.slug}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${page.serviceName} — ${page.areaName}`,
    serviceType: page.serviceName,
    areaServed: page.areaName,
    url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Alvarez Painters',
      telephone: '+1-757-719-6269',
      url: SITE_URL
    }
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: page.h1, item: url }
    ]
  };
  const related = (page.related || [])
    .map((slug) => getServicePage(slug))
    .filter(Boolean);

  return (
    <main className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <header className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold">
          Alvarez <span className="text-brand">Painters</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink/60">
          <Link href="/" className="hover:text-ink">Home</Link>
          <Link href="/blog" className="hover:text-ink">Blog</Link>
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
          Alvarez Painters · {page.areaName}
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold mt-4 leading-tight">
          {page.h1}
        </h1>
        <div className="mt-6">
          {page.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-ink text-cream p-8">
          <div className="font-display text-xl font-semibold">
            Free estimate within 24 hours
          </div>
          <p className="text-cream/70 mt-2 text-sm leading-relaxed">
            Tell us about your space. Jose answers personally. Bilingual English
            and Spanish.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#estimate" className="btn-primary">
              Get my free estimate
            </Link>
            <a
              href="tel:+17577196269"
              className="btn-secondary !text-cream !border-cream/30 hover:!bg-cream/10"
            >
              (757) 719-6269
            </a>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <div className="text-xs uppercase tracking-wider text-ink/40 mb-4">
              Related services
            </div>
            <ul className="space-y-2 text-sm">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="text-brand hover:text-brand-dark underline underline-offset-4"
                  >
                    {r.h1}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-brand hover:text-brand-dark underline underline-offset-4"
                >
                  Painting advice from the field — our blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
}
