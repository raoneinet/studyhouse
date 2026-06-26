"use client"
import { AlertCircle, CheckCircle2, CircleDot, Grid } from "lucide-react"
import { SummaryCards } from "./summaryCards"
import { useGetDashBoardDataQuery } from "@/app/reducer/lessonsApi"
import { useTranslations } from "next-intl"

export const SummaryBoard = () => {

    const {data} = useGetDashBoardDataQuery()
    const t = useTranslations('Dashboard');

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SummaryCards
                title={t('summaryTotal')}
                total={data?.stats.total ?? 0}
                Icon={<Grid className="w-8 h-8 text-slate-500" />}
                txtColor="text-slate-600"
            />
            <SummaryCards
                title={t('summaryOngoing')}
                total={data?.stats.ongoing ?? 0}
                Icon={<CircleDot className="w-8 h-8 text-orange-500" />}
                txtColor="text-orange-600"
            />
            <SummaryCards
                title={t('summaryUrgent')}
                total={data?.stats.urgent ?? 0}
                Icon={<AlertCircle className="w-8 h-8 text-red-500" />}
                txtColor="text-red-600"
            />
            <SummaryCards
                title={t('summaryDone')}
                total={data?.stats.done ?? 0}
                Icon={<CheckCircle2 className="w-8 h-8 text-green-500" />}
                txtColor="text-green-600"
            />
        </div>
    )
}