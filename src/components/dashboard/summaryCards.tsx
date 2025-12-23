import { Grid } from "lucide-react"

type Props = {
    total: string
}

export const SummaryCards = ({total}: Props)=>{
    return(
        <div className="bg-white flex flex-1 justify-between border rounded-lg p-5">
            <div className="flex flex-col">
                <span>Total de cads</span>
                <span>{total}</span>
            </div>
            <div>
                <Grid className="w-8 h-8 text-slate-400" />
            </div>
        </div>
    )
}