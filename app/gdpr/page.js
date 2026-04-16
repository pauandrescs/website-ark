import Link from 'next/link';

export const metadata = {
  title: 'GDPR Compliance — ARK Platforms',
};

export default function GDPRCompliance() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Data Protection Regulations</div>
          <h1>GDPR Compliance</h1>
          <p>How ARK Platforms ensures full compliance with the European Union's General Data Protection Regulation.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">GDPR Framework</div>
          <h2 style={{ marginBottom: 28 }}>Our commitment to European data rights</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms fully complies with the General Data Protection Regulation (GDPR), which provides comprehensive protection for the personal data of EU residents and other individuals. Our practices ensure lawful, fair, and transparent data processing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Key Principles</div>
          <h2 style={{ marginBottom: 40 }}>GDPR compliance pillars</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 35 }}>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Lawfulness</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>All data processing activities are based on valid legal grounds: consent, contract, legal obligation, vital interests, public task, or legitimate interests with appropriate safeguards.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Fairness</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>We process data in ways that are not unreasonably detrimental to individuals and without misleading them about how their data will be used.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Transparency</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Individuals are clearly informed about data processing through accessible privacy notices that explain purposes, recipients, retention, and individual rights.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Purpose Limitation</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Data is collected only for specified, explicit, and legitimate purposes and not further processed in ways incompatible with those purposes without consent.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Data Minimization</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>We collect only the minimum personal data necessary to achieve the stated purposes, avoiding excessive or irrelevant processing.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Accuracy</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Personal data is kept accurate and up-to-date, with mechanisms for individuals to correct or update their information.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Storage Limitation</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Data is retained only for as long as necessary to fulfill the stated purposes, after which it is securely deleted or anonymized.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Integrity & Security</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>Personal data is protected through appropriate technical and organizational measures against unauthorized access, loss, disclosure, or destruction.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Accountability</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>We maintain comprehensive records and demonstrate compliance with GDPR through documentation, audits, and impact assessments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Individual Rights</div>
          <h2 style={{ marginBottom: 30 }}>Your GDPR rights</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            Under GDPR, you have the following rights regarding your personal data:
          </p>
          <ul style={{ maxWidth: 800, lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
            <li><strong>Right of Access:</strong> Access your personal data and receive a copy in a portable format</li>
            <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten") with limited exceptions</li>
            <li><strong>Right to Restrict Processing:</strong> Limit how your data is processed in specific circumstances</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in machine-readable format and transfer it elsewhere</li>
            <li><strong>Right to Object:</strong> Object to processing for marketing, research, or profiling purposes</li>
            <li><strong>Rights Related to Automated Decision Making:</strong> Not be subject to decisions based solely on automated processing</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time without affecting prior processing</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Data Transfers</div>
          <h2 style={{ marginBottom: 30 }}>International adequacy and safeguards</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85 }}>
            When personal data is transferred outside the EU/EEA, ARK Platforms ensures adequate protection through Standard Contractual Clauses (SCCs), Binding Corporate Rules (BCRs), or other mechanisms approved under GDPR. We evaluate transfer mechanisms regularly to ensure continued compliance with regulatory requirements.
          </p>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Exercise Your Rights</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Contact our Data Protection Officer</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            To exercise your GDPR rights or lodge a complaint, contact our Data Protection Officer at dpo@arkplatforms.com or through our contact form.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Contact DPO</Link>
            <Link href="/privacy" className="btn-ghost">Privacy Policy</Link>
          </div>
        </div>
      </section>
    </>
  );
}
