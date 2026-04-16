import Link from 'next/link';
import { notFound } from 'next/navigation';
import { authors, getAuthor } from '../../../lib/authors';
import { posts } from '../../../lib/posts';
import JsonLd, { SITE_URL } from '../../../components/JsonLd';

export function generateStaticParams() {
  return authors.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getAuthor(params.slug);
  if (!a) return { title: 'Contributor' };
  return {
    title: `${a.name} — ${a.role}`,
    description: a.bio,
    alternates: { canonical: `/authors/${a.slug}` },
    openGraph: {
      title: `${a.name} — ARK Journal`,
      description: a.bio,
      url: `/authors/${a.slug}`,
      images: [{ url: a.photo, width: 600, height: 600 }],
    },
  };
}

export default function AuthorPage({ params }) {
  const author = getAuthor(params.slug);
  if (!author) notFound();
  const authorPosts = posts.filter(p => p.author === author.name);

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.photo,
    url: `${SITE_URL}/authors/${author.slug}`,
    worksFor: { '@type': 'Organization', name: 'ARK Platforms' },
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <section className="section" style={{ background: 'var(--ark-ivory)', paddingTop: 140 }}>
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 60, alignItems: 'center' }}>
          <div className="team-photo" style={{ backgroundImage: `url(${author.photo})`, aspectRatio: '1/1', borderRadius: '50%' }} />
          <div>
            <Link href="/authors" className="article-back">← All Contributors</Link>
            <div className="section-eyebrow" style={{ marginTop: 18 }}>{author.role}</div>
            <h1 style={{ fontSize: 56, marginBottom: 20, fontWeight: 300 }}>{author.name}</h1>
            <p style={{ fontSize: 18, color: '#5a5a5a', lineHeight: 1.8, maxWidth: 620 }}>{author.bio}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Essays</div>
          <h2 style={{ marginBottom: 50 }}>Published by {author.name.split(' ')[0]}.</h2>
          {authorPosts.length === 0 ? (
            <p style={{ color: '#8a8a8a' }}>No essays published yet.</p>
          ) : (
            <div className="blog-grid">
              {authorPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                  <div className="blog-card-image" style={{ backgroundImage: `url(${p.cover})` }} />
                  <div className="blog-card-meta">{p.category} — {p.readTime}</div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
