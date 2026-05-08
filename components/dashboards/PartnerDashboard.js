import Link from 'next/link';

export default function PartnerDashboard({ stats, recentPosts, users }) {
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
        <div>
          <div className="section-eyebrow">Strategic Oversight</div>
          <h1 style={{ fontSize: 42, fontWeight: 500 }}>The Partner Council</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: 'var(--ark-muted)', textTransform: 'uppercase' }}>Consolidated Value</div>
          <div style={{ fontSize: 24, fontWeight: 500, color: 'var(--ark-gold)' }}>€2.4M</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 60 }}>
        {[
          { label: 'Network Reach', val: '45k' },
          { label: 'Active Projects', val: '12' },
          { label: 'Content Depth', val: stats.postCount }
        ].map((s, i) => (
          <div key={i} style={{ background: '#fff', padding: 32, border: '1px solid var(--ark-border)', borderRadius: 4 }}>
            <div style={{ fontSize: 11, color: 'var(--ark-muted)', textTransform: 'uppercase', marginBottom: 12 }}>{s.label}</div>
            <div style={{ fontSize: 32 }}>{s.val}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: users && users.length > 0 ? '1fr 1fr' : '1fr', gap: 40 }}>
        {users && users.length > 0 && (
          <div style={{ background: 'var(--ark-black)', color: '#fff', padding: 40, borderRadius: 4 }}>
            <h3 style={{ fontSize: 20, marginBottom: 24, color: 'var(--ark-gold)' }}>Collective Members</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {users.slice(0, 5).map((u, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1a', paddingBottom: 12 }}>
                  <span style={{ fontSize: 14 }}>{u.name}</span>
                  <span style={{ fontSize: 12, color: '#666' }}>{u.email}</span>
                </div>
              ))}
            </div>
            <Link href="/dashboard/users" style={{ display: 'block', marginTop: 24, fontSize: 12, color: 'var(--ark-gold)', textDecoration: 'none' }}>Manage Directory →</Link>
          </div>
        )}

        <div style={{ background: '#fff', padding: 40, border: '1px solid var(--ark-border)', borderRadius: 4 }}>
          <h3 style={{ fontSize: 20, marginBottom: 24 }}>Strategic Content</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {recentPosts.slice(0, 5).map((p, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f5f5f5', paddingBottom: 12 }}>
                <span style={{ fontSize: 14 }}>{p.title}</span>
                <span style={{ fontSize: 11, color: '#999' }}>{p.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
