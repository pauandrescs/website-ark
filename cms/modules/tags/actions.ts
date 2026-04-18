'use server'

import { requireEditor } from '@/modules/auth/guards'
import { prisma } from '@/lib/db'
import { revalidateTag } from 'next/cache'
import { TagCreateSchema } from './schema'
import { slugify } from '@/lib/utils'

export async function createTag(prevState: any, formData: FormData) {
  const session = await requireEditor()

  const raw = {
    name: formData.get('name'),
  }

  const parsed = TagCreateSchema.safeParse(raw)
  if (!parsed.success) {
    return {
      error: 'Datos inválidos',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const slug = slugify(parsed.data.name)

  try {
    const tag = await prisma.tag.create({
      data: {
        slug,
        name: parsed.data.name,
      },
    })

    revalidateTag('tags')
    return { success: true, id: tag.id }
  } catch (error) {
    return {
      error: 'Error al crear la etiqueta',
    }
  }
}

export async function deleteTag(id: string) {
  const session = await requireEditor()

  try {
    await prisma.tag.delete({
      where: { id },
    })

    revalidateTag('tags')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al eliminar la etiqueta',
    }
  }
}

export async function updateTag(id: string, name: string) {
  const session = await requireEditor()
  const slug = slugify(name)

  try {
    await prisma.tag.update({
      where: { id },
      data: { name, slug },
    })

    revalidateTag('tags')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al actualizar la etiqueta',
    }
  }
}
