'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'reader' });
  const [status, setStatus] = useState(null);

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    await new Promise(r => setTimeout(r, 700));
    if (!form.name || !form.email || form.password.length < 8) { setStatus('error'); return; }
    setStatus('success');
  }

  return (
    <div className="auth-shell">
      <div className="auth-visual" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80)' }}>
        <blockquote>"The ARK Letter is the only newsletter I open the day it arrives."</blockquote>
        <cite>— Reader, Founder of a Design Studio</cite>
      </div>

      <div className="auth-panel">
        <div className="auth-card">
          <div className="section-eyebrow">Create an Account</div>
          <h1>Join ARK.</h1>
          <p className="auth-lede">Open an account to receive the ARK Letter, enroll in cohorts, or apply as a contributor to the Journal.</p>

          <button className="oauth-btn" type="button">Sign up with Google</button>
          <button className="oauth-btn" type="button">Sign up with LinkedIn</button>

          <div className="auth-divider">or with email</div>

          <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: 'none' }}>
            <label>Full Name</label>
            <input type="text" value={form.name} onChange={update('name')} placeholder="Your name" required />

            <label>Email</label>
            <input type="email" value={form.email} onChange={update('email')} placeholder="you@domain.com" required />

            <label>Password</label>
            <input type="password" value={form.password} onChange={update('password')} placeholder="Minimum 8 characters" minLength={8} required />

            <label>I am joining as</label>
            <select value={form.role} onChange={update('role')}>
              <option value="reader">Reader — receive the ARK Letter</option>
              <option value="student">Student — enrol in courses</option>
              <option value="client">Client — access the portal</option>
              <option value="contributor">Contributor — apply to write</option>
            </select>

            <p style={{ marginTop: 22, fontSize: 12, color: '#8a8a8a', fontFamily: 'Helvetica Neue, sans-serif' }}>
              By creating an account you agree to our Terms and Privacy Notice.
            </p>

            <button type="submit" className="btn-primary" style={{ background:'var(--ark-black)', color:'var(--ark-ivory)', width: '100%', marginTop: 24 }}>
              {status === 'loading' ? 'Creating account…' : 'Create Account'}
            </button>

            {status === 'error' && <p style={{ color: '#b02020', marginTop: 16, fontSize: 13 }}>Please complete all fields (password min 8 chars).</p>}
            {status === 'success' && <p style={{ color: 'var(--ark-gold)', marginTop: 16, fontSize: 13 }}>Account created. Check your inbox.</p>}
          </form>

          <p className="auth-switch">
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
