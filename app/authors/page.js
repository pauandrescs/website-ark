import Link from 'next/link';
import { authors } from '../../lib/authors';
import { posts } from '../../lib/posts';
import JsonLd, { breadcrumbJsonLd } from '../../components/JsonLd';

export const metadata = {
  title: 'Contributors',
  description: 'Meet the ARK Journal contributors — partners, operators, and guest writers who share field notes from their practice.',
  alternates: { canonical: '/authors' },
  openGraph: {
    title: 'ARK Journal Contributors',
    description: 'Partners, operators, and guest writers publishing on ARK Platforms.',
    url: '/authors',
  },
};

export default function Authors() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contributors', path: '/authors' }])} />
      <section className="page-hero" style={{ height: '52vh', minHeight: 380 }}>
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">The ARK Journal</div>
          <h1>Contributors.</h1>
          <p>The ARK Journal is written by our partners, our operators, and a small circle of invited guest authors. Each contributor publishes when they have something to say — not to a content calendar.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Our Writers</div>
          <h2 style={{ marginBottom: 50 }}>The practitioners behind the essays.</h2>
          <div className="authors-grid">
            {authors.map(a => {
              const count = posts.filter(p => p.author === a.name).length;
              return (
                <Link key={a.slug} href={`/authors/${a.slug}`} className="author-card">
                  <div className="author-avatar" style={{ backgroundImage: `url(${a.photo})` }} />
                  <div>
                    <h4>{a.name}</h4>
                    <div className="role">{a.role}</div>
                    <p className="bio">{a.bio}</p>
                    <div className="author-posts-count">{count} essay{count === 1 ? '' : 's'} published</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <div className="section-eyebrow">Write for ARK</div>
          <h2 style={{ marginBottom: 20 }}>We accept a small number of guest contributors each year.</h2>
          <p style={{ color: '#bfbab0', marginBottom: 40 }}>
            If you are a practitioner with something considered to say, we would like to read it.
          </p>
          <Link href="/contribute" className="btn-primary">Apply to Contribute</Link>
        </div>
      </section>
    </>
  );
}
