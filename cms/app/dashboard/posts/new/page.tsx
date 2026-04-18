'use client'

import { useActionState, useState } from 'react'
import { createPost } from '@/modules/posts/actions'
import { getAuthors } from '@/modules/authors/queries'
import { getTags } from '@/modules/tags/queries'
import { useEffect } from 'react'

export default function NewPostPage() {
  const [state, formAction] = useActionState(createPost, undefined)
  const [content, setContent] = useState<string>('{}')
  const [authors, setAuthors] = useState<any[]>([])
  const [tags, setTags] = useState<any[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    async function loadData() {
      const [authorsData, tagsData] = await Promise.all([
        getAuthors(),
        getTags(),
      ])
      setAuthors(authorsData)
      setTags(tagsData)
    }
    loadData()
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-ark-black">Nuevo post</h1>
      </div>

      <form action={formAction} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">
              Título *
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Título del post"
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
            />
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">
              Resumen
            </label>
            <textarea
              name="excerpt"
              rows={2}
              placeholder="Resumen breve del post"
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
            />
          </div>

          {/* Content Editor - Simplified */}
          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">
              Contenido *
            </label>
            <textarea
              name="content"
              defaultValue={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              required
              placeholder="Contenido del post (JSON)"
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black font-mono text-sm placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
            />
            <p className="text-xs text-ark-muted mt-2">
              JSON format (TipTap compatible)
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Author */}
          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">
              Autor *
            </label>
            <select
              name="authorId"
              required
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
            >
              <option value="">Selecciona un autor</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          {/* Cover Image */}
          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">
              Imagen de portada
            </label>
            <input
              type="text"
              name="coverImage"
              placeholder="URL de la imagen"
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black placeholder-ark-muted focus:outline-none focus:ring-2 focus:ring-ark-gold"
            />
          </div>

          {/* Tags */}
          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">
              Etiquetas
            </label>
            <div className="space-y-2">
              {tags.map((tag) => (
                <label key={tag.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag.id}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTags([...selectedTags, tag.id])
                      } else {
                        setSelectedTags(selectedTags.filter((t) => t !== tag.id))
                      }
                    }}
                    className="rounded border-ark-border"
                  />
                  <span className="text-sm text-ark-black">{tag.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Errors */}
          {state?.error && (
            <div className="bg-red-50 rounded-lg border border-red-200 p-4">
              <p className="text-sm text-red-700">{state.error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-ark-gold text-ark-black font-medium rounded-lg hover:bg-ark-gold-light transition-colors"
          >
            Guardar post
          </button>
        </div>
      </form>
    </div>
  )
}
