import Link from "next/link";
import { posts } from "../lib/posts";
import { submitNewsletter } from "../lib/actions";

const HERO_BG =
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=80";

const portfolio = [
  {
    cls: "large",
    label: "Software & Platforms",
    title: "Recurring-revenue software with enterprise margins",
    desc: "SaaS and infrastructure products with high retention, strong unit economics, and a clear path to scale.",
    href: "/software",
    bg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80",
  },
  {
    cls: "small",
    label: "Hospitality",
    title: "Boutique hotels with premium yields",
    href: "/hotels",
    bg: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    cls: "small",
    label: "Real Estate",
    title: "Asset-backed, income-producing property",
    href: "/real-estate",
    bg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  },
  {
    cls: "medium",
    label: "Finance & Advisory",
    title: "Capital allocation with discipline",
    desc: "Structuring, audits, and reporting that keep every vertical accountable to the same financial standard.",
    href: "/finance",
    bg: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1800&q=80",
  },
  {
    cls: "medium",
    label: "Design & Product",
    title: "Brand and product equity, in-house",
    desc: "A design practice that raises the value of every company we build and every asset we operate.",
    href: "/design",
    bg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=80",
  },
];

const pillars = [
  {
    t: "Diversified by design",
    d: "Cash-generative technology paired with asset-backed real estate and hospitality — uncorrelated revenue that smooths cycles.",
    icon: (
      <path d="M3 3v18h18M7 15l4-4 3 3 5-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: "Operator-led, not passive",
    d: "We build and run the companies ourselves. Senior partners hold the P&L, so incentives are aligned from thesis to exit.",
    icon: (
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: "Compounding, long-hold",
    d: "Profits are recycled across verticals. Each practice makes the others stronger, compounding value over decades — not quarters.",
    icon: (
      <path d="M21 12a9 9 0 11-3-6.7M21 4v5h-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const markets = [
  { tam: "$1.1T", name: "Software & SaaS", desc: "Global enterprise software spend, growing double digits and shifting to recurring models." },
  { tam: "$4.2T", name: "Hospitality", desc: "Worldwide travel and lodging demand, with boutique and experiential segments outpacing the market." },
  { tam: "$3.9T", name: "Real Estate", desc: "Income-producing commercial and residential assets across the jurisdictions we operate in." },
];

const growth = [
  { year: "2021", val: "$41M", h: 26 },
  { year: "2022", val: "$78M", h: 42 },
  { year: "2023", val: "$149M", h: 62 },
  { year: "2024", val: "$236M", h: 82 },
  { year: "2025", val: "$320M", h: 100 },
];

const highlights = [
  { t: "Proven traction", d: "$320M under management and 34% revenue CAGR over three years, built without dilutive raises." },
  { t: "Downside protection", d: "A majority of the portfolio is asset-backed or contracted, limiting exposure in a downturn." },
  { t: "Aligned interests", d: "Partners co-invest in every vertical. We win only when our investors win." },
  { t: "Multiple exit paths", d: "Trade sales, refinancings, and secondary liquidity across five distinct verticals." },
  { t: "Institutional rigor", d: "Audited accounts, quarterly reporting, and a data room ready for diligence at any time." },
  { t: "Repeatable playbook", d: "A standardized build-operate-scale model we have run across 140+ engagements." },
];

const roadmap = [
  { date: "2016 — 2019", t: "Foundation", d: "Bootstrapped the first software and design practices to profitability, establishing the operating model." },
  { date: "2020 — 2022", t: "Diversification", d: "Expanded into real estate and hospitality, adding asset-backed income and reaching $78M under management." },
  { date: "2023 — 2025", t: "Scale", d: "Crossed $320M under management across five verticals and sixteen jurisdictions, entirely partner-funded." },
  { date: "2026 →", t: "Institutional round", d: "Opening a limited allocation to aligned investors to accelerate acquisitions and enter two new markets." },
];

const partners = [
  "Meridian Capital", "Nordvik Family Office", "Atlas Ventures", "Cedar & Stone",
  "Lantern Group", "Halden Partners", "Orvel Trust", "Bramwell & Co.",
];

const ticker = [
  { num: "$320M", lbl: "AUM" },
  { num: "34%", lbl: "Revenue CAGR" },
  { num: "98%", lbl: "Partner Retention" },
  { num: "16", lbl: "Jurisdictions" },
  { num: "5", lbl: "Verticals" },
  { num: "140+", lbl: "Engagements" },
  { num: "21%", lbl: "Avg. Cash Yield" },
  { num: "2.3×", lbl: "Blended MOIC" },
];

const allocation = [
  { name: "Software & Platforms", pct: 32 },
  { name: "Real Estate", pct: 26 },
  { name: "Hospitality", pct: 22 },
  { name: "Finance & Advisory", pct: 12 },
  { name: "Design & Product", pct: 8 },
];

const compareRows = [
  { f: "Diversified across asset classes", ark: "yes", fund: "no", single: "no" },
  { f: "Operator-controlled, not passive", ark: "yes", fund: "partial", single: "no" },
  { f: "Recurring + asset-backed income", ark: "yes", fund: "no", single: "partial" },
  { f: "Multiple, uncorrelated exits", ark: "yes", fund: "partial", single: "no" },
  { f: "Partner co-investment", ark: "yes", fund: "partial", single: "no" },
  { f: "Ongoing yield before exit", ark: "yes", fund: "no", single: "yes" },
];

const cities = [
  { name: "Madrid", meta: "Headquarters" },
  { name: "Lisboa", meta: "Operations" },
  { name: "London", meta: "Capital Markets" },
  { name: "Dubai", meta: "Hospitality" },
  { name: "Zürich", meta: "Advisory" },
  { name: "Austin", meta: "Software" },
];

const investSteps = [
  { t: "Introduction", d: "Request the deck and complete a short suitability review with our team." },
  { t: "Diligence", d: "Access the data room — audited accounts, asset detail, and reporting history." },
  { t: "Commitment", d: "Subscribe through the Luxembourg vehicle with standard, transparent terms." },
  { t: "Stewardship", d: "Receive quarterly reporting, distributions, and direct partner access." },
];

const governance = [
  { t: "Audited accounts", d: "Independently audited financials across every vertical, annually." },
  { t: "Quarterly reporting", d: "Transparent performance and portfolio reporting, on a fixed cadence." },
  { t: "Concentration limits", d: "No single asset or vertical exceeds a defined share of the portfolio." },
  { t: "Aligned incentives", d: "Partners co-invest and are compensated on realized, not paper, returns." },
];

const quotes = [
  { q: "ARK underwrites like an investment bank and operates like a founder. Rare to find both.", by: "Principal, European Family Office" },
  { q: "The diversification is real. Cash yield through the cycle is what kept us allocating.", by: "Managing Director, Private Investor" },
  { q: "Reporting and access are institutional-grade. We always know where our capital sits.", by: "Partner, Multi-Family Office" },
];

const resources = [
  { t: "Investor Deck", d: "A concise overview of the platform, thesis, and current opportunity.", cta: "Request →" },
  { t: "Information Memorandum", d: "Full terms, structure, risk factors, and historical performance.", cta: "Request →" },
  { t: "Quarterly Fact Sheet", d: "The latest portfolio snapshot, AUM, and key operating metrics.", cta: "Download →" },
];

const awards = [
  { year: "2025", txt: "Boutique Platform of the Year" },
  { year: "2024", txt: "Best Diversified Operator" },
  { year: "2024", txt: "Hospitality Design Award" },
  { year: "2023", txt: "Real Assets Excellence" },
  { year: "2023", txt: "Top 10 SaaS Turnaround" },
];

const Cell = ({ v }) =>
  v === "yes" ? <span className="yes">✓</span> : v === "no" ? <span className="no">—</span> : <span style={{ color: "rgba(255,255,255,0.55)" }}>Partial</span>;

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="hero-content" data-parallax="-0.18">
          <div className="hero-eyebrow">
            ARK Platforms — Private Investment Platform
          </div>
          <h1>
            Where Technology <br />
            Meets <span className="gold-accent">Real Assets.</span>
          </h1>
          <p>
            ARK builds and operates companies across software, hospitality, and
            real estate — a diversified platform engineered for durable,
            long-term returns. We are opening a limited allocation to aligned
            investors.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Request Investor Deck
            </Link>
            <Link href="#thesis" className="btn-ghost">
              View the Thesis
            </Link>
          </div>

          <div className="hero-metrics">
            <div className="hero-metric">
              <div className="hm-num">
                $<span>320M</span>
              </div>
              <div className="hm-label">Under Management</div>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <div className="hm-num">
                34<span>%</span>
              </div>
              <div className="hm-label">Revenue CAGR</div>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <div className="hm-num">
                5<span>×</span>
              </div>
              <div className="hm-label">Verticals</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="mouse" />
          <span>Scroll</span>
        </div>
      </section>

      <div className="trust-strip">
        <div className="trust-strip-inner">
          <div className="trust-strip-label">
            Backed by operators, family offices &amp; institutional partners across 16 jurisdictions
          </div>
        </div>
      </div>

      <div className="logo-marquee">
        <div className="marquee">
          <div className="marquee-track">
            {[...partners, ...partners].map((p, i) => (
              <span key={i}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="ticker">
        <div className="marquee">
          <div className="marquee-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="ticker-item">
                <span className="ti-num">{t.num}</span>
                <span className="ti-lbl">{t.lbl}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="section reveal" id="thesis">
        <div className="section-inner">
          <div className="section-eyebrow">The Investment Thesis</div>
          <h2>
            One platform. <br />
            Multiple engines of return.
          </h2>
          <p className="section-lede">
            Most funds are a bet on a single asset class. ARK is a portfolio of
            operating businesses that reinforce one another — combining the
            margins of technology with the stability of real assets.
          </p>
          <div className="pillar-grid" data-stagger>
            {pillars.map((p) => (
              <div key={p.t} className="pillar">
                <div className="pillar-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {p.icon}
                  </svg>
                </div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="stats">
            <div>
              <div className="stat-num" data-count="320" data-prefix="$" data-suffix="M">$320M</div>
              <div className="stat-label">Assets Under Management</div>
            </div>
            <div>
              <div className="stat-num" data-count="34" data-suffix="%">34%</div>
              <div className="stat-label">Revenue CAGR (3yr)</div>
            </div>
            <div>
              <div className="stat-num" data-count="98" data-suffix="%">98%</div>
              <div className="stat-label">Partner Retention</div>
            </div>
            <div>
              <div className="stat-num" data-count="16">16</div>
              <div className="stat-label">Active Jurisdictions</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner split" style={{ alignItems: "center" }}>
          <div>
            <div className="section-eyebrow">Capital Allocation</div>
            <h2>Balanced across the platform.</h2>
            <p style={{ fontSize: 16, color: "var(--ark-muted)", fontWeight: 300, lineHeight: 1.7, marginBottom: 12 }}>
              Capital is spread deliberately — weighted toward cash-generative
              software and asset-backed real estate, with disciplined
              concentration limits on every position.
            </p>
          </div>
          <div className="alloc-list">
            {allocation.map((a) => (
              <div key={a.name} className="alloc-row">
                <div className="alloc-head">
                  <span className="alloc-name">{a.name}</span>
                  <span className="alloc-pct">{a.pct}%</span>
                </div>
                <div className="alloc-track">
                  <div className="alloc-fill" style={{ "--pct": `${a.pct * 2.6}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Portfolio</div>
          <h2>Five verticals, one standard.</h2>
          <p className="section-lede">
            Each practice is a business in its own right — and a compounding
            input to the others. Capital, talent, and data flow across the
            platform to raise returns everywhere.
          </p>
          <div className="portfolio-grid" data-stagger>
            {portfolio.map((p, i) => (
              <Link href={p.href} key={i} className={`portfolio-card ${p.cls}`}>
                <div className="portfolio-card-bg" style={{ backgroundImage: `url(${p.bg})` }} />
                <div className="portfolio-card-overlay" />
                <div className="portfolio-card-content">
                  <div className="portfolio-card-label">{p.label}</div>
                  <h3>{p.title}</h3>
                  {p.desc && <p>{p.desc}</p>}
                  <span className="portfolio-card-more">Explore Vertical</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Market Opportunity</div>
          <h2>We operate in trillion-dollar markets.</h2>
          <p className="section-lede">
            The verticals we compete in are large, growing, and fragmented —
            leaving ample room for a disciplined operator to acquire, improve,
            and scale.
          </p>
          <div className="market-grid" data-stagger>
            {markets.map((m) => (
              <div key={m.name} className="market-card">
                <div className="mc-tam">{m.tam}</div>
                <div className="mc-name">{m.name}</div>
                <div className="mc-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Trajectory</div>
          <h2 style={{ color: "var(--ark-ivory)" }}>
            Assets under management, 2021–2025.
          </h2>
          <p className="section-lede">
            Compound growth funded entirely by reinvested profit and partner
            capital — no dilutive external rounds to date.
          </p>
          <div className="growth-chart reveal">
            {growth.map((g) => (
              <div key={g.year} className="growth-bar">
                <div className="growth-bar-val">{g.val}</div>
                <div className="growth-bar-fill" style={{ height: `${g.h}%` }} />
                <div className="growth-bar-year">{g.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">The Comparison</div>
          <h2 style={{ color: "var(--ark-ivory)" }}>Why a platform beats a single bet.</h2>
          <p className="section-lede">
            The structural advantages of an operator-led, diversified platform
            over a traditional fund or a single-asset investment.
          </p>
          <div className="compare-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th></th>
                  <th className="col-ark">ARK Platform</th>
                  <th>Traditional Fund</th>
                  <th>Single Asset</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.f}>
                    <td>{r.f}</td>
                    <td className="col-ark"><Cell v={r.ark} /></td>
                    <td><Cell v={r.fund} /></td>
                    <td><Cell v={r.single} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner split">
          <div
            className="split-image reveal"
            data-dir="left"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=1800&q=80)",
              borderRadius: "2px",
            }}
          />
          <div>
            <div className="section-eyebrow">How Value Compounds</div>
            <h2>A flywheel, not a fund.</h2>
            <p>
              Cash thrown off by our software and hospitality businesses is
              redeployed into new acquisitions and real assets. Each turn of the
              wheel lowers our cost of capital and widens our moat.
            </p>
            <ul className="split-list">
              <li>
                <span>Acquire &amp; Build</span>
                <span>01</span>
              </li>
              <li>
                <span>Operate &amp; Improve</span>
                <span>02</span>
              </li>
              <li>
                <span>Generate Cash Flow</span>
                <span>03</span>
              </li>
              <li>
                <span>Reinvest &amp; Compound</span>
                <span>04</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ background: "var(--ark-black)", color: "var(--ark-ivory)", marginTop: 20 }}
            >
              See the Model
            </Link>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Why Invest Now</div>
          <h2 style={{ marginBottom: 64 }}>The case for ARK.</h2>
          <div className="highlight-grid" data-stagger>
            {highlights.map((h, i) => (
              <div key={h.t} className="highlight">
                <div className="highlight-num">0{i + 1}</div>
                <h3>{h.t}</h3>
                <p>{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-inner">
          <div className="section-eyebrow">How to Invest</div>
          <h2>Four steps to allocation.</h2>
          <p className="section-lede">
            A clear, unhurried process — designed so you can complete diligence
            with full transparency before committing capital.
          </p>
          <div className="steps-flow" data-stagger>
            {investSteps.map((s, i) => (
              <div key={s.t} className="step-card">
                <div className="step-num">{i + 1}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Global Presence</div>
          <h2 style={{ color: "var(--ark-ivory)" }}>Operating across 16 jurisdictions.</h2>
          <p className="section-lede">
            Boots-on-the-ground presence in the markets where we build, buy, and
            operate — with capital-markets access in the world's key hubs.
          </p>
          <div className="presence">
            <div className="presence-map">
              <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <g stroke="rgba(197,163,93,0.15)" strokeWidth="0.5" fill="none">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 31} x2="400" y2={i * 31} />
                  ))}
                  {Array.from({ length: 13 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 33} y1="0" x2={i * 33} y2="250" />
                  ))}
                </g>
                {[
                  [186, 96], [180, 108], [196, 84], [268, 120], [204, 92], [70, 110],
                ].map(([x, y], i) => (
                  <g key={i}>
                    <circle className="presence-ping" cx={x} cy={y} r="3" style={{ animationDelay: `${i * 0.4}s` }} />
                    <circle className="presence-dot" cx={x} cy={y} r="3" />
                  </g>
                ))}
              </svg>
            </div>
            <div className="presence-cities">
              {cities.map((c) => (
                <div key={c.name} className="presence-city">
                  <div className="pc-name">{c.name}</div>
                  <div className="pc-meta">{c.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Track Record</div>
          <h2>Representative outcomes.</h2>
          <p className="section-lede">
            A selection of realized results. Most engagements remain confidential
            to protect the competitive position of our companies.
          </p>
          <div className="case-grid" data-stagger>
            <Link href="/software" className="case-card">
              <div className="case-card-label">Software — Enterprise Logistics</div>
              <h3>Rebuilt a legacy platform into a recurring-revenue business</h3>
              <p>
                Replaced a decade-old monolith with a modular architecture,
                cutting cost to serve and re-rating the company on higher
                margins.
              </p>
              <div className="case-card-stats">
                <div>
                  <div className="num">−65%</div>
                  <div className="lbl">Cost to Serve</div>
                </div>
                <div>
                  <div className="num">3.5×</div>
                  <div className="lbl">Revenue</div>
                </div>
                <div>
                  <div className="num">4.1×</div>
                  <div className="lbl">Exit Multiple</div>
                </div>
              </div>
            </Link>
            <Link href="/hotels" className="case-card">
              <div className="case-card-label">Hospitality — Boutique Luxury</div>
              <h3>From land acquisition to a cash-flowing asset</h3>
              <p>
                A turnkey development: acquisition, brand, technology, and
                operations — stabilized to premium occupancy and yield.
              </p>
              <div className="case-card-stats">
                <div>
                  <div className="num">82%</div>
                  <div className="lbl">Occupancy</div>
                </div>
                <div>
                  <div className="num">21%</div>
                  <div className="lbl">Cash Yield</div>
                </div>
                <div>
                  <div className="num">2.3×</div>
                  <div className="lbl">Equity MOIC</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Roadmap</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 64 }}>
            Ten years of disciplined growth.
          </h2>
          <div className="roadmap" data-stagger>
            {roadmap.map((r) => (
              <div key={r.date} className="milestone">
                <div className="ms-date">{r.date}</div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Governance &amp; Risk</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 56 }}>
            Built to be underwritten.
          </h2>
          <div className="gov-grid" data-stagger>
            {governance.map((g) => (
              <div key={g.t} className="gov-card">
                <div className="gov-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3>{g.t}</h3>
                <p>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ticker awards-marquee">
        <div className="marquee">
          <div className="marquee-track">
            {[...awards, ...awards].map((a, i) => (
              <span key={i} className="award-chip">
                <span className="aw-year">{a.year}</span>
                <span className="aw-txt">{a.txt}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Investor Perspectives</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 56 }}>
            What our investors say.
          </h2>
          <div className="quote-row" data-stagger>
            {quotes.map((q) => (
              <div key={q.by} className="quote-card">
                <div className="quote-mark">&ldquo;</div>
                <blockquote>{q.q}</blockquote>
                <cite>— {q.by}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Resources</div>
          <h2>Everything you need to diligence.</h2>
          <p className="section-lede">
            Request the materials below and our team will grant access after a
            short suitability check.
          </p>
          <div className="resource-grid" data-stagger>
            {resources.map((r) => (
              <div key={r.t} className="resource-card">
                <div className="resource-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M9 13h6M9 17h6" />
                  </svg>
                </div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
                <Link href="/contact" className="resource-link">{r.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Investor FAQ</div>
          <h2 style={{ marginBottom: 64 }}>Questions before the data room.</h2>
          <div className="faq-list">
            {[
              {
                q: "What is the minimum allocation and structure?",
                a: "The current round is open to qualified and institutional investors. Minimum commitments begin at €250,000, structured through a Luxembourg vehicle with standard governance and reporting. Exact terms are provided in the memorandum.",
              },
              {
                q: "How is capital deployed across the verticals?",
                a: "Capital is allocated by the partnership against a documented pipeline, weighted toward asset-backed opportunities with contracted or recurring income. No single vertical exceeds a defined concentration limit.",
              },
              {
                q: "What returns do you target, and over what horizon?",
                a: "We target a blended net IRR in the high teens over a 5–7 year hold, with a portion of returns distributed as ongoing yield rather than solely at exit. Past performance is not a guarantee of future results.",
              },
              {
                q: "How do investors receive liquidity?",
                a: "Through a mix of asset refinancings, portfolio company exits, and periodic secondary windows. The diversified base gives multiple, uncorrelated paths to liquidity.",
              },
              {
                q: "What reporting and transparency can we expect?",
                a: "Audited annual accounts, quarterly performance reporting, and access to a maintained data room. Partners are available for direct diligence calls throughout the process.",
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
          <h2>Notes for investors.</h2>
          <p className="section-lede">
            Essays on capital allocation, operating discipline, and building
            businesses that last.
          </p>
          <div className="blog-grid" data-stagger>
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-image" style={{ backgroundImage: `url(${p.cover})`, borderRadius: "2px" }} />
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

      <section className="section reveal" style={{ background: "var(--ark-black)" }}>
        <div className="section-inner">
          <div className="invest-cta reveal" data-dir="scale">
            <div className="section-eyebrow" style={{ textAlign: "center" }}>Next Step</div>
            <h2 style={{ color: "var(--ark-ivory)", marginBottom: 24, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
              Request the investor memorandum.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto 40px", fontSize: 18, fontWeight: 300 }}>
              We are accepting a limited number of new investors this cycle.
              Request the deck and we will follow up to arrange an introductory
              call.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Request the Deck
              </Link>
              <Link href="/contact" className="btn-ghost" style={{ margin: 0 }}>
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark reveal" style={{ textAlign: "center" }}>
        <div className="section-inner" style={{ maxWidth: 700 }}>
          <div className="section-eyebrow">The ARK Letter</div>
          <h2 style={{ marginBottom: 24, color: "var(--ark-ivory)" }}>
            A quarterly note to investors.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 48, fontSize: 18, fontWeight: 300 }}>
            Portfolio updates and thinking on capital allocation. No noise, no
            marketing.
          </p>
          <form className="newsletter-form" action={submitNewsletter}>
            <input type="email" name="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
