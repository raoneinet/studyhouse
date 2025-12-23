import { TrendingUp } from "lucide-react"

export const ActivityCard = ()=>{
    return (
        <div className="flex flex-col flex-1 p-5 gap-4 bg-white rounded-lg border">
            <div>
                <h1 className="text-xl flex gap-2 items-center font-bold text-slate-600">
                    <span>
                        <TrendingUp className="w-6 h-6 text-green-500"/>
                    </span>
                    Atividade Recente
                </h1>
            </div>
            <div className="flex justify-between border-b pb-3">
                <div className="">
                    <div className="flex gap-1 font-bold text-sm text-slate-600">
                        <span>Programação</span>
                         - 
                        <span>CRUD</span>
                    </div>
                    <div className="text-xs text-green-500">Concluído</div>
                </div>
                <div>
                    <div className="text-slate-500 text-sm">
                        <span>Hoje</span>
                    </div>
                </div>
            </div>
        </div>
    )
}