import Link from "next/link";
import { posts } from "../lib/posts";
import { submitNewsletter } from "../lib/actions";

const HERO_BG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80";

const portfolio = [
  {
    cls: "large",
    label: "Software & Platforms",
    title: "Enterprise-grade systems, engineered with care",
    desc: "Custom software, SaaS, and mobile platforms built for scale, clarity, and longevity.",
    href: "/software",
    bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
  },
  {
    cls: "small",
    label: "UI / UX Design",
    title: "Design as a strategic discipline",
    href: "/design",
    bg: "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    cls: "small",
    label: "Real Estate",
    title: "Properties curated for enduring value",
    href: "/real-estate",
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    cls: "medium",
    label: "Hotels & Hospitality",
    title: "Hospitality with quiet elegance",
    desc: "Boutique properties and hotel technology crafted around the guest.",
    href: "/hotels",
    bg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80",
  },
  {
    cls: "medium",
    label: "Finance & Audits",
    title: "Capital, clarity, compliance",
    desc: "Financial strategy, audits, and reporting for operators and investors.",
    href: "/finance",
    bg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="hero-content">
          <div className="hero-eyebrow">
            ARK Platforms — Established for the Discerning
          </div>
          <h1>
            Engineered Excellence.
            <br />
            Across Every Discipline.
          </h1>
          <p>
            A multidisciplinary studio crafting software, spaces, and strategies
            with a long view. We build what our clients will be proud to own for
            decades, measured by durability, clarity, and impact.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="#portfolio" className="btn-ghost">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section reveal" id="portfolio">
        <div className="section-inner">
          <div className="section-eyebrow">Our Disciplines</div>
          <h2>
            A Collection of Expertise,
            <br />
            Bound by a Single Standard.
          </h2>
          <p className="section-lede">
            From bespoke software architecture to landmark real estate development, 
            each of our practices is led by specialists who share an uncompromising 
            commitment to the craft of building things that last.
          </p>

          <div className="portfolio-grid">
            {portfolio.map((p, i) => (
              <Link href={p.href} key={i} className={`portfolio-card ${p.cls}`}>
                <div
                  className="portfolio-card-bg"
                  style={{ backgroundImage: `url(${p.bg})` }}
                />
                <div className="portfolio-card-overlay" />
                <div className="portfolio-card-content">
                  <div className="portfolio-card-label">{p.label}</div>
                  <h3>{p.title}</h3>
                  {p.desc && <p>{p.desc}</p>}
                  <span className="portfolio-card-more">Explore Discipline</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-eyebrow">Industries</div>
          <h2 style={{ marginBottom: 32 }}>Where our practices compound.</h2>
          <p style={{ maxWidth: 800, margin: "0 auto 64px", color: "var(--ark-muted)", fontSize: 18, fontWeight: 300 }}>
            We operate at the intersection of high-growth technology and stable real assets. 
            By combining these diverse perspectives, we deliver solutions that are 
            technically superior, operationally sound, and financially resilient.
          </p>
        </div>
        <div className="industries">
          {[
            { name: "Hospitality", sub: "Hotels & Resorts" },
            { name: "Real Estate", sub: "Development & Advisory" },
            { name: "Finance", sub: "Family Offices & Funds" },
            { name: "Technology", sub: "SaaS & Infrastructure" },
            { name: "Retail", sub: "Luxury & D2C" },
            { name: "Education", sub: "Executive & Specialist" },
          ].map((i) => (
            <div key={i.name} className="industry">
              <div className="industry-name">{i.name}</div>
              <div className="industry-sub">{i.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner split">
          <div
            className="split-image"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80)",
              borderRadius: '2px'
            }}
          />
          <div>
            <div className="section-eyebrow">The ARK Philosophy</div>
            <h2>Built on principles, delivered with precision.</h2>
            <p>
              Every engagement begins with deep discovery — of the client, the
              context, and the long-term vision. We apply a rigorous methodology 
              across every discipline to ensure consistent excellence.
            </p>
            <ul className="split-list">
              <li>
                <span>Discovery &amp; Insight</span>
                <span>01</span>
              </li>
              <li>
                <span>Architecture &amp; Strategy</span>
                <span>02</span>
              </li>
              <li>
                <span>Craft &amp; Execution</span>
                <span>03</span>
              </li>
              <li>
                <span>Stewardship &amp; Growth</span>
                <span>04</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                background: "var(--ark-black)",
                color: "var(--ark-ivory)",
                marginTop: 20
              }}
            >
              Begin the Conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="stats">
            <div>
              <div className="stat-num">140+</div>
              <div className="stat-label">Engagements Delivered</div>
            </div>
            <div>
              <div className="stat-num">16</div>
              <div className="stat-label">Global Jurisdictions</div>
            </div>
            <div>
              <div className="stat-num">$320M</div>
              <div className="stat-label">Assets Under Advisory</div>
            </div>
            <div>
              <div className="stat-num">98%</div>
              <div className="stat-label">Partner Retention</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark reveal" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-inner">
          <div className="section-eyebrow">The ARK Protocol</div>
          <h2 style={{ marginBottom: 64, color: 'var(--ark-ivory)' }}>Methodical excellence, by design.</h2>
          <div className="process-grid">
            {[
              {
                t: "Discovery",
                d: "We begin by immersing ourselves in your business ecosystem to understand the nuances of the challenge and the long-term objective.",
              },
              {
                t: "Architecture",
                d: "We design the strategic and technical frameworks required for success, articulating every trade-off and advantage in writing.",
              },
              {
                t: "Execution",
                d: "Our partners and senior practitioners build the final solution — whether code, space, or model — to our uncompromising standard.",
              },
              {
                t: "Stewardship",
                d: "We ensure the longevity of the work through comprehensive documentation, knowledge transfer, and optional ongoing advisory.",
              },
            ].map((s, i) => (
              <div key={i} className="process-step">
                <div className="process-step-num">STEP 0{i + 1}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Selected Engagements</div>
          <h2>Case studies in excellence.</h2>
          <p className="section-lede">
            A selection of representative work. Most of our engagements remain 
            strictly confidential to protect the competitive advantage of our clients.
          </p>
          <div className="case-grid">
            <Link href="/software" className="case-card">
              <div className="case-card-label">Software — Enterprise Logistics</div>
              <h3>Modernizing a legacy global dispatch infrastructure</h3>
              <p>
                We replaced a decade-old monolith with a modular Next.js and Rust
                architecture, enabling real-time scaling and reducing operational overhead.
              </p>
              <div className="case-card-stats">
                <div>
                  <div className="num">−65%</div>
                  <div className="lbl">Cloud Costs</div>
                </div>
                <div>
                  <div className="num">0</div>
                  <div className="lbl">Downtime Sec</div>
                </div>
                <div>
                  <div className="num">3.5x</div>
                  <div className="lbl">Throughput</div>
                </div>
              </div>
            </Link>
            <Link href="/hotels" className="case-card">
              <div className="case-card-label">Hospitality — Boutique Luxury</div>
              <h3>From land acquisition to fully-staffed operation</h3>
              <p>
                A comprehensive turnkey project: architectural advisory, brand strategy, 
                technology stack implementation, and operational launch.
              </p>
              <div className="case-card-stats">
                <div>
                  <div className="num">14</div>
                  <div className="lbl">Suites</div>
                </div>
                <div>
                  <div className="num">82%</div>
                  <div className="lbl">Occupancy</div>
                </div>
                <div>
                  <div className="num">Top 10</div>
                  <div className="lbl">Design Awards</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner testimonial">
          <div className="section-eyebrow">Client Perspectives</div>
          <blockquote>
            "ARK Platforms operates with the rigor of an investment bank and the
            imagination of a world-class design studio. They are the only partner we call twice."
          </blockquote>
          <cite>— Chief Operating Officer, Global Hospitality Group</cite>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Frequently Asked</div>
          <h2 style={{ marginBottom: 64 }}>The queries of the discerning.</h2>
          <div className="faq-list">
            {[
              {
                q: "What scale of engagements do you typically accept?",
                a: "We partner with visionary founders, family offices, and boards on initiatives where quality is the primary constraint. Most software and design engagements begin at €60,000, while real estate and financial advisory are scoped individually.",
              },
              {
                q: "How involved are the partners in the day-to-day work?",
                a: "Completely. Every project is led by a partner and staffed exclusively with senior practitioners. We do not use junior pools or account managers; if you work with ARK, you work with experts.",
              },
              {
                q: "Do you operate across different time zones and geographies?",
                a: "Yes. While headquartered in Madrid and Lisbon, our reach is global. We have active engagements across the UK, US, Middle East, and DACH region, traveling whenever the work requires personal presence.",
              },
              {
                q: "How do you handle confidentiality and sensitive information?",
                a: "With absolute discretion. The majority of our work is subject to strict NDAs and never reaches our public portfolio. We respect the privacy of our clients as much as the quality of our craft.",
              },
              {
                q: "How do we determine if there is a strategic alignment?",
                a: "We offer a diagnostic consultation to understand your needs. If we are not the optimal partner for your specific challenge, we will be the first to tell you — and often point you toward those who are.",
              },
            ].map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>

        <div className="section-inner">
          <div className="section-eyebrow">The ARK Journal</div>
          <h2>Notes from the field.</h2>
          <p className="section-lede">
            Essays on technology, architecture, and the pursuit of longevity in business.
          </p>
          <div className="blog-grid">
            {posts.slice(0, 3).map((p) => (
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

      <section
        className="section reveal"
        style={{ background: "var(--ark-ivory)", textAlign: "center" }}
      >
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <div className="section-eyebrow">Collaboration</div>
          <h2 style={{ marginBottom: 32 }}>Tell us what you are building.</h2>
          <p style={{ fontSize: 19, color: "var(--ark-muted)", marginBottom: 48, fontWeight: 300 }}>
            We take a strictly limited number of engagements each year. 
            If your ambition is long-term, we would like to hear it.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              background: "var(--ark-black)",
              color: "var(--ark-ivory)",
            }}
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
