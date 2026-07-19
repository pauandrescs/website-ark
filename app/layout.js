import './globals.css';
import ConditionalHeader from '../components/ConditionalHeader';
import ConditionalFooter from '../components/ConditionalFooter';
import CookieModal from '../components/CookieModal';
import CookieBanner from '../components/CookieBanner';

const SITE_URL = 'https://www.arkplatforms.eu';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ARK Platforms — Software, Design, Real Estate, Hospitality & Finance',
    template: '%s | ARK Platforms',
  },
  description:
    'ARK Platforms is a multidisciplinary studio engineering bespoke software, digital experiences, boutique real estate, hospitality, and financial strategy for discerning clients worldwide.',
  keywords: [
    'software development', 'custom software', 'web development', 'Next.js agency',
    'UI UX design', 'product design', 'real estate advisory', 'boutique hotels',
    'hospitality technology', 'financial advisory', 'audit services',
    'online courses', 'technology consulting', 'ARK Platforms',
  ],
  authors: [{ name: 'ARK Platforms' }],
  creator: 'ARK Platforms',
  publisher: 'ARK Platforms',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'ARK Platforms',
    title: 'ARK Platforms — Engineered Excellence, Across Every Discipline',
    description:
      'A multidisciplinary studio crafting software, spaces, and strategies for clients who expect nothing less than excellence.',
    images: [{
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80',
      width: 1200, height: 630, alt: 'ARK Platforms',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARK Platforms — Engineered Excellence',
    description: 'Software, design, real estate, hospitality, and financial craft — under one standard.',
    creator: '@arkplatforms',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'technology',
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ARK Platforms',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Multidisciplinary studio for software, design, real estate, hospitality, finance, audits, and education.',
  email: 'hello@arkplatforms.eu',
  foundingDate: '2016',
  sameAs: [
    'https://www.linkedin.com/company/arkplatforms',
    'https://twitter.com/arkplatforms',
    'https://www.instagram.com/arkplatforms',
  ],
  address: { '@type': 'PostalAddress', addressCountry: 'ES' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@arkplatforms.eu',
    availableLanguage: ['English', 'Spanish', 'German', 'French', 'Norwegian'],
  },
};

import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Providers from '../components/Providers';
import Script from 'next/script';

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <div className="scroll-progress" aria-hidden="true"><span /></div>
        <button className="back-to-top" aria-label="Back to top" type="button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
        </button>
        <Providers session={session}>
          <ConditionalHeader />
          <main>{children}</main>
          <ConditionalFooter />
          <CookieModal />
          <CookieBanner />
        </Providers>
        <Script id="reveal-animations" strategy="afterInteractive">
          {`
            (function () {
              const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

              // ---------- Scroll reveal + staggered children ----------
              const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (!entry.isIntersecting) return;
                  const el = entry.target;
                  el.classList.add('active');
                  // stagger direct .stagger-item descendants
                  const items = el.querySelectorAll('[data-stagger] > *, .stagger-item');
                  items.forEach((child, i) => {
                    child.style.transitionDelay = (i * 90) + 'ms';
                    child.classList.add('active');
                  });
                  revealObserver.unobserve(el);
                });
              }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

              // ---------- Animated counters ----------
              const easeOut = (t) => 1 - Math.pow(1 - t, 3);
              const runCounter = (el) => {
                const target = parseFloat(el.dataset.count);
                if (isNaN(target)) return;
                const decimals = parseInt(el.dataset.decimals || '0', 10);
                const prefix = el.dataset.prefix || '';
                const suffix = el.dataset.suffix || '';
                if (reduce) { el.textContent = prefix + target.toFixed(decimals) + suffix; return; }
                const dur = 1600; const start = performance.now();
                const tick = (now) => {
                  const p = Math.min((now - start) / dur, 1);
                  const val = target * easeOut(p);
                  el.textContent = prefix + val.toFixed(decimals) + suffix;
                  if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
              };
              const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (!entry.isIntersecting) return;
                  runCounter(entry.target);
                  counterObserver.unobserve(entry.target);
                });
              }, { threshold: 0.6 });

              // ---------- Parallax + header state + scroll progress ----------
              const parallaxEls = () => Array.from(document.querySelectorAll('[data-parallax]'));
              const progressBar = document.querySelector('.scroll-progress span');
              const header = () => document.querySelector('.header');
              let ticking = false;
              const onScroll = () => {
                if (ticking) return;
                ticking = true;
                requestAnimationFrame(() => {
                  const y = window.scrollY;
                  if (progressBar) {
                    const h = document.documentElement.scrollHeight - window.innerHeight;
                    progressBar.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
                  }
                  const hd = header();
                  if (hd) hd.classList.toggle('scrolled', y > 40);
                  const btt = document.querySelector('.back-to-top');
                  if (btt) btt.classList.toggle('show', y > 600);
                  if (!reduce) {
                    parallaxEls().forEach((el) => {
                      const speed = parseFloat(el.dataset.parallax) || 0.15;
                      // only apply while element is roughly in view
                      if (y < window.innerHeight * 1.2) {
                        el.style.transform = 'translate3d(0,' + (y * speed) + 'px,0)';
                      }
                    });
                  }
                  ticking = false;
                });
              };

              const scan = () => {
                document.querySelectorAll('.reveal:not(.active)').forEach((el) => revealObserver.observe(el));
                document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));
              };

              const init = () => { scan(); onScroll(); };
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
              } else { init(); }
              window.addEventListener('scroll', onScroll, { passive: true });
              window.addEventListener('resize', onScroll, { passive: true });

              // Back to top
              document.addEventListener('click', (e) => {
                if (e.target.closest('.back-to-top')) {
                  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
                }
              });

              // Re-scan on client route changes
              const mo = new MutationObserver(() => scan());
              mo.observe(document.body, { childList: true, subtree: true });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
