'use server'

import { requireEditor } from '@/modules/auth/guards'
import { prisma } from '@/lib/db'
import { revalidateTag } from 'next/cache'

export async function deleteMedia(id: string) {
  const session = await requireEditor()

  try {
    const media = await prisma.mediaItem.findUnique({
      where: { id },
    })

    if (!media) {
      return { error: 'Media no encontrada' }
    }

    // TODO: Delete file from storage
    // await fs.unlink(path.join(process.cwd(), 'public', media.storedPath))

    await prisma.mediaItem.delete({
      where: { id },
    })

    revalidateTag('media')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al eliminar el archivo',
    }
  }
}
