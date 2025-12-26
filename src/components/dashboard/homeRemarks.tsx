import { Award } from "lucide-react"
import { MiniCards } from "./miniCards"
import { ActionButtons } from "./actionButtons"

export const HomeRemarks = () => {
    return (
        <div className="flex-1 flex flex-col bg-white border p-5 rounded-lg mt-5">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl text-slate-700 flex gap-2 items-center">
                    <span>
                        <Award className="w-5 h-5 text-yellow-500" />
                    </span>
                    Cards em destaque</h1>
                <p className="text-sm text-blue-600 font-medium">Ver todos →</p>
            </div>
            <div className="flex flex-col gap-5 py-5">
                <div className="flex flex-row md:grid lg:grid-cols-4 md:grid-cols-2 lg:overflow-x-hidden overflow-x-scroll gap-5">
                    <MiniCards />
                    <MiniCards />
                    <MiniCards />
                    <MiniCards />
                </div>
                <ActionButtons />
            </div>
        </div>
    )
}