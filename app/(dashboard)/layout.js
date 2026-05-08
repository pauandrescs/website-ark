'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { 
  LayoutGrid, 
  FileText, 
  Users, 
  Settings, 
  Terminal, 
  Briefcase, 
  LogOut, 
  User,
  PenTool
} from 'lucide-react';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = session?.user?.role || 'guest';
  const isAdmin = role === 'admin';

  // Dynamic Navigation Items based on Role
  const getNavItems = () => {
    const items = [
      { href: '/dashboard', label: 'Overview', icon: LayoutGrid }
    ];

    if (role === 'blogger' || isAdmin || role === 'partner') {
      items.push({ href: '/dashboard/posts', label: 'Journal Library', icon: FileText });
    }

    if (role === 'developer' || isAdmin) {
      items.push({ href: '/dashboard/forge', label: 'Technical Forge', icon: Terminal });
    }

    if (role === 'company' || role === 'partner' || isAdmin) {
      items.push({ href: '/dashboard/services', label: 'Strategic Services', icon: Briefcase });
    }

    if (isAdmin) {
      items.push({ href: '/dashboard/users', label: 'Collective Directory', icon: Users });
    }

    items.push({ href: '/dashboard/settings', label: 'Settings', icon: Settings });

    return items;
  };

  return (
    <div className="dashboard-shell" style={{ display: 'flex', minHeight: '100vh', background: '#f8f5ee' }}>
      <aside className="dashboard-sidebar" style={{ 
        width: 280, 
        background: 'var(--ark-black)', 
        color: 'var(--ark-ivory)',
        padding: '40px 24px',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 100
      }}>
        <Link href="/" className="logo" style={{ marginBottom: 60, fontSize: 18, fontWeight: 500, letterSpacing: '0.05em', color: '#fff', textDecoration: 'none' }}>
          ARK <span style={{ color: 'var(--ark-gold)' }}>COLLECTIVE</span>
        </Link>
        
        <nav style={{ flex: 1 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 24, paddingLeft: 16 }}>
            {role.toUpperCase()} CONSOLE
          </div>
          {getNavItems().map(item => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '14px 16px',
                  borderRadius: 2,
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  fontSize: 13,
                  marginBottom: 4,
                  background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                  borderLeft: isActive ? '2px solid var(--ark-gold)' : '2px solid transparent',
                  paddingLeft: isActive ? 14 : 16,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                <Icon size={16} style={{ color: isActive ? 'var(--ark-gold)' : 'inherit' }} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, paddingLeft: 16 }}>
            <div style={{ width: 40, height: 40, background: 'var(--ark-gold)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
              <User size={20} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: 13, color: '#fff', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontWeight: 500, letterSpacing: '0.02em' }}>{session?.user?.name}</div>
              <div style={{ fontSize: 10, color: 'var(--ark-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{role}</div>
            </div>
          </div>
          <button 
            onClick={() => signOut()}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              padding: '14px 16px',
              background: 'transparent',
              border: '1px solid rgba(255,50,50,0.2)',
              borderRadius: 2,
              color: '#ff6b6b',
              cursor: 'pointer',
              fontSize: 12,
              transition: 'all 0.2s',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
          >
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      <main style={{ marginLeft: 280, flex: 1, padding: '60px 80px' }}>
        {children}
      </main>
    </div>
  );
}
