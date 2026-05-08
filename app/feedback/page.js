'use client';

import Link from 'next/link';
import { useState } from 'react';
import { submitFeedbackForm } from '@/lib/actions';

export default function ReportIssue() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: 'accessibility',
    severity: 'medium',
    description: '',
    url: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await submitFeedbackForm(formData);
    
    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        issueType: 'accessibility',
        severity: 'medium',
        description: '',
        url: '',
      });
      setTimeout(() => setSubmitted(false), 4000);
    } else {
      alert('Error sending report. Please try again later.');
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-eyebrow">Help Us Improve</div>
          <h1>Report an Issue</h1>
          <p>Found an accessibility problem or security concern? Help us improve by reporting it directly.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 820, textAlign: 'center' }}>
          <div className="section-eyebrow">Feedback Form</div>
          <h2 style={{ marginBottom: 28 }}>Report accessibility or security issues</h2>
          <p style={{ fontSize: 16, color: '#5a5a5a', lineHeight: 1.85 }}>
            Your feedback is valuable and helps us maintain the highest standards. All reports are reviewed promptly by our teams and treated with appropriate urgency.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ark-ivory)' }}>
        <div className="section-inner" style={{ maxWidth: 700 }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: 40 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
              <h3 style={{ fontSize: 20, marginBottom: 12, color: 'var(--ark-ivory)' }}>Thank you for your report</h3>
              <p style={{ color: '#5a5a5a', fontSize: 15, lineHeight: 1.8 }}>
                We've received your submission and will review it within 24 hours. Our team will contact you if we need additional details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0a0a0a', fontSize: 14 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0a0a0a', fontSize: 14 }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0a0a0a', fontSize: 14 }}>
                  Issue Type *
                </label>
                <select
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="accessibility">Accessibility Issue</option>
                  <option value="security">Security Concern</option>
                  <option value="privacy">Privacy Issue</option>
                  <option value="technical">Technical Problem</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0a0a0a', fontSize: 14 }}>
                  Severity Level *
                </label>
                <select
                  name="severity"
                  value={formData.severity}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="low">Low - Minor inconvenience</option>
                  <option value="medium">Medium - Significant impact</option>
                  <option value="high">High - Severe accessibility barrier</option>
                  <option value="critical">Critical - Complete access blocked</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0a0a0a', fontSize: 14 }}>
                  Page/URL (if applicable)
                </label>
                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="https://arkplatforms.eu/page"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#0a0a0a', fontSize: 14 }}>
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe the issue in detail, including steps to reproduce it if applicable."
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    fontSize: 14,
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  background: '#b89b5e',
                  color: '#0a0a0a',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 14,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.background = '#d4b574')}
                onMouseLeave={(e) => (e.target.style.background = '#b89b5e')}
              >
                Submit Report
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">How We Handle Reports</div>
          <h2 style={{ marginBottom: 30 }}>Our process</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 30 }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#b89b5e', marginBottom: 12 }}>1</div>
              <h4 style={{ fontSize: 15, marginBottom: 10 }}>Acknowledge</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>We confirm receipt of your report within 24 hours.</p>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#b89b5e', marginBottom: 12 }}>2</div>
              <h4 style={{ fontSize: 15, marginBottom: 10 }}>Assess</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>Our team investigates and verifies the issue.</p>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#b89b5e', marginBottom: 12 }}>3</div>
              <h4 style={{ fontSize: 15, marginBottom: 10 }}>Remediate</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>We work to fix the issue based on severity.</p>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#b89b5e', marginBottom: 12 }}>4</div>
              <h4 style={{ fontSize: 15, marginBottom: 10 }}>Communicate</h4>
              <p style={{ color: '#5a5a5a', fontSize: 14, lineHeight: 1.8 }}>We update you when the issue is resolved.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 820 }}>
          <div className="section-eyebrow">Security & Privacy</div>
          <h2 style={{ marginBottom: 24, color: 'var(--ark-ivory)' }}>Your report is protected</h2>
          <p style={{ fontSize: 16, color: '#bfbab0', lineHeight: 1.85 }}>
            All reports are treated confidentially and securely. We do not share your information with third parties without your consent.
          </p>
        </div>
      </section>
    </>
  );
}
