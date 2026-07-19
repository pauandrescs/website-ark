import Link from "next/link";

export const metadata = {
  title: "UI / UX Design — ARK Platforms",
  description:
    "Product design, brand systems, design systems, and user research for companies that treat design as a competitive advantage — not a cosmetic layer.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=2400&q=80";

const heroBadges = ["Product", "Brand", "Design Systems", "Research", "Prototyping"];

const marqueeItems = [
  "Product Design", "Brand Identity", "Design Systems", "UX Research",
  "Prototyping", "Motion", "Design Ops", "Accessibility", "Art Direction",
];

const stats = [
  { num: "90", suffix: "+", label: "Products Shipped" },
  { num: "38", suffix: "%", label: "Avg. Conversion Lift" },
  { num: "24", suffix: "", label: "Design Systems Built" },
  { num: "4.9", suffix: "/5", label: "Client Satisfaction", dec: 1 },
];

const capabilities = [
  { t: "Product & UX Design", d: "End-to-end design of digital products — from research and flows to a shippable, tested interface.", icon: <path d="M3 3h18v14H3zM3 9h18M9 17v4M15 17v4" strokeWidth="1.6" /> },
  { t: "Brand & Identity", d: "Marks, systems, and visual languages that age gracefully and scale across every touchpoint.", icon: <path d="M12 2l3 6 6 1-4.5 4.3L18 20l-6-3.2L6 20l1.5-6.7L3 9l6-1z" strokeWidth="1.5" /> },
  { t: "Design Systems", d: "Component libraries and design tokens that keep product and engineering in perfect sync.", icon: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" strokeWidth="1.6" /> },
  { t: "User Research", d: "Qualitative and quantitative research that grounds every decision in evidence, not opinion.", icon: <path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5" strokeWidth="1.6" /> },
  { t: "Prototyping", d: "High-fidelity, interactive prototypes that de-risk investment before a line of code is written.", icon: <path d="M4 4h16v12H4zM9 20h6M12 16v4M8 8l-2 2 2 2M16 8l2 2-2 2" strokeWidth="1.6" /> },
  { t: "Motion & Interaction", d: "Micro-interactions and motion that make interfaces feel alive, responsive, and effortless.", icon: <path d="M3 12h4l3-8 4 16 3-8h4" strokeWidth="1.7" /> },
];

const principles = [
  { t: "Clarity", d: "If it needs explaining, it is not finished. We remove until only the essential remains." },
  { t: "Restraint", d: "Taste is knowing what to leave out. Quiet interfaces earn lasting trust." },
  { t: "Consistency", d: "Systems over screens. One decision, applied everywhere, compounds into polish." },
  { t: "Evidence", d: "We validate with real users. Beauty without behaviour is decoration." },
];

const process = [
  { t: "Discover", d: "We immerse in your business, users, and constraints before proposing a single pixel." },
  { t: "Synthesize", d: "Research becomes insight — flows, priorities, and the problems worth solving." },
  { t: "Concept", d: "Directions explored broadly, then narrowed to the one that feels inevitable." },
  { t: "Iterate", d: "High-fidelity design, tested and refined with users and engineers in the loop." },
  { t: "Handover", d: "Documented systems and tokens your team can build — and extend — without us." },
];

const palette = [
  { hex: "#050505", nm: "Obsidian", fg: "#fcfaf7" },
  { hex: "#c5a35d", nm: "Gold", fg: "#050505" },
  { hex: "#fcfaf7", nm: "Ivory", fg: "#050505" },
  { hex: "#121212", nm: "Charcoal", fg: "#fcfaf7" },
  { hex: "#e0c28d", nm: "Champagne", fg: "#050505" },
  { hex: "#a68a4d", nm: "Bronze", fg: "#fcfaf7" },
];

const typeScale = [
  { lbl: "Display", val: "72 / Playfair" },
  { lbl: "Heading", val: "40 / Google Sans" },
  { lbl: "Body", val: "17 / Google Sans" },
  { lbl: "Caption", val: "11 / Uppercase" },
];

const work = [
  { cat: "FinTech", title: "A trading app that feels calm", bg: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80" },
  { cat: "Hospitality", title: "Booking, reimagined", bg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" },
  { cat: "Brand System", title: "An identity built to scale", bg: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80" },
];

const engagements = [
  { tag: "Focused", name: "Design Sprint", price: "1–2 weeks", desc: "A fast, structured burst to solve one high-stakes problem.", items: ["Research & framing", "Concepts & prototype", "User validation", "Clear recommendation"], featured: false },
  { tag: "Most Common", name: "Embedded Designer", price: "monthly retainer", desc: "A senior designer inside your team, shipping continuously.", items: ["Dedicated senior designer", "Your tools & rituals", "Product + brand work", "Scale up or down monthly"], featured: true },
  { tag: "Advisory", name: "Design Leadership", price: "from €6k / mo", desc: "Fractional design direction for teams between hires.", items: ["Design vision & standards", "Team & hiring guidance", "Design system ownership", "Stakeholder alignment"], featured: false },
];

const faqs = [
  { q: "Do you design and build, or just design?", a: "Both. Our design and engineering practices share one standard — so what we design is realistic to build, and what we build matches the design pixel for pixel." },
  { q: "What tools do you work in?", a: "Figma for product and systems, with tokens exported to code. We hand over living design systems, not static mockups." },
  { q: "How do you measure success?", a: "Not in awards. In retention, conversion, task success, and the quiet confidence a considered interface conveys. We define the metrics with you upfront." },
  { q: "Can you work with our existing brand?", a: "Yes. We can evolve what you have or build from zero. Either way we respect existing equity and only change what earns its keep." },
];

export default function Design() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero" style={{ height: "82vh", minHeight: 560 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-content" data-parallax="-0.08">
          <div className="hero-eyebrow">Design Practice</div>
          <h1>
            Design as a <br />
            <span className="gold-accent">strategic discipline.</span>
          </h1>
          <p>
            Product design, brand systems, and user research for companies that
            treat design as a competitive advantage — not a cosmetic layer.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>Start a Project</Link>
            <Link href="#capabilities" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>See the Craft</Link>
          </div>
          <div className="sw-hero-badges">
            {heroBadges.map((b) => <span key={b} className="sw-badge"><span className="dot" />{b}</span>)}
          </div>
        </div>
      </section>

      {/* DISCIPLINE MARQUEE */}
      <div className="tech-marquee">
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((t, i) => (
              <span key={i} className="tech-item"><span className="tk-dot" />{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="section-eyebrow" style={{ margin: "0 auto 24px", display: "inline-block" }}>Practice Overview</div>
          <h2 style={{ marginBottom: 28 }}>We design for clarity, trust, and longevity.</h2>
          <p style={{ fontSize: 19, color: "var(--ark-muted)", lineHeight: 1.8, fontWeight: 300 }}>
            Our designers pair with your leadership, research your users, and
            deliver systems your engineers can build and your customers will
            remember. We measure success not in awards, but in retention,
            conversion, and the quiet confidence a great interface conveys.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="section dark reveal" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="section-inner">
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num" data-count={s.num} data-suffix={s.suffix} data-decimals={s.dec || 0}>
                  {s.num}{s.suffix}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section reveal" id="capabilities" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Capabilities</div>
          <h2 style={{ marginBottom: 56 }}>What we deliver.</h2>
          <div className="cap-grid" data-stagger>
            {capabilities.map((c, i) => (
              <div key={c.t} className="cap-card">
                <div className="cap-num">0{i + 1}</div>
                <div className="cap-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Principles</div>
          <h2 style={{ marginBottom: 56 }}>What guides every decision.</h2>
          <div className="principle-strip" data-stagger>
            {principles.map((p, i) => (
              <div key={p.t} className="principle-cell">
                <div className="principle-idx">0{i + 1}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN SHOWCASE: palette + type */}
      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">The System</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 16 }}>Every detail, decided on purpose.</h2>
          <p className="section-lede">
            A glimpse of how we think about the building blocks — colour,
            typography, and components — before they ever reach a screen.
          </p>
          <div className="design-showcase">
            <div className="showcase-card">
              <div className="showcase-head">Colour Palette</div>
              <div className="palette">
                {palette.map((c) => (
                  <div key={c.nm} className="swatch" style={{ background: c.hex, color: c.fg }}>
                    <span className="hex">{c.hex}</span>
                    <span className="nm">{c.nm}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-head">Typography</div>
              <div className="type-specimen">
                <div className="type-aa">A<span>a</span></div>
                <div className="type-face">Playfair Display · Google Sans</div>
                <ul className="type-scale">
                  {typeScale.map((t) => (
                    <li key={t.lbl}>
                      <span style={{ fontSize: 18 }}>{t.lbl}</span>
                      <span className="ts-lbl">{t.val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI KIT + APPROACH */}
      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner code-split">
          <div>
            <div className="section-eyebrow">Design → Build</div>
            <h2>Systems, not just screens.</h2>
            <p style={{ color: "var(--ark-muted)", fontWeight: 300, lineHeight: 1.8, marginTop: 18, fontSize: 16 }}>
              We hand over living design systems — components, tokens, and states
              — that your engineers implement one-to-one. What you approve is
              exactly what ships, down to the last interaction.
            </p>
            <Link href="/contact" className="btn-primary" style={{ marginTop: 30, background: "var(--ark-black)", color: "var(--ark-ivory)", opacity: 1, animation: "none" }}>
              Start a Conversation
            </Link>
          </div>
          <div className="ui-kit reveal">
            <div className="ui-kit-row">
              <div className="ui-kit-label">Buttons</div>
              <button className="kit-btn solid" type="button">Primary</button>
              <button className="kit-btn line" type="button">Secondary</button>
            </div>
            <div className="ui-kit-row">
              <div className="ui-kit-label">Chips &amp; Toggle</div>
              <span className="kit-chip">Active</span>
              <span className="kit-chip">Featured</span>
              <span className="kit-toggle" role="img" aria-label="toggle on" />
            </div>
            <div className="ui-kit-row">
              <div className="ui-kit-label">Input</div>
              <input className="kit-input" placeholder="you@company.com" readOnly />
              <button className="kit-btn solid" type="button">Join</button>
            </div>
            <div className="ui-kit-row">
              <div className="ui-kit-label">Avatars</div>
              <div className="kit-avatars">
                <i style={{ background: "#c5a35d" }} />
                <i style={{ background: "#121212" }} />
                <i style={{ background: "#e0c28d" }} />
                <i style={{ background: "#a68a4d" }} />
              </div>
              <span className="kit-chip">+12 team</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">The Design Protocol</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 56 }}>From blank page to inevitable.</h2>
          <div className="steps-flow" data-stagger>
            {process.map((s, i) => (
              <div key={s.t} className="step-card">
                <div className="step-num" style={{ background: "var(--ark-charcoal)" }}>{i + 1}</div>
                <h3 style={{ color: "var(--ark-ivory)" }}>{s.t}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK GALLERY */}
      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Selected Work</div>
          <h2>A sample of the craft.</h2>
          <p className="section-lede">
            A few directions we can share. Most of our work stays behind NDAs to
            protect our clients' advantage.
          </p>
          <div className="work-grid" data-stagger>
            {work.map((w) => (
              <div key={w.title} className="work-tile">
                <div className="work-tile-bg" style={{ backgroundImage: `url(${w.bg})` }} />
                <div className="work-tile-ov" />
                <div className="work-tile-txt">
                  <div className="work-tile-cat">{w.cat}</div>
                  <h3>{w.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Engagement Models</div>
          <h2 style={{ marginBottom: 16 }}>Ways to work with us.</h2>
          <p className="section-lede">Three ways to bring senior design into your product — scoped to how you build.</p>
          <div className="engage-grid" data-stagger>
            {engagements.map((e) => (
              <div key={e.name} className={`engage-card${e.featured ? " featured" : ""}`}>
                <div className="engage-tag">{e.tag}</div>
                <h3>{e.name}</h3>
                <div className="engage-price">{e.price}</div>
                <p>{e.desc}</p>
                <ul className="engage-list">
                  {e.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <Link href="/contact" className="btn-primary" style={e.featured ? { opacity: 1, animation: "none" } : { background: "var(--ark-black)", color: "var(--ark-ivory)", opacity: 1, animation: "none" }}>
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section dark reveal">
        <div className="section-inner testimonial">
          <div className="section-eyebrow">Client Perspective</div>
          <blockquote>
            "They gave our product a sense of calm authority we could never
            articulate. Conversion rose, support tickets fell, and the team
            finally had a system to build on."
          </blockquote>
          <cite>— Founder, FinTech Platform</cite>
        </div>
      </section>

      {/* FAQ */}
      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Frequently Asked</div>
          <h2 style={{ marginBottom: 56 }}>Before you brief us.</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section reveal" style={{ background: "var(--ark-black)" }}>
        <div className="section-inner">
          <div className="invest-cta reveal" data-dir="scale">
            <div className="section-eyebrow" style={{ textAlign: "center" }}>Engage With Us</div>
            <h2 style={{ color: "var(--ark-ivory)", marginBottom: 24, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
              Elevate your product.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto 40px", fontSize: 18, fontWeight: 300 }}>
              Whether you are designing a new flagship or quietly refining what
              you already have, we would like to hear about it.
            </p>
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
