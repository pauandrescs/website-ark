"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowUpRight,
  BedDouble,
  Building2,
  ChevronRight,
  ConciergeBell,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Waves,
  Wifi,
} from "lucide-react";
import Hotel3DScene from "./Hotel3DScene";
import { hotelJourney, hotelStats, hotelVariants } from "./data";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { icon: ConciergeBell, label: "Service OS", value: "Guest requests, housekeeping, F&B, and concierge signals in one operational layer." },
  { icon: ShieldCheck, label: "Trust Layer", value: "Privacy, access control, auditability, and hospitality-grade resilience by default." },
  { icon: Waves, label: "Sensory Control", value: "Lighting, air, acoustics, and scent calibrated around rest and arrival rituals." },
  { icon: Wifi, label: "Connected Rooms", value: "Fast, quiet, invisible infrastructure for travelers who live across devices." },
];

export default function Hotels() {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const cleanupFns = [];
    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;

      if (typeof window !== "undefined" && window.innerWidth > 1024 && cursor) {
        gsap.set(cursor, { display: "block" });
        const onMouseMove = (e) => {
          gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.7,
            ease: "power3.out",
          });
        };
        window.addEventListener("mousemove", onMouseMove);
        cleanupFns.push(() => window.removeEventListener("mousemove", onMouseMove));
      }

      gsap
        .timeline({ delay: 0.15 })
        .to(".hotels-hero-kicker, .hotels-hero-title span, .hotels-hero-copy, .hotels-hero-actions", {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.09,
          duration: 1.05,
          ease: "power4.out",
        })
        .fromTo(
          ".hotels-hero-panel",
          { y: 80, scale: 0.96, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
          "-=0.65"
        );

      gsap.utils.toArray(".hotels-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 54, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%" },
          }
        );
      });

      gsap.utils.toArray(".hotel-card").forEach((card) => {
        const image = card.querySelector(".hotel-card-image img");
        const content = card.querySelector(".hotel-card-content");

        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 82%" },
          }
        );

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.12 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            { x: card.classList.contains("hotel-card-alt") ? -34 : 34, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 72%" },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      cleanupFns.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="hotels-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .hotels-page {
          min-height: 100vh;
          overflow-x: hidden;
          color: var(--ark-ivory);
          background:
            radial-gradient(circle at 18% 2%, rgba(197, 163, 93, 0.18), transparent 26rem),
            radial-gradient(circle at 82% 22%, rgba(62, 120, 122, 0.15), transparent 30rem),
            linear-gradient(180deg, #050505 0%, #10100e 48%, #050505 100%);
        }

        .hotels-noise {
          position: fixed;
          inset: 0;
          z-index: 50;
          pointer-events: none;
          opacity: 0.035;
          mix-blend-mode: overlay;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
        }

        .hotels-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 60;
          transform: translate(-50%, -50%);
          display: none;
          background: radial-gradient(circle, rgba(224, 194, 141, 0.12) 0%, rgba(224, 194, 141, 0.04) 36%, transparent 72%);
          mix-blend-mode: screen;
        }

        .hotels-shell {
          width: min(100% - 48px, 1440px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hotels-hero {
          min-height: 100svh;
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(360px, 0.68fr);
          gap: clamp(32px, 6vw, 96px);
          align-items: center;
          padding: 128px 0 72px;
          position: relative;
        }

        .hotels-hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(224,194,141,0.48), transparent);
        }

        .hotels-hero-kicker,
        .hotels-hero-title span,
        .hotels-hero-copy,
        .hotels-hero-actions {
          opacity: 0;
          transform: translateY(34px);
          filter: blur(14px);
        }

        .hotels-hero-kicker,
        .hotels-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--ark-gold-light);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.32em;
          text-transform: uppercase;
        }

        .hotels-hero-title {
          margin: 24px 0 24px;
          font-family: "Playfair Display", serif;
          font-size: clamp(58px, 11vw, 172px);
          line-height: 0.82;
          letter-spacing: 0;
          color: #fff;
        }

        .hotels-hero-title span {
          display: block;
        }

        .hotels-hero-title .accent {
          color: var(--ark-gold-light);
          font-style: italic;
        }

        .hotels-hero-copy {
          max-width: 720px;
          color: rgba(252,250,247,0.7);
          font-size: clamp(17px, 2vw, 22px);
          line-height: 1.58;
          font-weight: 300;
        }

        .hotels-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 36px;
        }

        .hotels-btn {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(255,255,255,0.16);
          padding: 0 22px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: transform .35s ease, background .35s ease, border-color .35s ease, color .35s ease;
        }

        .hotels-btn.primary {
          border-color: var(--ark-gold);
          background: var(--ark-gold);
          color: #050505;
        }

        .hotels-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.46);
          background: rgba(255,255,255,0.08);
          color: #fff;
        }

        .hotels-btn.primary:hover {
          background: var(--ark-gold-light);
          color: #050505;
        }

        .hotels-hero-panel {
          position: relative;
          min-height: min(72vh, 720px);
          border: 1px solid rgba(255,255,255,0.12);
          overflow: hidden;
          isolation: isolate;
          box-shadow: 0 44px 120px rgba(0,0,0,0.55);
        }

        .hotels-hero-panel img,
        .hotel-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hotels-hero-panel img {
          position: absolute;
          inset: 0;
          filter: saturate(1.08) contrast(1.03);
          animation: hotelsHeroFloat 18s ease-in-out infinite alternate;
        }

        .hotels-hero-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 28%, rgba(0,0,0,0.74) 100%);
          z-index: 1;
        }

        .hotels-floating-card {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(5,5,5,0.58);
          backdrop-filter: blur(22px);
          padding: 22px;
        }

        .hotels-floating-card h2 {
          color: #fff;
          font-size: clamp(24px, 3vw, 38px);
          margin-bottom: 10px;
          font-weight: 400;
        }

        .hotels-floating-card p {
          color: rgba(255,255,255,0.68);
          line-height: 1.55;
          margin: 0;
        }

        .hotels-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.08);
          margin: 0 auto 120px;
        }

        .hotels-stat {
          min-height: 150px;
          background: rgba(5,5,5,0.62);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hotels-stat strong {
          color: #fff;
          font-family: "Playfair Display", serif;
          font-size: clamp(42px, 6vw, 78px);
          line-height: 0.9;
          font-weight: 400;
        }

        .hotels-stat span {
          color: rgba(252,250,247,0.52);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hotels-intro {
          display: grid;
          grid-template-columns: 0.75fr 1fr;
          gap: clamp(28px, 6vw, 90px);
          align-items: start;
          padding: 0 0 92px;
        }

        .hotels-spatial {
          position: relative;
          min-height: 100svh;
          display: grid;
          align-items: end;
          margin: 0 calc(50% - 50vw) 120px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(5,5,5,0.12) 0%, rgba(5,5,5,0.74) 68%, #050505 100%),
            radial-gradient(circle at 50% 48%, rgba(224,194,141,0.14), transparent 34rem);
        }

        .hotel-3d-scene {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .hotels-spatial-copy {
          position: relative;
          z-index: 2;
          width: min(100% - 48px, 1440px);
          margin: 0 auto;
          padding: 0 0 72px;
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(320px, 0.5fr);
          gap: clamp(24px, 5vw, 80px);
          align-items: end;
        }

        .hotels-spatial h2 {
          color: #fff;
          font-family: "Playfair Display", serif;
          font-size: clamp(48px, 9vw, 134px);
          line-height: 0.9;
          margin: 18px 0 0;
          font-weight: 400;
        }

        .hotels-spatial-panel {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(5,5,5,0.52);
          backdrop-filter: blur(20px);
          padding: 26px;
        }

        .hotels-spatial-panel p {
          color: rgba(252,250,247,0.7);
          margin: 0 0 22px;
          line-height: 1.65;
        }

        .hotels-journey {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          margin-bottom: 120px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.08);
        }

        .hotels-journey-step {
          background: rgba(5,5,5,0.66);
          padding: 30px;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hotels-journey-step strong {
          color: var(--ark-gold-light);
          font-family: "Playfair Display", serif;
          font-size: 36px;
          font-weight: 400;
        }

        .hotels-journey-step p {
          color: rgba(252,250,247,0.62);
          margin: 28px 0 0;
          line-height: 1.62;
        }

        .hotels-intro h2,
        .hotels-final h2 {
          color: #fff;
          font-family: "Playfair Display", serif;
          font-size: clamp(42px, 7vw, 96px);
          line-height: 0.95;
          margin: 18px 0 0;
          font-weight: 400;
        }

        .hotels-pillars {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .hotels-pillar {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.045);
          padding: 24px;
          min-height: 210px;
          transition: transform .35s ease, border-color .35s ease, background .35s ease;
        }

        .hotels-pillar:hover {
          transform: translateY(-6px);
          border-color: rgba(224,194,141,0.46);
          background: rgba(224,194,141,0.08);
        }

        .hotels-pillar svg {
          color: var(--ark-gold-light);
          margin-bottom: 28px;
        }

        .hotels-pillar h3 {
          color: #fff;
          font-size: 19px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .hotels-pillar p {
          color: rgba(252,250,247,0.58);
          line-height: 1.6;
          margin: 0;
          font-size: 15px;
        }

        .hotels-catalog {
          display: grid;
          gap: 52px;
          padding-bottom: 120px;
        }

        .hotel-card {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.75fr);
          min-height: 620px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.045);
          overflow: hidden;
          box-shadow: 0 34px 100px rgba(0,0,0,0.35);
        }

        .hotel-card-alt {
          grid-template-columns: minmax(360px, 0.75fr) minmax(0, 1.05fr);
        }

        .hotel-card-alt .hotel-card-image {
          order: 2;
        }

        .hotel-card-image {
          min-height: 520px;
          overflow: hidden;
          background: #171717;
        }

        .hotel-card-content {
          padding: clamp(28px, 5vw, 64px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 36px;
        }

        .hotel-card-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-start;
        }

        .hotel-card h2 {
          color: #fff;
          font-family: "Playfair Display", serif;
          font-size: clamp(42px, 6vw, 82px);
          line-height: 0.92;
          margin: 16px 0 16px;
          font-weight: 400;
        }

        .hotel-card-tagline {
          color: rgba(255,255,255,0.34);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hotel-card p {
          color: rgba(252,250,247,0.66);
          font-size: 17px;
          line-height: 1.65;
          margin: 0;
        }

        .hotel-card-metric {
          min-width: 110px;
          text-align: right;
        }

        .hotel-card-metric strong {
          display: block;
          color: var(--ark-gold-light);
          font-family: "Playfair Display", serif;
          font-size: 48px;
          line-height: 0.9;
          font-weight: 400;
        }

        .hotel-card-metric span {
          display: block;
          margin-top: 10px;
          color: rgba(255,255,255,0.4);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hotel-card-specs {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .hotel-card-spec {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 52px;
          padding: 12px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: var(--ark-gold-light);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hotel-card-link {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #050505;
          background: var(--ark-gold);
          min-height: 52px;
          padding: 0 18px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: transform .35s ease, background .35s ease;
        }

        .hotel-card-link:hover {
          transform: translateY(-3px);
          background: var(--ark-gold-light);
        }

        .hotels-final {
          min-height: 82vh;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: clamp(30px, 6vw, 90px);
          align-items: center;
          padding: 112px 0 132px;
          border-top: 1px solid rgba(255,255,255,0.09);
        }

        .hotels-final p {
          color: rgba(252,250,247,0.66);
          font-size: 18px;
          line-height: 1.7;
          margin: 26px 0 0;
          max-width: 640px;
        }

        .hotels-final-panel {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          padding: clamp(24px, 5vw, 56px);
        }

        .hotels-final-panel ul {
          list-style: none;
          margin: 0 0 36px;
          padding: 0;
        }

        .hotels-final-panel li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: rgba(252,250,247,0.72);
          font-size: 14px;
        }

        .hotels-final-panel li span {
          color: var(--ark-gold-light);
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 10px;
          white-space: nowrap;
        }

        @keyframes hotelsHeroFloat {
          from { transform: scale(1.02) translate3d(-1%, -1%, 0); }
          to { transform: scale(1.09) translate3d(1%, 1%, 0); }
        }

        @media (max-width: 1120px) {
          .hotels-hero,
          .hotels-intro,
          .hotels-spatial-copy,
          .hotels-final {
            grid-template-columns: 1fr;
          }

          .hotels-hero {
            padding-top: 116px;
          }

          .hotels-hero-panel {
            min-height: 520px;
          }

          .hotel-card,
          .hotel-card-alt {
            grid-template-columns: 1fr;
          }

          .hotel-card-alt .hotel-card-image {
            order: 0;
          }

          .hotel-card {
            min-height: auto;
          }
        }

        @media (max-width: 760px) {
          .hotels-shell {
            width: min(100% - 28px, 1440px);
          }

          .hotels-hero {
            min-height: auto;
            padding: 110px 0 56px;
          }

          .hotels-hero-title {
            font-size: clamp(54px, 18vw, 88px);
          }

          .hotels-hero-panel {
            min-height: 420px;
          }

          .hotels-floating-card {
            left: 14px;
            right: 14px;
            bottom: 14px;
            padding: 18px;
          }

          .hotels-stats,
          .hotels-pillars,
          .hotels-journey,
          .hotel-card-specs {
            grid-template-columns: 1fr;
          }

          .hotels-stats {
            margin-bottom: 78px;
          }

          .hotels-stat {
            min-height: 118px;
          }

          .hotels-intro {
            padding-bottom: 64px;
          }

          .hotels-catalog {
            gap: 28px;
            padding-bottom: 76px;
          }

          .hotels-spatial {
            min-height: 760px;
            margin-bottom: 76px;
          }

          .hotels-spatial-copy {
            width: min(100% - 28px, 1440px);
            padding-bottom: 44px;
          }

          .hotels-journey {
            margin-bottom: 76px;
          }

          .hotel-card-image {
            min-height: 360px;
          }

          .hotel-card-top {
            display: block;
          }

          .hotel-card-metric {
            text-align: left;
            margin-top: 24px;
          }

          .hotel-card-link,
          .hotels-btn {
            width: 100%;
          }

          .hotels-final {
            padding: 76px 0 96px;
          }

          .hotels-final-panel li {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}} />

      <div ref={cursorRef} className="hotels-cursor" />
      <div className="hotels-noise" />

      <div className="hotels-shell">
        <section className="hotels-hero">
          <div>
            <div className="hotels-hero-kicker">
              <Building2 size={16} />
              The hospitality practice
            </div>
            <h1 className="hotels-hero-title">
              <span>Golden</span>
              <span className="accent">Inn.</span>
            </h1>
            <p className="hotels-hero-copy">
              A hospitality platform for hotels that feel cinematic, operate quietly, and scale with institutional precision across luxury, business, lifestyle, and heritage assets.
            </p>
            <div className="hotels-hero-actions">
              <Link className="hotels-btn primary" href="/contact">
                Start a project <ArrowUpRight size={16} />
              </Link>
              <a className="hotels-btn" href="#hotel-variants">
                Explore variants <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="hotels-hero-panel" aria-label="GoldenInn hotel arrival lounge">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85"
              alt="Sunlit luxury hotel with palm-lined pool and guest terraces"
            />
            <div className="hotels-floating-card">
              <h2>Designed for arrival.</h2>
              <p>From the first handoff to the last night audit, every touchpoint is composed for calm, speed, and memory.</p>
            </div>
          </div>
        </section>

        <section className="hotels-stats hotels-reveal" aria-label="GoldenInn operational metrics">
          {hotelStats.map(([value, label]) => (
            <div className="hotels-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="hotels-intro">
          <div className="hotels-reveal">
            <div className="hotels-eyebrow">
              <Sparkles size={16} />
              Operating standard
            </div>
            <h2>Hotels with a nervous system.</h2>
          </div>
          <div className="hotels-pillars">
            {pillars.map(({ icon: Icon, label, value }) => (
              <article className="hotels-pillar hotels-reveal" key={label}>
                <Icon size={28} strokeWidth={1.6} />
                <h3>{label}</h3>
                <p>{value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hotels-spatial" aria-label="Interactive GoldenInn 3D spatial engine">
          <Hotel3DScene />
          <div className="hotels-spatial-copy hotels-reveal">
            <div>
              <div className="hotels-eyebrow">
                <Sparkles size={16} />
                Spatial engine
              </div>
              <h2>Orbit the hotel before it exists.</h2>
            </div>
            <div className="hotels-spatial-panel">
              <p>
                A living 3D model turns the brand system into space: towers, service cores, pool decks, guest flows, and atmosphere moving together.
              </p>
              <Link className="hotels-btn primary" href="/hotels/luxury">
                Enter Luxury <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="hotels-journey hotels-reveal" aria-label="GoldenInn project journey">
          {hotelJourney.map(([step, detail], index) => (
            <article className="hotels-journey-step" key={step}>
              <div className="hotels-eyebrow">0{index + 1}</div>
              <div>
                <strong>{step}</strong>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="hotel-variants" className="hotels-catalog" aria-label="GoldenInn hotel variants">
          {hotelVariants.map((variant, index) => (
            <article className={`hotel-card ${index % 2 !== 0 ? "hotel-card-alt" : ""}`} key={variant.name}>
              <div className="hotel-card-image">
                <img src={variant.image} alt={`${variant.name} hotel interior and hospitality atmosphere`} loading="eager" />
              </div>

              <div className="hotel-card-content">
                <div>
                  <div className="hotel-card-top">
                    <div>
                      <div className="hotels-eyebrow">
                        <MapPinned size={15} />
                        Variant / 0{index + 1}
                      </div>
                      <h2>{variant.name}</h2>
                      <div className="hotel-card-tagline">{variant.tagline}</div>
                    </div>
                    <div className="hotel-card-metric">
                      <strong>{variant.metric}</strong>
                      <span>{variant.metricLabel}</span>
                    </div>
                  </div>
                  <p>{variant.desc}</p>
                </div>

                <div>
                  <div className="hotel-card-specs">
                    {variant.specs.map((spec) => (
                      <div className="hotel-card-spec" key={spec}>
                        <ChevronRight size={14} />
                        {spec}
                      </div>
                    ))}
                  </div>
                  <Link className="hotel-card-link" href={`/hotels/${variant.slug}`}>
                    Enter {variant.name} <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="hotels-final">
          <div className="hotels-reveal">
            <div className="hotels-eyebrow">
              <BedDouble size={16} />
              Archive of excellence
            </div>
            <h2>Build a hotel guests remember and teams can actually run.</h2>
            <p>
              GoldenInn connects brand, architecture, digital operations, and hospitality intelligence into one coherent guest experience.
            </p>
          </div>

          <div className="hotels-final-panel hotels-reveal">
            <ul>
              <li>Brand and concept system <span>Identity</span></li>
              <li>Room experience and service flows <span>Guest UX</span></li>
              <li>Operational dashboards and automations <span>Ops OS</span></li>
              <li>Launch playbook and growth model <span>Scale</span></li>
            </ul>
            <Link className="hotels-btn primary" href="/contact">
              Request access <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
