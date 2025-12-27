
export type Subject = {
    id: number
    title: string
    links: string[]
    description: string
    category: string
    status: string
    priority: string
    tags: string
    created_at?: Date | any
    is_favorite: number | string
}