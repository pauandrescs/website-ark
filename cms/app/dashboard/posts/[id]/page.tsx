'use client'

import { useActionState, useState, useEffect } from 'react'
import { updatePost, publishPost, unpublishPost, deletePost } from '@/modules/posts/actions'
import { getPost } from '@/modules/posts/queries'
import { getAuthors } from '@/modules/authors/queries'
import { getTags } from '@/modules/tags/queries'

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [state, formAction] = useActionState(updatePost, undefined)
  const [post, setPost] = useState<any>(null)
  const [content, setContent] = useState<string>('{}')
  const [authors, setAuthors] = useState<any[]>([])
  const [tags, setTags] = useState<any[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const [postData, authorsData, tagsData] = await Promise.all([
        getPost(params.id),
        getAuthors(),
        getTags(),
      ])
      setPost(postData)
      if (postData) {
        setContent(JSON.stringify(postData.content))
        setSelectedTags(postData.tags.map((t: any) => t.tagId))
      }
      setAuthors(authorsData)
      setTags(tagsData)
      setIsLoading(false)
    }
    loadData()
  }, [params.id])

  if (isLoading || !post) {
    return <div className="text-center py-12">Cargando...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ark-black">Editar post</h1>
          <p className="text-ark-muted mt-1">{post.slug}</p>
        </div>
        <div className="flex gap-2">
          {post.status === 'DRAFT' && (
            <form
              action={async () => {
                await publishPost(post.id)
                window.location.reload()
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Publicar
              </button>
            </form>
          )}
          {post.status === 'PUBLISHED' && (
            <form
              action={async () => {
                await unpublishPost(post.id)
                window.location.reload()
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Despublicar
              </button>
            </form>
          )}
          <form
            action={async () => {
              if (confirm('¿Estás seguro de que deseas eliminar este post?')) {
                await deletePost(post.id)
                window.location.href = '/dashboard/posts'
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
      </div>

      <form action={formAction} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <input type="hidden" name="id" value={post.id} />

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">Título *</label>
            <input
              type="text"
              name="title"
              defaultValue={post.title}
              required
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
            />
          </div>

          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">Resumen</label>
            <textarea
              name="excerpt"
              defaultValue={post.excerpt || ''}
              rows={2}
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
            />
          </div>

          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">Contenido *</label>
            <textarea
              name="content"
              defaultValue={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              required
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ark-gold"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">Autor *</label>
            <select
              name="authorId"
              defaultValue={post.authorId}
              required
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
            >
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">Imagen de portada</label>
            <input
              type="text"
              name="coverImage"
              defaultValue={post.coverImage || ''}
              className="w-full px-4 py-2 border border-ark-border rounded-lg bg-white text-ark-black focus:outline-none focus:ring-2 focus:ring-ark-gold"
            />
          </div>

          <div className="bg-white rounded-lg border border-ark-border p-6">
            <label className="block text-sm font-medium text-ark-black mb-2">Etiquetas</label>
            <div className="space-y-2">
              {tags.map((tag) => (
                <label key={tag.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag.id}
                    defaultChecked={selectedTags.includes(tag.id)}
                    className="rounded border-ark-border"
                  />
                  <span className="text-sm text-ark-black">{tag.name}</span>
                </label>
              ))}
            </div>
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
            Actualizar post
          </button>
        </div>
      </form>
    </div>
  )
}
