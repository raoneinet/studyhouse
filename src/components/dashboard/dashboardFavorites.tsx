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

    const goToFavorites = () => router.push("/favorites")

    return (
        <div className="bg-white rounded-2xl border p-6 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center pb-6 border-b mb-6">
                <h3 className="font-bold text-lg text-slate-800 flex gap-2 items-center">
                    <Star className="text-orange-400 w-5 h-5 fill-current" />
                    Cards Favoritos
                </h3>
                <LinkButton
                    type="button"
                    link={goToFavorites}
                    value="Ver Todos"
                />
            </div>
            <div className="flex flex-col gap-5 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {data?.favorites
                        .filter((remark: Subject) => remark.is_favorite != 0)
                        .slice(0, 3)
                        .map((remark: Subject) => (
                            <div key={remark.id} className="w-full flex">
                                <MiniCards card={remark} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}