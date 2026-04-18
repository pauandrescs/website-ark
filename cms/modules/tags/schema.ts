import { z } from 'zod'

export const TagCreateSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
})

export type TagCreate = z.infer<typeof TagCreateSchema>
