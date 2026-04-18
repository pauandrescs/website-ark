import { prisma } from '@/lib/db'
import { unstable_cache as cache } from 'next/cache'

export const getPosts = cache(
  async (page = 1, pageSize = 20) => {
    return prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        author: true,
        tags: {
          include: { tag: true },
        },
      },
    })
  },
  ['posts-list'],
  { revalidate: 60, tags: ['posts'] }
)

export const getPost = cache(
  async (id: string) => {
    return prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        tags: {
          include: { tag: true },
        },
      },
    })
  },
  ['post'],
  { revalidate: 60, tags: ['posts'] }
)

export const getPublishedPosts = cache(
  async (page = 1, pageSize = 10) => {
    return prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        author: true,
        tags: {
          include: { tag: true },
        },
      },
    })
  },
  ['published-posts'],
  { revalidate: 300, tags: ['posts'] }
)

export const getPostsByTag = cache(
  async (tagSlug: string) => {
    return prisma.post.findMany({
      where: {
        status: 'PUBLISHED',
        tags: {
          some: {
            tag: { slug: tagSlug },
          },
        },
      },
      include: {
        author: true,
        tags: {
          include: { tag: true },
        },
      },
    })
  },
  ['posts-by-tag'],
  { revalidate: 300, tags: ['posts'] }
)
