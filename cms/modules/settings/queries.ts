import { prisma } from '@/lib/db'

export async function getSettings() {
  const settings = await prisma.setting.findMany()
  return settings.reduce(
    (acc, setting) => {
      acc[setting.key] = setting.value
      return acc
    },
    {} as Record<string, string>
  )
}

export async function getSetting(key: string) {
  return prisma.setting.findUnique({
    where: { key },
  })
}
