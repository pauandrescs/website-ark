import Link from 'next/link';

export const metadata = {
  title: 'Data Protection — ARK Platforms',
};

export default function DataProtection() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Security & Privacy</div>
          <h1>Data Protection</h1>
          <p>Comprehensive measures to protect your data and maintain compliance with international standards.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Protection Framework</div>
          <h2 style={{ marginBottom: 28 }}>Multi-layered data protection</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms implements comprehensive data protection measures that combine technical safeguards, organizational practices, and legal compliance frameworks to ensure the security and privacy of all personal information.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Technical Safeguards</div>
          <h2 style={{ marginBottom: 30 }}>Infrastructure security</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 30 }}>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Encryption</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption. Encryption keys are managed securely with regular rotation.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Access Controls</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Access is restricted using the principle of least privilege. Multi-factor authentication is required for sensitive systems and elevated access is logged.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Firewalls & DDoS</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Advanced firewalls protect against unauthorized access and malicious attacks. DDoS protection prevents denial-of-service attacks.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Intrusion Detection</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Continuous monitoring detects and responds to unauthorized access attempts or suspicious activities in real-time.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Secure Development</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Applications are developed following secure coding practices with code reviews, vulnerability scanning, and penetration testing.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Backup & Recovery</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Regular encrypted backups are maintained with automated testing of recovery procedures to ensure business continuity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Organizational Practices</div>
          <h2 style={{ marginBottom: 30 }}>Process & governance</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            Data protection is embedded in our organizational culture and processes:
          </p>
          <ul style={{ maxWidth: 800, lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
            <li>Data Protection Officer overseeing compliance</li>
            <li>Privacy-by-design principles in all new projects</li>
            <li>Mandatory staff training on data protection</li>
            <li>Confidentiality agreements with all employees</li>
            <li>Regular internal audits and risk assessments</li>
            <li>Data protection impact assessments for high-risk processing</li>
            <li>Incident response procedures with notification protocols</li>
            <li>Third-party vendor assessment and monitoring</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Compliance Standards</div>
          <h2 style={{ marginBottom: 30 }}>Certifications and frameworks</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            ARK Platforms maintains compliance with multiple international standards:
          </p>
          <ul style={{ maxWidth: 700, lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
            <li><strong>GDPR</strong> - General Data Protection Regulation (EU)</li>
            <li><strong>CCPA/CPRA</strong> - California Consumer Privacy Act</li>
            <li><strong>SOC 2</strong> - Service Organization Control Framework</li>
            <li><strong>ISO 27001</strong> - Information Security Management</li>
            <li><strong>HIPAA</strong> - Health Insurance Portability and Accountability Act (where applicable)</li>
            <li><strong>WCAG 2.1</strong> - Web Content Accessibility Guidelines</li>
          </ul>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Data Protection Inquiries</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Questions about our data protection practices?</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            Contact our Data Protection Officer with any questions or concerns about data security and privacy.
          </p>
          <Link href="/contact" className="btn-primary">Contact DPO</Link>
        </div>
      </section>
    </>
  );
}
