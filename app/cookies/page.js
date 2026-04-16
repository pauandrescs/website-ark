import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy — ARK Platforms',
};

export default function CookiePolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Technology & Tracking</div>
          <h1>Cookie Policy</h1>
          <p>How we use cookies and similar technologies to improve your experience while respecting your privacy.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900, textAlign: 'center' }}>
          <div className="section-eyebrow">Understanding Cookies</div>
          <h2 style={{ marginBottom: 28 }}>What are cookies and how do we use them?</h2>
          <p style={{ fontSize: 17, color: '#5a5a5a', lineHeight: 1.85 }}>
            Cookies are small text files stored on your device that help us understand how you use our website and improve your experience. This policy explains the types of cookies we use, why we use them, and how to manage your cookie preferences.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Types of Cookies</div>
          <h2 style={{ marginBottom: 40 }}>Categories and purposes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Essential Cookies</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Required for the website to function properly. These include security cookies, session management, and load balancing. Essential cookies cannot be disabled without affecting website functionality.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Performance Cookies</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Help us understand how visitors use our website, including pages visited, time spent, and navigation patterns. These cookies allow us to optimize performance and identify technical issues.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Functional Cookies</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Remember your preferences and settings to provide a personalized experience. These include language selection, saved preferences, and user-specific configurations.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Marketing Cookies</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Used to track your interests and deliver targeted advertisements relevant to you. These cookies may be set by third-party advertising partners with your consent.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Analytics Cookies</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Collect aggregated data about website usage to help us understand trends and improve our content. Data is anonymized and used only for statistical analysis.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Third-Party Cookies</h3>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Set by external service providers for analytics, advertising, and functional purposes. These are subject to third-party privacy policies in addition to ours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Cookie Management</div>
          <h2 style={{ marginBottom: 30 }}>How to control your cookies</h2>
          <div style={{ maxWidth: 800 }}>
            <p style={{ fontSize: 16, color: '#5a5a5a', lineHeight: 1.85, marginBottom: 24 }}>
              You have the right to accept or reject cookies on our website. You can manage your preferences in several ways:
            </p>
            <ul style={{ lineHeight: 2, color: '#5a5a5a', fontSize: 15, listStyleType: 'disc', paddingLeft: 20 }}>
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies and alert you when a cookie is being sent. Consult your browser's help section for instructions on managing your cookie preferences.</li>
              <li><strong>Cookie Consent Banner:</strong> When you first visit our website, you can use our cookie consent banner to accept or reject different categories of cookies.</li>
              <li><strong>Individual Controls:</strong> You can update your preferences at any time through your account settings or by contacting us directly.</li>
              <li><strong>Opt-Out Tools:</strong> Some third-party services provide opt-out mechanisms for their cookies and tracking. We provide links to these tools as available.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">Policy Details</div>
          <h2 style={{ marginBottom: 30 }}>Technical Information</h2>
          <div style={{ maxWidth: 800 }}>
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontSize: 16, marginBottom: 10 }}>Cookie Retention</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Cookies are retained for different periods depending on their type. Session cookies expire when you close your browser. Persistent cookies remain for up to two years unless you manually delete them.
              </p>
            </div>
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontSize: 16, marginBottom: 10 }}>Data Security</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                Cookie data is transmitted securely using encryption and stored on protected servers. We do not store sensitive personal information in cookies.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 16, marginBottom: 10 }}>Third-Party Sharing</h4>
              <p style={{ color: '#5a5a5a', lineHeight: 1.8, fontSize: 15 }}>
                We share cookie data with trusted analytics and advertising partners who are bound by confidentiality agreements. You retain control over which cookies you allow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Questions About Cookies</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>We're here to help</h2>
          <p style={{ fontSize: 17, color: '#bfbab0', marginBottom: 40 }}>
            If you have questions about how we use cookies or want to manage your preferences, please contact our privacy team.
          </p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
