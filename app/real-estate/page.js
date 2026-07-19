import Link from "next/link";
import WorldMap from "../../components/WorldMap";
import { geo } from "../../lib/worldMapPath";

export const metadata = {
  title: "Real Estate — ARK Platforms",
  description:
    "Acquisition, development, and stewardship of residential, mixed-use, and hospitality real estate — with an emphasis on location, architecture, and long-term value.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80";

const heroBadges = ["Acquisitions", "Development", "Asset Management", "Advisory"];
const marqueeItems = ["Boutique Residential", "Mixed-Use", "Hospitality", "Branded Residences", "Adaptive Reuse", "Commercial", "Resort", "Development"];

const stats = [
  { num: "320", prefix: "$", suffix: "M", label: "Gross Dev. Value" },
  { num: "7.8", suffix: "%", label: "Avg. Stabilized Yield", dec: 1 },
  { num: "42", suffix: "k", label: "Sqm Developed" },
  { num: "9", suffix: "", label: "Markets" },
];

const capabilities = [
  { t: "Acquisitions", d: "Off-market and competitive acquisitions in select primary and resort markets.", icon: <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" strokeWidth="1.6" /> },
  { t: "Development", d: "Ground-up and adaptive-reuse development, architect-led from concept to completion.", icon: <path d="M12 2l9 5v10l-9 5-9-5V7z M12 2v20M3 7l9 5 9-5" strokeWidth="1.5" /> },
  { t: "Asset Management", d: "Operational oversight, capital planning, and reporting to institutional standards.", icon: <path d="M4 20h16M6 20V10M10 20V6M14 20V12M18 20V8" strokeWidth="1.7" /> },
  { t: "Advisory", d: "Independent counsel to families and funds on strategy, disposition, and succession.", icon: <path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5" strokeWidth="1.6" /> },
  { t: "Hospitality Conversions", d: "Repositioning of properties into boutique hotels and branded residences.", icon: <path d="M3 21V8l9-5 9 5v13M3 12h18M8 21v-5h3v5" strokeWidth="1.6" /> },
  { t: "Portfolio Analysis", d: "Data-led review of existing portfolios to surface hidden value and risk.", icon: <path d="M3 3v18h18M7 15l4-4 3 3 5-6" strokeWidth="1.7" /> },
];

const types = [
  { tam: "Core", name: "Boutique Residential", desc: "Design-forward homes in prime and resort locations, held for enduring value." },
  { tam: "Core+", name: "Mixed-Use", desc: "Live-work-stay developments that blend residential, retail, and hospitality income." },
  { tam: "Value-Add", name: "Hospitality Real Estate", desc: "Hotels and branded residences repositioned into premium, cash-flowing assets." },
];

const process = [
  { t: "Source", d: "Off-market origination through relationships built over decades in each market." },
  { t: "Underwrite", d: "Institutional diligence — legal, structural, and financial — before we commit." },
  { t: "Develop", d: "Architect-led design and disciplined project delivery, on brief and on budget." },
  { t: "Steward", d: "Long-hold operation, capital planning, and reporting that protects value." },
];

const work = [
  { cat: "Resort · Residential", title: "Cliffside villas, Costa Brava", bg: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80" },
  { cat: "Mixed-Use", title: "Historic block, Lisboa", bg: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80" },
  { cat: "Hospitality", title: "Boutique hotel conversion", bg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" },
];

const cities = [
  { name: "Madrid", meta: "Residential", lat: 40.4, lon: -3.7 },
  { name: "Costa Brava", meta: "Resort", lat: 41.9, lon: 3.2 },
  { name: "Lisboa", meta: "Mixed-Use", lat: 38.7, lon: -9.1 },
  { name: "Algarve", meta: "Hospitality", lat: 37.0, lon: -8.0 },
  { name: "London", meta: "Advisory", lat: 51.5, lon: -0.1 },
  { name: "Miami", meta: "Branded Residences", lat: 25.8, lon: -80.2 },
];

const presenceMarkers = cities.map((c) => ({ ...geo(c.lat, c.lon), label: c.name }));

const engagements = [
  { tag: "Buy-Side", name: "Acquisition Mandate", price: "success-based", desc: "We source, underwrite, and secure the right asset on your behalf.", items: ["Off-market origination", "Full underwriting", "Negotiation & close", "Financing support"], featured: false },
  { tag: "Most Common", name: "Development Partner", price: "co-invest / fee", desc: "End-to-end delivery of a ground-up or adaptive-reuse project.", items: ["Architect-led design", "Project delivery", "Capital planning", "Lease-up & handover"], featured: true },
  { tag: "Advisory", name: "Portfolio Advisory", price: "from €5k / mo", desc: "Independent counsel on strategy, disposition, and succession.", items: ["Portfolio review", "Value & risk mapping", "Disposition strategy", "Board-ready reporting"], featured: false },
];

const faqs = [
  { q: "What size of asset do you work with?", a: "We are selective by design — a small number of mandates each year, typically from €3M to €80M in value across acquisition, development, and advisory." },
  { q: "Do you co-invest?", a: "On development partnerships, often yes. Aligned capital keeps incentives honest. Terms are scoped per project." },
  { q: "Which markets do you cover?", a: "Primary and resort markets across Europe and the Americas — with boots on the ground in Iberia, London, and Miami." },
  { q: "How do you protect confidentiality?", a: "Most mandates are off-market and under NDA. Discretion is part of how we source and how we operate." },
];

export default function RealEstate() {
  return (
    <>
      <section className="page-hero" style={{ height: "82vh", minHeight: 560 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-content" data-parallax="-0.08">
          <div className="hero-eyebrow">Real Estate Practice</div>
          <h1>Properties curated for <span className="gold-accent">enduring value.</span></h1>
          <p>Acquisition, development, and stewardship of residential, mixed-use, and hospitality real estate — with an emphasis on location, architecture, and the long view.</p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>Explore a Mandate</Link>
            <Link href="#capabilities" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>See Capabilities</Link>
          </div>
          <div className="sw-hero-badges">{heroBadges.map((b) => <span key={b} className="sw-badge"><span className="dot" />{b}</span>)}</div>
        </div>
      </section>

      <div className="tech-marquee"><div className="marquee"><div className="marquee-track">{[...marqueeItems, ...marqueeItems].map((t, i) => <span key={i} className="tech-item"><span className="tk-dot" />{t}</span>)}</div></div></div>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="section-eyebrow" style={{ margin: "0 auto 24px", display: "inline-block" }}>Practice Overview</div>
          <h2 style={{ marginBottom: 28 }}>Real estate is a thirty-year decision.</h2>
          <p style={{ fontSize: 19, color: "var(--ark-muted)", lineHeight: 1.8, fontWeight: 300 }}>
            We source, underwrite, and manage properties with the patience the
            asset class deserves. Our work spans boutique residential, mixed-use
            developments, and hospitality real estate across Europe and the
            Americas.
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
          <h2 style={{ marginBottom: 56 }}>What we do.</h2>
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
          <div className="section-eyebrow">Asset Types</div>
          <h2 style={{ color: "var(--ark-ivory)" }}>Where we create value.</h2>
          <p className="section-lede">Three strategies, one discipline — chosen for durable income and long-term appreciation.</p>
          <div className="market-grid" data-stagger>
            {types.map((m) => (
              <div key={m.name} className="market-card">
                <div className="mc-tam" style={{ fontSize: 30 }}>{m.tam}</div>
                <div className="mc-name">{m.name}</div>
                <div className="mc-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">The Protocol</div>
          <h2 style={{ marginBottom: 56 }}>From origination to stewardship.</h2>
          <div className="steps-flow" data-stagger>
            {process.map((s, i) => (
              <div key={s.t} className="step-card"><div className="step-num">{i + 1}</div><h3>{s.t}</h3><p>{s.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Selected Work</div>
          <h2>Assets we are proud of.</h2>
          <p className="section-lede">A sample of representative projects. Most mandates remain confidential.</p>
          <div className="work-grid" data-stagger>
            {work.map((w) => (
              <div key={w.title} className="work-tile">
                <div className="work-tile-bg" style={{ backgroundImage: `url(${w.bg})` }} />
                <div className="work-tile-ov" />
                <div className="work-tile-txt"><div className="work-tile-cat">{w.cat}</div><h3>{w.title}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Where We Operate</div>
          <h2 style={{ color: "var(--ark-ivory)" }}>Primary and resort markets.</h2>
          <p className="section-lede">Relationships and presence in the markets where we source, build, and operate.</p>
          <div className="presence">
            <div className="presence-map">
              <WorldMap markers={presenceMarkers} />
            </div>
            <div className="presence-cities">
              {cities.map((c) => <div key={c.name} className="presence-city"><div className="pc-name">{c.name}</div><div className="pc-meta">{c.meta}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Engagement Models</div>
          <h2 style={{ marginBottom: 16 }}>Ways to work with us.</h2>
          <p className="section-lede">Three ways to bring our real estate practice to your portfolio.</p>
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
          <blockquote>"They found an asset we would never have sourced ourselves, underwrote it honestly, and delivered the development on brief. Rare discipline in this market."</blockquote>
          <cite>— Principal, Family Office</cite>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Frequently Asked</div>
          <h2 style={{ marginBottom: 56 }}>Before a mandate.</h2>
          <div className="faq-list">{faqs.map((f, i) => <details key={i} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-black)" }}>
        <div className="section-inner">
          <div className="invest-cta reveal" data-dir="scale">
            <div className="section-eyebrow" style={{ textAlign: "center" }}>Engage With Us</div>
            <h2 style={{ color: "var(--ark-ivory)", marginBottom: 24, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>Explore a mandate with us.</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto 40px", fontSize: 18, fontWeight: 300 }}>Whether you are acquiring your first asset or rebalancing a family portfolio, we would be pleased to review it in confidence.</p>
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
