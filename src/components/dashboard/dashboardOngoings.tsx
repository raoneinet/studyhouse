"use client"
import { CircleDot } from "lucide-react"
import { MiniCards } from "./miniCards"
import { useGetDashBoardDataQuery } from "@/app/reducer/lessonsApi"
import { useRouter } from "next/navigation"
import { Subject } from "@/types/subject"
import { LinkButton } from "../Buttons/linkButton"

export const DashboardOngoings = () => {

    const { data } = useGetDashBoardDataQuery()
    const router = useRouter()

    const goToOngoings = ()=> router.push("/ongoing")

    return (
        <div className="p-5 rounded-lg bg-white border">
            <div className="flex justify-between items-center pb-5">
                <h1 className="font-bold text-xl text-slate-700 flex gap-2 items-center">
                    <CircleDot className="w-6 h-6 text-orange-600" />
                    Continuar estudando
                </h1>
                <LinkButton
                    type="button"
                    link={goToOngoings}
                    value="Ver Todos"
                />
            </div>
            <div className="flex flex-row md:grid lg:grid-cols-4 md:grid-cols-2 lg:overflow-x-hidden overflow-x-scroll gap-5">
                {data?.continueStudying.map((ongoing: Subject) => (
                    ongoing.status === "ongoing" && (
                        <MiniCards key={ongoing.id}
                            card={ongoing} />
                    )
                ))}
            </div>
        </div>
    )
}