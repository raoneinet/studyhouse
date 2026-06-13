"use client"
import { TrendingUp } from "lucide-react"
import { useGetDashBoardDataQuery } from "@/app/reducer/lessonsApi"
import { Statuses } from "../lessonCards/statuses"
import { Subject } from "@/types/subject"
import { statusOptions } from "@/utils/statusOptions"

export const RecentActivity = () => {


    const { data } = useGetDashBoardDataQuery()
    const stats = statusOptions.filter(item => data?.recentActivity.map((stts: Subject) => item.id === stts.status))
    console.log(data)

    return (
        <div className="flex flex-col flex-1 p-6 bg-white rounded-2xl shadow-sm border h-full">
            <h3 className="text-lg flex gap-2 items-center font-bold text-slate-800 pb-6 border-b mb-4">
                <TrendingUp className="w-5 h-5 text-orange-500" /> Atividade Recente
            </h3>
            {data?.recentActivity.map((activity: Subject) => (
                <div key={activity.id} className="flex justify-between border-b last:border-none pb-2">
                    <div className="">
                        <div className="flex gap-1 font-bold text-sm text-slate-600">
                            <span>{activity.title}</span>
                            -
                            <span>{activity.category}</span>
                        </div>
                        <div className="w-fit text-xs">
                            {stats.map(item => {
                                const Icon = item.icon
                                return (
                                    item.id === activity.status &&
                                    <div
                                        key={item.id}
                                        className={`px-2 rounded-xl flex gap-1 text-xs w-full items-center ${item.bgColor} ${item.textColor}`}>
                                        <Icon className="w-3" />
                                        <span>{item?.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="text-slate-500 text-sm">
                            <span>{activity.created_at?.split(" ")[0]}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}