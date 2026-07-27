import { posts } from '../lib/posts';
import { servicePages } from '../lib/servicePages';

const SITE_URL = 'https://alvarezpainters.com';

export default function sitemap() {
  const blogEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T12:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  const serviceEntries = servicePages.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    ...serviceEntries,
    ...blogEntries
  ];
}
