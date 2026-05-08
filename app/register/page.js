'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { register } from '@/lib/actions';
import { signIn } from 'next-auth/react';

export default function Register() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await register(data);
    if (res.success) {
      router.push('/login?registered=true');
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
          <div className="section-eyebrow">Onboarding</div>
          <h1>Create an account.</h1>
          <p style={{ color: 'var(--ark-muted)', marginBottom: 32 }}>Join the collective of operators and builders.</p>

          <button 
            onClick={() => signIn('google')} 
            className="oauth-btn"
          >
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" style={{ width: 18, height: 18 }} />
            Register with Google
          </button>
          
          <button 
            onClick={() => signIn('linkedin')} 
            className="oauth-btn"
            style={{ marginBottom: 24 }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: 18, height: 18 }} />
            Register with LinkedIn
          </button>

          <div className="auth-divider">or register with email</div>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>Full Name</label>
            <input type="text" name="name" required placeholder="John Doe" />
            
            <label>Email Address</label>
            <input type="email" name="email" required placeholder="john@example.com" />
            
            <label>Password</label>
            <input type="password" name="password" required placeholder="••••••••" />

            {error && <p style={{ color: 'red', fontSize: 14, marginTop: 16 }}>{error}</p>}

            <button type="submit" className="header-cta" style={{ width: '100%', marginTop: 32, border: 'none', cursor: 'pointer' }} disabled={loading}>
              {loading ? 'Creating Account...' : 'Register'}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link href="/login">Sign In</Link>
          </p>
        </div>
      </div>
      <div className="auth-visual" style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80)',
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
            "Excellence is not an act, but a habit. We build the tools that make that habit inevitable."
          </blockquote>
          <cite style={{ fontStyle: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 12 }}>— ARK PLATFORMS</cite>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
      </div>
    </div>
  );
}
