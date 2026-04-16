export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/admin/'] }],
    sitemap: 'https://www.arkplatforms.eu/sitemap.xml',
    host: 'https://www.arkplatforms.eu',
  };
}
