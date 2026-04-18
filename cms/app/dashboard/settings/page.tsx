import { getSettings } from '@/modules/settings/queries'

export default async function SettingsPage() {
  const settings = await getSettings()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-ark-black">Configuración</h1>
        <p className="text-ark-muted mt-1">Gestiona la configuración del sitio</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg border border-ark-border p-6">
          <h2 className="text-lg font-bold text-ark-black mb-6">Configuración general</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ark-black mb-2">
                Título del sitio
              </label>
              <input
                type="text"
                defaultValue={settings.siteTitle || 'ARK Platforms'}
                className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ark-black mb-2">
                Descripción
              </label>
              <textarea
                defaultValue={settings.siteDescription || ''}
                rows={3}
                className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors"
            >
              Guardar cambios
            </button>
          </form>
        </div>

        {/* API Settings */}
        <div className="bg-white rounded-lg border border-ark-border p-6">
          <h2 className="text-lg font-bold text-ark-black mb-6">API</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ark-black mb-2">
                Webhook URL
              </label>
              <input
                type="url"
                defaultValue={settings.webhookUrl || ''}
                className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
                disabled
              />
              <p className="text-xs text-ark-muted mt-2">
                URL donde se enviarán notificaciones de cambios
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-ark-ivory rounded-lg border border-ark-border p-6">
        <h2 className="text-lg font-bold text-ark-black mb-2">Acerca del CMS</h2>
        <p className="text-ark-text">
          ARK CMS v1.0 — Sistema de gestión de contenidos para ARK Platforms
        </p>
      </div>
    </div>
  )
}
