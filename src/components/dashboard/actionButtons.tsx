import { Grid, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export const ActionButtons = () => {

    const router = useRouter()

    const goTocreateNewCard = ()=>{
        router.push("/protected/newCard")
    }

    const goToAllCards = ()=>{
        router.push("/protected/myCards")
    }

    return (
        <div className="mt-6 pt-6 border-t border-slate-200">
            <h4 className="text-sm font-semibold text-slate-600 mb-3">Ações Rápidas</h4>
            <div className="grid grid-cols-2 gap-3">
                <button
                    onClick={goToAllCards}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                    <Grid className="w-4 h-4" />
                    <span className="text-sm font-medium">Todos os Cards</span>
                </button>
                <button
                    onClick={goTocreateNewCard} 
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-medium">Novo Card</span>
                </button>
            </div>
        </div>
    )
}