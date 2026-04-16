import Link from 'next/link';

export default function ServicePage({ eyebrow, title, lede, heroBg, intro, services, splitTitle, splitText, splitImg, ctaTitle, ctaText }) {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{lede}</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 860, textAlign: 'center' }}>
          <div className="section-eyebrow">Practice Overview</div>
          <h2 style={{ marginBottom: 28 }}>{intro.heading}</h2>
          <p style={{ fontSize: 18, color: '#5a5a5a', lineHeight: 1.8 }}>{intro.body}</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Capabilities</div>
          <h2 style={{ marginBottom: 50 }}>What we deliver.</h2>
          <div className="service-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card" id={s.id}>
                <div className="service-card-num">0{i+1} / {String(services.length).padStart(2,'0')}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner split">
          <div className="split-image" style={{ backgroundImage: `url(${splitImg})` }} />
          <div>
            <div className="section-eyebrow">Our Approach</div>
            <h2>{splitTitle}</h2>
            <p style={{ marginTop: 20 }}>{splitText}</p>
            <Link href="/contact" className="btn-primary" style={{background:'var(--ark-black)',color:'var(--ark-ivory)', marginTop: 30}}>Start a Conversation</Link>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <div className="section-eyebrow">Engage With Us</div>
          <h2 style={{ marginBottom: 24 }}>{ctaTitle}</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>{ctaText}</p>
          <Link href="/contact" className="btn-primary">Request a Consultation</Link>
        </div>
      </section>
    </>
  );
}
