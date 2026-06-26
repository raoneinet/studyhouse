"use client"
import { CircleDot } from "lucide-react"
import { MiniCards } from "./miniCards"
import { useGetDashBoardDataQuery } from "@/app/reducer/lessonsApi"
import { useRouter } from "next/navigation"
import { Subject } from "@/types/subject"
import { LinkButton } from "../Buttons/linkButton"
import { useTranslations } from "next-intl"

export const DashboardOngoings = () => {

    const { data } = useGetDashBoardDataQuery()
    const router = useRouter()
    const t = useTranslations('Dashboard');

    const goToOngoings = ()=> router.push("/ongoing")

    return (
        <div className="flex flex-col bg-white rounded-2xl border p-6 shadow-sm h-full">
            <div className="flex justify-between items-center pb-6 border-b mb-6">
                <h3 className="font-bold text-lg text-slate-800 flex gap-2 items-center">
                    <CircleDot className="w-5 h-5 text-orange-600" />
                    {t('ongoingTitle')}
                </h3>
                <LinkButton
                    type="button"
                    link={goToOngoings}
                    value={t('seeAll')}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
                {data?.continueStudying
                    .filter((ongoing: Subject) => ongoing.status === "ongoing")
                    .slice(0, 4)
                    .map((ongoing: Subject) => (
                        <div key={ongoing.id} className="w-full flex">
                            <MiniCards card={ongoing} />
                        </div>
                    ))}
            </div>
        </div>
    )
}