import { Subject } from "@/types/subject"
import { Star } from "lucide-react"

type Props = {
    handleFavorite: (card: Subject)=>void
    card: Subject
}

export const FavoriteIcon = ({handleFavorite, card}: Props) => {
    return (
        <div>
            <Star
                onClick={()=>handleFavorite(card)}
                className={`w-4 h-4 cursor-pointer
                                                ${(card?.is_favorite === 1)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-400 fill-transparent hover:text-yellow-400"}
                                        `}
            />
        </div>
    )
}