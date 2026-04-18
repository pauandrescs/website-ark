import { z } from 'zod'

export const PostCreateSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  excerpt: z.string().optional(),
  content: z.string(),
  authorId: z.string().min(1, 'Debes seleccionar un autor'),
  coverImage: z.string().optional().nullable(),
  tags: z.array(z.string()).optional().default([]),
})

export type PostCreate = z.infer<typeof PostCreateSchema>

export const PostUpdateSchema = PostCreateSchema.extend({
  id: z.string(),
})

export type PostUpdate = z.infer<typeof PostUpdateSchema>
