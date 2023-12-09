import { z } from 'zod';
  

export const loginSchema = z.object({
    email: z
        .string()
        .nonempty('O e-mail é obrigatório.')
        .email('O e-mail fornecido é inválido.'),
    password: z
        .string()
        .nonempty('A senha é obrigatória.')
})

export type iLoginForm = z.infer<typeof loginSchema>