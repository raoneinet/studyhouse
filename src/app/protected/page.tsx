import StudyAppLayout from "@/components/dashboard/dashboard"
import { SummaryCards } from "@/components/dashboard/summaryCards"
import { Title } from "@/components/title/title"

const MyCards = () => {
    return (
        <div className="w-full">
            <Title
                title="Dashboard"
                subtitle="Bem-vindo de volta! Aqui está um resumo dos seus estudos"
                style="text-2xl font-bold text-slate-800 pb-5"
            />
            <div className="flex gap-5">
                <SummaryCards
                    total="4"
                />
                <SummaryCards
                    total="2"
                />
                <SummaryCards
                    total="2"
                />
                <SummaryCards
                    total="1"
                />
            </div>
            <StudyAppLayout />
        </div>
    )
}

export default MyCards