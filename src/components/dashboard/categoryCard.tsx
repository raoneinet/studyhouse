"use client"
import { Target } from "lucide-react"
import { useGetDashBoardDataQuery } from "@/app/reducer/userReducer"

type Category = {
    category: string
    total: number
}

export const CategoryCard = () => {

    const { data } = useGetDashBoardDataQuery()

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
            {data?.categories.map((cat: Category) => (
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