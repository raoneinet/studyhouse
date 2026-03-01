import { Subject } from "@/types/subject"
import { AlertCircle, Star } from "lucide-react"
import { statusOptions } from "@/utils/statusOptions"
import { useToggleFavoriteMutation, useUpdateStatusMutation } from "@/app/reducer/lessonsApi"
import { Statuses } from "../lessonCards/statuses"

type Props = {
    card: Subject
}

type StatProps = {
    id: number
    status: string
}

export const MiniCards = ({ card }: Props) => {

    const stats = statusOptions.filter(item => item.id === card?.status)

    const [toggleFavorite] = useToggleFavoriteMutation()
    const [updateStatus] = useUpdateStatusMutation()

    const handleFavorite = async (card: any) => {
        try {
            await toggleFavorite({
                id: card.id,
                isFavorite: !card?.is_favorite
            }).unwrap()
        } catch (error: any) {
            console.log("Erro ao favoritar item. ", error)
        }
    }

    const handleUpdateStatus = async ({id, status}: StatProps)=>{
        try{
            await updateStatus({
                id,
                status
            }).unwrap()
        }catch(error: any){
            console.log("Eroo ao atualizar status de lição: ", error)
        }
    }

    return (
        <div className="min-w-full md:flex-1 border-2 p-5 rounded-lg flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div className="text-xs bg-green-200 text-green-700 px-2 rounded-md">{card?.category}</div>
                <Star
                    onClick={() => handleFavorite(card)}
                    className={`w-4 h-4 cursor-pointer
                            ${(card?.is_favorite === 1)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-400 fill-transparent hover:text-yellow-400"}
                    `}
                />
            </div>
            <div>
                <div className="font-bold text-sm">{card?.title}</div>
                <div className="text-xs text-slate-600 line-clamp-3">
                    {card?.description}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="px-2 text-xs bg-red-100 w-fit rounded-md text-red-500 font-medium flex gap-1 items-center">
                    <AlertCircle className="w-3 h-3" />
                    {card?.priority}
                </div>
                <div>
                    <Statuses status={card} handleUpdateStatus={handleUpdateStatus}/>
                </div>
            </div>
        </div>
    )
}