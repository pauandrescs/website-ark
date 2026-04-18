import { prisma } from '@/lib/db'

export default async function DashboardPage() {
  const [postsCount, authorsCount, tagsCount, mediaCount] = await Promise.all([
    prisma.post.count(),
    prisma.author.count(),
    prisma.tag.count(),
    prisma.mediaItem.count(),
  ])

  const stats = [
    { label: 'Posts', value: postsCount, icon: '📝' },
    { label: 'Autores', value: authorsCount, icon: '👤' },
    { label: 'Etiquetas', value: tagsCount, icon: '🏷️' },
    { label: 'Archivos', value: mediaCount, icon: '🖼️' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-ark-black">Bienvenido</h1>
        <p className="text-ark-muted mt-2">Resumen general de tu contenido</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg border border-ark-border p-6 hover:border-ark-gold transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-ark-muted text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-ark-black mt-2">{stat.value}</p>
              </div>
              <span className="text-4xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-ark-border p-6">
        <h2 className="text-lg font-bold text-ark-black mb-4">Acciones rápidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="/dashboard/posts/new"
            className="inline-block px-4 py-3 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors text-center text-sm"
          >
            ➕ Nuevo post
          </a>
          <a
            href="/dashboard/authors/new"
            className="inline-block px-4 py-3 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors text-center text-sm"
          >
            ➕ Nuevo autor
          </a>
          <a
            href="/dashboard/posts"
            className="inline-block px-4 py-3 border border-ark-border text-ark-black font-medium rounded-lg hover:bg-ark-ivory transition-colors text-center text-sm"
          >
            📝 Ver posts
          </a>
          <a
            href="/dashboard/media"
            className="inline-block px-4 py-3 border border-ark-border text-ark-black font-medium rounded-lg hover:bg-ark-ivory transition-colors text-center text-sm"
          >
            🖼️ Galería
          </a>
        </div>
      </div>
    </div>
  )
}
