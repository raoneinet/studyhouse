"use client"
import { AlertCircle, CheckCircle2, CircleDot, Grid } from "lucide-react"
import { SummaryCards } from "./summaryCards"
import { useGetDashBoardDataQuery } from "@/app/reducer/userReducer"

export const SummaryBoard = () => {

    const {data} = useGetDashBoardDataQuery()

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <SummaryCards
                title="Total de Cards"
                total={data?.stats.total ?? 0}
                Icon={<Grid className="w-8 h-8 text-slate-500" />}
                txtColor="text-slate-600"
            />
            <SummaryCards
                title="Em Andamento"
                total={data?.stats.ongoing ?? 0}
                Icon={<CircleDot className="w-8 h-8 text-blue-500" />}
                txtColor="text-blue-600"
            />
            <SummaryCards
                title="Urgente"
                total={data?.stats.urgent ?? 0}
                Icon={<AlertCircle className="w-8 h-8 text-red-500" />}
                txtColor="text-red-600"
            />
            <SummaryCards
                title="Concluído"
                total={data?.stats.done ?? 0}
                Icon={<CheckCircle2 className="w-8 h-8 text-green-500" />}
                txtColor="text-green-600"
            />
        </div>
    )
}