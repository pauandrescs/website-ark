'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { completeOnboarding } from '@/lib/actions';
import { useSession } from 'next-auth/react';

// Premium SVG Icons
const Icons = {
  Partner: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Blogger: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    </svg>
  ),
  Student: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Company: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Developer: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Investor: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Guest: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
};

const TYPES = [
  { id: 'partner', label: 'Strategic Partner', desc: 'Collaborate on high-end ventures and infrastructure.', Icon: Icons.Partner },
  { id: 'developer', label: 'Software Engineer', desc: 'Build and integrate with the ARK technical ecosystem.', Icon: Icons.Developer },
  { id: 'blogger', label: 'Journal Contributor', desc: 'Write essays and share insights in the ARK Journal.', Icon: Icons.Blogger },
  { id: 'investor', label: 'Venture Investor', desc: 'Explore investment opportunities in ARK platforms.', Icon: Icons.Investor },
  { id: 'student', label: 'Student / Learner', desc: 'Access professional courses and educational materials.', Icon: Icons.Student },
  { id: 'company', label: 'Corporate Entity', desc: 'Represent a firm using ARK professional services.', Icon: Icons.Company },
  { id: 'guest', label: 'Explorer', desc: 'Browse the collective and discover our multidisciplinary work.', Icon: Icons.Guest }
];

export default function Onboarding() {
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { update } = useSession();

  async function handleComplete() {
    if (!selected) return;
    setLoading(true);
    const res = await completeOnboarding(selected);
    if (res.success) {
      await update({ onboarding_completed: 1, role: selected });
      router.push('/dashboard');
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <div className="auth-shell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f8f5ee' }}>
      <div style={{ maxWidth: 1200, width: '100%', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>The Final Step</div>
          <h1 style={{ fontSize: 52, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 20 }}>Welcome to the Collective.</h1>
          <p style={{ color: 'var(--ark-muted)', fontSize: 20, maxWidth: 600, margin: '0 auto' }}>Define your professional identity to tailor your experience within the ARK ecosystem.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 80 }}>
          {TYPES.map(type => (
            <div 
              key={type.id}
              className={`onboarding-card ${selected === type.id ? 'active' : ''}`}
              onClick={() => setSelected(type.id)}
            >
              <div className="icon-wrapper">
                <type.Icon />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 14 }}>{type.label}</h3>
              <p style={{ fontSize: 15, color: 'var(--ark-muted)', lineHeight: 1.7, flex: 1 }}>{type.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={handleComplete}
            className="header-cta" 
            disabled={!selected || loading}
            style={{ width: 340, height: 60, border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 600 }}
          >
            {loading ? 'Initializing Environment...' : 'Continue to Dashboard'}
          </button>
        </div>
      </div>
    </div>
  );
}
