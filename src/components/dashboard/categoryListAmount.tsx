"use client"
import { Target } from "lucide-react"
import { useGetDashBoardDataQuery } from "@/app/reducer/lessonsApi"
import { useTranslations } from "next-intl"

type Category = {
    category: string
    total: number
}

export const CategoryListAmounts = () => {

    const { data } = useGetDashBoardDataQuery()
    const t = useTranslations('Dashboard');

    return (
        <div className="flex-1 bg-white border p-6 rounded-2xl shadow-sm h-full flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 pb-4 border-b">
                <Target className="w-5 h-5 text-orange-500" /> {t('categoriesTitle')}
            </h3>
            {data?.categories.map((cat: Category) => (
                <div key={cat.category} className="flex justify-between items-center ">
                    <div className="flex gap-2 items-center">
                        <div className="w-3 h-3 rounded-full bg-orange-600"></div>
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