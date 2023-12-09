import { z } from "zod";

export const editPostSchema = z.object({
    title: z.string().min(1, 'O título é obrigatório'),
    image: z.string().min(1, 'Forneça o endereço da imagem'),
    description: z.string().min(10, 'O post precisa ter no mínimo 10 caracteres')

})