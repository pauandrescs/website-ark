import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { queryUser } from '@/lib/db';
import SettingsForm from '@/components/dashboard/SettingsForm';
import { redirect } from 'next/navigation';

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  // Fetch current user data
  const users = await queryUser(
    'SELECT name, email, bio, linkedin_url, twitter_url, website_url, avatar_url, role FROM users WHERE email = ?',
    [session.user.email]
  );
  
  const user = users[0];

  return (
    <div className="animate-reveal">
      <div className="dashboard-header" style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, fontWeight: 500, marginBottom: 8 }}>Account Settings</h1>
        <p style={{ color: 'var(--ark-muted)', fontSize: 14 }}>Manage your professional identity and platform preferences.</p>
      </div>

      <div className="settings-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: 40 }}>
        <div className="settings-main">
          <SettingsForm user={user} />
        </div>

        <aside className="settings-sidebar">
          <div className="settings-card" style={{ background: 'var(--ark-ivory)', padding: 32, borderRadius: 12, border: '1px solid var(--ark-border)' }}>
            <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: 16 }}>Public Profile</h3>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 24 }}>
              This information will be displayed alongside your articles in the ARK Journal. A professional bio and social links help build trust with the audience.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 0', borderTop: '1px solid var(--ark-border)' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }}></div>
              <span style={{ fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Account Active</span>
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
}
