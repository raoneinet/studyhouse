"use client"
import { useEffect, useState } from "react"
import { Subject } from "@/types/subject"
import { StatusType } from "@/types/statusType"
import { statusOptions } from "@/utils/statusOptions"
import { PriorityType } from "@/types/priorityType"
import { priorityOptions } from "@/utils/priorityOptions"
import { ExternalLink, CircleDot, Star } from "lucide-react"
import { useToggleFavoriteMutation } from "@/app/reducer/lessonsApi"
import { FavoriteIcon } from "./favoriteIcon"
import { LinkPreview } from "../linkPreview/linkPreview"
import { CardOptionsMenu } from "../cardOptions/cardOptionsMenu"
import { LessonNotes } from "./lessonNotes"

export const LessonDetails = ({ selectedCard }: { selectedCard: Subject }) => {

    const stats: StatusType[] = statusOptions.filter(opt => opt.id === selectedCard?.status)
    const priority: PriorityType[] = priorityOptions.filter(opt => opt.id === selectedCard?.priority)

    const [toggleFavorite] = useToggleFavoriteMutation()

    const handleFavorite = async (favorite: any) => {
        //console.log("Detalhe de favoritado: ", favorite.id)
        try {
            await toggleFavorite({
                id: favorite.id,
                isFavorite: !favorite?.is_favorite
            }).unwrap()
        } catch (error: any) {
            console.log("Erro ao favoritar item. ", error)
        }
    }


    return (
        <div
            key={selectedCard?.id}
            className="max-w-full flex flex-col gap-5 px-2 wrap"
        >
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-slate-700 text-2xl capitalize flex gap-2 items-center wrap-anywhere">
                    <span>{selectedCard?.title}</span>
                    <FavoriteIcon handleFavorite={handleFavorite} card={selectedCard} />
                </h2>
                <CardOptionsMenu cardId={selectedCard?.id} />
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <span className="font-bold text-slate-700">Categoria:</span>
                    <span className="ml-2 px-2 py-1 rounded-xl bg-green-100 text-green-600 bg-opacity-10 w-fit">
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
                                className={`ml-2 w-fit flex items-center gap-2 px-2 rounded-xl capitalize ${item.textColor} ${item.bgColor}`}
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
                            className={`ml-2 px-2 rounded-xl flex w-fit items-center gap-2 ${item.bgColor} ${item.color} ${item.borderColor}`}
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
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs md:text-sm rounded-xl flex-wrap">
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
                        className=" bg-slate-100 px-2 py-3 rounded-xl my-1 wrap-anywhere"
                    >
                        <LinkPreview links={item} />
                    </div>
                ))}
            </div>
            
            <LessonNotes lessonId={selectedCard.id} />
        </div>
    )
}
