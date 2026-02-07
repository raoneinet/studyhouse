import { z } from "zod"

export const formSchema = z.object({
    title: z.string().trim().min(2, "Titulo deve ter mais de 2 caracteres"),
    links: z.array(
        z.object({
            value: z.string().trim().optional()
        })
    ).optional(),
    description: z.string().trim().min(2, "Descrição não pode ficar vazio e deve ter mais de 2 caracteres"),
    category: z.string("Obrigatório escolher uma categoria"),
    status: z.string("Obrigatório escolher uma categoria"),
    tags: z.string().optional(),
    priority: z.string("Obrigatório escolher uma categoria")
})