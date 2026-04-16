import Link from 'next/link';

export const metadata = {
  title: 'CCPA & Privacy Rights — ARK Platforms',
};

export default function CCPACompliance() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">U.S. Privacy Rights</div>
          <h1>CCPA & Privacy Rights</h1>
          <p>How ARK Platforms respects your California privacy rights and comprehensive consumer data protection.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Consumer Protection</div>
          <h2 style={{ marginBottom: 28 }}>California Consumer Privacy Act Compliance</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms complies with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), which provide California residents with comprehensive rights regarding their personal information.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Your Rights</div>
          <h2 style={{ marginBottom: 40 }}>California Consumer Rights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Right to Know</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>You have the right to know what personal information we collect, use, share, and sell, including the specific pieces of information and purposes.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Right to Delete</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>You can request deletion of personal information we have collected from you, subject to certain legal exceptions.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Right to Opt-Out</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>You may opt out of the sale or sharing of your personal information. ARK Platforms does not sell personal data.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Right to Correct</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>You can request correction of inaccurate personal information we maintain about you.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Right to Limit Use</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>You may request that we limit our use and disclosure of personal information for purposes other than providing services you requested.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Right to Non-Discrimination</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>We will not deny you goods or services, charge different prices, or provide different quality of service based on exercise of your privacy rights.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Information We Collect</div>
          <h2 style={{ marginBottom: 30 }}>Categories of personal information</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            Under CCPA, we may collect the following categories of personal information:
          </p>
          <ul style={{ maxWidth: 800, lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20, marginBottom: 30 }}>
            <li>Identifiers (name, address, email, phone number, IP address)</li>
            <li>Commercial information (transaction history, purchase records)</li>
            <li>Biometric information (with consent, where applicable)</li>
            <li>Internet activity (browsing history, search history, pages visited)</li>
            <li>Geolocation data</li>
            <li>Professional information (job title, company, industry)</li>
            <li>Education information (school, degree, field of study)</li>
            <li>Inferences (preferences, interests, predispositions)</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Data Sharing</div>
          <h2 style={{ marginBottom: 30 }}>Who we share your information with</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            ARK Platforms does not sell personal information. We only share personal information with third parties when:
          </p>
          <ul style={{ maxWidth: 800, lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
            <li>You provide explicit consent</li>
            <li>It is necessary to provide services you request</li>
            <li>Required by law or legal process</li>
            <li>Service providers assist us under confidentiality agreements</li>
            <li>Business transfers occur (mergers, acquisitions)</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">How to Exercise Your Rights</div>
          <h2 style={{ marginBottom: 30 }}>Request procedures</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            To exercise your CCPA rights, submit a verifiable consumer request by contacting us:
          </p>
          <div style={{ background: '#f5f5f5', padding: 24, borderRadius: 8, marginBottom: 24, maxWidth: 600 }}>
            <p style={{ color: '#5a5a5a', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
              <strong>Email:</strong> privacy@arkplatforms.eu<br />
              <strong>Mail:</strong> ARK Platforms, Inc, Privacy Team, [Address]<br />
              <strong>Web Form:</strong> Use our privacy request form on our website
            </p>
          </div>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85 }}>
            We will respond to verifiable requests within forty-five (45) calendar days. If we need more time, we will notify you of the delay and provide a new deadline.
          </p>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Privacy Rights</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Exercise your California privacy rights</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            Submit your privacy request or contact us with questions about your California consumer rights.
          </p>
          <Link href="/contact" className="btn-primary">Submit a Request</Link>
        </div>
      </section>
    </>
  );
}
