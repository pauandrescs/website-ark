import Link from 'next/link';

export const metadata = {
  title: 'Security Audits — ARK Platforms',
};

export default function SecurityAudits() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1563206765-5ac8b9c90e1e?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Continuous Assessment</div>
          <h1>Security Audits</h1>
          <p>Regular third-party security assessments to identify and address vulnerabilities in our infrastructure and processes.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Assessment Program</div>
          <h2 style={{ marginBottom: 28 }}>Our security audit strategy</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms conducts regular security audits, assessments, and penetration testing to identify vulnerabilities, validate control effectiveness, and ensure continuous improvement of our security posture.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Audit Types</div>
          <h2 style={{ marginBottom: 40 }}>Multi-faceted security testing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 35 }}>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Penetration Testing</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Simulated cyberattacks testing all systems and defenses. Conducted by certified ethical hackers to identify exploitable vulnerabilities.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Vulnerability Scanning</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Automated scanning of systems and applications for known vulnerabilities, misconfigurations, and security weaknesses. Performed regularly.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Code Review & SAST</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Static Application Security Testing and manual code review to identify security flaws, injection vulnerabilities, and insecure practices.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Infrastructure Assessment</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Evaluation of network security, server configuration, cloud infrastructure, and physical security controls.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Social Engineering Testing</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Assessment of human factors including phishing simulations, pretexting, and physical access testing.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Compliance Audits</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Regular compliance reviews ensure adherence to SOC 2, GDPR, CCPA, and other regulatory frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Audit Schedule</div>
          <h2 style={{ marginBottom: 30 }}>Frequency and scope</h2>
          <div style={{ maxWidth: 800 }}>
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #e0e0e0' }}>
              <h4 style={{ fontSize: 16, marginBottom: 10 }}>Quarterly</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Automated vulnerability scanning and continuous monitoring of infrastructure for emerging threats.
              </p>
            </div>
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #e0e0e0' }}>
              <h4 style={{ fontSize: 16, marginBottom: 10 }}>Semi-Annual</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Comprehensive penetration testing and security assessments of key systems and applications.
              </p>
            </div>
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #e0e0e0' }}>
              <h4 style={{ fontSize: 16, marginBottom: 10 }}>Annual</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Full third-party security audit, SOC 2 assessment, and compliance review by independent auditors.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 10 }}>Post-Incident</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Immediate forensic investigation and security audit following any security incident.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Remediation Process</div>
          <h2 style={{ marginBottom: 30 }}>Managing findings</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            All audit findings are prioritized by severity and remediating according to established timelines:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            <div style={{ background: '#fff', padding: 20, borderRadius: 8 }}>
              <h4 style={{ fontSize: 15, marginBottom: 10, color: '#d9534f' }}>Critical</h4>
              <p style={{ color: '#5a5a5a', fontSize: 13, lineHeight: 1.7 }}>Remediated within 24-48 hours</p>
            </div>
            <div style={{ background: '#fff', padding: 20, borderRadius: 8 }}>
              <h4 style={{ fontSize: 15, marginBottom: 10, color: '#f0ad4e' }}>High</h4>
              <p style={{ color: '#5a5a5a', fontSize: 13, lineHeight: 1.7 }}>Remediated within 7 days</p>
            </div>
            <div style={{ background: '#fff', padding: 20, borderRadius: 8 }}>
              <h4 style={{ fontSize: 15, marginBottom: 10, color: '#5cb85c' }}>Medium</h4>
              <p style={{ color: '#5a5a5a', fontSize: 13, lineHeight: 1.7 }}>Remediated within 30 days</p>
            </div>
            <div style={{ background: '#fff', padding: 20, borderRadius: 8 }}>
              <h4 style={{ fontSize: 15, marginBottom: 10, color: '#5bc0de' }}>Low</h4>
              <p style={{ color: '#5a5a5a', fontSize: 13, lineHeight: 1.7 }}>Remediated within 90 days</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Security Reports</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Request audit findings and security documentation</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            Enterprise clients and partners can request our latest audit reports and security assessments under our standard NDA.
          </p>
          <Link href="/contact" className="btn-primary">Request Security Documentation</Link>
        </div>
      </section>
    </>
  );
}
