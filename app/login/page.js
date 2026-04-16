'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    await new Promise(r => setTimeout(r, 700));
    if (!email || !password) { setStatus('error'); return; }
    setStatus('success');
  }

  return (
    <div className="auth-shell">
      <div className="auth-panel">
        <div className="auth-card">
          <div className="section-eyebrow">Welcome back</div>
          <h1>Sign in.</h1>
          <p className="auth-lede">Access your ARK client portal, course dashboard, and contributor account.</p>

          <button className="oauth-btn" type="button">Continue with Google</button>
          <button className="oauth-btn" type="button">Continue with LinkedIn</button>

          <div className="auth-divider">or with email</div>

          <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: 'none' }}>
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" required />

            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />

            <div style={{ textAlign: 'right', marginTop: 14 }}>
              <Link href="#" style={{ fontSize: 12, color: 'var(--ark-gold)', letterSpacing: '0.1em' }}>Forgot password?</Link>
            </div>

            <button type="submit" className="btn-primary" style={{ background:'var(--ark-black)', color:'var(--ark-ivory)', width: '100%', marginTop: 30 }}>
              {status === 'loading' ? 'Signing in…' : 'Sign In'}
            </button>

            {status === 'error' && <p style={{ color: '#b02020', marginTop: 16, fontSize: 13 }}>Please complete all fields.</p>}
            {status === 'success' && <p style={{ color: 'var(--ark-gold)', marginTop: 16, fontSize: 13 }}>Signed in. Redirecting…</p>}
          </form>

          <p className="auth-switch">
            New to ARK? <Link href="/register">Create an account</Link>
          </p>
        </div>
      </div>
      <div className="auth-visual" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80)' }}>
        <blockquote>"ARK feels less like a vendor and more like a chapter of our own team."</blockquote>
        <cite>— Principal, European Family Office</cite>
      </div>
    </div>
  );
}
