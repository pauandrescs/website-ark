import { getMediaItems } from '@/modules/media/queries'

export default async function MediaPage() {
  const mediaItems = await getMediaItems()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ark-black">Galería de medios</h1>
          <p className="text-ark-muted mt-1">{mediaItems.length} archivos</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-ark-border border-dashed p-12 text-center">
        <p className="text-ark-muted mb-4">🖼️ Arrastra archivos aquí o haz clic para cargar</p>
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          id="media-upload"
        />
        <label htmlFor="media-upload" className="inline-block px-6 py-2 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors cursor-pointer">
          Seleccionar archivos
        </label>
      </div>

      {mediaItems.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-ark-border overflow-hidden hover:border-ark-gold transition-colors">
              {item.mimeType.startsWith('image/') ? (
                <img
                  src={item.url}
                  alt={item.alt || item.filename}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-ark-ivory flex items-center justify-center text-4xl">
                  📄
                </div>
              )}
              <div className="p-3 border-t border-ark-border">
                <p className="text-sm font-medium text-ark-black truncate">{item.filename}</p>
                <p className="text-xs text-ark-muted">{(item.size / 1024).toFixed(2)} KB</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {mediaItems.length === 0 && (
        <p className="text-center text-ark-muted py-8">No hay archivos. Carga algunos para comenzar.</p>
      )}
    </div>
  )
}
