import { Card } from "@/types/card"

export const CardSideDetail = (selectedCard: any)=>{
    console.log("outro aqui...", selectedCard)
    return (
        <div key={selectedCard.selectedCard.id}>
            <div>
                <h2>{selectedCard.selectedCard.title}</h2>
            </div>
            <div>
                <div>
                    {selectedCard.selectedCard.description}
                </div>
            </div>
            <div>
                {selectedCard.selectedCard.link}
            </div>
            <div>
                Mais detalhes...
            </div>
        </div>
    )
}