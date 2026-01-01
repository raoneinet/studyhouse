"use client"
import { Target } from "lucide-react"
import { useGetAllSubjectsQuery } from "@/app/reducer/userReducer"
import { useMemo } from "react"

export const CategoryCard = () => {

    const { data = [] } = useGetAllSubjectsQuery()

    const categories = useMemo(() => {
        const countCat: Record<string, number> = {}

        data.forEach(cat => {
            const category = cat.category
            countCat[category] = (countCat[category] || 0) + 1
        })

        return Object.entries(countCat)
            .map(([category, total]) => ({ category, total }))
            .sort((a, b) => b.total - a.total)
    }, [data])

    return (
        <div className="flex flex-col flex-1 p-5 gap-4 bg-white rounded-lg border">
            <div>
                <h1 className="text-xl flex gap-2 items-center font-bold text-slate-600">
                    <span>
                        <Target className="w-6 h-6 text-blue-500" />
                    </span>
                    Cards por categoria
                </h1>
            </div>
            {categories.map(cat => (
                <div key={cat.category} className="flex justify-between items-center ">
                    <div className="flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="font-bold">{cat.category}</div>
                    </div>
                    <div>
                        <div>{cat.total}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}