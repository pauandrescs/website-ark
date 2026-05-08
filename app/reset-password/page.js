'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { requestPasswordReset, resetPassword } from '@/lib/actions';

export default function ResetPassword() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  async function handleRequest(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const email = new FormData(e.target).get('email');
    const res = await requestPasswordReset(email);
    if (res.success) {
      setSuccess('If an account exists, a reset link has been sent to your email.');
    } else {
      setError(res.error);
    }
    setLoading(false);
  }

  async function handleReset(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const password = new FormData(e.target).get('password');
    const res = await resetPassword(token, password);
    if (res.success) {
      router.push('/login?reset=true');
    } else {
      setError(res.error);
    }
    setLoading(false);
  }

  return (
    <div className="auth-shell" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
      <div className="auth-panel" style={{ padding: '80px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: 400, width: '100%' }}>
          <Link href="/" className="logo" style={{ color: 'var(--ark-black)', marginBottom: 40, display: 'block' }}>ARK PLATFORMS</Link>
          
          {!token ? (
            <>
              <div className="section-eyebrow">Recovery</div>
              <h1>Reset Password.</h1>
              <p style={{ color: 'var(--ark-muted)', marginBottom: 32 }}>Enter your email to receive a secure recovery link.</p>

              <form onSubmit={handleRequest} className="contact-form">
                <label>Email Address</label>
                <input type="email" name="email" required placeholder="john@example.com" />

                {error && <p style={{ color: 'red', fontSize: 14, marginTop: 16 }}>{error}</p>}
                {success && <p style={{ color: 'green', fontSize: 14, marginTop: 16 }}>{success}</p>}

                <button type="submit" className="header-cta" style={{ width: '100%', marginTop: 32, border: 'none', cursor: 'pointer' }} disabled={loading}>
                  {loading ? 'Sending link...' : 'Send Recovery Link'}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="section-eyebrow">New Credentials</div>
              <h1>Choose a password.</h1>
              <p style={{ color: 'var(--ark-muted)', marginBottom: 32 }}>Your new password must be at least 8 characters.</p>

              <form onSubmit={handleReset} className="contact-form">
                <label>New Password</label>
                <input type="password" name="password" required placeholder="••••••••" minLength={8} />

                {error && <p style={{ color: 'red', fontSize: 14, marginTop: 16 }}>{error}</p>}

                <button type="submit" className="header-cta" style={{ width: '100%', marginTop: 32, border: 'none', cursor: 'pointer' }} disabled={loading}>
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </>
          )}

          <p className="auth-switch">
            Return to <Link href="/login">Sign In</Link>
          </p>
        </div>
      </div>
      <div className="auth-visual" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: '#fff'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <blockquote style={{ fontSize: 32, fontFamily: 'Playfair Display', marginBottom: 24 }}>
            "Security is not a final state, but a constant process of vigilance."
          </blockquote>
          <cite style={{ fontStyle: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 12 }}>— ARK PLATFORMS</cite>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
      </div>
    </div>
  );
}
