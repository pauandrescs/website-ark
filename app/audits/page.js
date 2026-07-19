import Link from "next/link";

export const metadata = {
  title: "Audits — ARK Platforms",
  description:
    "Independent financial, technical, and operational audits — delivered by senior reviewers who have operated in the industries they examine.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2400&q=80";

const heroBadges = ["Financial", "Technical", "Operational", "Security", "Diligence"];
const marqueeItems = ["Financial Audits", "Technical Audits", "Operational Reviews", "Security & Compliance", "Pre-transaction Diligence", "Post-mortem Reviews", "Controls", "Readiness"];

const stats = [
  { num: "260", suffix: "+", label: "Reviews Delivered" },
  { num: "14", suffix: "d", label: "Avg. Turnaround" },
  { num: "100", suffix: "%", label: "Independent" },
  { num: "31", suffix: "", label: "Sectors Covered" },
];

const capabilities = [
  { t: "Financial Audits", d: "Review of financial statements, controls, and reporting accuracy — clear and defensible.", icon: <path d="M6 2h9l5 5v15H6zM15 2v5h5M9 13h6M9 17h6" strokeWidth="1.6" /> },
  { t: "Technical Audits", d: "Independent review of software architecture, security, and engineering practices.", icon: <path d="M8 7l-4 5 4 5M16 7l4 5-4 5M13 4l-2 16" strokeWidth="1.6" /> },
  { t: "Operational Reviews", d: "Examination of operating models, processes, and efficiency for services and hospitality.", icon: <path d="M4 6h16M4 12h16M4 18h16M8 6v12M16 6v12" strokeWidth="1.6" /> },
  { t: "Security & Compliance", d: "Review of cybersecurity posture, data protection, and regulatory readiness.", icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4zM9 12l2 2 4-4" strokeWidth="1.6" /> },
  { t: "Pre-transaction Diligence", d: "Buyer- and seller-side diligence across financial, technical, and operational dimensions.", icon: <path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5" strokeWidth="1.6" /> },
  { t: "Post-mortem Reviews", d: "Root-cause review of incidents, failed projects, and strategic misses.", icon: <path d="M12 8v5l3 2M12 3a9 9 0 100 18 9 9 0 000-18z" strokeWidth="1.6" /> },
];

const frameworks = [
  { t: "SOC 2", d: "Trust services criteria readiness and control review for Type I and II." },
  { t: "ISO 27001", d: "Information-security management system gap analysis and audit prep." },
  { t: "GDPR", d: "Data-protection posture, records of processing, and DPIA review." },
  { t: "PCI DSS", d: "Payment-security scoping and control assessment for card data." },
];

const principles = [
  { t: "Rigorous", d: "We test evidence, not assertions. Every finding is grounded and reproducible." },
  { t: "Readable", d: "Reports written to be used, not filed — plain language a board can act on." },
  { t: "Actionable", d: "Every finding pairs with a recommendation, a priority, and a path forward." },
  { t: "Independent", d: "No conflicts, no upsell. Our only product is an honest set of eyes." },
];

const process = [
  { t: "Scope", d: "We agree the questions that matter and the standard we will hold the work to." },
  { t: "Examine", d: "We gather and test evidence — books, code, processes — with senior reviewers." },
  { t: "Findings", d: "Each issue is documented with severity, root cause, and business impact." },
  { t: "Report", d: "A prioritized, readable report with recommendations and a remediation path." },
];

const deliverables = [
  "Executive summary for the board",
  "Prioritized findings register",
  "Severity and risk ratings",
  "Root-cause analysis",
  "Concrete remediation plan",
  "Read-out call with your team",
];

const faqs = [
  { q: "Are you truly independent?", a: "Yes. We do not sell the remediation we recommend, and we take no commissions. Our only deliverable is the honest review itself." },
  { q: "How long does an audit take?", a: "A focused review lands in about two weeks; broad, multi-domain diligence takes longer. We scope the timeline before we start." },
  { q: "Do you cover both financial and technical?", a: "Both — plus operational and security. Many engagements are cross-domain, staffed with specialists in each area." },
  { q: "Who reads the final report?", a: "It is written for boards, investors, and executives — plain language up top, with technical detail in appendices for the teams." },
];

export default function Audits() {
  return (
    <>
      <section className="page-hero" style={{ height: "82vh", minHeight: 560 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-content" data-parallax="-0.08">
          <div className="hero-eyebrow">Audit Practice</div>
          <h1>Independent review, <span className="gold-accent">without theatre.</span></h1>
          <p>Financial, technical, and operational audits — delivered by senior reviewers who understand the businesses they examine.</p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>Commission a Review</Link>
            <Link href="#capabilities" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>See Scope</Link>
          </div>
          <div className="sw-hero-badges">{heroBadges.map((b) => <span key={b} className="sw-badge"><span className="dot" />{b}</span>)}</div>
        </div>
      </section>

      <div className="tech-marquee"><div className="marquee"><div className="marquee-track">{[...marqueeItems, ...marqueeItems].map((t, i) => <span key={i} className="tech-item"><span className="tk-dot" />{t}</span>)}</div></div></div>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="section-eyebrow" style={{ margin: "0 auto 24px", display: "inline-block" }}>Practice Overview</div>
          <h2 style={{ marginBottom: 28 }}>An audit is only as good as the people who conduct it.</h2>
          <p style={{ fontSize: 19, color: "var(--ark-muted)", lineHeight: 1.8, fontWeight: 300 }}>
            We offer independent audit and review services for boards, investors,
            and owners who need clarity without bureaucracy. Each engagement is
            staffed with specialists who have operated in the industries they
            review.
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

      <section className="section reveal" id="capabilities" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Capabilities</div>
          <h2 style={{ marginBottom: 56 }}>What we review.</h2>
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
          <div className="section-eyebrow">Frameworks</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 56 }}>Standards we audit against.</h2>
          <div className="gov-grid" data-stagger>
            {frameworks.map((g) => (
              <div key={g.t} className="gov-card">
                <div className="gov-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>{g.t}</h3><p>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Principles</div>
          <h2 style={{ marginBottom: 56 }}>Rigorous. Readable. Actionable.</h2>
          <div className="principle-strip" data-stagger>
            {principles.map((p, i) => (
              <div key={p.t} className="principle-cell"><div className="principle-idx">0{i + 1}</div><h3>{p.t}</h3><p>{p.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">The Protocol</div>
          <h2 style={{ marginBottom: 56 }}>How a review runs.</h2>
          <div className="steps-flow" data-stagger>
            {process.map((s, i) => (
              <div key={s.t} className="step-card"><div className="step-num">{i + 1}</div><h3>{s.t}</h3><p>{s.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner code-split">
          <div>
            <div className="section-eyebrow">The Deliverable</div>
            <h2 style={{ color: "var(--ark-ivory)" }}>A report you will actually use.</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.8, marginTop: 18, fontSize: 16 }}>
              Not a compliance exercise filed and forgotten — a memo from a
              trusted partner. Clear at the top for the board, detailed below for
              the teams, with every finding tied to an action.
            </p>
            <Link href="/contact" className="btn-primary" style={{ marginTop: 30, opacity: 1, animation: "none" }}>Commission a Review</Link>
          </div>
          <div className="ui-kit" style={{ background: "var(--ark-charcoal)", borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="ui-kit-label" style={{ color: "var(--ark-gold)", marginBottom: 18 }}>What you receive</div>
            <ul className="engage-list" style={{ marginBottom: 0 }}>
              {deliverables.map((d) => <li key={d} style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.08)" }}>{d}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Frequently Asked</div>
          <h2 style={{ marginBottom: 56 }}>Before you commission.</h2>
          <div className="faq-list">{faqs.map((f, i) => <details key={i} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-black)" }}>
        <div className="section-inner">
          <div className="invest-cta reveal" data-dir="scale">
            <div className="section-eyebrow" style={{ textAlign: "center" }}>Engage With Us</div>
            <h2 style={{ color: "var(--ark-ivory)", marginBottom: 24, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>Commission a review.</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto 40px", fontSize: 18, fontWeight: 300 }}>Boards, investors, and executives seeking an independent set of eyes are welcome to reach out in confidence.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>Request a Consultation</Link>
              <Link href="/contact" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>Book a Call</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
