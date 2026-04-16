'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="email"
          placeholder="email@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            padding: '10px 14px',
            flex: 1,
            border: `1px solid ${focused ? '#b89b5e' : '#3a3a3a'}`,
            background: '#0a0a0a',
            color: '#fff',
            borderRadius: 4,
            fontSize: 13,
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 18px',
            background: '#b89b5e',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 13,
            transition: 'background 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.target.style.background = '#d4b574')}
          onMouseLeave={(e) => (e.target.style.background = '#b89b5e')}
        >
          Subscribe
        </button>
      </div>
      <p style={{ color: '#5a5a5a', fontSize: 12, marginTop: 10 }}>
        We respect your privacy. Unsubscribe at any time.
      </p>
      {submitted && (
        <p style={{ color: '#b89b5e', fontSize: 12, marginTop: 8 }}>
          ✓ Thank you for subscribing to The ARK Letter.
        </p>
      )}
    </form>
  );
}
