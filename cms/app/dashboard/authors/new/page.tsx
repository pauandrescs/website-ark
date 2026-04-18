'use client'

import { useActionState } from 'react'
import { createAuthor } from '@/modules/authors/actions'

export default function NewAuthorPage() {
  const [state, formAction] = useActionState(createAuthor, undefined)

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-ark-black">Nuevo autor</h1>
      </div>

      <form action={formAction} className="bg-white rounded-lg border border-ark-border p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Nombre del autor"
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Rol *
          </label>
          <input
            type="text"
            name="role"
            required
            placeholder="Ej: Founding Partner — Technology"
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Bio
          </label>
          <textarea
            name="bio"
            rows={4}
            placeholder="Biografía breve del autor"
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Avatar (URL)
          </label>
          <input
            type="url"
            name="avatar"
            placeholder="https://..."
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        {state?.error && (
          <div className="bg-red-50 rounded-lg border border-red-200 p-4">
            <p className="text-sm text-red-700">{state.error}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full px-6 py-3 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors"
        >
          Crear autor
        </button>
      </form>
    </div>
  )
}
