import { AlertCircle, Star } from "lucide-react"

export const MiniCards = ()=>{
    return (
        <div className="min-w-full md:flex-1 border-2 p-5 rounded-lg flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div className="text-xs">Categoria</div>
                <div>
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
            </div>
            <div>
                <div className="font-bold text-sm">React Hook Avançados</div>
                <div className="text-xs text-slate-600">
                    Estudo aprofundado sobre useEffect, useMemo e useCallback para otimização de performance em aplicações React modernas.
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="px-2 text-sm bg-red-100 w-fit rounded-md text-red-500 font-medium flex gap-1 items-center">
                    <AlertCircle className="w-3 h-3" /> Alta
                </div>
                <div className="px-2 text-sm bg-blue-100 rounded-md text-blue-500 font-medium">
                    Em Andamento
                </div>
            </div>
        </div>
    )
}