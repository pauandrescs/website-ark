import { posts } from '../lib/posts';

const SITE = 'https://www.arkplatforms.com';

export default function sitemap() {
  const now = new Date();
  const routes = [
    '', '/about', '/contact', '/software', '/design', '/real-estate', '/hotels',
    '/finance', '/audits', '/courses', '/blog', '/contribute', '/authors',
    '/login', '/register',
  ].map(p => ({ url: `${SITE}${p}`, lastModified: now, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.7 }));

  const blog = posts.map(p => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...routes, ...blog];
}
