"use client"
import { AlertCircle, CheckCircle2, CircleDot, Grid } from "lucide-react"
import { SummaryCards } from "./summaryCards"
import { useGetAllCardsQuery } from "@/app/reducer/userReducer"
import { useMemo } from "react"

export const SummaryBoard = () => {

    const {data = []} = useGetAllCardsQuery()

    const totalItems = useMemo(()=>{
        return data.reduce((acc, card)=>{
            acc.total++
            if(card.status === "ongoing") acc.ongoing++
            if(card.status === "done") acc.done++
            if(card.priority === "urgent") acc.urgent++
            return acc
        },
        {total: 0, ongoing: 0, done: 0, urgent: 0}
        )
    }, [data])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <SummaryCards
                title="Total de Cards"
                total={totalItems.total}
                Icon={<Grid className="w-8 h-8 text-slate-500" />}
                txtColor="text-slate-600"
            />
            <SummaryCards
                title="Em Andamento"
                total={totalItems.ongoing}
                Icon={<CircleDot className="w-8 h-8 text-blue-500" />}
                txtColor="text-blue-600"
            />
            <SummaryCards
                title="Urgente"
                total={totalItems.urgent}
                Icon={<AlertCircle className="w-8 h-8 text-red-500" />}
                txtColor="text-red-600"
            />
            <SummaryCards
                title="Concluído"
                total={totalItems.done}
                Icon={<CheckCircle2 className="w-8 h-8 text-green-500" />}
                txtColor="text-green-600"
            />
        </div>
    )
}