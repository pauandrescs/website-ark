import { prisma } from '@/lib/db'
import { unstable_cache as cache } from 'next/cache'

export const getAuthors = cache(
  async () => {
    return prisma.author.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        posts: true,
      },
    })
  },
  ['authors-list'],
  { revalidate: 3600, tags: ['authors'] }
)

export const getAuthor = cache(
  async (id: string) => {
    return prisma.author.findUnique({
      where: { id },
      include: {
        posts: true,
      },
    })
  },
  ['author'],
  { revalidate: 3600, tags: ['authors'] }
)

export const getAuthorBySlug = cache(
  async (slug: string) => {
    return prisma.author.findUnique({
      where: { slug },
      include: {
        posts: {
          where: { status: 'PUBLISHED' },
        },
      },
    })
  },
  ['author-slug'],
  { revalidate: 3600, tags: ['authors'] }
)
