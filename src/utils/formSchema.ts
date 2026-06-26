import { z } from "zod"

export const getFormSchema = (t: any) => z.object({
    title: z.string().trim().min(2, t('titleMin')),
    links: z.array(
        z.object({
            value: z.string().trim().optional()
        })
    ).optional(),
    description: z.string().trim().min(2, t('descMin')),
    category: z.string({ message: t('categoryRequired') }),
    status: z.string({ message: t('statusRequired') }),
    tags: z.string().optional(),
    priority: z.string({ message: t('priorityRequired') })
})