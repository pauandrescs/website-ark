import { prisma } from '@/lib/db'
import { unstable_cache as cache } from 'next/cache'

export const getMediaItems = cache(
  async () => {
    return prisma.mediaItem.findMany({
      orderBy: { createdAt: 'desc' },
    })
  },
  ['media-list'],
  { revalidate: 3600, tags: ['media'] }
)

export const getMediaItem = cache(
  async (id: string) => {
    return prisma.mediaItem.findUnique({
      where: { id },
    })
  },
  ['media'],
  { revalidate: 3600, tags: ['media'] }
)
