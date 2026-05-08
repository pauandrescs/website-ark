import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '../../../lib/actions';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ViewCounter from '@/components/blog/ViewCounter';
import { ArrowLeft, Lock, ArrowRight, Share2 } from 'lucide-react';

// Official Brand Logos (SVG)
const Logos = {
  Linkedin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  TwitterX: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  return { title: post ? `${post.title} — ARK Journal` : 'Essay — ARK Journal' };
}

export default async function Article({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const session = await getServerSession(authOptions);
  const allPosts = await getBlogPosts();
  const related = allPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  const isPremium = post.is_premium === 1;
  const isAuthor = session?.user?.email === post.author_email;
  const isAdmin = session?.user?.role === 'admin';
  const showPaywall = isPremium && !isAuthor && !isAdmin;

  const cleanContent = post.content ? post.content.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ') : '';

  return (
    <div style={{ background: '#fff', color: 'var(--ark-black)' }}>
      <ViewCounter slug={slug} />
      
      {/* 1. Technical Reading Progress */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.onscroll = function() {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          const progressBar = document.getElementById("journal-progress");
          if (progressBar) progressBar.style.width = scrolled + "%";
        };
      `}} />
      <div id="journal-progress" style={{ 
        position: 'fixed', top: 0, left: 0, width: 0, height: '2px', 
        background: 'var(--ark-gold)', zIndex: 10000, transition: 'width 0.1s ease-out' 
      }}></div>

      {/* 2. Monumental Header Section */}
      <section className="section" style={{ paddingTop: 180, paddingBottom: 100, borderBottom: '1px solid #eee' }}>
        <div className="section-inner">
          <Link href="/blog" className="btn-ghost" style={{ padding: 0, marginBottom: 60, display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            <ArrowLeft size={16} /> Return to Journal
          </Link>
          
          <div className="reveal">
            <div className="section-eyebrow" style={{ color: 'var(--ark-gold)', fontWeight: 700 }}>
              {post.category} · {post.readTime}
            </div>
            <h1 style={{ 
              fontSize: 'clamp(48px, 10vw, 92px)', 
              lineHeight: 0.95, 
              fontWeight: 700, 
              letterSpacing: '-0.05em', 
              marginBottom: 48,
              textTransform: 'uppercase'
            }}>
              {post.title}
            </h1>
            <p className="section-lede" style={{ maxWidth: 900, fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.3, color: '#444' }}>
              {post.excerpt}
            </p>
            
            <div style={{ marginTop: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #000', paddingTop: 24 }}>
               <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                 Journal Dispatch / {post.date}
               </div>
               <div style={{ display: 'flex', gap: 24, alignItems: 'center', fontSize: 11, fontWeight: 700 }}>
                 <span style={{ color: 'var(--ark-muted)' }}>TELEMETRY: {post.views || 0} VWS</span>
                 <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                   <Share2 size={14} /> SHARE
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Imagery */}
      {post.cover && (
        <section className="section reveal" style={{ padding: 0 }}>
          <div style={{ 
            width: '100%', 
            height: '75vh', 
            backgroundImage: `url(${post.cover})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(20%)'
          }} />
        </section>
      )}

      {/* 4. Content Architecture */}
      <section className="section reveal">
        <div className="section-inner split">
          {/* Sidebar: Author Credentials */}
          <aside style={{ borderRight: '1px solid #eee', paddingRight: 60 }}>
            <div style={{ position: 'sticky', top: 120 }}>
              <div className="section-eyebrow">The Architect</div>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 24, alignItems: 'center', marginBottom: 40 }}>
                <div style={{ width: 80, height: 80, background: 'var(--ark-gold)', borderRadius: '2px', overflow: 'hidden' }}>
                  <img src={post.avatar_url} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{post.author}</div>
                  <div style={{ fontSize: 10, color: 'var(--ark-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Operating Partner</div>
                </div>
              </div>
              
              <div className="section-eyebrow">Strategic Socials</div>
              <div style={{ display: 'flex', gap: 16, marginTop: 20 }}>
                <Link href={post.linkedin_url || "#"} className="btn-ghost" style={{ padding: '10px', background: '#f9f9f9', borderRadius: '2px', display: 'flex' }}><Logos.Linkedin /></Link>
                <Link href={post.twitter_url || "#"} className="btn-ghost" style={{ padding: '10px', background: '#f9f9f9', borderRadius: '2px', display: 'flex' }}><Logos.TwitterX /></Link>
              </div>
            </div>
          </aside>

          {/* Main Discourse Area */}
          <div className="rich-text-content" style={{ 
            fontSize: 21, 
            lineHeight: 1.8, 
            color: '#1a1a1a',
            fontFamily: "'Inter', sans-serif"
          }}>
            {showPaywall ? (
              <div style={{ position: 'relative' }}>
                <div dangerouslySetInnerHTML={{ __html: cleanContent.substring(0, 600) + '...' }} style={{ opacity: 0.1, filter: 'blur(12px)', userSelect: 'none' }} />
                <div style={{ 
                  marginTop: 40, padding: '80px 40px', background: 'var(--ark-black)', color: '#fff', 
                  textAlign: 'center', border: '1px solid var(--ark-gold)', borderRadius: '2px'
                }}>
                  <div style={{ display: 'inline-flex', padding: 24, background: 'rgba(212,175,55,0.1)', borderRadius: '50%', marginBottom: 32 }}>
                    <Lock size={48} color="var(--ark-gold)" strokeWidth={1.5} />
                  </div>
                  <h2 style={{ color: '#fff', border: 'none', fontSize: 32, marginBottom: 16 }}>Restricted Intelligence</h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 450, margin: '0 auto 40px' }}>
                    This research contains high-level strategic data. Full decryption is reserved for the ARK Collective.
                  </p>
                  <button className="btn-primary" style={{ background: 'var(--ark-gold)', color: '#000', padding: '20px 48px', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    Acquire Full Dispatch (${post.price || '9.99'})
                  </button>
                  <div style={{ marginTop: 24, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Secured via ARK Protocol.</div>
                </div>
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
            )}
          </div>
        </div>
      </section>

      {/* 5. Integrated Ads Section */}
      <section className="section reveal" style={{ background: '#fcfcfc', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
         <div className="section-inner" style={{ textAlign: 'center' }}>
            <div className="section-eyebrow">Strategic Intelligence Partner</div>
            <div style={{ maxWidth: 800, margin: '40px auto 0', border: '1px dashed #ddd', padding: 40 }}>
              <ins className="adsbygoogle"
                   style={{ display: 'block', width: '100%', height: '250px' }}
                   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                   data-ad-slot="XXXXXXXXXX"></ins>
              <div style={{ fontSize: 9, color: '#ccc', marginTop: 20, letterSpacing: '0.2em' }}>ADVERTISEMENT</div>
            </div>
         </div>
      </section>

      {/* 6. Further Research Grid */}
      <section className="section reveal" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Further Research</div>
          <h2>Essays on business longevity.</h2>
          <div className="blog-grid" style={{ marginTop: 80 }}>
            {related.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-image" style={{ backgroundImage: `url(${p.cover})`, borderRadius: '2px' }} />
                <div className="blog-card-meta">{p.category} — {p.readTime}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, marginTop: 'auto' }}>
                  RESEARCH DISPATCH <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer CTA (Unified) */}
      <section className="section reveal" style={{ background: "var(--ark-black)", textAlign: "center", padding: '120px 24px' }}>
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <div className="section-eyebrow" style={{ color: 'var(--ark-gold)' }}>Collaboration</div>
          <h2 style={{ marginBottom: 32, color: '#fff' }}>Partner with the Collective.</h2>
          <p style={{ fontSize: 20, color: "rgba(255,255,255,0.6)", marginBottom: 48, fontWeight: 300 }}>
            If this research resonates with your long-term vision, we should begin the conversation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: "var(--ark-gold)", color: "#000" }}>
            Request Strategic Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
