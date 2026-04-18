import { Author } from '@prisma/client'

export type AuthorWithPosts = Author & {
  posts: any[]
}
