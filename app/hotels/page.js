"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ChevronRight,
  BarChart3,
  ShieldCheck,
  Wind,
  Droplets,
  Activity,
  Database,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const variants = [
  {
    name: "Luxury",
    tagline: "Ultra-High-End",
    desc: "The absolute pinnacle of the ARK hospitality standard. Massive architecture, private stewardship, and total sensory control. Designed for the global 0.1%.",
    specs: ["Noise Floor: <20dB", "Private Butler Ops", "Rare Stone Selection", "Total Seclusion"],
    bg: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=80",
  },
  {
    name: "Premium",
    tagline: "Upper-Upscale",
    desc: "Refined high-performance environments. A balance of sophisticated design and institutional service for the discerning professional and leisure traveler.",
    specs: ["Circadian Lighting", "Premium Materials", "High-Touch Service", "Elite Locations"],
    bg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=80",
  },
  {
    name: "Collection",
    tagline: "Lifestyle / Soft Brand",
    desc: "Curation as a service. Boutique assets with a deep local soul, powered by the GoldenInn technical infrastructure. Unique, irregular, and unforgettable.",
    specs: ["Local Curation", "Bespoke Design", "Artisanal F&B", "Cultural Nexus"],
    bg: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=80",
  },
  {
    name: "Business",
    tagline: "Midscale Corporate",
    desc: "The professional hub. High-velocity units engineered for efficiency, connectivity, and consistent comfort in key urban business nodes.",
    specs: ["10Gbps Mesh", "Mobile Checking", "Workspace Integration", "Rapid Flow"],
    bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
  },
  {
    name: "Essential",
    tagline: "Economic Precision",
    desc: "High-performance hospitality at an optimized scale. We eliminated the unnecessary to focus on the perfection of the essentials: sleep, shower, and speed.",
    specs: ["Pure Functionalism", "Smart Compact Units", "Fully Automated", "Sustainable Cost"],
    bg: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2400&q=80",
  },
  {
    name: "Heritage",
    tagline: "Historical Recovery",
    desc: "Converting landmark assets into high-yield hospitality infrastructure. We preserve the historical legacy while injecting ARK's digital nervous system.",
    specs: ["Asset Repositioning", "Heritage Tech", "Seismic Modernization", "Legacy Value"],
    bg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80",
  },
];

export default function Hotels() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Custom Spotlight Cursor
      const cursor = cursorRef.current;
      if (typeof window !== 'undefined' && window.innerWidth > 1024 && cursor) {
        gsap.set(cursor, { display: 'block' });
        const onMouseMove = (e) => {
          gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.8, ease: "power2.out" });
        };
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
      }

      // 2. ULTRA-DYNAMIC HERO ANIMATION
      const tl = gsap.timeline({ delay: 0.5 });
      tl.to(".hero-char", {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        rotateX: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: "power4.out"
      })
      .from(".hero-eyebrow, .hero-desc", { opacity: 0, y: 20, duration: 1.2, stagger: 0.2 }, "-=1")
      .from(".hero-line", { height: 0, duration: 1.2, ease: "power3.inOut" }, "-=0.8");

      // 3. Section Reveals
      gsap.utils.toArray(".variant-section").forEach((sec) => {
        const title = sec.querySelector(".apple-hello-text");
        const path = sec.querySelector(".apple-hello-path");
        const card = sec.querySelector(".glass-card");

        if (path) {
          gsap.timeline({
            scrollTrigger: {
              trigger: sec,
              start: "top 70%",
              toggleActions: "play none none none"
            }
          })
          .fromTo(path, { strokeDashoffset: 1000, strokeDasharray: 1000 }, { strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut" })
          .to(title, { fill: "white", duration: 1.2 }, "-=1");
        }

        if (card) {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: { trigger: sec, start: "top 80%" }
          });
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderSplitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="hero-char" style={{ display: 'inline-block', opacity: 0, transform: 'translateY(100px) scale(1.2) rotateX(-30deg)', filter: 'blur(20px)' }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} style={{ background: "#000", color: "var(--ark-ivory)", overflowX: "hidden" }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .section-inner { width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 30px; position: relative; z-index: 2; }
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; overflow: hidden; perspective: 1000px; }
        
        .variant-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; min-height: 100vh; position: relative; z-index: 2; }
        .variant-grid.reverse { grid-template-columns: 1fr 1fr; }
        
        .parallax-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; background-size: cover; background-position: center; filter: brightness(0.12) grayscale(40%); }
        .vignette { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; background: radial-gradient(circle, transparent 10%, rgba(0,0,0,0.85) 100%); pointer-events: none; }
        .glass-card { background: rgba(255,255,255,0.01); backdrop-filter: blur(40px); padding: 70px; border: 1px solid rgba(255,255,255,0.06); position: relative; box-shadow: 0 40px 80px rgba(0,0,0,0.7); }

        @media (max-width: 1100px) {
          .variant-grid { grid-template-columns: 1fr !important; gap: 40px; height: auto; padding: 100px 0; }
          .hero-title { font-size: 64px !important; }
          .apple-hello-svg { height: 100px !important; }
          .variant-section { height: auto !important; }
          .glass-card { padding: 40px !important; }
        }
      `}} />

      {/* LUXURY UI ELEMENTS */}
      <div ref={cursorRef} style={{ position: "fixed", top: 0, left: 0, width: "400px", height: "400px", background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, transform: "translate(-50%, -50%)", display: 'none', mixBlendMode: 'screen' }} />
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', opacity: 0.04, pointerEvents: "none", zIndex: 1000, mixBlendMode: "overlay" }} />

      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=80)", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, filter: 'brightness(0.12) contrast(1.1) grayscale(30%)' }} />
        <div className="vignette" />
        
        <div className="section-inner">
          <div className="hero-eyebrow" style={{ color: "var(--ark-gold)", letterSpacing: "1em", marginBottom: 30, fontSize: 10, fontWeight: 800 }}>THE HOSPITALITY PRACTICE</div>
          <h1 className="hero-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(60px, 15vw, 180px)", lineHeight: 0.8, margin: "0 0 30px", textTransform: "uppercase" }}>
            <span style={{ display: "block" }}>{renderSplitText("Golden")}</span>
            <span style={{ display: "block" }}>
              {renderSplitText("Inn")}
              <span className="hero-char" style={{ color: "var(--ark-gold)", display: 'inline-block', opacity: 0, transform: 'translateY(100px) scale(1.2) rotateX(-30deg)', filter: 'blur(20px)' }}>.</span>
            </span>
          </h1>
          <p className="hero-desc" style={{ fontSize: "clamp(16px, 2.2vw, 22px)", color: "rgba(255,255,255,0.3)", maxWidth: 800, margin: "0 auto", fontWeight: 300, lineHeight: 1.4 }}>The Institutional Standard in Global Hospitality. <br />An Engineered Response to the Art of Service.</p>
          <div className="hero-line" style={{ width: 1, height: 100, background: "linear-gradient(to bottom, var(--ark-gold), transparent)", margin: "40px auto 0" }} />
        </div>
      </section>

      {/* 2. THE 6 WORLDS */}
      {variants.map((v, i) => (
        <section key={v.name} className="section variant-section" style={{ position: "relative", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: 'hidden' }}>
          <div className="parallax-bg" style={{ backgroundImage: `url(${v.bg})` }} />
          <div className="vignette" />
          
          <div className={`section-inner variant-grid ${i % 2 !== 0 ? 'reverse' : ''}`}>
            <div style={{ order: i % 2 !== 0 ? 2 : 1 }}>
              <div className="reveal-item" style={{ fontSize: 11, fontWeight: 800, color: "var(--ark-gold)", letterSpacing: "0.4em", marginBottom: 24 }}>VARIANT / 0{i + 1}</div>
              <div className="apple-hello-svg" style={{ height: 140, marginBottom: 24 }}>
                <svg viewBox="0 0 500 120" preserveAspectRatio="xMinYMid meet" style={{ width: "100%", height: "100%", fontFamily: "'Playfair Display', serif" }}>
                  <text x={i % 2 === 0 ? "0" : "100%"} textAnchor={i % 2 === 0 ? "start" : "end"} y="100" className="apple-hello-text" style={{ fontSize: 100, fill: "rgba(255,255,255,0.02)", fontWeight: 700 }}>{v.name}</text>
                  <text x={i % 2 === 0 ? "0" : "100%"} textAnchor={i % 2 === 0 ? "start" : "end"} y="100" className="apple-hello-path" style={{ fontSize: 100, fill: "transparent", stroke: "var(--ark-gold)", strokeWidth: 1.2, strokeDasharray: 1000, strokeDashoffset: 1000 }}>{v.name}</text>
                </svg>
              </div>
              <div className="reveal-item" style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.12)" }}>{v.tagline}</div>
            </div>

            <div className="glass-card" style={{ order: i % 2 !== 0 ? 1 : 2 }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "linear-gradient(90deg, transparent, var(--ark-gold), transparent)", opacity: 0.5 }} />
              <p style={{ fontSize: 20, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", marginBottom: 40 }}>{v.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {v.specs.map((s) => (
                  <div key={s} style={{ padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ark-gold)", display: "flex", alignItems: "center", gap: 10 }}><ChevronRight size={14} /> {s}</div>
                ))}
              </div>
              <div style={{ marginTop: 50 }}>
                <Link href="/contact" style={{ display: "block", width: "100%", background: "var(--ark-gold)", color: "#000", textAlign: "center", fontWeight: 900, textDecoration: "none", padding: "24px", letterSpacing: "0.2em", fontSize: 13 }}>REQUEST TECHNICAL BRIEF</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. FINAL SECTION */}
      <section className="section" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", background: "#000" }}>
        <div className="section-inner">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(48px, 10vw, 120px)", color: "#fff", marginBottom: 60, lineHeight: 0.9 }}>Archive of <br />Excellence.</h2>
          <Link href="/contact" style={{ background: "var(--ark-gold)", color: "#000", padding: "30px 100px", fontSize: 14, fontWeight: 900, letterSpacing: "0.4em", textTransform: "uppercase", textDecoration: "none", boxShadow: "0 30px 100px rgba(212,175,55,0.2)", display: 'inline-block' }}>REQUEST ACCESS</Link>
        </div>
      </section>

    </div>
  );
}
