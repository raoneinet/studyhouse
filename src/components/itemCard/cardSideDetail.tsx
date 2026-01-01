import { Subject } from "@/types/subject"
import { StatusType } from "@/types/statusType"
import { statusOptions } from "@/utils/statusOptions"
import { PriorityType } from "@/types/priorityType"
import { priorityOptions } from "@/utils/priorityOptions"
import { ExternalLink, CircleDot, Star } from "lucide-react"

export const CardSideDetail = ({ selectedCard }: { selectedCard: Subject }) => {

    const stats: StatusType[] = statusOptions.filter(opt => opt.id === selectedCard?.status)
    const priority: PriorityType[] = priorityOptions.filter(opt => opt.id === selectedCard?.priority)

    return (
        <div
            key={selectedCard?.id}
            className="max-w-full flex flex-col gap-5 px-2"
        >
            <div>
                <h2 className="font-bold text-slate-700 text-2xl capitalize flex justify-between items-center">
                    <span>{selectedCard?.title}</span>
                    <Star className={`w-6 h-6 cursor-pointer
                            ${(selectedCard?.is_favorite === 1)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-400 fill-transparent"}
                    `} />
                </h2>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <span className="font-bold text-slate-700">Categoria:</span>
                    <span className="ml-2 px-2 py-1 rounded-md bg-green-100 text-green-600 bg-opacity-10 w-fit">
                        {selectedCard?.category}
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
                        <div
                            key={item.id}
                            className={`ml-2 px-2 rounded-md flex w-fit items-center gap-2 ${item.bgColor} ${item.color} ${item.borderColor}`}
                        >
                            <CircleDot className="w-3" />
                            <span>{item.label}</span>
                        </div>
                    ))}

                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-bold text-slate-700">Descrição</span>
                <p>{selectedCard?.description}</p>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-bold text-slate-700">Tags</span>
                <div className="flex gap-3 flex-wrap">
                    {selectedCard?.tags.split(",").map((item, index) => (
                        <div
                            key={index}
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs md:text-sm rounded-md flex-wrap">
                            <span className="">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1 flex-wrap">
                <span className="font-bold  text-slate-700">Links de Estudo ({selectedCard.links.length})</span>
                {selectedCard.links.map((item: string, index: number) => (
                    <div
                        key={index}
                        className=" bg-slate-100 px-2 py-3 rounded-md my-1 wrap-anywhere">
                        <a href={item} target="_blank" className="flex gap-2 items-center">
                            <ExternalLink className="w-4" />
                            {item}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}