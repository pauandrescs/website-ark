import Link from 'next/link';

export const metadata = {
  title: 'SOC 2 Certification — ARK Platforms',
};

export default function SOC2() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Enterprise Trust</div>
          <h1>SOC 2 Certification</h1>
          <p>ARK Platforms maintains SOC 2 Type II certification demonstrating security, availability, and data protection excellence.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Enterprise Security</div>
          <h2 style={{ marginBottom: 28 }}>SOC 2 Type II Compliance</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms has achieved and maintains SOC 2 Type II certification, an independent audit confirming our adherence to strict security, availability, processing integrity, and confidentiality standards for managing customer data.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">What is SOC 2?</div>
          <h2 style={{ marginBottom: 30 }}>Understanding SOC 2 certification</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            SOC 2 (Service Organization Control 2) is a certification developed by the American Institute of CPAs (AICPA) that evaluates a service organization's controls related to security, availability, processing integrity, confidentiality, and privacy of customer data.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 30 }}>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Type II Certification</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>Covers a minimum of 6 months of operations, testing both design and effectiveness of controls over time.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Independent Audit</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>Third-party auditors conduct comprehensive assessment of our security controls and practices.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Ongoing Validation</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>Annual re-certification ensures continued compliance and control effectiveness.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Trust Service Criteria</div>
          <h2 style={{ marginBottom: 30 }}>Five pillars of SOC 2</h2>
          <div style={{ maxWidth: 850 }}>
            <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #e0e0e0' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>CC - Security</h4>
              <p style={{ color: '#5a5a5a', fontSize: 15, lineHeight: 1.85 }}>
                Systems are protected from unauthorized access, alteration, and destruction. This includes logical and physical controls, access management, and threat prevention.
              </p>
            </div>
            <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #e0e0e0' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>A - Availability</h4>
              <p style={{ color: '#5a5a5a', fontSize: 15, lineHeight: 1.85 }}>
                Systems are available for authorized use and operate at required levels of performance. Includes disaster recovery, business continuity, and monitoring.
              </p>
            </div>
            <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #e0e0e0' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>PI - Processing Integrity</h4>
              <p style={{ color: '#5a5a5a', fontSize: 15, lineHeight: 1.85 }}>
                Information is consistently and accurately processed, authorized, and completely recorded. Systems prevent data errors and corruption.
              </p>
            </div>
            <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #e0e0e0' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>C - Confidentiality</h4>
              <p style={{ color: '#5a5a5a', fontSize: 15, lineHeight: 1.85 }}>
                Information designated as confidential is protected from unauthorized transmission, access, or disclosure throughout system lifecycle.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>P - Privacy</h4>
              <p style={{ color: '#5a5a5a', fontSize: 15, lineHeight: 1.85 }}>
                Personal information is collected, retained, disclosed, and destroyed in accordance with regulatory requirements and customer agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Control Domains</div>
          <h2 style={{ marginBottom: 30 }}>Key areas of assessment</h2>
          <ul style={{ maxWidth: 800, lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
            <li><strong>Entity & Governance:</strong> Organizational structure and oversight</li>
            <li><strong>Communication:</strong> Internal and external communication of responsibilities</li>
            <li><strong>Risk Assessment:</strong> Identification and management of risks</li>
            <li><strong>Control Activities:</strong> Implementation of control policies and procedures</li>
            <li><strong>Information & Monitoring:</strong> System monitoring and continuous improvement</li>
            <li><strong>Logical Access:</strong> System access controls and user authentication</li>
            <li><strong>Physical Security:</strong> Facility and equipment protection</li>
            <li><strong>Change Management:</strong> System changes are authorized, tested, and properly documented</li>
          </ul>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Enterprise Customers</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>SOC 2 report available for qualified customers</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            We're happy to provide our SOC 2 Type II report to enterprise customers and partners. Contact our sales team to request our certification documentation.
          </p>
          <Link href="/contact" className="btn-primary">Request SOC 2 Report</Link>
        </div>
      </section>
    </>
  );
}
