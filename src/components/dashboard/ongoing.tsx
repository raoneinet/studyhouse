import { CircleDot } from "lucide-react"
import { MiniCards } from "./miniCards"

export const Ongoing = () => {
    return (
        <div className=" mt-5 p-5 rounded-lg bg-white">
            <div className="flex justify-between items-center pb-5">
                <h1 className="font-bold text-xl text-slate-700 flex gap-2 items-center">
                    <CircleDot className="w-6 h-6 text-blue-600" /> 
                    Continuar estudando
                </h1>
                <p className="text-sm text-blue-600 font-medium">Ver todos →</p>
            </div>
            <div className="flex flex-row md:grid lg:grid-cols-4 md:grid-cols-2 lg:overflow-x-hidden overflow-x-scroll gap-5">
                <MiniCards />
                <MiniCards />
                <MiniCards />
                <MiniCards />
            </div>
        </div>
    )
}