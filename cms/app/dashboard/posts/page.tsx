import { getPosts } from '@/modules/posts/queries'
import { formatDate } from '@/lib/utils'
import { POST_STATUSES } from '@/modules/posts/types'

export default async function PostsPage() {
  const posts = await getPosts(1, 50)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ark-black">Posts</h1>
          <p className="text-ark-muted mt-1">{posts.length} posts en total</p>
        </div>
        <a
          href="/dashboard/posts/new"
          className="px-6 py-2 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors"
        >
          ➕ Nuevo post
        </a>
      </div>

      <div className="bg-white rounded-lg border border-ark-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-ark-ivory border-b border-ark-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-ark-black">Título</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-ark-black">Autor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-ark-black">Estado</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-ark-black">Fecha</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-ark-black">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ark-border">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-ark-muted">
                  No hay posts aún. <a href="/dashboard/posts/new" className="text-ark-gold font-medium">Crea uno</a>
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-ark-ivory transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-ark-black">{post.title}</p>
                    <p className="text-sm text-ark-muted">{post.slug}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-ark-black">{post.author.name}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                      post.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' :
                      post.status === 'DRAFT' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {POST_STATUSES[post.status as any]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-ark-muted">
                    {formatDate(post.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={`/dashboard/posts/${post.id}`}
                      className="text-ark-gold hover:text-ark-gold-light font-medium text-sm"
                    >
                      Editar
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
