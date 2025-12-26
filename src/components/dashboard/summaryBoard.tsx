import { AlertCircle, CheckCircle2, CircleDot, Grid } from "lucide-react"
import { SummaryCards } from "./summaryCards"

export const SummaryBoard = () => {
    return (
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
    )
}