import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">ARK<span style={{ color: '#b89b5e' }}>.</span>PLATFORMS</span>
            <p>A multidisciplinary studio engineering software, spaces, and strategies for clients who expect nothing less than excellence.</p>
            <div style={{ marginTop: 24, lineHeight: 1.7, color: '#bfbab0' }}>
              <strong>Contact</strong>
              <div>info@arkplatforms.eu</div>
              <div>+34 91 123 4567</div>
              <div>Madrid · Lisboa · London</div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Technology</h4>
            <ul>
              <li><Link href="/software">Software Development</Link></li>
              <li><Link href="/apps">Mobile Apps</Link></li>
              <li><Link href="/webs">Web Platforms</Link></li>
              <li><Link href="/uiux">UI / UX Design</Link></li>
              <li><Link href="/ai-automation">AI & Automation</Link></li>
              <li><Link href="/infrastructure">Infrastructure & DevOps</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Assets</h4>
            <ul>
              <li><Link href="/real-estate">Real Estate</Link></li>
              <li><Link href="/hotels">Hotels</Link></li>
              <li><Link href="/finance">Finance</Link></li>
              <li><Link href="/audits">Audits</Link></li>
              <li><Link href="/contact">Capital Advisory</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Education</h4>
            <ul>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/courses#mentorship">Mentorship</Link></li>
              <li><Link href="/courses#workshops">Workshops</Link></li>
              <li><Link href="/blog">Journal</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/authors">Contributors</Link></li>
              <li><Link href="/contribute">Write for ARK</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/login">Sign In</Link></li>
              <li><Link href="/register">Join</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-extra" style={{ marginTop: 48 }}>
          <div className="footer-extra-col" style={{ marginBottom: 30, maxWidth: 420 }}>
            <h4>The ARK Letter</h4>
            <p style={{ color: '#bfbab0', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
              Monthly dispatches from our partners covering strategic insights on product design, real estate development, financial stewardship, and operating excellence. Crafted for operators, investors, and builders who think in decades.
            </p>
            <p style={{ color: '#7a7a7a', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              One essay, once a month. No marketing, no noise, no data collection. Just ideas worth thinking about.
            </p>
            <NewsletterForm />
          </div>
          <div className="footer-extra-col" style={{ marginBottom: 30 }}>
            <h4>Why ARK</h4>
            <ul style={{ color: '#bfbab0', fontSize: 14 }}>
              <li style={{ marginBottom: 8 }}>Small, senior-led teams</li>
              <li style={{ marginBottom: 8 }}>Confidential, long-term work</li>
              <li style={{ marginBottom: 8 }}>Cross-practice collaboration</li>
              <li>Ideas that are built to last</li>
            </ul>
          </div>
          <div className="footer-extra-col" style={{ marginBottom: 30 }}>
            <h4>Community</h4>
            <ul style={{ color: '#bfbab0', fontSize: 14 }}>
              <li style={{ marginBottom: 8 }}><Link href="https://twitter.com/arkplatforms" target="_blank" rel="noopener noreferrer" style={{ color: '#b89b5e', textDecoration: 'none' }}>Twitter / X</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="https://instagram.com/arkplatforms" target="_blank" rel="noopener noreferrer" style={{ color: '#b89b5e', textDecoration: 'none' }}>Instagram</Link></li>
              <li style={{ marginBottom: 8 }}><Link href="https://linkedin.com/company/arkplatforms" target="_blank" rel="noopener noreferrer" style={{ color: '#b89b5e', textDecoration: 'none' }}>LinkedIn</Link></li>
              <li><Link href="/blog" style={{ color: '#b89b5e', textDecoration: 'none' }}>Follow the Journal</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2a2a2a', marginTop: 40, paddingTop: 40 }}>
          <div className="footer-legal">
            <h4 style={{ marginBottom: 20 }}>Legal</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30 }}>
              <div>
                <h5 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: 'var(--ark-ivory)' }}>Terms & Policies</h5>
                <ul style={{ color: '#bfbab0', fontSize: 13, lineHeight: 1.8 }}>
                  <li><Link href="/terms" style={{ color: '#b89b5e', textDecoration: 'none' }}>Terms and Conditions</Link></li>
                  <li><Link href="/privacy" style={{ color: '#b89b5e', textDecoration: 'none' }}>Privacy Policy</Link></li>
                  <li><Link href="/cookies" style={{ color: '#b89b5e', textDecoration: 'none' }}>Cookie Policy</Link></li>
                  <li><Link href="/data-protection" style={{ color: '#b89b5e', textDecoration: 'none' }}>Data Protection</Link></li>
                </ul>
              </div>
              <div>
                <h5 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: 'var(--ark-ivory)' }}>Accessibility</h5>
                <ul style={{ color: '#bfbab0', fontSize: 13, lineHeight: 1.8 }}>
                  <li><Link href="/accessibility" style={{ color: '#b89b5e', textDecoration: 'none' }}>Accessibility Statement</Link></li>
                  <li><Link href="/wcag" style={{ color: '#b89b5e', textDecoration: 'none' }}>WCAG 2.1 Compliance</Link></li>
                  <li><Link href="/reports" style={{ color: '#b89b5e', textDecoration: 'none' }}>Accessibility Reports</Link></li>
                  <li><Link href="/feedback" style={{ color: '#b89b5e', textDecoration: 'none' }}>Report an Issue</Link></li>
                </ul>
              </div>
              <div>
                <h5 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: 'var(--ark-ivory)' }}>Compliance</h5>
                <ul style={{ color: '#bfbab0', fontSize: 13, lineHeight: 1.8 }}>
                  <li><Link href="/gdpr" style={{ color: '#b89b5e', textDecoration: 'none' }}>GDPR Compliance</Link></li>
                  <li><Link href="/ccpa" style={{ color: '#b89b5e', textDecoration: 'none' }}>CCPA & Privacy Rights</Link></li>
                  <li><Link href="/soc2" style={{ color: '#b89b5e', textDecoration: 'none' }}>SOC 2 Certification</Link></li>
                  <li><Link href="/audits" style={{ color: '#b89b5e', textDecoration: 'none' }}>Security Audits</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid #2a2a2a', marginTop: 40, paddingTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ color: '#bfbab0', fontSize: 13 }}>
            © {new Date().getFullYear()} ARK Platforms, Inc. All rights reserved. Designed and engineered with discipline.
          </div>
          <div style={{ color: '#bfbab0', fontSize: 13 }}>
            Based in Madrid, Lisboa, and London.
          </div>
        </div>
      </div>
    </footer>
  );
}
