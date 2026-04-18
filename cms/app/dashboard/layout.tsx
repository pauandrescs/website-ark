import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-ark-ivory">
      {/* Sidebar */}
      <aside className="w-64 bg-ark-black text-ark-ivory border-r border-ark-border">
        <div className="p-6">
          <h2 className="text-2xl font-bold">ARK CMS</h2>
        </div>

        <nav className="space-y-1 px-4">
          {[
            { href: '/dashboard', label: 'Dashboard', icon: '📊' },
            { href: '/dashboard/posts', label: 'Posts', icon: '📝' },
            { href: '/dashboard/authors', label: 'Autores', icon: '👤' },
            { href: '/dashboard/tags', label: 'Etiquetas', icon: '🏷️' },
            { href: '/dashboard/media', label: 'Media', icon: '🖼️' },
            { href: '/dashboard/settings', label: 'Configuración', icon: '⚙️' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-ark-charcoal text-ark-ivory text-sm font-medium transition-colors"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-ark-charcoal rounded-lg p-4 space-y-2">
            <p className="text-sm text-ark-ivory">{session.user.name}</p>
            <p className="text-xs text-ark-muted">{session.user.email}</p>
            <form
              action={async () => {
                'use server'
                const { signOut } = await import('@/auth')
                await signOut({ redirect: true, redirectUrl: '/login' })
              }}
            >
              <button
                type="submit"
                className="w-full mt-3 px-3 py-2 bg-ark-gold text-ark-black text-xs font-medium rounded hover:bg-ark-gold-light transition-colors"
              >
                Cerrar sesión
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white border-b border-ark-border px-8 py-4">
          <h1 className="text-2xl font-bold text-ark-black">Panel de Control</h1>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
