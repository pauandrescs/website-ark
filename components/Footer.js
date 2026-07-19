import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

const COLUMNS = [
  {
    title: 'Platform',
    links: [
      { href: '/software', label: 'Software & Platforms' },
      { href: '/hotels', label: 'Hospitality' },
      { href: '/real-estate', label: 'Real Estate' },
      { href: '/finance', label: 'Finance & Advisory' },
      { href: '/design', label: 'Design & Product' },
    ],
  },
  {
    title: 'Investors',
    links: [
      { href: '/contact', label: 'Request the Deck' },
      { href: '/contact', label: 'Book a Call' },
      { href: '/about', label: 'The Thesis' },
      { href: '/audits', label: 'Audits & Reporting' },
      { href: '/blog', label: 'Journal' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About ARK' },
      { href: '/contact', label: 'Contact' },
      { href: '/login', label: 'Investor Login' },
      { href: '/register', label: 'Request Access' },
    ],
  },
];

const LEGAL = [
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/data-protection', label: 'Data Protection' },
  { href: '/gdpr', label: 'GDPR' },
  { href: '/accessibility', label: 'Accessibility' },
];

const SOCIALS = [
  {
    href: 'https://linkedin.com/company/arkplatforms',
    label: 'LinkedIn',
    icon: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75v6.56h-4v-5.82c0-1.39-.03-3.17-2-3.17-2 0-2.3 1.5-2.3 3.06v5.93H9v-12z',
  },
  {
    href: 'https://twitter.com/arkplatforms',
    label: 'X',
    icon: 'M18.9 2H22l-7.1 8.1L23.2 22h-6.6l-5.2-6.8L5.5 22H2.4l7.6-8.7L1.2 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.1 3.9H5.2L17.7 20z',
  },
  {
    href: 'https://instagram.com/arkplatforms',
    label: 'Instagram',
    icon: 'M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.8.25 2.2.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.4.36 1 .42 2.2.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 1.8-.42 2.2a3.7 3.7 0 01-.9 1.38 3.7 3.7 0 01-1.38.9c-.4.17-1 .36-2.2.42-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.8-.25-2.2-.42a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-1.8.42-2.2.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.05A6.75 6.75 0 1012 18.75 6.75 6.75 0 0012 5.25zm0 11.13A4.38 4.38 0 1112 7.6a4.38 4.38 0 010 8.78zm6.9-11.4a1.58 1.58 0 11-3.15 0 1.58 1.58 0 013.15 0z',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent" aria-hidden="true" />
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo">ARK<span>.</span>PLATFORMS</span>
            <p>
              A diversified investment platform building and operating companies
              across software, hospitality, and real estate — engineered for
              durable, long-term returns.
            </p>
            <div className="footer-contact">
              <a href="mailto:info@arkplatforms.eu">info@arkplatforms.eu</a>
              <span>Madrid · Lisboa · London</span>
            </div>
          </div>

          <div className="footer-news">
            <h4>The ARK Letter</h4>
            <p>A quarterly note on capital allocation and operating discipline. No noise, no marketing.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="footer-cols">
          {COLUMNS.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h4>Connect</h4>
            <div className="footer-social">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
            <Link href="/contact" className="footer-cta-link">
              Request the Deck →
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal-links">
            {LEGAL.map((l) => (
              <Link key={l.label} href={l.href}>{l.label}</Link>
            ))}
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} ARK Platforms, Inc. — All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
