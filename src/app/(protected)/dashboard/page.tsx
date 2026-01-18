"use client"
import { RecentActivity } from "@/components/dashboard/recentActivity"
import { CategoryListAmounts } from "@/components/dashboard/categoryListAmount"
import { DashboardFavorites } from "@/components/dashboard/dashboardFavorites"
import { DashboardOngoings } from "@/components/dashboard/dashboardOngoings"
import { PageTitle } from "@/components/titles/pageTitle"
import { SummaryBoard } from "@/components/dashboard/summaryBoard"
import { EmptyState } from "@/components/emptyState/emptyState"
import { useGetDashBoardDataQuery} from "@/app/reducer/lessonsApi"
import { useGetMeQuery } from "@/app/reducer/userApi"

const Dashboard = () => {

    const { data } = useGetDashBoardDataQuery()
    const {data: user} = useGetMeQuery()

    return (
        <>
            <PageTitle
                title="Dashboard"
                subtitle={`Bem-vindo de volta ${user.user.firstname}! Aqui está um resumo dos seus estudos`}
                style="text-2xl font-bold text-slate-800 pb-5"
            />
            <div>
                <SummaryBoard />
            </div>
            {data?.data.length === 0 &&
                <div className="mt-5">
                    <EmptyState />
                </div>
            }
            <div className="mt-5">
                <DashboardOngoings />
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
                <CategoryListAmounts />
                <RecentActivity />
            </div>
            <div>
                <DashboardFavorites />
            </div>
        </>
    )
}

export default Dashboard