import Link from "next/link";

export const metadata = {
  title: "Finance — ARK Platforms",
  description:
    "Financial strategy, modeling, and reporting for operators, family offices, and investors who require both institutional rigor and absolute discretion.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2400&q=80";

const heroBadges = ["Modeling", "Fractional CFO", "Fundraising", "M&A", "Reporting"];
const marqueeItems = ["Financial Modeling", "Fractional CFO", "Fundraising", "M&A Support", "Reporting & Controls", "Treasury", "Tax Strategy", "Valuation"];

const stats = [
  { num: "1.4", prefix: "$", suffix: "B", label: "Capital Advised", dec: 1 },
  { num: "60", suffix: "+", label: "Raises Supported" },
  { num: "100", suffix: "%", label: "Confidential" },
  { num: "48", suffix: "h", label: "Avg. Model Turnaround" },
];

const capabilities = [
  { t: "Financial Modeling", d: "Institutional-grade models for fundraising, acquisitions, and operations — auditable and clear.", icon: <path d="M4 4h16v16H4zM4 9h16M9 9v11M4 14h16" strokeWidth="1.6" /> },
  { t: "Fractional CFO", d: "Embedded CFO leadership for growth-stage companies and operating properties.", icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" strokeWidth="1.6" /> },
  { t: "Fundraising Advisory", d: "Decks, data rooms, and narrative for equity and debt raises that stand up to diligence.", icon: <path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-5h4v5" strokeWidth="1.6" /> },
  { t: "Reporting & Controls", d: "Management reporting, KPI dashboards, and internal control design that scale.", icon: <path d="M3 3v18h18M7 14l3-3 3 3 5-6" strokeWidth="1.7" /> },
  { t: "M&A Support", d: "Buy-side and sell-side support with independent valuation and diligence.", icon: <path d="M8 7L4 11l4 4M16 7l4 4-4 4M14 4l-4 16" strokeWidth="1.6" /> },
  { t: "Treasury & Tax", d: "Cash management and international structuring, in partnership with your counsel.", icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeWidth="1.6" /> },
];

const clients = [
  { tam: "Seed–C", name: "Founders", desc: "Growth-stage companies that need institutional finance without a full-time hire." },
  { tam: "SFO / MFO", name: "Family Offices", desc: "Discreet modeling, reporting, and diligence for private capital and succession." },
  { tam: "Operators", name: "Asset Owners", desc: "Hospitality and real estate operators who need clarity on cash, yield, and risk." },
];

const workMix = [
  { name: "Fractional CFO", pct: 34 },
  { name: "Fundraising Advisory", pct: 26 },
  { name: "M&A & Valuation", pct: 20 },
  { name: "Modeling & Reporting", pct: 20 },
];

const process = [
  { t: "Listen", d: "We start with your objective — a raise, a sale, a restructuring — and the real constraints around it." },
  { t: "Model", d: "We build the numbers: transparent, auditable, and stress-tested against downside." },
  { t: "Advise", d: "We translate the model into a decision, with trade-offs stated plainly in writing." },
  { t: "Execute", d: "We support the process to close — materials, data room, and negotiation." },
];

const engagements = [
  { tag: "Focused", name: "Project", price: "from €12k", desc: "A model, a raise, or a valuation — scoped, delivered, done.", items: ["Defined deliverable", "Senior-led build", "Two revision rounds", "Handover & walkthrough"], featured: false },
  { tag: "Most Common", name: "Fractional CFO", price: "monthly retainer", desc: "Embedded finance leadership on your cap table and in your board deck.", items: ["Reporting & controls", "Board & investor decks", "Cash & runway management", "Fundraise readiness"], featured: true },
  { tag: "Transaction", name: "Deal Advisory", price: "retainer + success", desc: "End-to-end support through a raise, acquisition, or sale.", items: ["Valuation & modeling", "Data room & materials", "Buyer/investor process", "Negotiation support"], featured: false },
];

const faqs = [
  { q: "How confidential is your work?", a: "Absolutely. Most engagements are never disclosed. Sensitive matters stay within a small, trusted circle under NDA." },
  { q: "Who do you typically work with?", a: "Founders from seed through Series C, single- and multi-family offices, and operators of hospitality and real estate assets." },
  { q: "Do you replace our accountant or auditor?", a: "No. We are strategic finance — modeling, advisory, and CFO leadership. We work alongside your accountants, auditors, and counsel." },
  { q: "How fast can you turn around a model?", a: "A focused model typically lands within 48–72 hours; complex transaction models take longer. We agree the timeline upfront." },
];

export default function Finance() {
  return (
    <>
      <section className="page-hero" style={{ height: "82vh", minHeight: 560 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-content" data-parallax="-0.08">
          <div className="hero-eyebrow">Financial Practice</div>
          <h1>Capital, advised with <span className="gold-accent">clarity.</span></h1>
          <p>Financial strategy, modeling, and reporting for operators, family offices, and investors who require both institutional rigor and absolute discretion.</p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>A Confidential Conversation</Link>
            <Link href="#capabilities" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>See Capabilities</Link>
          </div>
          <div className="sw-hero-badges">{heroBadges.map((b) => <span key={b} className="sw-badge"><span className="dot" />{b}</span>)}</div>
        </div>
      </section>

      <div className="tech-marquee"><div className="marquee"><div className="marquee-track">{[...marqueeItems, ...marqueeItems].map((t, i) => <span key={i} className="tech-item"><span className="tk-dot" />{t}</span>)}</div></div></div>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="section-eyebrow" style={{ margin: "0 auto 24px", display: "inline-block" }}>Practice Overview</div>
          <h2 style={{ marginBottom: 28 }}>Numbers tell a story. We make it legible.</h2>
          <p style={{ fontSize: 19, color: "var(--ark-muted)", lineHeight: 1.8, fontWeight: 300 }}>
            Our finance practice serves founders through Series C, family offices,
            and operators of hospitality and real estate assets. We deliver the
            discipline of institutional finance with the pace and intimacy of a
            trusted advisor.
          </p>
        </div>
      </section>

      <section className="section dark reveal" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="section-inner"><div className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num" data-count={s.num} data-prefix={s.prefix || ""} data-suffix={s.suffix} data-decimals={s.dec || 0}>{s.prefix || ""}{s.num}{s.suffix}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div></div>
      </section>

      <section className="section reveal" id="capabilities" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Capabilities</div>
          <h2 style={{ marginBottom: 56 }}>What we deliver.</h2>
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

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner split" style={{ alignItems: "center" }}>
          <div>
            <div className="section-eyebrow">Where We Focus</div>
            <h2>How our engagements break down.</h2>
            <p style={{ fontSize: 16, color: "var(--ark-muted)", fontWeight: 300, lineHeight: 1.7, marginBottom: 12 }}>
              A balanced practice — weighted toward embedded CFO work and
              fundraising, where our judgment compounds over time.
            </p>
          </div>
          <div className="alloc-list">
            {workMix.map((a) => (
              <div key={a.name} className="alloc-row">
                <div className="alloc-head"><span className="alloc-name">{a.name}</span><span className="alloc-pct">{a.pct}%</span></div>
                <div className="alloc-track"><div className="alloc-fill" style={{ "--pct": `${a.pct * 2.6}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Who We Serve</div>
          <h2 style={{ color: "var(--ark-ivory)" }}>Built for private capital.</h2>
          <p className="section-lede">Three kinds of client, one standard of rigor and discretion.</p>
          <div className="market-grid" data-stagger>
            {clients.map((m) => (
              <div key={m.name} className="market-card">
                <div className="mc-tam" style={{ fontSize: 28 }}>{m.tam}</div>
                <div className="mc-name">{m.name}</div>
                <div className="mc-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">The Protocol</div>
          <h2 style={{ marginBottom: 56 }}>How an engagement runs.</h2>
          <div className="steps-flow" data-stagger>
            {process.map((s, i) => (
              <div key={s.t} className="step-card"><div className="step-num">{i + 1}</div><h3>{s.t}</h3><p>{s.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Engagement Models</div>
          <h2 style={{ marginBottom: 16 }}>Ways to work with us.</h2>
          <p className="section-lede">Three ways to bring senior finance into your business.</p>
          <div className="engage-grid" data-stagger>
            {engagements.map((e) => (
              <div key={e.name} className={`engage-card${e.featured ? " featured" : ""}`}>
                <div className="engage-tag">{e.tag}</div><h3>{e.name}</h3><div className="engage-price">{e.price}</div><p>{e.desc}</p>
                <ul className="engage-list">{e.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <Link href="/contact" className="btn-primary" style={e.featured ? { opacity: 1, animation: "none" } : { background: "var(--ark-black)", color: "var(--ark-ivory)", opacity: 1, animation: "none" }}>Enquire</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner testimonial">
          <div className="section-eyebrow">Client Perspective</div>
          <blockquote>"Our model finally told the truth — and closed the round. They think like principals, not consultants, and nothing ever left the room."</blockquote>
          <cite>— CEO, Growth-Stage SaaS</cite>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Frequently Asked</div>
          <h2 style={{ marginBottom: 56 }}>Before we speak.</h2>
          <div className="faq-list">{faqs.map((f, i) => <details key={i} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-black)" }}>
        <div className="section-inner">
          <div className="invest-cta reveal" data-dir="scale">
            <div className="section-eyebrow" style={{ textAlign: "center" }}>Engage With Us</div>
            <h2 style={{ color: "var(--ark-ivory)", marginBottom: 24, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>A confidential conversation.</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto 40px", fontSize: 18, fontWeight: 300 }}>If you are weighing a raise, a sale, or a restructuring, we are pleased to discuss it privately.</p>
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
