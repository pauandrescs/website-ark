'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function Login() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('registered')) {
      setSuccess('Registration successful. Please sign in.');
    }
    if (searchParams.get('reset')) {
      setSuccess('Password updated successfully.');
    }
    if (searchParams.get('error')) {
      setError('An error occurred during authentication.');
    }
  }, [searchParams]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError('Invalid credentials.');
    } else {
      router.push('/');
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <div className="auth-shell" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
      <div className="auth-panel" style={{ padding: '80px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: 400, width: '100%' }}>
          <Link href="/" className="logo" style={{ color: 'var(--ark-black)', marginBottom: 40, display: 'block' }}>ARK PLATFORMS</Link>
          <div className="section-eyebrow">Welcome Back</div>
          <h1>Sign in to ARK.</h1>
          <p style={{ color: 'var(--ark-muted)', marginBottom: 32 }}>Access your projects and strategic insights.</p>

          <button 
            onClick={() => signIn('google')} 
            className="oauth-btn"
          >
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" style={{ width: 18, height: 18 }} />
            Continue with Google
          </button>
          
          <button 
            onClick={() => signIn('linkedin')} 
            className="oauth-btn"
            style={{ marginBottom: 24 }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: 18, height: 18 }} />
            Continue with LinkedIn
          </button>

          <div className="auth-divider">or sign in with email</div>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>Email Address</label>
            <input type="email" name="email" required placeholder="john@example.com" />
            
            <label style={{ display: 'flex', justifyContent: 'space-between' }}>
              Password
              <Link href="/reset-password" style={{ fontSize: 11, textTransform: 'none', letterSpacing: 0, color: 'var(--ark-gold)' }}>Forgot Password?</Link>
            </label>
            <input type="password" name="password" required placeholder="••••••••" />

            {error && <p style={{ color: 'red', fontSize: 14, marginTop: 16 }}>{error}</p>}
            {success && <p style={{ color: 'green', fontSize: 14, marginTop: 16 }}>{success}</p>}

            <button type="submit" className="header-cta" style={{ width: '100%', marginTop: 32, border: 'none', cursor: 'pointer' }} disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account? <Link href="/register">Create one</Link>
          </p>
        </div>
      </div>
      <div className="auth-visual" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: '#fff'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <blockquote style={{ fontSize: 32, fontFamily: 'Google Sans', marginBottom: 24 }}>
            "Knowledge is only valuable when it is applied. We build the bridges between insight and action."
          </blockquote>
          <cite style={{ fontStyle: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 12 }}>— ARK PLATFORMS</cite>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
      </div>
    </div>
  );
}
