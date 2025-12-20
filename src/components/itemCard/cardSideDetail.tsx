import { Card } from "@/types/card"
import { StatusType } from "@/types/statusType"
import { statusOptions } from "@/utils/statusOptions"
import { PriorityType } from "@/types/priorityType"
import { priorityOptions } from "@/utils/priorityOptions"
import { ExternalLink, CircleDot } from "lucide-react"

export const CardSideDetail = (selectedCard: any) => {

    const stats: StatusType[] = statusOptions.filter(opt => opt.id === selectedCard.selectedCard?.status)
    const priority: PriorityType[] = priorityOptions.filter(opt => opt.id === selectedCard.selectedCard?.priority)

    console.log("outro aqui...", selectedCard)
    return (
        <div
            key={selectedCard.selectedCard?.id}
            className="w-full flex flex-col gap-5"
        >
            <div>
                <h2 className="font-bold text-slate-700 text-2xl capitalize">
                    {selectedCard.selectedCard?.title}
                </h2>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <span className="font-bold text-slate-700">Categoria:</span>
                    <span className="ml-2 px-2 py-1 rounded-md bg-green-100 text-green-600 bg-opacity-10 w-fit">
                        {selectedCard.selectedCard?.category}
                    </span>
                </div>
                <div className="flex items-center">
                    <span className="font-bold text-slate-700">Status:</span>
                    {stats.map(item => {
                        const Icon = item.icon
                        return (
                            <div
                                key={item.id}
                                className={`ml-2 w-fit flex items-center gap-2 px-2 rounded-md capitalize ${item.textColor} ${item.bgColor}`}
                            >
                                <Icon className="w-3" />
                                <span>{item.label}</span>
                            </div>
                        )
                    })}

                </div>
                <div className="flex items-center">
                    <span className="font-bold text-slate-700">Prioridade:</span>
                    {priority.map(item => (
                        <span 
                            className={`ml-2 px-2 rounded-md flex w-fit items-center gap-2 ${item.bgColor} ${item.color} ${item.borderColor}`}
                        >
                            <CircleDot className="w-3"/>
                            {item.label}
                        </span>
                    ))}

                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-bold text-slate-700">Descrição</span>
                <p>{selectedCard.selectedCard?.description}</p>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-bold text-slate-700">Tags</span>
                <span>{selectedCard.selectedCard?.tags}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-bold  text-slate-700">Links de Estudo</span>
                <span>{selectedCard.selectedCard?.link}</span>
            </div>
        </div>
    )
}