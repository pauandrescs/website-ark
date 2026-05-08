import { queryBlog } from '@/lib/db';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function DashboardPosts() {
  const posts = await queryBlog('SELECT * FROM posts ORDER BY date DESC');
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
        <div>
          <div className="section-eyebrow">Content</div>
          <h1 style={{ fontSize: 32 }}>Journal Essays</h1>
        </div>
        <Link href="/dashboard/posts/new" className="header-cta" style={{ border: 'none', cursor: 'pointer' }}>
          Write New Essay
        </Link>
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--ark-border)', borderRadius: 8, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', background: '#fcfcfc', borderBottom: '1px solid var(--ark-border)' }}>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500 }}>Title</th>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500 }}>Category</th>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500 }}>Date</th>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500 }}>Status</th>
              <th style={{ padding: '16px 24px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', fontWeight: 500, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, i) => (
              <tr key={i} style={{ borderBottom: i === posts.length - 1 ? 'none' : '1px solid #f5f5f5' }}>
                <td style={{ padding: '20px 24px' }}>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>{post.title}</div>
                  <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>/{post.slug}</div>
                </td>
                <td style={{ padding: '20px 24px', fontSize: 13 }}>{post.category}</td>
                <td style={{ padding: '20px 24px', fontSize: 13, color: '#666' }}>{post.date}</td>
                <td style={{ padding: '20px 24px' }}>
                  <span style={{ 
                    fontSize: 10, 
                    padding: '4px 8px', 
                    borderRadius: 4, 
                    background: post.featured ? 'rgba(197, 163, 93, 0.1)' : '#f0f0f0',
                    color: post.featured ? 'var(--ark-gold)' : '#666',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}>
                    {post.featured ? 'Featured' : 'Published'}
                  </span>
                </td>
                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end' }}>
                    <Link href={`/blog/${post.slug}`} target="_blank" style={{ fontSize: 12, color: 'var(--ark-gold)', textDecoration: 'none' }}>View</Link>
                    <Link href={`/dashboard/posts/edit/${post.slug}`} style={{ fontSize: 12, color: 'var(--ark-black)', textDecoration: 'none' }}>Edit</Link>
                    <button style={{ background: 'none', border: 'none', padding: 0, fontSize: 12, color: '#ff4d4f', cursor: 'pointer' }}>Delete</button>
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
