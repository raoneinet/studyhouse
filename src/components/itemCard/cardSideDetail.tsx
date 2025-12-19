import { Card } from "@/types/card"

export const CardSideDetail = (selectedCard: any) => {
    console.log("outro aqui...", selectedCard)
    return (
        <div
            key={selectedCard.selectedCard?.id}
            className="w-full flex flex-col gap-5"
        >
            <div>
                <h2 className="font-bold text-2xl capitalize">{selectedCard.selectedCard?.title}</h2>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <span className="font-medium text-slate-800">Categoria: </span>
                    <span className="capitalize">{selectedCard.selectedCard?.category}</span>
                </div>
                <div>
                    <span className="font-medium text-slate-800">Status: </span>
                    <span className="capitalize">{selectedCard.selectedCard?.status}</span>
                </div>
                <div>
                    <span className="font-medium text-slate-800">Prioridade: </span>
                    <span>{selectedCard.selectedCard?.priority}</span>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-medium text-slate-800">Descrição</span>
                <p>{selectedCard.selectedCard?.description}</p>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-medium text-slate-800">Tags</span>
                <span>{selectedCard.selectedCard?.tags}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-medium text-slate-800">Links de Estudo</span>
                <span>{selectedCard.selectedCard?.link}</span>
            </div>
        </div>
    )
}