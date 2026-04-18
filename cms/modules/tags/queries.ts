import { prisma } from '@/lib/db'
import { unstable_cache as cache } from 'next/cache'

export const getTags = cache(
  async () => {
    return prisma.tag.findMany({
      orderBy: { name: 'asc' },
      include: {
        posts: true,
      },
    })
  },
  ['tags-list'],
  { revalidate: 3600, tags: ['tags'] }
)
