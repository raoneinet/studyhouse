"use client"
import { useState, useEffect } from "react"
import { Card } from "@/types/card"
import { ExternalLink, CircleDot } from "lucide-react"
import { StatusType } from "@/types/statusType"
import { statusOptions } from "@/utils/statusOptions"
import { priorityOptions } from "@/utils/priorityOptions"
import { PriorityType } from "@/types/priorityType"

export const ItemCard = ({ card }: { card: Card }) => {

    const [status, setStatus] = useState<StatusType[]>()
    const [priority, setPriority] = useState<PriorityType[]>()
    const tags = card.tags.split(",")

    useEffect(() => {
        const statOption = statusOptions.filter(stat => stat.id === card.status)
        setStatus(statOption)

        const priority = priorityOptions.filter(item => item.id === card.priority)
        setPriority(priority)
    }, [])


    return (
        <div className="p-4 bg-white rounded-lg border">
            <div>
                <div className="flex gap-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-green-100 bg-opacity-10 w-fit`}>
                        <span className="text-green-600">{card.category}</span>
                    </div>
                    {priority?.map((item) => (
                        <div key={item.id} className={`${item.bgColor} ${item.borderColor} ${item.color} text-xs items-center flex gap-1 px-2 rounded-md`}>
                            <CircleDot className="w-3"/>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {card.description}
                    </p>
                </div>
                <div className="flex gap-4 py-2">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs md:text-sm rounded-md"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 py-2 items-center">
                    <ExternalLink className="w-4 h-4" />
                    <span>{card.link} links</span>
                </div>
                <div className="py-2">
                    <div className="w-full bg-slate-100 rounded-md overflow-hidden">
                        {status?.map(item => {
                            const Icon = item.icon
                            return (
                                <div key={item.id} className={`${item.bgColor} w-full flex gap-3 px-5 py-2`}>
                                    <Icon className={`${item.color} w-4`} />
                                    <span className={`${item.textColor}`}>{item.label}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}