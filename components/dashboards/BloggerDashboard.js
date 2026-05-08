import Link from 'next/link';

export default function BloggerDashboard({ stats, recentPosts }) {
  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 600 }}>Journalist Console</h1>
        <p style={{ color: 'var(--ark-muted)' }}>Capture your insights and manage your collective contributions.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 40 }}>
        <div style={{ background: '#fff', padding: 24, borderRadius: 12, border: '1px solid #eee' }}>
          <div style={{ color: '#999', fontSize: 11, textTransform: 'uppercase', marginBottom: 8 }}>Total Published</div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>{stats.postCount}</div>
        </div>
        <div style={{ background: '#fff', padding: 24, borderRadius: 12, border: '1px solid #eee' }}>
          <div style={{ color: '#999', fontSize: 11, textTransform: 'uppercase', marginBottom: 8 }}>Total Reads</div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>1.2k</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
        <div>
          <h3 style={{ fontSize: 18, marginBottom: 20 }}>Your Recent Essays</h3>
          <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', overflow: 'hidden' }}>
            {recentPosts.map((post, i) => (
              <div key={i} style={{ padding: 20, borderBottom: i === recentPosts.length - 1 ? 'none' : '1px solid #f5f5f5', display: 'flex', justifyContent: 'space-between' }}>
                <span>{post.title}</span>
                <span style={{ color: '#ccc', fontSize: 12 }}>{post.date}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <Link href="/dashboard/posts/new" style={{ 
            display: 'block', background: 'var(--ark-black)', color: '#fff', padding: 20, borderRadius: 12, textDecoration: 'none', textAlign: 'center' 
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>✎</div>
            <div style={{ fontWeight: 600 }}>New Essay</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
