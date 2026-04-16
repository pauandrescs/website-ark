import Link from 'next/link';
import { posts } from '../lib/posts';

const HERO_BG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80';

const portfolio = [
  {
    cls: 'large',
    label: 'Software & Platforms',
    title: 'Enterprise-grade systems, engineered with care',
    desc: 'Custom software, SaaS, and mobile platforms built for scale, clarity, and longevity.',
    href: '/software',
    bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80',
  },
  {
    cls: 'small',
    label: 'UI / UX Design',
    title: 'Design as a strategic discipline',
    href: '/design',
    bg: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1400&q=80',
  },
  {
    cls: 'small',
    label: 'Real Estate',
    title: 'Properties curated for enduring value',
    href: '/real-estate',
    bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    cls: 'medium',
    label: 'Hotels & Hospitality',
    title: 'Hospitality with quiet elegance',
    desc: 'Boutique properties and hotel technology crafted around the guest.',
    href: '/hotels',
    bg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80',
  },
  {
    cls: 'medium',
    label: 'Finance & Audits',
    title: 'Capital, clarity, compliance',
    desc: 'Financial strategy, audits, and reporting for operators and investors.',
    href: '/finance',
    bg: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="hero-content">
          <div className="hero-eyebrow">ARK Platforms — Established for the Discerning</div>
          <h1>Engineered Excellence,<br />Across Every Discipline.</h1>
          <p>A multidisciplinary studio crafting software, spaces, and strategies with a long view. We build what our clients will be proud to own for decades, and we measure success by durability, clarity, and the people who rely on it every day.</p>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
          <Link href="#portfolio" className="btn-ghost">Our Work</Link>
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="section-inner">
          <div className="section-eyebrow">Our Portfolio</div>
          <h2>A Collection of Disciplines,<br />Bound by a Single Standard.</h2>
          <p className="section-lede">From bespoke software to landmark real estate, each of our practices is led by specialists who share an uncompromising commitment to craft.</p>

          <div className="portfolio-grid">
            {portfolio.map((p, i) => (
              <Link href={p.href} key={i} className={`portfolio-card ${p.cls}`}>
                <div className="portfolio-card-bg" style={{ backgroundImage: `url(${p.bg})` }} />
                <div className="portfolio-card-overlay" />
                <div className="portfolio-card-content">
                  <div className="portfolio-card-label">{p.label}</div>
                  <h3>{p.title}</h3>
                  {p.desc && <p>{p.desc}</p>}
                  <span className="portfolio-card-more">Discover</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="section-inner" style={{ padding: '80px 40px 0' }}>
          <div className="section-eyebrow">Industries We Serve</div>
          <h2 style={{ marginBottom: 30 }}>Where our practices compound.</h2>
          <p style={{ maxWidth: 720, margin: '0 auto 40px', color: '#5a5a5a' }}>We work at the intersections of software, design, hospitality, finance, and real estate so the ideas we deliver are coherent, enduring, and prepared for what comes next.</p>
        </div>
        <div className="industries">
          {[
            { name: 'Hospitality', sub: 'Hotels & Resorts' },
            { name: 'Real Estate', sub: 'Development & Advisory' },
            { name: 'Finance', sub: 'Family Offices & Funds' },
            { name: 'Technology', sub: 'SaaS & Infrastructure' },
            { name: 'Retail', sub: 'Boutique & D2C' },
            { name: 'Education', sub: 'Cohorts & Corporate' },
          ].map(i => (
            <div key={i.name} className="industry">
              <div className="industry-name">{i.name}</div>
              <div className="industry-sub">{i.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner split">
          <div className="split-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80)' }} />
          <div>
            <div className="section-eyebrow">The ARK Method</div>
            <h2>Built on principles, delivered with precision.</h2>
            <p>Every engagement begins with understanding — of the client, the context, and the long arc of what we're creating together. We then apply a single methodology across every discipline. That consistency is what allows a hotel opening, a software launch, and a financial advisory engagement to feel equally grounded.</p>
            <ul className="split-list">
              <li><span>Discovery &amp; Strategy</span><span>01</span></li>
              <li><span>Architecture &amp; Design</span><span>02</span></li>
              <li><span>Craft &amp; Execution</span><span>03</span></li>
              <li><span>Stewardship &amp; Growth</span><span>04</span></li>
            </ul>
            <Link href="/contact" className="btn-primary" style={{background:'var(--ark-black)',color:'var(--ark-ivory)'}}>Begin the Conversation</Link>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="stats">
            <div><div className="stat-num">120+</div><div className="stat-label">Projects Delivered</div></div>
            <div><div className="stat-num">14</div><div className="stat-label">Countries Served</div></div>
            <div><div className="stat-num">$280M</div><div className="stat-label">Assets Advised</div></div>
            <div><div className="stat-num">97%</div><div className="stat-label">Client Retention</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Selected Work</div>
          <h2 style={{ marginBottom: 20 }}>Case studies, briefly.</h2>
          <p className="section-lede">A selection of public engagements we can discuss. Most of our work remains confidential; what follows is representative of the kinds of systems, properties, and models we deliver when the brief demands thoughtful, long-lived results.</p>
          <div className="case-grid">
            <Link href="/software" className="case-card">
              <div className="case-card-label">Software — Logistics</div>
              <h3>Re-platforming a 12-year-old dispatch system without downtime</h3>
              <p>We replaced a legacy monolith with a modular Next.js and Rust architecture over 14 months, cutting infrastructure cost and enabling three new product lines.</p>
              <div className="case-card-stats">
                <div><div className="num">−62%</div><div className="lbl">Infra cost</div></div>
                <div><div className="num">0</div><div className="lbl">Minutes of downtime</div></div>
                <div><div className="num">3</div><div className="lbl">New product lines</div></div>
              </div>
            </Link>
            <Link href="/hotels" className="case-card">
              <div className="case-card-label">Hospitality — Boutique Hotel</div>
              <h3>Opening a 14-key boutique property from land to first guest</h3>
              <p>End-to-end: acquisition, architectural brief, brand, PMS, guest app, and operating team. Booked to 72% occupancy within six months of opening.</p>
              <div className="case-card-stats">
                <div><div className="num">14</div><div className="lbl">Keys</div></div>
                <div><div className="num">72%</div><div className="lbl">Occupancy (yr 1)</div></div>
                <div><div className="num">18 mo</div><div className="lbl">Land to opening</div></div>
              </div>
            </Link>
            <Link href="/finance" className="case-card">
              <div className="case-card-label">Finance — Family Office</div>
              <h3>Rebuilding a family office's reporting and controls</h3>
              <p>We replaced a spreadsheet-based reporting stack with a single source of truth, cut monthly close time by three weeks, and introduced independent controls.</p>
              <div className="case-card-stats">
                <div><div className="num">−22 days</div><div className="lbl">Monthly close</div></div>
                <div><div className="num">$240M</div><div className="lbl">Under reporting</div></div>
                <div><div className="num">100%</div><div className="lbl">Audit ready</div></div>
              </div>
            </Link>
            <Link href="/design" className="case-card">
              <div className="case-card-label">Design — Fintech Product</div>
              <h3>A redesign that moved activation 2.4×</h3>
              <p>Full re-design of a B2B fintech onboarding flow, paired with rigorous research and a new design system. Shipped in four months with the in-house team.</p>
              <div className="case-card-stats">
                <div><div className="num">2.4×</div><div className="lbl">Activation</div></div>
                <div><div className="num">−38%</div><div className="lbl">Support tickets</div></div>
                <div><div className="num">4 mo</div><div className="lbl">To ship</div></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <div className="section-eyebrow">The ARK Method</div>
          <h2 style={{ marginBottom: 20, color: 'var(--ark-ivory)' }}>Four steps, applied to everything we do.</h2>
          <p className="section-lede" style={{ color: '#bfbab0', marginBottom: 60 }}>The same method governs a software build, a hotel opening, and a financial advisory engagement. The discipline is what makes breadth possible.</p>
          <div className="process-grid">
            {[
              { t: 'Discovery', d: 'We begin by understanding — the business, the constraints, the people, and the long arc of what you are trying to build.' },
              { t: 'Strategy', d: 'We articulate the options, the trade-offs, and our recommendation in writing. You can say no before we build anything.' },
              { t: 'Craft', d: 'We deliver the work itself — code, design, property, model — staffed by partners and executed to our standard.' },
              { t: 'Stewardship', d: 'We hand over with documentation, training, and optional ongoing partnership. The work outlasts the engagement.' },
            ].map((s, i) => (
              <div key={i} className="process-step">
                <div className="process-step-num">0{i + 1} / 04</div>
                <h3 style={{ color: 'var(--ark-ivory)' }}>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" style={{ paddingTop: 40 }}>
        <div className="section-inner testimonial">
          <div className="section-eyebrow">In Their Words</div>
          <blockquote>"ARK Platforms operates with the rigor of an investment bank and the imagination of a design studio. They are the only partner we call twice."</blockquote>
          <cite>— Principal, Private Hospitality Group</cite>
          <p style={{ marginTop: 30, color: '#bfbab0' }}>Our clients value our capacity to move between operational detail and strategic clarity, within the same team.</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">Frequently Asked</div>
          <h2 style={{ marginBottom: 50 }}>The questions we are asked most.</h2>
          <div className="faq-list">
            {[
              { q: 'What kinds of engagements do you take on?', a: 'We work with founders, family offices, boards, and operators on software, design, real estate, hospitality, finance, audits, and education. Engagements typically run from three months to multiple years.' },
              { q: 'How small is "small"? How much of my project will a partner touch?', a: 'Every engagement is led by a partner and staffed with senior practitioners. We do not run junior teams, and we do not hand off after scoping. If we take the work, we do the work.' },
              { q: 'Do you work across geographies?', a: 'Yes. We are based in Madrid and Lisbon with active engagements in the United Kingdom, United States, Germany, Mexico, and the UAE. We travel when the work requires it.' },
              { q: 'What does a typical engagement cost?', a: 'We price in fixed fees or retainers depending on the work. Most software and design engagements begin at €60,000. Real estate, finance, and audit engagements are scoped individually.' },
              { q: 'How do I know if we are a fit?', a: 'We offer a 45-minute consultation at no charge. If we are not the right partner for you, we will tell you so plainly — and often recommend someone who is.' },
              { q: 'Do you sign NDAs? Do you respect confidentiality?', a: 'Yes, and yes. Most of our engagements are never disclosed publicly. Our clients value that discretion, and we are protective of it on their behalf.' },
              { q: 'How long does a typical engagement run?', a: 'Engagements vary by practice, but most of our work spans between three and twelve months. We also support ongoing advisory relationships once the initial scope is complete.' },
            ].map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <div className="section-eyebrow">The ARK Journal</div>
          <h2 style={{ marginBottom: 20 }}>Notes from the practice.</h2>
          <p className="section-lede">Essays, field notes, and occasional opinions from our partners — published when we have something to say. The ARK Journal is a place for ideas that matter to operators, investors, and builders.</p>
          <div className="blog-grid">
            {posts.slice(0, 3).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-image" style={{ backgroundImage: `url(${p.cover})` }} />
                <div className="blog-card-meta">{p.category} — {p.readTime}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 60, textAlign: 'center' }}>
            <Link href="/blog" className="btn-primary" style={{ background: 'var(--ark-black)', color: 'var(--ark-ivory)' }}>Read the Journal</Link>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 620 }}>
          <div className="section-eyebrow">The ARK Letter</div>
          <h2 style={{ marginBottom: 18 }}>A quiet monthly dispatch.</h2>
          <p style={{ color: '#bfbab0', marginBottom: 40 }}>One essay, once a month, from our partners. No noise, no sales, no tracking.</p>
          <form className="newsletter-form" action="#" method="post">
            <input type="email" placeholder="you@domain.com" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)', textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 760 }}>
          <div className="section-eyebrow">An Invitation</div>
          <h2 style={{ marginBottom: 24 }}>Tell us what you're building.</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', marginBottom: 40 }}>
            We take a limited number of engagements each quarter. If your ambition is serious, we would like to hear it.
          </p>
          <Link href="/contact" className="btn-primary" style={{background:'var(--ark-black)',color:'var(--ark-ivory)'}}>Request a Consultation</Link>
        </div>
      </section>
    </>
  );
}
