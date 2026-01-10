"use client"
import { Subject } from "@/types/subject"
import { ExternalLink, AlertCircle, Star } from "lucide-react"
import { CardOptionsMenu } from "../cardOptions/cardOptionsMenu"
import { useToggleFavoriteMutation } from "@/app/reducer/userReducer"
import { Priorities } from "./priorities"
import { Statuses } from "./statuses"


type Props = {
    card: Subject
    handleSelectCard: (id: number) => void
}

export const ItemCard = ({ card, handleSelectCard }: Props) => {

    const [toggleFavorite] = useToggleFavoriteMutation()

    const handleFavorite = async (card: any) => {
        await toggleFavorite({
            id: card.id,
            isFavorite: !card?.is_favorite
        }).unwrap()
    }

    return (
        <div className="p-4 bg-white rounded-lg border">
            <div className="flex-1 flex flex-col justify-between h-full" onClick={() => handleSelectCard(card.id)}>
                <div className="flex justify-between items-center ">
                    <div className="flex gap-3">
                        <span
                            className="px-3 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100 bg-opacity-10 w-fittext-green-600">
                            {card.category}
                        </span>
                        <Priorities priority={card.priority} />
                    </div>
                    <div className="w-fit place-self-end">
                        <CardOptionsMenu cardId={card.id} />
                    </div>
                </div>
                <div className="py-2">
                    <div className="flex gap-2 items-center text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        <span>{card.title}</span>
                        <Star
                            onClick={() => handleFavorite(card)}
                            className={`w-4 h-4 cursor-pointer
                                    ${(card?.is_favorite === 1)
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-400 fill-transparent hover:text-yellow-400"}
                            `}
                        />
                    </div>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {card.description}
                    </p>
                </div>
                <div className="flex gap-4 py-2 flex-wrap">
                    {card.tags.split(",").map((tag, index) => (
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
                    <span>{card.links?.length} links</span>
                </div>
                <div className="py-2">
                    <div className="w-full bg-slate-100 rounded-md overflow-hidden">
                        <Statuses status={card.status} />
                    </div>
                </div>
            </div>
        </div>
    )
}