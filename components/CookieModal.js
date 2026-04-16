'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    } else {
      // Show modal after a short delay on first visit
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    // Listen for custom event to show modal
    const handleShowModal = () => {
      setIsVisible(true);
      setShowSettings(true); // Show settings directly when triggered from banner
      setTimeout(() => setIsAnimating(true), 10);
    };

    window.addEventListener('showCookieModal', handleShowModal);
    return () => window.removeEventListener('showCookieModal', handleShowModal);
  }, []);

  const savePreferences = (newPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      setShowSettings(false);
    }, 300);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      setShowSettings(false);
    }, 300);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(necessaryOnly);
  };

  const handlePreferenceChange = (type, value) => {
    setPreferences(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      background: 'rgba(10, 10, 10, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      opacity: isAnimating ? 1 : 0,
      transition: 'opacity 0.3s ease-out',
    }}>
      <div style={{
        background: 'var(--ark-ivory)',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 20px 40px rgba(10,10,10,0.3)',
        border: '1px solid var(--ark-border)',
        transform: isAnimating ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: 'transform 0.3s ease-out',
        position: 'relative',
      }}>
        {!showSettings ? (
          // Main cookie consent dialog
          <div style={{ padding: '48px 40px', textAlign: 'center' }}>
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                fontFamily: "'Didot', 'Playfair Display', 'Georgia', serif"
              }}>🍪</div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 400,
                marginBottom: '16px',
                color: 'var(--ark-black)',
                fontFamily: "'Didot', 'Playfair Display', 'Georgia', serif",
                letterSpacing: '0.01em',
                lineHeight: 1.15
              }}>
                We use cookies
              </h3>
              <p style={{
                color: 'var(--ark-muted)',
                lineHeight: 1.6,
                fontSize: '16px',
                maxWidth: '480px',
                margin: '0 auto'
              }}>
                We use cookies to enhance your experience, analyze site traffic, and personalize content. You can choose which cookies to accept or reject.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <span style={{
                  background: 'var(--ark-gold)',
                  color: 'var(--ark-black)',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
                }}>Essential</span>
                <span style={{
                  background: 'var(--ark-ivory)',
                  color: 'var(--ark-text)',
                  padding: '6px 12px',
                  fontSize: '12px',
                  border: '1px solid var(--ark-border)',
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
                }}>Analytics</span>
                <span style={{
                  background: 'var(--ark-ivory)',
                  color: 'var(--ark-text)',
                  padding: '6px 12px',
                  fontSize: '12px',
                  border: '1px solid var(--ark-border)',
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
                }}>Marketing</span>
                <span style={{
                  background: 'var(--ark-ivory)',
                  color: 'var(--ark-text)',
                  padding: '6px 12px',
                  fontSize: '12px',
                  border: '1px solid var(--ark-border)',
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
                }}>Functional</span>
              </div>
              <Link href="/cookies" style={{
                color: 'var(--ark-gold)',
                fontSize: '14px',
                textDecoration: 'none',
                fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                fontWeight: 600
              }}>
                Learn more about our cookies →
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
              <button
                onClick={acceptAll}
                style={{
                  padding: '16px 24px',
                  background: 'var(--ark-gold)',
                  color: 'var(--ark-black)',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(184, 155, 94, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--ark-gold-light)';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(184, 155, 94, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--ark-gold)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(184, 155, 94, 0.3)';
                }}
              >
                Accept All Cookies
              </button>

              <button
                onClick={acceptNecessaryOnly}
                style={{
                  padding: '16px 24px',
                  background: 'var(--ark-ivory)',
                  color: 'var(--ark-text)',
                  border: '1px solid var(--ark-border)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--ark-black)';
                  e.target.style.color = 'var(--ark-ivory)';
                  e.target.style.borderColor = 'var(--ark-black)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--ark-ivory)';
                  e.target.style.color = 'var(--ark-text)';
                  e.target.style.borderColor = 'var(--ark-border)';
                }}
              >
                Accept Necessary Only
              </button>

              <button
                onClick={() => setShowSettings(true)}
                style={{
                  padding: '16px 24px',
                  background: 'transparent',
                  color: 'var(--ark-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--ark-gold)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--ark-gold)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--ark-muted)';
                }}
              >
                Customize Settings
              </button>
            </div>
          </div>
        ) : (
          // Cookie settings dialog
          <div style={{ padding: '48px 40px' }}>
            <div style={{ marginBottom: '32px', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 400,
                marginBottom: '16px',
                color: 'var(--ark-black)',
                fontFamily: "'Didot', 'Playfair Display', 'Georgia', serif",
                letterSpacing: '0.01em',
                lineHeight: 1.15
              }}>
                Cookie Settings
              </h3>
              <p style={{
                color: 'var(--ark-muted)',
                lineHeight: 1.6,
                fontSize: '16px',
                maxWidth: '480px',
                margin: '0 auto'
              }}>
                Choose which types of cookies you want to allow. Essential cookies are always enabled as they are required for the website to function.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              {/* Necessary Cookies */}
              <div style={{
                marginBottom: '24px',
                padding: '24px',
                background: 'var(--ark-black)',
                border: '1px solid var(--ark-border)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--ark-ivory)',
                    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                    margin: 0
                  }}>Essential Cookies</h4>
                  <span style={{
                    background: 'var(--ark-gold)',
                    color: 'var(--ark-black)',
                    padding: '4px 8px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
                  }}>Always Active</span>
                </div>
                <p style={{
                  color: 'var(--ark-ivory)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.9
                }}>
                  These cookies are necessary for the website to function and cannot be disabled. They include cookies for security, session management, and basic functionality.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div style={{
                marginBottom: '24px',
                padding: '24px',
                background: 'var(--ark-ivory)',
                border: '1px solid var(--ark-border)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--ark-black)',
                    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                    margin: 0
                  }}>Analytics Cookies</h4>
                  <label style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '44px',
                    height: '24px'
                  }}>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                      style={{
                        opacity: 0,
                        width: 0,
                        height: 0
                      }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: preferences.analytics ? 'var(--ark-gold)' : '#ddd',
                      transition: '0.3s',
                      border: '1px solid var(--ark-border)',
                    }}></span>
                    <span style={{
                      position: 'absolute',
                      content: '""',
                      height: '18px',
                      width: '18px',
                      left: preferences.analytics ? '24px' : '3px',
                      bottom: '3px',
                      backgroundColor: 'white',
                      transition: '0.3s',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }}></span>
                  </label>
                </div>
                <p style={{
                  color: 'var(--ark-muted)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div style={{
                marginBottom: '24px',
                padding: '24px',
                background: 'var(--ark-ivory)',
                border: '1px solid var(--ark-border)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--ark-black)',
                    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                    margin: 0
                  }}>Marketing Cookies</h4>
                  <label style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '44px',
                    height: '24px'
                  }}>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                      style={{
                        opacity: 0,
                        width: 0,
                        height: 0
                      }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: preferences.marketing ? 'var(--ark-gold)' : '#ddd',
                      transition: '0.3s',
                      border: '1px solid var(--ark-border)',
                    }}></span>
                    <span style={{
                      position: 'absolute',
                      content: '""',
                      height: '18px',
                      width: '18px',
                      left: preferences.marketing ? '24px' : '3px',
                      bottom: '3px',
                      backgroundColor: 'white',
                      transition: '0.3s',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }}></span>
                  </label>
                </div>
                <p style={{
                  color: 'var(--ark-muted)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  These cookies are used to track visitors across websites to display ads that are relevant and engaging for individual users.
                </p>
              </div>

              {/* Functional Cookies */}
              <div style={{
                marginBottom: '24px',
                padding: '24px',
                background: 'var(--ark-ivory)',
                border: '1px solid var(--ark-border)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--ark-black)',
                    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                    margin: 0
                  }}>Functional Cookies</h4>
                  <label style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '44px',
                    height: '24px'
                  }}>
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => handlePreferenceChange('functional', e.target.checked)}
                      style={{
                        opacity: 0,
                        width: 0,
                        height: 0
                      }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: preferences.functional ? 'var(--ark-gold)' : '#ddd',
                      transition: '0.3s',
                      border: '1px solid var(--ark-border)',
                    }}></span>
                    <span style={{
                      position: 'absolute',
                      content: '""',
                      height: '18px',
                      width: '18px',
                      left: preferences.functional ? '24px' : '3px',
                      bottom: '3px',
                      backgroundColor: 'white',
                      transition: '0.3s',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }}></span>
                  </label>
                </div>
                <p style={{
                  color: 'var(--ark-muted)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
              <button
                onClick={() => savePreferences(preferences)}
                style={{
                  padding: '14px 24px',
                  background: '#b89b5e',
                  color: '#0a0a0a',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 14,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.background = '#d4b574')}
                onMouseLeave={(e) => (e.target.style.background = '#b89b5e')}
              >
                Save Preferences
              </button>

              <button
                onClick={() => setShowSettings(false)}
                style={{
                  padding: '14px 24px',
                  background: 'transparent',
                  color: '#5a5a5a',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'underline',
                }}
              >
                ← Back to Main
              </button>
            </div>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: 'var(--ark-muted)',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--ark-ivory)';
            e.target.style.color = 'var(--ark-black)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'var(--ark-muted)';
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
