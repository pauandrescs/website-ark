import Link from "next/link";

export const metadata = {
  title: "Software Development — ARK Platforms",
  description:
    "Custom software, SaaS platforms, mobile apps, and cloud systems engineered by senior architects. Built as long-lived assets — clear, documented, and made to scale.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=2400&q=80";

const heroBadges = ["C", "C++", "Rust", "Java", "Python", "Go", ".NET", "Web · Mobile"];

const techStack = [
  "C", "C++", "Rust", "Java", "Python", "Go", "C#", "Kotlin", "Swift",
  "TypeScript", "Qt", ".NET", "Spring", "PostgreSQL", "Kubernetes", "CUDA",
];

const platforms = [
  { name: "Desktop", sub: "Win · macOS · Linux", icon: <path d="M3 4h18v12H3zM8 20h8M12 16v4" strokeWidth="1.6" /> },
  { name: "Systems", sub: "Native · Low-level", icon: <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4M7 7h10v10H7z" strokeWidth="1.6" /> },
  { name: "Web", sub: "Edge · SSR", icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" strokeWidth="1.4" /> },
  { name: "Mobile", sub: "iOS · Android", icon: <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2" strokeWidth="1.6" /> },
  { name: "Cloud & Data", sub: "Services · ML", icon: <path d="M6 16a4 4 0 010-8 5 5 0 019.6-1.5A4.5 4.5 0 1118 16H6z" strokeWidth="1.6" /> },
];

const languages = [
  { n: "C", tag: "Systems", use: "Firmware, drivers, and performance-critical cores where every cycle counts." },
  { n: "C++", tag: "High Performance", use: "Desktop apps, engines, and real-time systems with fine-grained control." },
  { n: "Rust", tag: "Safe & Fast", use: "Memory-safe systems software, services, and tooling without the footguns." },
  { n: "Java", tag: "Enterprise", use: "JVM services, Android, and large back-office platforms built to last." },
  { n: "Python", tag: "Data & AI", use: "Pipelines, machine learning, automation, and scientific computing." },
  { n: "Go", tag: "Services", use: "Concurrent network services and CLIs with simple, fast deployments." },
  { n: "C#", tag: ".NET", use: "Windows desktop, enterprise apps, and cross-platform .NET services." },
  { n: "TypeScript", tag: "Web", use: "Type-safe web platforms, tooling, and full-stack applications." },
];

const stats = [
  { num: "140", suffix: "+", label: "Systems Shipped" },
  { num: "99.98", suffix: "%", label: "Uptime Delivered" },
  { num: "12", suffix: "yr", label: "Avg. Engineer Tenure" },
  { num: "0", suffix: "", label: "Offshore Hand-offs" },
];

const capabilities = [
  {
    t: "Desktop Applications",
    d: "Native Windows, macOS, and Linux software in C++, Qt, and .NET — responsive, offline-capable, built to last.",
    icon: <path d="M3 4h18v12H3zM8 20h8M12 16v4" strokeWidth="1.6" />,
  },
  {
    t: "Systems & Performance",
    d: "Low-level engineering in C, C++, and Rust — engines, drivers, and real-time cores where speed is the spec.",
    icon: <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4M7 7h10v10H7z" strokeWidth="1.5" />,
  },
  {
    t: "Enterprise Java",
    d: "JVM services, Spring platforms, and Android — robust back-office systems that scale for the long term.",
    icon: <path d="M4 6h16M4 12h16M4 18h16M8 6v12" strokeWidth="1.6" />,
  },
  {
    t: "Data, ML & Python",
    d: "Pipelines, machine learning, computer vision, and automation — from prototype to production in Python.",
    icon: <path d="M12 3v3M12 18v3M3 12h3M18 12h3M12 8a4 4 0 100 8 4 4 0 000-8z" strokeWidth="1.6" />,
  },
  {
    t: "Web & Mobile",
    d: "Production web on Next.js and React, native iOS/Android, and cross-platform builds — fast and accessible.",
    icon: <path d="M2 4h14v10H2zM18 8h4v12h-4zM6 18h6" strokeWidth="1.6" />,
  },
  {
    t: "Cloud & DevOps",
    d: "AWS, GCP, and Azure infrastructure with Kubernetes and Terraform — resilient, secure, cost-aware.",
    icon: <path d="M6 16a4 4 0 010-8 5 5 0 019.6-1.5A4.5 4.5 0 1118 16H6z" strokeWidth="1.6" />,
  },
  {
    t: "Embedded & IoT",
    d: "Firmware and edge software in C/C++ and Rust for microcontrollers, devices, and constrained hardware.",
    icon: <path d="M9 2v3M15 2v3M9 19v3M15 19v3M4 9H2M4 15H2M22 9h-2M22 15h-2M6 6h12v12H6z" strokeWidth="1.5" />,
  },
  {
    t: "Technical Due Diligence",
    d: "Independent review of codebases, teams, and architecture for investors, boards, and acquirers.",
    icon: <path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5" strokeWidth="1.6" />,
  },
];

const process = [
  { t: "Discovery", d: "We map the problem, constraints, and long-term objective before a line of code is written." },
  { t: "Architecture", d: "We design the technical framework and document every trade-off in writing, upfront." },
  { t: "Build", d: "Senior engineers ship in tight, reviewed increments — tested, typed, and observable." },
  { t: "Ship & Operate", d: "CI/CD, monitoring, and knowledge transfer so the system thrives long after we hand it over." },
];

const stackCats = [
  { h: "Languages", items: ["C", "C++", "Rust", "Java", "Python", "Go", "C#", "TypeScript"] },
  { h: "Desktop & Systems", items: ["Qt", "GTK", ".NET / WPF", "JavaFX", "Electron", "Tauri"] },
  { h: "Backend & Data", items: ["Spring", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Kafka"] },
  { h: "Cloud & Infra", items: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Docker"] },
];

const engagements = [
  {
    tag: "Fixed Scope",
    name: "Project",
    price: "from €60k",
    desc: "A defined build with a clear outcome, timeline, and price.",
    items: ["Discovery & architecture", "Full build & QA", "Deployment & handover", "30-day support window"],
    featured: false,
  },
  {
    tag: "Most Common",
    name: "Embedded Team",
    price: "monthly retainer",
    desc: "A senior squad that plugs into your roadmap and ships continuously.",
    items: ["Dedicated senior engineers", "Partner-level tech lead", "Your tools, your board", "Scale up or down monthly"],
    featured: true,
  },
  {
    tag: "Advisory",
    name: "Fractional CTO",
    price: "from €8k / mo",
    desc: "Architecture, hiring, and technical strategy without a full-time hire.",
    items: ["Architecture ownership", "Team & hiring guidance", "Vendor & stack decisions", "Board-ready reporting"],
    featured: false,
  },
];

const results = [
  {
    label: "Enterprise Logistics",
    title: "Legacy monolith to a modular, real-time platform",
    stats: [
      { n: "−65%", l: "Cloud Cost" },
      { n: "3.5×", l: "Throughput" },
      { n: "0", l: "Downtime" },
    ],
  },
  {
    label: "FinTech SaaS",
    title: "From MVP to a 99.99%-uptime payments backbone",
    stats: [
      { n: "40ms", l: "P99 Latency" },
      { n: "6×", l: "Users / yr" },
      { n: "SOC 2", l: "Certified" },
    ],
  },
];

const faqs = [
  { q: "Who actually writes the code?", a: "Senior, partner-level engineers. We do not use junior pools or offshore hand-offs. The people who scope your project are the people who ship it." },
  { q: "Which stacks do you work in?", a: "We are pragmatic: TypeScript/React/Next.js on the frontend; Node, Rust, Go, and Python on the backend; Postgres and Kafka for data; AWS/GCP with Kubernetes and Terraform for infra. We pick the right tool, not the trendy one." },
  { q: "Do we own the code and IP?", a: "Entirely. You own all source, infrastructure, and IP from day one. We write documented code you could hand to your next CTO without apology." },
  { q: "How do engagements start?", a: "With a short, honest assessment. Share the outline of your project and we respond within one business day on whether we are the right partner — and if not, we often point you to who is." },
];

export default function Software() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero" style={{ height: "82vh", minHeight: 560 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="page-hero-content" data-parallax="-0.08">
          <div className="hero-eyebrow">Technology Practice</div>
          <h1>
            Software engineered <br />
            to <span className="gold-accent">outlast trends.</span>
          </h1>
          <p>
            Desktop and systems software, applications, and platforms — in C,
            C++, Rust, Java, Python and more. Engineered by senior developers
            for clients who depend on what we ship.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>
              Start a Project
            </Link>
            <Link href="#capabilities" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>
              See Capabilities
            </Link>
          </div>
          <div className="sw-hero-badges">
            {heroBadges.map((b) => (
              <span key={b} className="sw-badge"><span className="dot" />{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <div className="tech-marquee">
        <div className="marquee">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="tech-item"><span className="tk-dot" />{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* PLATFORM TARGETS */}
      <section className="section reveal" style={{ background: "#fff", paddingBottom: 0 }}>
        <div className="section-inner">
          <div className="section-eyebrow">Where We Ship</div>
          <h2 style={{ marginBottom: 16 }}>One team, every target.</h2>
          <p className="section-lede" style={{ marginBottom: 48 }}>
            From bare-metal firmware to the browser — we build for the platform
            your product actually needs, not the one we happen to like.
          </p>
          <div className="platform-row" data-stagger>
            {platforms.map((p) => (
              <div key={p.name} className="platform-cell">
                <div className="platform-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </div>
                <div className="platform-name">{p.name}</div>
                <div className="platform-sub">{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: "center" }}>
          <div className="section-eyebrow" style={{ margin: "0 auto 24px", display: "inline-block" }}>Practice Overview</div>
          <h2 style={{ marginBottom: 28 }}>We build systems, not just websites.</h2>
          <p style={{ fontSize: 19, color: "var(--ark-muted)", lineHeight: 1.8, fontWeight: 300 }}>
            The web is only one target. We write desktop applications, systems
            software, firmware, data pipelines, and services in the languages
            each job demands — C and C++ for performance, Rust for safety, Java
            and Python for scale. Every codebase is treated as a long-lived asset:
            clear, documented, and built to evolve for years.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="section dark reveal" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="section-inner">
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num" data-count={s.num} data-suffix={s.suffix} data-decimals={s.num.includes(".") ? 2 : 0}>
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
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    {c.icon}
                  </svg>
                </div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">Languages</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 16 }}>
            The right language for the job.
          </h2>
          <p className="section-lede">
            We are not a single-stack shop. Each language earns its place — chosen
            for the constraints of the problem, not fashion.
          </p>
          <div className="lang-grid" data-stagger>
            {languages.map((l) => (
              <div key={l.n} className="lang-card">
                <div className="lang-name">{l.n}</div>
                <div className="lang-tag">{l.tag}</div>
                <div className="lang-use">{l.use}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CODE WINDOW + APPROACH */}
      <section className="section dark reveal">
        <div className="section-inner code-split">
          <div>
            <div className="section-eyebrow">Our Approach</div>
            <h2 style={{ color: "var(--ark-ivory)" }}>Senior craft, end to end.</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.8, marginTop: 18, fontSize: 16 }}>
              No offshore hand-offs, no junior armies. Every engagement is led by
              a partner-level engineer and staffed with people who have shipped
              what you are trying to build. We write code you could hand to your
              next CTO without apology.
            </p>
            <Link href="/contact" className="btn-primary" style={{ marginTop: 30, opacity: 1, animation: "none" }}>
              Start a Conversation
            </Link>
          </div>
          <div className="code-window reveal">
            <div className="code-bar">
              <span className="cd r" /><span className="cd y" /><span className="cd g" />
              <span className="cd-title">engine.rs — ark/systems</span>
            </div>
            <div className="code-body">
              <span className="ln"><span className="c-com">// zero-copy parse, no allocations on the hot path</span></span>
              <span className="ln"><span className="c-key">pub fn</span> <span className="c-fn">process</span>(<span className="c-var">frame</span><span className="c-punc">:</span> <span className="c-punc">&</span>Frame) <span className="c-punc">-&gt;</span> Result&lt;Packet&gt; {"{"}</span>
              <span className="ln">{"  "}<span className="c-key">let</span> <span className="c-var">hdr</span> <span className="c-punc">=</span> Header<span className="c-punc">::</span><span className="c-fn">parse</span>(frame.<span className="c-fn">bytes</span>())<span className="c-punc">?;</span></span>
              <span className="ln">{"  "}<span className="c-key">if</span> <span className="c-punc">!</span>hdr.<span className="c-fn">checksum_ok</span>() {"{"} <span className="c-key">return</span> <span className="c-fn">Err</span>(Error<span className="c-punc">::</span>Corrupt)<span className="c-punc">;</span> {"}"}</span>
              <span className="ln">{"  "}<span className="c-key">let</span> <span className="c-var">body</span> <span className="c-punc">=</span> <span className="c-fn">decode</span>(<span className="c-punc">&amp;</span>frame[hdr.<span className="c-fn">len</span>()..])<span className="c-punc">?;</span></span>
              <span className="ln">{"  "}metrics<span className="c-punc">::</span><span className="c-fn">inc</span>(<span className="c-str">"frames.ok"</span>)<span className="c-punc">;</span></span>
              <span className="ln">{"  "}<span className="c-fn">Ok</span>(Packet {"{"} hdr<span className="c-punc">,</span> body {"}"})</span>
              <span className="ln">{"}"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">The Engineering Protocol</div>
          <h2 style={{ marginBottom: 56 }}>How we take an idea to production.</h2>
          <div className="steps-flow" data-stagger>
            {process.map((s, i) => (
              <div key={s.t} className="step-card">
                <div className="step-num">{i + 1}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK CATEGORIES */}
      <section className="section dark reveal">
        <div className="section-inner">
          <div className="section-eyebrow">The Stack</div>
          <h2 style={{ color: "var(--ark-ivory)", marginBottom: 56 }}>Tools chosen for the job, not the hype.</h2>
          <div className="stack-grid" data-stagger>
            {stackCats.map((c) => (
              <div key={c.h} className="stack-cat">
                <h4>{c.h}</h4>
                <ul>
                  {c.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section reveal" style={{ background: "var(--ark-ivory)" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Selected Results</div>
          <h2>Outcomes, not output.</h2>
          <p className="section-lede">
            A sample of what shipping software as a long-lived asset looks like in
            practice. Most work stays confidential.
          </p>
          <div className="case-grid" data-stagger>
            {results.map((r) => (
              <div key={r.title} className="case-card" style={{ cursor: "default" }}>
                <div className="case-card-label">{r.label}</div>
                <h3>{r.title}</h3>
                <div className="case-card-stats" style={{ marginTop: "auto" }}>
                  {r.stats.map((s) => (
                    <div key={s.l}>
                      <div className="num">{s.n}</div>
                      <div className="lbl">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section reveal" style={{ background: "#fff" }}>
        <div className="section-inner">
          <div className="section-eyebrow">Engagement Models</div>
          <h2 style={{ marginBottom: 16 }}>Work with us your way.</h2>
          <p className="section-lede">
            Three ways to bring senior engineering into your business — scoped to
            how you like to build.
          </p>
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
                <Link href="/contact" className={e.featured ? "btn-primary" : "btn-primary"} style={e.featured ? { opacity: 1, animation: "none" } : { background: "var(--ark-black)", color: "var(--ark-ivory)", opacity: 1, animation: "none" }}>
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
            "They shipped in ten weeks what our previous vendor could not in a
            year — and the code was clean enough that our own team took it over
            without a rewrite."
          </blockquote>
          <cite>— VP Engineering, Enterprise Logistics</cite>
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
              Ready to build something that endures?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: 620, margin: "0 auto 40px", fontSize: 18, fontWeight: 300 }}>
              Share the outline of your project. We respond within one business
              day with a short, honest assessment of whether we are the right
              partner.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ opacity: 1, animation: "none" }}>
                Request a Consultation
              </Link>
              <Link href="/contact" className="btn-ghost" style={{ margin: 0, opacity: 1, animation: "none" }}>
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
