'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner if user has made cookie choices but it's been a while
    const savedPreferences = localStorage.getItem('cookiePreferences');
    const lastShown = localStorage.getItem('cookieBannerLastShown');

    if (savedPreferences && (!lastShown || Date.now() - parseInt(lastShown) > 30 * 24 * 60 * 60 * 1000)) { // 30 days
      setIsVisible(true);
    }
  }, []);

  const handleManageCookies = () => {
    // Trigger the cookie modal by dispatching a custom event
    window.dispatchEvent(new CustomEvent('showCookieModal'));
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('cookieBannerLastShown', Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 20,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: 300,
      zIndex: 999,
    }}>
      <div style={{ marginBottom: 16 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: '#0a0a0a' }}>
          Cookie Preferences
        </h4>
        <p style={{ fontSize: 13, color: '#5a5a5a', lineHeight: 1.5, margin: 0 }}>
          Manage your cookie settings or learn more about how we use cookies.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
        <button
          onClick={handleManageCookies}
          style={{
            padding: '8px 16px',
            background: '#b89b5e',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.background = '#d4b574')}
          onMouseLeave={(e) => (e.target.style.background = '#b89b5e')}
        >
          Manage Cookies
        </button>

        <Link
          href="/cookies"
          style={{
            padding: '8px 16px',
            background: 'transparent',
            color: '#5a5a5a',
            border: '1px solid #ddd',
            borderRadius: 4,
            textDecoration: 'none',
            fontSize: 13,
            textAlign: 'center',
            display: 'block',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#f8f8f8';
            e.target.style.borderColor = '#b89b5e';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.borderColor = '#ddd';
          }}
        >
          Cookie Policy
        </Link>

        <button
          onClick={handleDismiss}
          style={{
            padding: '4px',
            background: 'transparent',
            color: '#bfbab0',
            border: 'none',
            cursor: 'pointer',
            fontSize: 18,
            position: 'absolute',
            top: 8,
            right: 8,
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}