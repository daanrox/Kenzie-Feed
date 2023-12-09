import { z } from 'zod';
  

export const addPostSchema = z.object({
    title: z
        .string()
        .nonempty('O título é obrigatório.'),
    image: z
        .string(),
    description: z
        .string()
        .nonempty('O conteúdo é obrigatório.'),
})

export type iAddPostForm = z.infer<typeof addPostSchema>