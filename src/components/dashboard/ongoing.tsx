"use client"
import { CircleDot } from "lucide-react"
import { MiniCards } from "./miniCards"
import { useGetAllCardsQuery } from "@/app/reducer/userReducer"
import { useRouter } from "next/navigation"

export const Ongoing = () => {

    const { data } = useGetAllCardsQuery()
    const router = useRouter()

    const goToOngoings = ()=> router.push("/protected/ongoing")

    return (
        <div className=" mt-5 p-5 rounded-lg bg-white border">
            <div className="flex justify-between items-center pb-5">
                <h1 className="font-bold text-xl text-slate-700 flex gap-2 items-center">
                    <CircleDot className="w-6 h-6 text-blue-600" />
                    Continuar estudando
                </h1>
                
                <button
                    type="button"
                    onClick={goToOngoings}
                    className="text-sm text-blue-600 font-medium"
                >
                    Ver todos →
                </button>
            </div>
            <div className="flex flex-row md:grid lg:grid-cols-4 md:grid-cols-2 lg:overflow-x-hidden overflow-x-scroll gap-5">
                {data?.map((ongoing) => (
                    ongoing.status === "ongoing" && (
                        <MiniCards key={ongoing.id}
                            card={ongoing} />
                    )
                ))}
            </div>
        </div>
    )
}