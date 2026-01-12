import { z } from "zod"

export const formSchema = z.object({
    title: z.string().min(2),
    links: z.array(
        z.object({
            value: z.string().optional()
        })
    ),
    description: z.string(),
    category: z.string(),
    status: z.string(),
    tags: z.string(),
    priority: z.string()
})