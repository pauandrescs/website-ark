"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowLeft,
  ArrowUpRight,
  BedDouble,
  ChevronRight,
  ConciergeBell,
  Gem,
  Layers3,
  Sparkles,
} from "lucide-react";
import Hotel3DScene from "../Hotel3DScene";

gsap.registerPlugin(ScrollTrigger);

export default function HotelCategoryClient({ variant }) {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.1 })
        .to(".category-kicker, .category-title span, .category-copy, .category-actions", {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.08,
          duration: 1,
          ease: "power4.out",
        })
        .fromTo(
          ".category-hero-image",
          { scale: 1.1, opacity: 0.35 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
          "-=0.8"
        );

      gsap.utils.toArray(".category-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 58, opacity: 0, filter: "blur(12px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%" },
          }
        );
      });

      gsap.utils.toArray(".category-gallery-card img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.16 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="category-page" style={{ "--category-accent": variant.accent }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .category-page {
          min-height: 100vh;
          overflow-x: hidden;
          color: var(--ark-ivory);
          background:
            radial-gradient(circle at 78% 10%, color-mix(in srgb, var(--category-accent) 24%, transparent), transparent 28rem),
            linear-gradient(180deg, #050505 0%, #11100e 52%, #050505 100%);
        }

        .category-shell {
          position: relative;
          z-index: 2;
          width: min(100% - 48px, 1440px);
          margin: 0 auto;
        }

        .category-back {
          position: fixed;
          left: 28px;
          bottom: 28px;
          z-index: 20;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          padding: 0 16px;
          border: 1px solid rgba(255,255,255,0.13);
          background: rgba(5,5,5,0.58);
          backdrop-filter: blur(18px);
          color: #fff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: transform .35s ease, border-color .35s ease;
        }

        .category-back:hover {
          transform: translateY(-3px);
          border-color: var(--category-accent);
        }

        .category-hero {
          min-height: 100svh;
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(360px, 0.72fr);
          gap: clamp(32px, 7vw, 110px);
          align-items: center;
          padding: 126px 0 76px;
        }

        .category-kicker,
        .category-title span,
        .category-copy,
        .category-actions {
          opacity: 0;
          transform: translateY(34px);
          filter: blur(14px);
        }

        .category-kicker,
        .category-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--category-accent);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .category-title {
          margin: 24px 0;
          color: #fff;
          font-family: "Playfair Display", serif;
          font-size: clamp(64px, 12vw, 176px);
          line-height: 0.82;
          letter-spacing: 0;
        }

        .category-title span {
          display: block;
        }

        .category-title .soft {
          color: var(--category-accent);
          font-style: italic;
        }

        .category-copy {
          max-width: 760px;
          color: rgba(252,250,247,0.7);
          font-size: clamp(17px, 2vw, 22px);
          line-height: 1.62;
        }

        .category-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 36px;
        }

        .category-btn {
          min-height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0 20px;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: transform .35s ease, background .35s ease, border-color .35s ease, color .35s ease;
        }

        .category-btn.primary {
          color: #050505;
          background: var(--category-accent);
          border-color: var(--category-accent);
        }

        .category-btn:hover {
          transform: translateY(-3px);
          border-color: var(--category-accent);
          background: rgba(255,255,255,0.08);
        }

        .category-btn.primary:hover {
          color: #050505;
          background: color-mix(in srgb, var(--category-accent) 86%, white);
        }

        .category-hero-visual {
          position: relative;
          min-height: min(74vh, 740px);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 44px 120px rgba(0,0,0,0.52);
        }

        .category-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          inset: 0;
        }

        .category-hero-visual::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 18%, rgba(0,0,0,0.8) 100%);
        }

        .category-floating-specs {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 22px;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .category-floating-specs span {
          min-height: 48px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(5,5,5,0.56);
          backdrop-filter: blur(18px);
          color: var(--category-accent);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .category-3d {
          position: relative;
          min-height: 92svh;
          margin: 0 calc(50% - 50vw) 112px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(5,5,5,0.22) 0%, rgba(5,5,5,0.78) 76%, #050505 100%),
            radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--category-accent) 18%, transparent), transparent 32rem);
        }

        .hotel-3d-scene {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .category-3d-copy {
          position: absolute;
          left: 50%;
          bottom: 58px;
          transform: translateX(-50%);
          width: min(100% - 48px, 1440px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.46fr);
          gap: clamp(24px, 5vw, 76px);
          align-items: end;
          z-index: 2;
        }

        .category-3d-copy h2,
        .category-section-title {
          color: #fff;
          font-family: "Playfair Display", serif;
          font-size: clamp(42px, 8vw, 112px);
          line-height: 0.95;
          font-weight: 400;
          margin: 16px 0 0;
        }

        .category-3d-card {
          border: 1px solid rgba(255,255,255,0.13);
          background: rgba(5,5,5,0.58);
          backdrop-filter: blur(20px);
          padding: 26px;
          color: rgba(252,250,247,0.7);
          line-height: 1.65;
        }

        .category-grid-section {
          display: grid;
          grid-template-columns: 0.7fr 1fr;
          gap: clamp(28px, 6vw, 86px);
          padding-bottom: 112px;
          align-items: start;
        }

        .category-list {
          display: grid;
          gap: 12px;
        }

        .category-list-item {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.045);
          padding: 24px;
          min-height: 106px;
          display: flex;
          align-items: center;
          gap: 16px;
          color: rgba(252,250,247,0.72);
          font-size: 16px;
          transition: transform .35s ease, border-color .35s ease, background .35s ease;
        }

        .category-list-item:hover {
          transform: translateX(8px);
          border-color: var(--category-accent);
          background: color-mix(in srgb, var(--category-accent) 10%, transparent);
        }

        .category-list-item svg {
          color: var(--category-accent);
          flex: 0 0 auto;
        }

        .category-gallery {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
          padding-bottom: 118px;
        }

        .category-gallery-card {
          min-height: 640px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255,255,255,0.1);
          background: #111;
        }

        .category-gallery-card.small {
          min-height: 310px;
        }

        .category-gallery-stack {
          display: grid;
          gap: 18px;
        }

        .category-gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .category-finale {
          min-height: 76vh;
          display: grid;
          grid-template-columns: 1fr 0.78fr;
          gap: clamp(28px, 6vw, 86px);
          align-items: center;
          padding: 104px 0 132px;
          border-top: 1px solid rgba(255,255,255,0.09);
        }

        .category-finale p {
          color: rgba(252,250,247,0.68);
          font-size: 18px;
          line-height: 1.7;
          margin-top: 24px;
          max-width: 680px;
        }

        .category-metric-card {
          border: 1px solid rgba(255,255,255,0.11);
          background: rgba(255,255,255,0.05);
          padding: clamp(28px, 5vw, 58px);
        }

        .category-metric-card strong {
          display: block;
          color: var(--category-accent);
          font-family: "Playfair Display", serif;
          font-size: clamp(70px, 11vw, 140px);
          line-height: 0.84;
          font-weight: 400;
        }

        .category-metric-card span {
          display: block;
          color: rgba(252,250,247,0.55);
          margin: 18px 0 34px;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        @media (max-width: 1060px) {
          .category-hero,
          .category-3d-copy,
          .category-grid-section,
          .category-finale {
            grid-template-columns: 1fr;
          }

          .category-hero-visual {
            min-height: 520px;
          }

          .category-gallery {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .category-shell {
            width: min(100% - 28px, 1440px);
          }

          .category-back {
            left: 14px;
            right: 14px;
            bottom: 14px;
          }

          .category-hero {
            min-height: auto;
            padding: 108px 0 58px;
          }

          .category-title {
            font-size: clamp(54px, 18vw, 88px);
          }

          .category-hero-visual {
            min-height: 430px;
          }

          .category-floating-specs {
            grid-template-columns: 1fr;
            left: 14px;
            right: 14px;
            bottom: 14px;
          }

          .category-actions,
          .category-btn {
            width: 100%;
          }

          .category-3d {
            min-height: 760px;
            margin-bottom: 76px;
          }

          .category-3d-copy {
            width: min(100% - 28px, 1440px);
            bottom: 42px;
          }

          .category-grid-section,
          .category-gallery {
            padding-bottom: 78px;
          }

          .category-gallery-card,
          .category-gallery-card.small {
            min-height: 360px;
          }

          .category-finale {
            padding: 76px 0 112px;
          }
        }
      `}} />

      <Link className="category-back" href="/hotels">
        <ArrowLeft size={15} />
        Hotels
      </Link>

      <div className="category-shell">
        <section className="category-hero">
          <div>
            <div className="category-kicker">
              <Sparkles size={16} />
              GoldenInn / {variant.tagline}
            </div>
            <h1 className="category-title">
              <span>{variant.name}</span>
              <span className="soft">Hotels.</span>
            </h1>
            <p className="category-copy">{variant.longDesc}</p>
            <div className="category-actions">
              <Link className="category-btn primary" href="/contact">
                Build this category <ArrowUpRight size={16} />
              </Link>
              <a className="category-btn" href="#signature">
                View signature <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="category-hero-visual">
            <img className="category-hero-image" src={variant.image} alt={`${variant.name} GoldenInn hotel concept`} />
            <div className="category-floating-specs">
              {variant.specs.map((spec) => (
                <span key={spec}>
                  <ChevronRight size={13} />
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="category-3d" id="signature" aria-label={`${variant.name} 3D signature model`}>
          <Hotel3DScene accent={variant.accent} compact />
          <div className="category-3d-copy category-reveal">
            <div>
              <div className="category-eyebrow">
                <Layers3 size={16} />
                Signature model
              </div>
              <h2>{variant.mood}</h2>
            </div>
            <div className="category-3d-card">
              The 3D spatial engine adapts to this category's operational profile: arrival rituals, room mix, sensory control, staff routing, and the visible brand atmosphere.
            </div>
          </div>
        </section>

        <section className="category-grid-section">
          <div className="category-reveal">
            <div className="category-eyebrow">
              <ConciergeBell size={16} />
              Guest rituals
            </div>
            <h2 className="category-section-title">The moments people remember.</h2>
          </div>
          <div className="category-list">
            {variant.rituals.map((ritual) => (
              <div className="category-list-item category-reveal" key={ritual}>
                <Gem size={20} strokeWidth={1.5} />
                {ritual}
              </div>
            ))}
          </div>
        </section>

        <section className="category-gallery category-reveal" aria-label={`${variant.name} visual gallery`}>
          <div className="category-gallery-card">
            <img src={variant.gallery[0]} alt={`${variant.name} hospitality atmosphere`} loading="lazy" />
          </div>
          <div className="category-gallery-stack">
            <div className="category-gallery-card small">
              <img src={variant.gallery[1]} alt={`${variant.name} hotel service detail`} loading="lazy" />
            </div>
            <div className="category-gallery-card small">
              <img src={variant.gallery[2]} alt={`${variant.name} guest space`} loading="lazy" />
            </div>
          </div>
        </section>

        <section className="category-grid-section">
          <div className="category-reveal">
            <div className="category-eyebrow">
              <BedDouble size={16} />
              Room program
            </div>
            <h2 className="category-section-title">Spaces with a job to do.</h2>
          </div>
          <div className="category-list">
            {variant.rooms.map((room) => (
              <div className="category-list-item category-reveal" key={room}>
                <ChevronRight size={18} />
                {room}
              </div>
            ))}
          </div>
        </section>

        <section className="category-finale">
          <div className="category-reveal">
            <div className="category-eyebrow">
              <Sparkles size={16} />
              Category intelligence
            </div>
            <h2 className="category-section-title">A brand world with an operating brain.</h2>
            <p>{variant.desc}</p>
          </div>
          <div className="category-metric-card category-reveal">
            <strong>{variant.metric}</strong>
            <span>{variant.metricLabel}</span>
            <Link className="category-btn primary" href="/contact">
              Request concept brief <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
