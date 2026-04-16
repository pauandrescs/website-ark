import Link from 'next/link';

export const metadata = {
  title: 'WCAG 2.1 Compliance — ARK Platforms',
};

export default function WCAG() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Web Accessibility</div>
          <h1>WCAG 2.1 Compliance</h1>
          <p>Our commitment to achieving Level AA compliance with Web Content Accessibility Guidelines.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Accessibility Standards</div>
          <h2 style={{ marginBottom: 28 }}>WCAG 2.1 Level AA</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            ARK Platforms is committed to meeting WCAG 2.1 Level AA standards as published by the World Wide Web Consortium (W3C). These guidelines ensure our digital services are accessible to everyone, including people with disabilities.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Accessibility Principles</div>
          <h2 style={{ marginBottom: 40 }}>Four pillars of WCAG</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>1. Perceivable</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Information and user interface components must be presentable to users in ways they can perceive, including providing text alternatives for non-text content and ensuring sufficient color contrast.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>2. Operable</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                User interface components and navigation must be operable, meaning keyboard accessible, providing enough time to read and use content, and avoiding seizure-inducing patterns.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>3. Understandable</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Information and the operation of user interfaces must be understandable, with readable text, predictable behavior, and help for input errors.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>4. Robust</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies, and compatible with current and future technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Level AA Criteria</div>
          <h2 style={{ marginBottom: 30 }}>Key accessibility features we implement</h2>
          <div style={{ maxWidth: 800 }}>
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Visual & Sensory</h4>
              <ul style={{ lineHeight: 1.9, color: '#5a5a5a', fontSize: 14, listStyleType: 'disc', paddingLeft: 24 }}>
                <li>Contrast ratio of at least 4.5:1 for normal text</li>
                <li>Alternative text for all images</li>
                <li>Captions and transcripts for multimedia</li>
                <li>Color not the only means of conveying information</li>
              </ul>
            </div>
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Motor & Navigation</h4>
              <ul style={{ lineHeight: 1.9, color: '#5a5a5a', fontSize: 14, listStyleType: 'disc', paddingLeft: 24 }}>
                <li>Full keyboard accessibility</li>
                <li>Clear focus indicators</li>
                <li>Skip navigation links</li>
                <li>Target size of at least 44x44 CSS pixels</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 12 }}>Cognitive & Content</h4>
              <ul style={{ lineHeight: 1.9, color: '#5a5a5a', fontSize: 14, listStyleType: 'disc', paddingLeft: 24 }}>
                <li>Clear, simple language</li>
                <li>Proper heading structure</li>
                <li>Readable font sizes (minimum 12px)</li>
                <li>Consistent navigation and labeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Testing & Validation</div>
          <h2 style={{ marginBottom: 30 }}>How we ensure compliance</h2>
          <p style={{ color: '#5a5a5a', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            Accessibility is not a one-time effort but an ongoing commitment:
          </p>
          <ul style={{ maxWidth: 750, lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
            <li>Automated accessibility testing tools in development pipeline</li>
            <li>Manual testing with screen readers and keyboard navigation</li>
            <li>User testing with people with disabilities</li>
            <li>Regular accessibility audits by third parties</li>
            <li>Team training on accessible design and development</li>
            <li>Continuous improvement based on user feedback</li>
          </ul>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Accessibility Support</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Need accessibility assistance?</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            If you encounter any accessibility barriers, please report them to our accessibility team for immediate assistance.
          </p>
          <Link href="/contact" className="btn-primary">Report an Issue</Link>
        </div>
      </section>
    </>
  );
}
