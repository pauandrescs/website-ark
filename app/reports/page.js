import Link from 'next/link';

export const metadata = {
  title: 'Accessibility Reports — ARK Platforms',
};

export default function AccessibilityReports() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Accessibility Assessment</div>
          <h1>Accessibility Reports</h1>
          <p>Documentation of our WCAG 2.1 compliance assessment and accessibility audit results.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Assessment Documentation</div>
          <h2 style={{ marginBottom: 28 }}>Our accessibility audit results</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms conducts regular third-party accessibility audits to verify compliance with WCAG 2.1 Level AA standards. Our reports document findings, recommendations, and remediation progress.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Available Reports</div>
          <h2 style={{ marginBottom: 40 }}>Accessibility audit documentation</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 35 }}>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>2024 WCAG 2.1 Audit</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Comprehensive accessibility audit covering all website properties and digital services. Assessment conducted by independent accessibility consultants certified in WCAG 2.1 evaluation.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>HTML</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>Web Apps</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>PDF</span>
              </div>
            </div>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Mobile App Accessibility</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Testing of mobile applications for iOS and Android accessibility compliance. Includes screen reader compatibility, keyboard navigation, and touch target sizing assessments.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>iOS</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>Android</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>Native</span>
              </div>
            </div>
            <div style={{ background: '#fff', padding: 30, borderRadius: 8, borderLeft: '4px solid #b89b5e' }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Video & Multimedia</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 14, marginBottom: 16 }}>
                Assessment of captions, transcripts, and audio descriptions on all video and multimedia content. Ensures accessible alternatives for all audio and visual information.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>Captions</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>Transcripts</span>
                <span style={{ background: '#f0f0f0', padding: '6px 12px', borderRadius: 4, fontSize: 12, color: '#5a5a5a' }}>Audio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Compliance Metrics</div>
          <h2 style={{ marginBottom: 30 }}>Latest assessment results</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, maxWidth: 900 }}>
            <div style={{ background: 'var(--ark-ivory)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 700, color: '#b89b5e', marginBottom: 8 }}>99.2%</div>
              <p style={{ color: '#5a5a5a', fontSize: 14 }}>WCAG 2.1 Compliance</p>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 700, color: '#b89b5e', marginBottom: 8 }}>Level AA</div>
              <p style={{ color: '#5a5a5a', fontSize: 14 }}>Certification Target</p>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 700, color: '#b89b5e', marginBottom: 8 }}>8/10</div>
              <p style={{ color: '#5a5a5a', fontSize: 14 }}>Assistive Tech Tested</p>
            </div>
            <div style={{ background: 'var(--ark-ivory)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 700, color: '#b89b5e', marginBottom: 8 }}>Q2 2024</div>
              <p style={{ color: '#5a5a5a', fontSize: 14 }}>Last Full Audit</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Remediation Tracker</div>
          <h2 style={{ marginBottom: 30 }}>Current improvement efforts</h2>
          <div style={{ maxWidth: 800 }}>
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #ddd' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h4 style={{ fontSize: 14, margin: 0 }}>Website Interface</h4>
                <span style={{ fontSize: 13, color: '#5a5a5a' }}>100% Complete</span>
              </div>
              <div style={{ background: '#ddd', height: 10, borderRadius: 5, overflow: 'hidden' }}>
                <div style={{ background: '#b89b5e', height: '100%', width: '100%' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #ddd' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h4 style={{ fontSize: 14, margin: 0 }}>Document Accessibility</h4>
                <span style={{ fontSize: 13, color: '#5a5a5a' }}>95% Complete</span>
              </div>
              <div style={{ background: '#ddd', height: 10, borderRadius: 5, overflow: 'hidden' }}>
                <div style={{ background: '#b89b5e', height: '100%', width: '95%' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <h4 style={{ fontSize: 14, margin: 0 }}>Third-Party Content</h4>
                <span style={{ fontSize: 13, color: '#5a5a5a' }}>88% Complete</span>
              </div>
              <div style={{ background: '#ddd', height: 10, borderRadius: 5, overflow: 'hidden' }}>
                <div style={{ background: '#b89b5e', height: '100%', width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Request a Report</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Need detailed accessibility documentation?</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            Organizations requiring detailed accessibility audit reports can request them directly from our accessibility team.
          </p>
          <Link href="/contact" className="btn-primary">Request Report</Link>
        </div>
      </section>
    </>
  );
}
