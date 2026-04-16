import Link from 'next/link';
import { posts } from '../../lib/posts';

export const metadata = { title: 'Journal — ARK Platforms' };

export default function Blog() {
  const featured = posts.find(p => p.featured) || posts[0];
  const rest = posts.filter(p => p.slug !== featured.slug);

  return (
    <>
      <section className="page-hero" style={{ height: '50vh', minHeight: 380 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=80)` }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">The ARK Journal</div>
          <h1>Notes from the practice.</h1>
          <p>Essays, field notes, and occasional opinions from our partners and operators — published when we have something to say, and not before.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <Link href={`/blog/${featured.slug}`} className="blog-card blog-featured">
            <div className="blog-card-image" style={{ backgroundImage: `url(${featured.cover})` }} />
            <div>
              <div className="blog-card-meta">{featured.category} — {featured.date} — {featured.readTime}</div>
              <h3>{featured.title}</h3>
              <p style={{ marginTop: 18 }}>{featured.excerpt}</p>
              <span className="portfolio-card-more" style={{ marginTop: 26 }}>Read Essay</span>
            </div>
          </Link>

          <div className="blog-grid">
            {rest.map(p => (
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

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 620 }}>
          <div className="section-eyebrow">The ARK Letter</div>
          <h2 style={{ marginBottom: 18 }}>A quiet monthly dispatch.</h2>
          <p style={{ color: '#bfbab0', marginBottom: 40 }}>
            One essay, once a month, from our partners. No noise, no sales, no tracking links — a letter, in the old sense of the word.
          </p>
          <form className="newsletter-form" action="#" method="post">
            <input type="email" placeholder="you@domain.com" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
