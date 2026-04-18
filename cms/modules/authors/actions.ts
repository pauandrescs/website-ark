'use server'

import { requireEditor } from '@/modules/auth/guards'
import { prisma } from '@/lib/db'
import { revalidateTag } from 'next/cache'
import { AuthorCreateSchema, AuthorUpdateSchema } from './schema'
import { slugify } from '@/lib/utils'

export async function createAuthor(prevState: any, formData: FormData) {
  const session = await requireEditor()

  const raw = {
    name: formData.get('name'),
    role: formData.get('role'),
    bio: formData.get('bio') || '',
    email: formData.get('email') || '',
    avatar: formData.get('avatar') || null,
  }

  const parsed = AuthorCreateSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      error: 'Datos inválidos',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const slug = slugify(parsed.data.name)

  try {
    const author = await prisma.author.create({
      data: {
        slug,
        name: parsed.data.name,
        role: parsed.data.role,
        bio: parsed.data.bio,
        email: parsed.data.email || undefined,
        avatar: parsed.data.avatar,
      },
    })

    revalidateTag('authors')
    return { success: true, id: author.id }
  } catch (error) {
    return {
      error: 'Error al crear el autor',
    }
  }
}

export async function updateAuthor(prevState: any, formData: FormData) {
  const session = await requireEditor()
  const id = formData.get('id') as string

  const raw = {
    id,
    name: formData.get('name'),
    role: formData.get('role'),
    bio: formData.get('bio') || '',
    email: formData.get('email') || '',
    avatar: formData.get('avatar') || null,
  }

  const parsed = AuthorUpdateSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      error: 'Datos inválidos',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const slug = slugify(parsed.data.name)

  try {
    await prisma.author.update({
      where: { id: parsed.data.id },
      data: {
        slug,
        name: parsed.data.name,
        role: parsed.data.role,
        bio: parsed.data.bio,
        email: parsed.data.email || undefined,
        avatar: parsed.data.avatar,
      },
    })

    revalidateTag('authors')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al actualizar el autor',
    }
  }
}

export async function deleteAuthor(id: string) {
  const session = await requireEditor()

  try {
    await prisma.author.delete({
      where: { id },
    })

    revalidateTag('authors')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al eliminar el autor',
    }
  }
}
