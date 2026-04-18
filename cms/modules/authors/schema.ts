import { z } from 'zod'

export const AuthorCreateSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  role: z.string().min(1, 'Debes especificar el rol'),
  bio: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  avatar: z.string().optional().nullable(),
})

export type AuthorCreate = z.infer<typeof AuthorCreateSchema>

export const AuthorUpdateSchema = AuthorCreateSchema.extend({
  id: z.string(),
})

export type AuthorUpdate = z.infer<typeof AuthorUpdateSchema>
