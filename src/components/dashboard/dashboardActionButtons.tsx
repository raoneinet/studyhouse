import { Grid, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "../Buttons/button"

export const DashboardActionButtons = () => {

    const router = useRouter()

    const goTocreateNewCard = ()=> router.push("/newLesson")

    const goToAllCards = ()=> router.push("/myLessons")

    return (
        <div className="mt-6 pt-6 border-t border-slate-200">
            <h4 className="text-sm font-semibold text-slate-600 mb-3">Ações Rápidas</h4>
            <div className="grid grid-cols-2 gap-3">
                <Button
                    routeLink={goToAllCards}
                    bgColor="bg-orange-50"
                    txtColor="text-orange-600"
                    hoverColor="bg-orange-100"
                    icon={Grid}
                    value="Todos os Cards"
                />
                <Button
                    routeLink={goTocreateNewCard}
                    bgColor="bg-green-50"
                    txtColor="text-green-600"
                    hoverColor="bg-green-100"
                    icon={Plus}
                    value="Novo Card"
                />
            </div>
        </div>
    )
}