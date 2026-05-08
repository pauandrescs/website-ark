import Link from 'next/link';
import { getBlogPosts } from '../../lib/actions';
import { submitNewsletter } from '../../lib/actions';

export const metadata = { title: 'Journal — ARK Platforms' };

export default async function Blog() {
  const posts = await getBlogPosts();
  
  if (!posts || posts.length === 0) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Initializing Journal assets...</p>
      </div>
    );
  }

  return (
    <>
      <section className="section" style={{ paddingTop: 160 }}>
        <div className="section-inner">
          <div className="section-eyebrow">The ARK Journal</div>
          <h2>Notes from the field.</h2>
          <p className="section-lede">
            Essays on technology, architecture, and the pursuit of longevity in business. 
            Strategic intelligence for the discerning operator.
          </p>

          <div className="blog-grid" style={{ marginTop: 64 }}>
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div
                  className="blog-card-image"
                  style={{ backgroundImage: `url(${p.cover})`, borderRadius: '2px' }}
                />
                <div className="blog-card-meta">
                  {p.category} — {p.readTime}
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Newsletter Section */}
      <section className="section dark reveal" style={{ textAlign: "center" }}>
        <div className="section-inner" style={{ maxWidth: 700 }}>
          <div className="section-eyebrow">The ARK Letter</div>
          <h2 style={{ marginBottom: 24, color: "var(--ark-ivory)" }}>A monthly dispatch on craft.</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 48, fontSize: 18, fontWeight: 300 }}>
            One essay, once a month. No noise, no marketing, just ideas that matter.
          </p>
          <form className="newsletter-form" action={submitNewsletter}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
