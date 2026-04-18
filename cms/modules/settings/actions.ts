'use server'

import { requireAdmin } from '@/modules/auth/guards'
import { prisma } from '@/lib/db'
import { revalidateTag } from 'next/cache'

export async function updateSetting(key: string, value: string) {
  const session = await requireAdmin()

  try {
    const existing = await prisma.setting.findUnique({
      where: { key },
    })

    if (existing) {
      await prisma.setting.update({
        where: { key },
        data: { value },
      })
    } else {
      await prisma.setting.create({
        data: { key, value },
      })
    }

    revalidateTag('settings')
    return { success: true }
  } catch (error) {
    return {
      error: 'Error al actualizar la configuración',
    }
  }
}
