import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost } from '../../../lib/posts';

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  return { title: post ? `${post.title} — ARK Journal` : 'Essay — ARK Journal' };
}

function renderBlock(b, i) {
  switch (b.type) {
    case 'h2': return <h2 key={i}>{b.text}</h2>;
    case 'h3': return <h3 key={i}>{b.text}</h3>;
    case 'quote': return <blockquote key={i}>{b.text}</blockquote>;
    case 'ul': return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
    case 'ol': return <ol key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ol>;
    default: return <p key={i}>{b.text}</p>;
  }
}

export default function Article({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = posts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <div className="article-hero">
          <Link href="/blog" className="article-back">← Back to Journal</Link>
          <div className="article-meta">{post.category} — {post.date} — {post.readTime}</div>
          <h1>{post.title}</h1>
          <p className="article-lede">{post.excerpt}</p>
        </div>

        <div className="article-cover" style={{ backgroundImage: `url(${post.cover})` }} />

        <div className="article-body">
          {post.content.map(renderBlock)}
          <p style={{ marginTop: 60, paddingTop: 30, borderTop: '1px solid var(--ark-border)', fontSize: 14, color: '#8a8a8a', letterSpacing: '0.08em' }}>
            Written by {post.author} · ARK Platforms
          </p>
        </div>
      </article>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Continue Reading</div>
          <h2 style={{ marginBottom: 50 }}>More from the Journal.</h2>
          <div className="blog-grid">
            {related.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-image" style={{ backgroundImage: `url(${p.cover})` }} />
                <div className="blog-card-meta">{p.category} — {p.readTime}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
