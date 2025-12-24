import { ActivityCard } from "@/components/dashboard/activityCard"
import { CategoryCard } from "@/components/dashboard/categoryCard"
import { HomeRemarks } from "@/components/dashboard/homeRemarks"
import { Ongoing } from "@/components/dashboard/ongoing"
import { SummaryCards } from "@/components/dashboard/summaryCards"
import { Title } from "@/components/title/title"
import { AlertCircle, CheckCircle2, CircleDot, Grid } from "lucide-react"

const MyCards = () => {
    return (
        <div className="w-full">
            <Title
                title="Dashboard"
                subtitle="Bem-vindo de volta! Aqui está um resumo dos seus estudos"
                style="text-2xl font-bold text-slate-800 pb-5"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <SummaryCards
                    title="Total de Cards"
                    total="4"
                    Icon={<Grid className="w-8 h-8 text-slate-500" />}
                    txtColor="text-slate-600"
                />
                <SummaryCards
                    title="Em Andamento"
                    total="2"
                    Icon={<CircleDot className="w-8 h-8 text-blue-500" />}
                    txtColor="text-blue-600"
                />
                <SummaryCards
                    title="Urgente"
                    total="2"
                    Icon={<AlertCircle className="w-8 h-8 text-red-500" />}
                    txtColor="text-red-600"
                />
                <SummaryCards
                    title="Concluído"
                    total="1"
                    Icon={<CheckCircle2 className="w-8 h-8 text-green-500" />}
                    txtColor="text-green-600"
                />
            </div>
            <div className=" mt-5 p-5 border rounded-lg bg-white">
                <div className="flex justify-between items-center pb-3">
                    <h1 className="font-bold text-xl text-slate-700 flex gap-2 items-center">
                       <CircleDot className="w-6 h-6 text-blue-600"/> Continuar estudando
                    </h1>
                    <p className="text-sm text-blue-600 font-medium">Ver todos →</p>
                </div>
                <div >
                    <Ongoing />
                </div>
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