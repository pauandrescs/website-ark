import Link from 'next/link';

export const metadata = {
  title: 'Accessibility Statement — ARK Platforms',
};

export default function AccessibilityStatement() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Inclusive Design</div>
          <h1>Accessibility Statement</h1>
          <p>ARK Platforms is committed to ensuring digital accessibility for all users, regardless of ability or technology used.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Our Commitment</div>
          <h2 style={{ marginBottom: 28 }}>Making our digital presence accessible to all</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms is committed to ensuring that our website, applications, and digital services are accessible to all people, including those with disabilities. We believe accessibility is a fundamental right and integral to providing excellent user experience.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Standards and Compliance</div>
          <h2 style={{ marginBottom: 30 }}>WCAG 2.1 Level AA</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            Our digital properties are designed and maintained to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard developed by the World Wide Web Consortium (W3C). This ensures our content is:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30, maxWidth: 800 }}>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Perceivable</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>Content is presented in ways that can be perceived by all users through various senses and devices.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Operable</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>All functionality is available from a keyboard and navigation is predictable and logical.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Understandable</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>Text is readable, pages operate in predictable ways, and users are helped to avoid mistakes.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Robust</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>Content works with current and future technologies, including assistive devices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Accessibility Features</div>
          <h2 style={{ marginBottom: 30 }}>What we've implemented</h2>
          <ul style={{ maxWidth: 800, lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
            <li>Semantic HTML markup for screen reader compatibility</li>
            <li>Keyboard navigation throughout the entire website</li>
            <li>Color contrast ratios that meet WCAG 2.1 Level AA standards</li>
            <li>Alternative text descriptions for all images and graphics</li>
            <li>Properly labeled form inputs and error messages</li>
            <li>Resizable text without loss of functionality</li>
            <li>Captions and transcripts for video and audio content</li>
            <li>Clear focus indicators for keyboard navigation</li>
            <li>Logical heading hierarchy and document structure</li>
            <li>Accessible PDF documents with proper tagging</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Assistive Technology Support</div>
          <h2 style={{ marginBottom: 30 }}>Compatible with common tools</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            Our website has been tested for compatibility with popular assistive technologies:
          </p>
          <ul style={{ maxWidth: 600, lineHeight: 1.9, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Voice control software</li>
            <li>Magnification tools</li>
            <li>Speech-to-text applications</li>
            <li>Browser extensions for accessibility</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Known Issues</div>
          <h2 style={{ marginBottom: 30 }}>We're continuously improving</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            While we strive for full accessibility, some third-party content or older embedded materials may not fully comply with WCAG 2.1 standards. We're actively working to remediate these issues. If you encounter any accessibility barriers, please let us know.
          </p>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Report an Accessibility Issue</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Help us improve accessibility</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            If you encounter any accessibility barriers or have suggestions for improvement, please contact our accessibility team.
          </p>
          <Link href="/contact" className="btn-primary">Report an Issue</Link>
        </div>
      </section>
    </>
  );
}
