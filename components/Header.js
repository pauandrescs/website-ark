'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PRIMARY_NAV = [
  { href: '/software', label: 'Software' },
  { href: '/design', label: 'Design' },
  { href: '/real-estate', label: 'Real Estate' },
  { href: '/hotels', label: 'Hotels' },
  { href: '/finance', label: 'Finance' },
  { href: '/audits', label: 'Audits' },
  { href: '/courses', label: 'Courses' },
];
const SECONDARY_NAV = [
  { href: '/blog', label: 'Journal' },
  { href: '/authors', label: 'Contributors' },
  { href: '/contribute', label: 'Write for ARK' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">ARK<span> </span>PLATFORMS</Link>

          <nav className="nav">
            {PRIMARY_NAV.map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          </nav>

          <div className="header-right">
            <Link href="/register" className="header-cta desktop-only">Join ARK</Link>
            <button
              className="hamburger"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
            >
              <span className={open ? 'line l1 open' : 'line l1'} />
              <span className={open ? 'line l2 open' : 'line l2'} />
              <span className={open ? 'line l3 open' : 'line l3'} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-eyebrow">Practices</div>
          <nav className="mobile-nav">
            {PRIMARY_NAV.map(n => (
              <Link key={n.href} href={n.href} className={pathname === n.href ? 'active' : ''}>
                <span className="mobile-nav-label">{n.label}</span>
                <span className="mobile-nav-arrow">→</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-menu-eyebrow" style={{ marginTop: 44 }}>The Journal &amp; Company</div>
          <nav className="mobile-nav">
            {SECONDARY_NAV.map(n => (
              <Link key={n.href} href={n.href} className={pathname === n.href ? 'active' : ''}>
                <span className="mobile-nav-label">{n.label}</span>
                <span className="mobile-nav-arrow">→</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/register" className="btn-primary">Join ARK</Link>
              <Link href="/login" className="btn-ghost" style={{ margin: 0 }}>Sign In</Link>
            </div>
            <p className="mobile-menu-contact">hello@arkplatforms.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
