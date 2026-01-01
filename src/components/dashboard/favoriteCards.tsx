"use client"
import { Award, Star } from "lucide-react"
import { MiniCards } from "./miniCards"
import { ActionButtons } from "./actionButtons"
import { useGetAllSubjectsQuery } from "@/app/reducer/userReducer"
import { useRouter } from "next/navigation"

export const FavoriteCards = () => {

    const { data = [] } = useGetAllSubjectsQuery()
    const router = useRouter()

    const goToFavorites = ()=> router.push("/protected/favorites")

    return (
        <div className="flex-1 flex flex-col bg-white border p-5 rounded-lg mt-5">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-slate-700 flex gap-2 items-center">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Favoritos
                </h1>
                <button 
                    type="button"
                    onClick={goToFavorites}
                    className="text-sm text-blue-600 font-medium"
                >
                    Ver todos →
                </button>
            </div>
            <div className="flex flex-col gap-5 py-5">
                <div className="flex flex-row md:grid lg:grid-cols-4 md:grid-cols-2 lg:overflow-x-hidden overflow-x-scroll gap-5">
                    {data.slice(0, 4).map(remark => 
                        (remark.is_favorite === 1) && (
                        <MiniCards 
                            key={remark.id}
                            card={remark}
                        />
                    ))}
                </div>
                <ActionButtons />
            </div>
        </div>
    )
}