'use client'

import { useActionState, useEffect, useState } from 'react'
import { updateAuthor, deleteAuthor } from '@/modules/authors/actions'
import { getAuthor } from '@/modules/authors/queries'

export default function EditAuthorPage({ params }: { params: { id: string } }) {
  const [state, formAction] = useActionState(updateAuthor, undefined)
  const [author, setAuthor] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const authorData = await getAuthor(params.id)
      setAuthor(authorData)
      setIsLoading(false)
    }
    loadData()
  }, [params.id])

  if (isLoading || !author) {
    return <div className="text-center py-12">Cargando...</div>
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ark-black">Editar autor</h1>
          <p className="text-ark-muted mt-1">{author.slug}</p>
        </div>
        <form
          action={async () => {
            if (confirm('¿Estás seguro de que deseas eliminar este autor?')) {
              await deleteAuthor(author.id)
              window.location.href = '/dashboard/authors'
            }
          }}
        >
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            Eliminar
          </button>
        </form>
      </div>

      <form action={formAction} className="bg-white rounded-lg border border-ark-border p-8 space-y-6">
        <input type="hidden" name="id" value={author.id} />

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            name="name"
            defaultValue={author.name}
            required
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Rol *
          </label>
          <input
            type="text"
            name="role"
            defaultValue={author.role}
            required
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Bio
          </label>
          <textarea
            name="bio"
            defaultValue={author.bio || ''}
            rows={4}
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={author.email || ''}
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ark-black mb-2">
            Avatar (URL)
          </label>
          <input
            type="url"
            name="avatar"
            defaultValue={author.avatar || ''}
            className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
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
          Actualizar autor
        </button>
      </form>
    </div>
  )
}
