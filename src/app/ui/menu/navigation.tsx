import { Button } from "@/components/ui/button"

export const Navigation = () => {
    return (
        <div className="bg-white min-w-50 my-5 rounded-lg p-3">
            <nav>
                <ul>
                    <li>
                        <Button variant="ghost" className="w-full">Home</Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full">Novo Item</Button>
                    </li>
                    <li>
                        <Button variant="ghost" className="w-full">Todos os Itens</Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}