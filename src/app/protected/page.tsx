import { ActivityCard } from "@/components/dashboard/activityCard"
import { CategoryCard } from "@/components/dashboard/categoryCard"
import { HomeRemarks } from "@/components/dashboard/homeRemarks"
import { Ongoing } from "@/components/dashboard/ongoing"
import { Title } from "@/components/title/title"
import { SummaryBoard } from "@/components/dashboard/summaryBoard"

const MyCards = () => {
    return (
        <div className="w-full">
            <Title
                title="Dashboard"
                subtitle="Bem-vindo de volta! Aqui está um resumo dos seus estudos"
                style="text-2xl font-bold text-slate-800 pb-5"
            />
            <div>
                <SummaryBoard />
            </div>
            <div>
                <Ongoing />
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
                <CategoryCard />
                <ActivityCard />
            </div>
            <div>
                <HomeRemarks />
            </div>
        </div>
    )
}

export default MyCards