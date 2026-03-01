"use client"
import { Star } from "lucide-react"
import { MiniCards } from "./miniCards"
import { DashboardActionButtons } from "./dashboardActionButtons"
import { useGetDashBoardDataQuery } from "@/app/reducer/lessonsApi"
import { useRouter } from "next/navigation"
import { Subject } from "@/types/subject"
import { LinkButton } from "../Buttons/linkButton"

export const DashboardFavorites = () => {

    const { data } = useGetDashBoardDataQuery()
    const router = useRouter()

    const goToFavorites = ()=> router.push("/favorites")

    return (
        <div className="flex-1 flex flex-col bg-white border p-5 rounded-lg mt-5">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-slate-700 flex gap-2 items-center">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Favoritos
                </h1>
                <LinkButton
                    type="button"
                    link={goToFavorites}
                    value="Ver Todos"
                />
            </div>
            <div className="flex flex-col gap-5 py-5">
                <div className="flex flex-row md:grid lg:grid-cols-4 md:grid-cols-2 lg:overflow-x-hidden overflow-x-scroll gap-5">
                    {data?.favorites.map((remark: Subject) => 
                        (remark.is_favorite != 0) && (
                        <MiniCards 
                            key={remark.id}
                            card={remark}
                        />
                    ))}
                </div>
                <DashboardActionButtons />
            </div>
        </div>
    )
}