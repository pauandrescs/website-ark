import { getAuthors } from '@/modules/authors/queries'
import { formatDate } from '@/lib/utils'

export default async function AuthorsPage() {
  const authors = await getAuthors()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ark-black">Autores</h1>
          <p className="text-ark-muted mt-1">{authors.length} autores registrados</p>
        </div>
        <a
          href="/dashboard/authors/new"
          className="px-6 py-2 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors"
        >
          ➕ Nuevo autor
        </a>
      </div>

      <div className="bg-white rounded-lg border border-ark-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-ark-ivory border-b border-ark-border">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-ark-black">Nombre</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-ark-black">Rol</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-ark-black">Posts</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-ark-black">Fecha</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-ark-black">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ark-border">
            {authors.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-ark-muted">
                  No hay autores. <a href="/dashboard/authors/new" className="text-ark-gold font-medium">Crea uno</a>
                </td>
              </tr>
            ) : (
              authors.map((author) => (
                <tr key={author.id} className="hover:bg-ark-ivory transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-ark-black">{author.name}</p>
                    {author.email && <p className="text-sm text-ark-muted">{author.email}</p>}
                  </td>
                  <td className="px-6 py-4 text-sm text-ark-black">{author.role}</td>
                  <td className="px-6 py-4 text-sm text-ark-black">
                    {(author.posts as any[])?.length || 0}
                  </td>
                  <td className="px-6 py-4 text-sm text-ark-muted">
                    {formatDate(author.createdAt)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={`/dashboard/authors/${author.id}`}
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
