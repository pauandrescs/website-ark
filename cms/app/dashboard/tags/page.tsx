import { getTags } from '@/modules/tags/queries'

export default async function TagsPage() {
  const tags = await getTags()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ark-black">Etiquetas</h1>
          <p className="text-ark-muted mt-1">{tags.length} etiquetas</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-ark-border p-6">
        <form className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-ark-black mb-2">Nueva etiqueta</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="name"
                placeholder="Nombre de la etiqueta"
                className="flex-1 px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors"
              >
                Agregar
              </button>
            </div>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tags.length === 0 ? (
            <p className="col-span-full text-center text-ark-muted">No hay etiquetas aún</p>
          ) : (
            tags.map((tag) => (
              <div
                key={tag.id}
                className="p-4 border border-ark-border rounded-lg hover:border-ark-gold transition-colors flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-ark-black">{tag.name}</p>
                  <p className="text-sm text-ark-muted">{(tag.posts as any[])?.length || 0} posts</p>
                </div>
                <button
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                  type="button"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
