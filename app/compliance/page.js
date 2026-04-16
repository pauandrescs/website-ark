import Link from 'next/link';

export const metadata = {
  title: 'Compliance Overview — ARK Platforms',
};

export default function Compliance() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Legal & Compliance</div>
          <h1>Compliance Framework</h1>
          <p>Our comprehensive approach to legal, regulatory, and ethical standards across all operations.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Our Commitment</div>
          <h2 style={{ marginBottom: 28 }}>Excellence through compliance</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms maintains the highest standards of legal and regulatory compliance across all jurisdictions where we operate. Our framework ensures transparency, accountability, and ethical business practices.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 1200 }}>
          <div className="section-eyebrow">Legal Framework</div>
          <h2 style={{ marginBottom: 40 }}>Terms & policies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 35 }}>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Terms and Conditions</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Comprehensive terms governing our services, client relationships, and operational standards.
              </p>
              <Link href="/terms" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read Terms →</Link>
            </div>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Privacy Policy</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                GDPR and CCPA-compliant data protection framework covering collection, processing, and user rights.
              </p>
              <Link href="/privacy" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read Privacy Policy →</Link>
            </div>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Cookie Policy</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Transparent cookie usage across our digital properties with user control options.
              </p>
              <Link href="/cookies" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read Cookie Policy →</Link>
            </div>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Data Protection</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Technical and organizational safeguards ensuring data security and regulatory compliance.
              </p>
              <Link href="/data-protection" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read Data Protection →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 1200 }}>
          <div className="section-eyebrow">Accessibility Standards</div>
          <h2 style={{ marginBottom: 40 }}>Inclusive design & accessibility</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 35 }}>
            <div style={{ background: 'var(--ark-ivory)', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Accessibility Statement</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Our commitment to WCAG 2.1 Level AA compliance and assistive technology support.
              </p>
              <Link href="/accessibility" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read Statement →</Link>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>WCAG 2.1 Compliance</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Detailed implementation of Web Content Accessibility Guidelines Level AA standards.
              </p>
              <Link href="/wcag" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read WCAG Details →</Link>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Accessibility Reports</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Audit results, compliance metrics, and remediation progress tracking.
              </p>
              <Link href="/reports" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>View Reports →</Link>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Report an Issue</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Help us improve accessibility by reporting barriers or technical issues.
              </p>
              <Link href="/feedback" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Submit Report →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 1200 }}>
          <div className="section-eyebrow">Regulatory Compliance</div>
          <h2 style={{ marginBottom: 40 }}>International standards & certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 35 }}>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>GDPR Compliance</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                European Union General Data Protection Regulation implementation and compliance framework.
              </p>
              <Link href="/gdpr" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read GDPR Framework →</Link>
            </div>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>CCPA & Privacy Rights</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                California Consumer Privacy Act compliance and individual privacy rights framework.
              </p>
              <Link href="/ccpa" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read CCPA Framework →</Link>
            </div>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>SOC 2 Certification</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Service Organization Control 2 Type II certification for security, availability, and compliance.
              </p>
              <Link href="/soc2" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read SOC 2 Details →</Link>
            </div>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Security Audits</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Comprehensive security assessment program with penetration testing and vulnerability management.
              </p>
              <Link href="/security-audits" style={{ color: '#b89b5e', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Read Audit Program →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Certifications & Standards</div>
          <h2 style={{ marginBottom: 30 }}>Current compliance status</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, maxWidth: 900 }}>
            <div style={{ background: 'var(--ark-ivory)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#b89b5e', marginBottom: 8 }}>✓</div>
              <p style={{ color: '#5a5a5a', fontSize: 14 }}>GDPR Compliant</p>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#b89b5e', marginBottom: 8 }}>✓</div>
              <p style={{ color: '#5a5a5a', fontSize: 14 }}>CCPA Compliant</p>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#b89b5e', marginBottom: 8 }}>✓</div>
              <p style={{ color: '#5a5a5a', fontSize: 14 }}>WCAG 2.1 AA</p>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#b89b5e', marginBottom: 8 }}>✓</div>
              <p style={{ color: '#5a5a5a', fontSize: 14 }}>SOC 2 Type II</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Contact Compliance</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Questions about our compliance?</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            Our legal and compliance teams are available to discuss our frameworks, certifications, and implementation details.
          </p>
          <Link href="/contact" className="btn-primary">Contact Compliance Team</Link>
        </div>
      </section>
    </>
  );
}
