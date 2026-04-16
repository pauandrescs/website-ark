import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieModal from '../components/CookieModal';
import CookieBanner from '../components/CookieBanner';

const SITE_URL = 'https://www.arkplatforms.com';

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
  email: 'hello@arkplatforms.com',
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
    email: 'hello@arkplatforms.com',
    availableLanguage: ['English', 'Spanish'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieModal />
        <CookieBanner />
      </body>
    </html>
  );
}
