"use client"
import { TrendingUp } from "lucide-react"
import { useGetDashBoardDataQuery } from "@/app/reducer/userReducer"

type RecentAct = {
    id: number
    title: string
    category: string
    description: string
    status: string
    created_at: string
}

export const ActivityCard = () => {

    const { data } = useGetDashBoardDataQuery()

    return (
        <div className="flex flex-col flex-1 p-5 gap-4 bg-white rounded-lg border">
            <div>
                <h1 className="text-xl flex gap-2 items-center font-bold text-slate-600">
                    <span>
                        <TrendingUp className="w-6 h-6 text-green-500" />
                    </span>
                    Atividade Recente
                </h1>
            </div>
            {data?.recentActivity.map((item: RecentAct) => (
                <div key={item.id} className="flex justify-between border-b last:border-none pb-2">
                    <div className="">
                        <div className="flex gap-1 font-bold text-sm text-slate-600">
                            <span>{item.title}</span>
                            -
                            <span>{item.category}</span>
                        </div>
                        <div className="text-xs text-green-500">{item.status}</div>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm">
                            <span>{item.created_at?.split(" ")[0]}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}