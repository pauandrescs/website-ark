import { Post, PostStatus, Author } from '@prisma/client'

export type PostWithRelations = Post & {
  author: Author
  tags: any[]
  createdBy?: any
}

export type PostStatus_ = typeof PostStatus[keyof typeof PostStatus]

export const POST_STATUSES: Record<PostStatus_, string> = {
  DRAFT: 'Borrador',
  PUBLISHED: 'Publicado',
  ARCHIVED: 'Archivado',
}
