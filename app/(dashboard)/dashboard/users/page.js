import { getUsers } from '@/lib/actions';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardUsers() {
  const session = await getServerSession(authOptions);
  
  // Strict admin check
  const isAdmin = session?.user?.email === 'pabloandrescuevassanchez@gmail.com' || session?.user?.role === 'admin';
  if (!isAdmin) {
    redirect('/dashboard');
  }

  const users = await getUsers();
  
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <div className="section-eyebrow">Administration</div>
        <h1 style={{ fontSize: 32 }}>Team Members</h1>
        <p style={{ color: 'var(--ark-muted)', marginTop: 8 }}>Manage access and roles for ARK Platforms contributors.</p>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--ark-border)', borderRadius: 8, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', background: '#fcfcfc', borderBottom: '1px solid var(--ark-border)' }}>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500 }}>Name</th>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500 }}>Email</th>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500 }}>Joined</th>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} style={{ borderBottom: i === users.length - 1 ? 'none' : '1px solid #f5f5f5' }}>
                <td style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600 }}>
                      {user.name?.[0]}
                    </div>
                    <span style={{ fontWeight: 500, fontSize: 14 }}>{user.name}</span>
                  </div>
                </td>
                <td style={{ padding: '20px 24px', fontSize: 13, color: '#666' }}>{user.email}</td>
                <td style={{ padding: '20px 24px', fontSize: 13, color: '#999' }}>{new Date(user.created_at).toLocaleDateString()}</td>
                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end' }}>
                    <button style={{ background: 'none', border: 'none', padding: 0, fontSize: 12, color: 'var(--ark-gold)', cursor: 'pointer' }}>Edit Role</button>
                    <button style={{ background: 'none', border: 'none', padding: 0, fontSize: 12, color: '#ff4d4f', cursor: 'pointer' }}>Revoke Access</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
