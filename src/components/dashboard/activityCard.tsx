"use client"
import { TrendingUp } from "lucide-react"
import { useGetAllCardsQuery } from "@/app/reducer/userReducer"
import { statusOptions } from "@/utils/statusOptions"
import { StatusType } from "@/types/statusType"

export const ActivityCard = () => {

    const { data = [] } = useGetAllCardsQuery()


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
            {data.slice(0, 4).map(item => (
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