import { ExternalLink } from "lucide-react"

export const ItemCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg border">
            <div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium bg-green-100 bg-opacity-10 w-fit`}>
                    <span className="text-green-600">Programação</span>
                </div>
                <div className="py-2">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        React Hooks Avançados
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        Estudo aprofundado sobre useEffect, useMemo e useCallback
                    </p>
                </div>
                <div className="flex gap-4 py-2">
                    <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs md:text-sm rounded-md">#React</div>
                    <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs md:text-sm rounded-md">#JavaScript</div>
                    <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs md:text-sm rounded-md">#Frontend</div>
                    <div className="px-2 py-1 bg-slate-100 text-slate-600 text-xs md:text-sm rounded-md">#Programar</div>
                </div>
                <div className="flex gap-2 py-2 items-center">
                    <ExternalLink className="w-4 h-4" />
                    <span>2 links</span>
                </div>
                <div className="py-2">
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                        <span>Progresso</span>
                        <span className="font-medium">100%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full transition-all"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}