export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const SITE_URL = 'https://www.arkplatforms.com';

export const breadcrumbJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});

export const articleJsonLd = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  image: [post.cover],
  datePublished: post.date,
  dateModified: post.date,
  author: { '@type': 'Person', name: post.author },
  publisher: {
    '@type': 'Organization',
    name: 'ARK Platforms',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
});

export const serviceJsonLd = (name, description, path) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name,
  description,
  provider: { '@type': 'Organization', name: 'ARK Platforms', url: SITE_URL },
  url: `${SITE_URL}${path}`,
  areaServed: 'Worldwide',
});

export const faqJsonLd = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
