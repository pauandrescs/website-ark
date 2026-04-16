import Link from 'next/link';

export const metadata = { title: 'About — ARK Platforms' };

const team = [
  { name: 'Elena Moreau', role: 'Founding Partner — Technology', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80' },
  { name: 'Javier Ruiz', role: 'Partner — Hospitality', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sofia Clements', role: 'Partner — Design', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
  { name: 'Marcus Aden', role: 'Partner — Finance', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
  { name: 'Ana Villar', role: 'Head of Education', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' },
  { name: 'Tomás Iriarte', role: 'Head of Real Estate', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Clara Dupont', role: 'Head of Audits', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80' },
  { name: 'Rafael Stone', role: 'Head of Engineering', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80' },
];

const timeline = [
  { year: '2016', title: 'A studio, in a single room.', body: 'ARK begins as a two-person software practice serving a handful of operating partners in Madrid and Lisbon.' },
  { year: '2018', title: 'Design becomes a practice.', body: 'A dedicated design practice is founded to serve both external clients and our own emerging properties.' },
  { year: '2020', title: 'Our first property opens.', body: 'A 14-key boutique property is delivered in the Algarve, marking our entry into hospitality as operators.' },
  { year: '2022', title: 'Finance and audits formalize.', body: 'What began as informal advisory becomes a standalone practice serving family offices and operating companies.' },
  { year: '2024', title: 'The ARK Journal and courses launch.', body: 'A quiet publishing effort and a small cohort-based education program are opened to the public.' },
  { year: '2026', title: 'Seven practices, one standard.', body: 'Today ARK operates seven practices across three continents, bound by a single commitment to craft.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">About ARK Platforms</div>
          <h1>A studio, a portfolio, a promise.</h1>
          <p>ARK was founded on a simple conviction: that work of genuine quality is still possible, and that a small group of serious practitioners can deliver it across disciplines that are usually kept apart.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 820, textAlign: 'center' }}>
          <div className="section-eyebrow">Our Philosophy</div>
          <h2 style={{ marginBottom: 28 }}>We take on what we can do well, and we refuse everything else.</h2>
          <p style={{ fontSize: 18, color: '#5a5a5a', lineHeight: 1.85 }}>
            The temptation, in a professional services firm, is to accept every engagement that walks in the door. We believe the opposite: that the most valuable thing we can offer our clients is the rigor of our selection. Every engagement ARK accepts is one we have chosen deliberately, staffed personally, and committed to finishing at a standard we can defend.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Our Story</div>
          <h2 style={{ marginBottom: 60 }}>A decade of practice, in six notes.</h2>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-content">
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Partners & Principals</div>
          <h2 style={{ marginBottom: 50 }}>The people you will actually work with.</h2>
          <p className="section-lede">ARK has no junior teams and no client handoffs. Every engagement is staffed by partners and principals with deep practice in the work they are asked to do.</p>
          <div className="team-grid">
            {team.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-photo" style={{ backgroundImage: `url(${m.photo})` }} />
                <h4>{m.name}</h4>
                <div className="team-role">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="stats">
            <div><div className="stat-num">2016</div><div className="stat-label">Founded</div></div>
            <div><div className="stat-num">38</div><div className="stat-label">Practitioners</div></div>
            <div><div className="stat-num">7</div><div className="stat-label">Disciplines</div></div>
            <div><div className="stat-num">3</div><div className="stat-label">Continents</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)', textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 720 }}>
          <div className="section-eyebrow">Work With Us</div>
          <h2 style={{ marginBottom: 24 }}>We take on a small number of engagements each quarter.</h2>
          <p style={{ color: '#5a5a5a', fontSize: 17, marginBottom: 40 }}>
            If you are considering a project that warrants an uncommon level of care, we would be pleased to hear about it.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: 'var(--ark-black)', color: 'var(--ark-ivory)' }}>Begin the Conversation</Link>
        </div>
      </section>
    </>
  );
}
