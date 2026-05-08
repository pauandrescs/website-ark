import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { queryBlog, queryUser } from '@/lib/db';
import { 
  FileText, 
  Eye, 
  Users, 
  TrendingUp, 
  Calendar,
  ArrowUpRight,
  Plus
} from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  // Fetch real metrics
  const postsCount = await queryBlog('SELECT COUNT(*) as total FROM posts');
  const totalViews = await queryBlog('SELECT SUM(views) as total FROM posts');
  const recentPosts = await queryBlog('SELECT title, views, date, slug FROM posts ORDER BY date DESC LIMIT 5');
  const userRole = await queryUser('SELECT role FROM users WHERE email = ?', [session.user.email]);

  const metrics = [
    { label: 'Total Essays', value: postsCount[0].total || 0, icon: <FileText />, color: '#3b82f6' },
    { label: 'Total Views', value: totalViews[0].total || 0, icon: <Eye />, color: '#10b981' },
    { label: 'Team Role', value: userRole[0]?.role || 'Member', icon: <Users />, color: '#f59e0b' },
    { label: 'Growth', value: '+12%', icon: <TrendingUp />, color: '#8b5cf6' },
  ];

  return (
    <div className="animate-reveal">
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 500, marginBottom: 8 }}>Welcome back, {session.user.name.split(' ')[0]}</h1>
          <p style={{ color: 'var(--ark-muted)', fontSize: 14 }}>Here's what's happening with ARK Platforms today.</p>
        </div>
        <Link href="/dashboard/posts/new" className="dashboard-cta-btn">
          <Plus size={18} /> Write Essay
        </Link>
      </div>

      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <div key={i} className="metric-card">
            <div className="metric-icon" style={{ color: m.color }}>{m.icon}</div>
            <div className="metric-info">
              <div className="metric-label">{m.label}</div>
              <div className="metric-value">{m.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content-grid">
        <div className="dashboard-main-card">
          <div className="card-header">
            <h3 className="card-title">Recent Journal Activity</h3>
            <Link href="/dashboard/posts" className="view-all">View All <ArrowUpRight size={14} /></Link>
          </div>
          <div className="recent-list">
            {recentPosts.map((p, i) => (
              <div key={i} className="recent-item">
                <div className="item-main">
                  <div className="item-title">{p.title}</div>
                  <div className="item-meta">
                    <span><Calendar size={12} /> {p.date}</span>
                    <span><Eye size={12} /> {p.views || 0} views</span>
                  </div>
                </div>
                <Link href={`/blog/${p.slug}`} target="_blank" className="item-link">Preview</Link>
              </div>
            ))}
            {recentPosts.length === 0 && (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--ark-muted)', fontSize: 14 }}>
                No essays published yet. Start writing your first one!
              </div>
            )}
          </div>
        </div>

        <div className="dashboard-side-card">
          <h3 className="card-title">System Status</h3>
          <div className="status-list">
            <div className="status-item">
              <div className="status-indicator online"></div>
              <div>
                <div className="status-label">Database Cluster</div>
                <div className="status-val">Operational</div>
              </div>
            </div>
            <div className="status-item">
              <div className="status-indicator online"></div>
              <div>
                <div className="status-label">CDN & Edge</div>
                <div className="status-val">Optimized</div>
              </div>
            </div>
            <div className="status-item">
              <div className="status-indicator warning"></div>
              <div>
                <div className="status-label">Auth Service</div>
                <div className="status-val">Checking...</div>
              </div>
            </div>
          </div>
          <div className="upgrade-prompt">
            <h4>ARK Architect Pro</h4>
            <p>Unlock advanced analytics and multi-author management.</p>
            <button>Upgrade Plan</button>
          </div>
        </div>
      </div>

    </div>
  );
}
