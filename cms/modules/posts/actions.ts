'use server'

import { requireEditor } from '@/modules/auth/guards'
import { prisma } from '@/lib/db'
import { revalidateTag } from 'next/cache'
import { PostCreateSchema, PostUpdateSchema } from './schema'
import { slugify } from '@/lib/utils'

export async function createPost(prevState: any, formData: FormData) {
  const session = await requireEditor()

  const raw = {
    title: formData.get('title'),
    excerpt: formData.get('excerpt') || '',
    content: formData.get('content'),
    authorId: formData.get('authorId'),
    coverImage: formData.get('coverImage') || null,
    tags: formData.getAll('tags'),
  }

  const parsed = PostCreateSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      error: 'Datos inválidos',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const slug = slugify(parsed.data.title)

  try {
    const post = await prisma.post.create({
      data: {
        slug,
        title: parsed.data.title,
        excerpt: parsed.data.excerpt,
        content: JSON.parse(parsed.data.content as string),
        authorId: parsed.data.authorId,
        coverImage: parsed.data.coverImage,
        createdById: session.user!.id,
        tags: {
          create: (parsed.data.tags || []).map((tagId: string) => ({
            tagId,
          })),
        },
      },
      include: { author: true, tags: { include: { tag: true } } },
    })

    revalidateTag('posts')
    return { success: true, id: post.id }
  } catch (error) {
    return {
      error: 'Error al crear el post',
    }
  }
}

export async function updatePost(prevState: any, formData: FormData) {
  const session = await requireEditor()
  const id = formData.get('id') as string

  const raw = {
    id,
    title: formData.get('title'),
    excerpt: formData.get('excerpt') || '',
    content: formData.get('content'),
    authorId: formData.get('authorId'),
    coverImage: formData.get('coverImage') || null,
    tags: formData.getAll('tags'),
  }

  const parsed = PostUpdateSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      error: 'Datos inválidos',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const slug = slugify(parsed.data.title)

  try {
    await prisma.post.update({
      where: { id: parsed.data.id },
      data: {
        slug,
        title: parsed.data.title,
        excerpt: parsed.data.excerpt,
        content: JSON.parse(parsed.data.content as string),
        authorId: parsed.data.authorId,
        coverImage: parsed.data.coverImage,
        tags: {
          deleteMany: {},
          create: (parsed.data.tags || []).map((tagId: string) => ({
            tagId,
          })),
        },
      },
    })

    revalidateTag('posts')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al actualizar el post',
    }
  }
}

export async function deletePost(id: string) {
  const session = await requireEditor()

  try {
    await prisma.post.delete({
      where: { id },
    })

    revalidateTag('posts')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al eliminar el post',
    }
  }
}

export async function publishPost(id: string) {
  const session = await requireEditor()

  try {
    await prisma.post.update({
      where: { id },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date(),
      },
    })

    revalidateTag('posts')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al publicar el post',
    }
  }
}

export async function unpublishPost(id: string) {
  const session = await requireEditor()

  try {
    await prisma.post.update({
      where: { id },
      data: {
        status: 'DRAFT',
        publishedAt: null,
      },
    })

    revalidateTag('posts')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al despublicar el post',
    }
  }
}

export async function archivePost(id: string) {
  const session = await requireEditor()

  try {
    await prisma.post.update({
      where: { id },
      data: {
        status: 'ARCHIVED',
      },
    })

    revalidateTag('posts')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al archivar el post',
    }
  }
}
