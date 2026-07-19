import Link from "next/link";

export const metadata = {
  title: "Music — ARK Platforms",
  description:
    "ARK Records distributes your music to every major platform and pays you 80% of the royalties. You keep your masters. We handle the rest.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2400&q=80";

const heroBadges = ["Distribution", "Playlisting", "Rights", "Sync", "Analytics"];
const platforms = ["Spotify", "Apple Music", "YouTube Music", "Amazon Music", "Tidal", "Deezer", "TikTok", "Instagram", "Pandora", "Beatport"];

const stats = [
  { num: "80", suffix: "%", label: "Royalties to You" },
  { num: "150", suffix: "+", label: "Platforms & Stores" },
  { num: "48", suffix: "h", label: "Time to Release" },
  { num: "0", suffix: "", label: "Rights We Keep" },
];

const capabilities = [
  { t: "Global Distribution", d: "Your release on Spotify, Apple Music, YouTube, TikTok, and 150+ stores worldwide — one upload.", icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" strokeWidth="1.4" /> },
  { t: "Playlist & Marketing", d: "Editorial and independent playlist pitching, plus release campaigns that actually reach listeners.", icon: <path d="M9 18V5l12-2v13M9 13l12-2M6 21a3 3 0 100-6 3 3 0 000 6zM18 19a3 3 0 100-6 3 3 0 000 6z" strokeWidth="1.5" /> },
  { t: "Rights & Publishing", d: "We register your works and collect mechanical, performance, and neighbouring royalties globally.", icon: <path d="M4 4h11l5 5v11H4zM15 4v5h5M8 13h8M8 17h8" strokeWidth="1.6" /> },
  { t: "Sync Licensing", d: "We pitch your catalogue for film, TV, advertising, and games — new revenue beyond streaming.", icon: <path d="M4 4h16v12H4zM9 20h6M12 16v4M8 10l4-2v5" strokeWidth="1.6" /> },
  { t: "Analytics & Payouts", d: "A clear dashboard for streams, audience, and earnings — with fast, transparent monthly payouts.", icon: <path d="M3 3v18h18M7 15l3-4 3 3 5-7" strokeWidth="1.7" /> },
  { t: "Artist Support", d: "Real people who answer. Release strategy, metadata, and problem-solving from a team who cares.", icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" strokeWidth="1.6" /> },
];

const releaseSteps = [
  { t: "Submit", d: "Upload your masters and artwork, set your release date, and enter your credits." },
  { t: "Review", d: "Our team checks quality and metadata, then registers your rights and splits." },
  { t: "Distribute", d: "We deliver to 150+ platforms and pitch for playlists ahead of release day." },
  { t: "Get Paid", d: "Track streams and earnings live — and receive 80% of royalties every month." },
];

const deals = [
  { tag: "Independent", name: "Single Release", price: "80 / 20 split", desc: "Get one track to every platform, keep your masters.", items: ["150+ stores worldwide", "You keep 80% of royalties", "Keep your masters", "Streaming analytics"], featured: false },
  { tag: "Most Popular", name: "Label Services", price: "80 / 20 split", desc: "Full-service release with marketing and playlist pitching.", items: ["Everything in Single", "Playlist & press pitching", "Release campaign", "Priority artist support"], featured: true },
  { tag: "Catalogue", name: "Publishing & Sync", price: "custom split", desc: "Global royalty collection plus sync licensing for your catalogue.", items: ["Worldwide rights admin", "Mechanical & performance", "Sync pitching", "Dedicated manager"], featured: false },
];

const faqs = [
  { q: "Do I keep my masters and rights?", a: "Always. You own 100% of your masters and copyrights. We are a distributor and label-services partner, not a rights grab — you can leave and take your catalogue with you." },
  { q: "How does the 80/20 split work?", a: "You keep 80% of the net royalties your music earns across all platforms; ARK retains 20% to fund distribution, marketing, rights collection, and support. No hidden fees." },
  { q: "How fast will my music go live?", a: "Most releases are delivered within 48 hours of approval. For playlist consideration we recommend submitting 3–4 weeks before your release date." },
  { q: "When and how do I get paid?", a: "Monthly. Earnings accrue on your dashboard and are paid out to your account each month once you pass the minimum threshold, with a full statement." },
  { q: "What do you need from me to release?", a: "Mastered audio (WAV), cover art (3000×3000), track metadata, songwriter splits, and your artist profile. Our team helps you get any of it right." },
];

export default function Music() {
  return (
    <>
      <section className="page-hero" style={{ height: "84vh", minHeight: 560 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-content" data-parallax="-0.08">
          <div className="hero-eyebrow">ARK Records — Music Practice</div>
          <h1>Your music. Your masters. <br /><span className="gold-accent">80% of the royalties.</span></h1>
          <p>ARK Records distributes your music to every major platform and pays you 80% of what it earns. You keep your rights. We handle distribution, marketing, and the paperwork.</p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>Submit Your Music</Link>
            <Link href="#deal" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>See the Deal</Link>
          </div>
          <div className="sw-hero-badges">{heroBadges.map((b) => <span key={b} className="sw-badge"><span className="dot" />{b}</span>)}</div>
        </div>
      </section>

      <div className="tech-marquee"><div className="marquee"><div className="marquee-track">{[...platforms, ...platforms].map((t, i) => <span key={i} className="tech-item"><span className="tk-dot" />{t}</span>)}</div></div></div>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="section-eyebrow" style={{ margin: "0 auto 24px", display: "inline-block" }}>The Label</div>
          <h2 style={{ marginBottom: 28 }}>A label that works for the artist.</h2>
          <p style={{ fontSize: 19, color: "var(--ark-muted)", lineHeight: 1.8, fontWeight: 300 }}>
            Traditional labels take the majority and keep your masters. We flipped
            it. Upload your music, we get it everywhere and market it — and you
            keep 80% of the royalties and 100% of your rights. Always.
          </p>
        </div>
      </section>

      <section className="section dark reveal" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="section-inner"><div className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num" data-count={s.num} data-suffix={s.suffix} data-decimals={0}>{s.num}{s.suffix}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div></div>
      </section>

      {/* ROYALTY SPLIT + PLAYER */}
      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner code-split">
          <div>
            <div className="section-eyebrow">The Split</div>
            <h2 style={{ marginBottom: 24 }}>You keep 80%. That&apos;s it.</h2>
            <div className="royalty-grid">
              <div className="royalty-card you">
                <div className="royalty-pct">80%</div>
                <div className="royalty-who">To the Artist</div>
                <div className="royalty-desc">Your share of every stream, download, and sync — paid monthly, with your masters staying yours.</div>
              </div>
              <div className="royalty-card us">
                <div className="royalty-pct">20%</div>
                <div className="royalty-who">To ARK</div>
                <div className="royalty-desc">Covers distribution, marketing, and rights collection. No upfront fees.</div>
              </div>
            </div>
          </div>
          <div className="music-player reveal">
            <div className="mp-cover">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
            </div>
            <div className="mp-title">Midnight Signal</div>
            <div className="mp-artist">Your Name Here</div>
            <div className="mp-progress"><span /></div>
            <div className="mp-times"><span>1:24</span><span>3:18</span></div>
            <div className="mp-controls">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM20 6L9 12l11 6z" /></svg>
              <span className="mp-play"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM4 6l11 6L4 18z" /></svg>
            </div>
            <div className="eq" aria-hidden="true">{Array.from({ length: 10 }).map((_, i) => <span key={i} />)}</div>
          </div>
        </div>
      </section>

      <section className="section reveal" id="capabilities">
        <div className="section-inner">
          <div className="section-eyebrow">What We Do</div>
          <h2 style={{ marginBottom: 56 }}>Everything a label should be.</h2>
          <div className="cap-grid" data-stagger>
            {capabilities.map((c, i) => (
              <div key={c.t} className="cap-card">
                <div className="cap-num">0{i + 1}</div>
                <div className="cap-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg></div>
                <h3>{c.t}</h3><p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">How to Release</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 56 }}>From upload to payout.</h2>
          <div className="steps-flow" data-stagger>
            {releaseSteps.map((s, i) => (
              <div key={s.t} className="step-card"><div className="step-num" style={{ background: "var(--ark-charcoal)" }}>{i + 1}</div><h3 style={{ color: "var(--ark-ivory)" }}>{s.t}</h3><p style={{ color: "rgba(255,255,255,0.55)" }}>{s.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" id="deal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">The Deal</div>
          <h2 style={{ marginBottom: 16 }}>Simple terms, artist-first.</h2>
          <p className="section-lede">No upfront fees on our core plans. You keep your masters on every tier.</p>
          <div className="engage-grid" data-stagger>
            {deals.map((e) => (
              <div key={e.name} className={`engage-card${e.featured ? " featured" : ""}`}>
                <div className="engage-tag">{e.tag}</div><h3>{e.name}</h3><div className="engage-price">{e.price}</div><p>{e.desc}</p>
                <ul className="engage-list">{e.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <Link href="/contact" className="btn-primary" style={e.featured ? { opacity: 1, animation: "none" } : { background: "var(--ark-black)", color: "var(--ark-ivory)", opacity: 1, animation: "none" }}>Submit Music</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner testimonial">
          <div className="section-eyebrow">Artist Perspective</div>
          <blockquote>"I kept my masters, got on real playlists, and actually understood my payouts for the first time. 80% is not a gimmick — it is in the statement every month."</blockquote>
          <cite>— Independent Artist, 2M+ streams</cite>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Frequently Asked</div>
          <h2 style={{ marginBottom: 56 }}>Before you upload.</h2>
          <div className="faq-list">{faqs.map((f, i) => <details key={i} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-black)" }}>
        <div className="section-inner">
          <div className="invest-cta reveal" data-dir="scale">
            <div className="section-eyebrow" style={{ textAlign: "center" }}>Release With ARK</div>
            <h2 style={{ color: "var(--ark-ivory)", marginBottom: 24, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>Ready to release your music?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto 40px", fontSize: 18, fontWeight: 300 }}>Send us your track. We will get it on every platform, pitch it, and pay you 80% of what it earns — while you keep your masters.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>Submit Your Music</Link>
              <Link href="/contact" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>Talk to the Label</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
