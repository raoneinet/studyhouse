"use client"
import { RecentActivity } from "@/components/dashboard/recentActivity"
import { CategoryListAmounts } from "@/components/dashboard/categoryListAmount"
import { DashboardFavorites } from "@/components/dashboard/dashboardFavorites"
import { DashboardOngoings } from "@/components/dashboard/dashboardOngoings"
import { PageTitle } from "@/components/titles/pageTitle"
import { SummaryBoard } from "@/components/dashboard/summaryBoard"
import { EmptyState } from "@/components/emptyState/emptyState"
import { useGetDashBoardDataQuery } from "@/app/reducer/lessonsApi"
import { useGetMeQuery } from "@/app/reducer/authApi"
import { UserHeader } from "@/components/header/userHeader"
import { DashboardSkeleton } from "@/components/dashboard/dashboardSkeleton"
import { DashboardActionButtons } from "@/components/dashboard/dashboardActionButtons"

const Dashboard = () => {

    const { data, isLoading: isDashboardLoading } = useGetDashBoardDataQuery()
    const { data: user, isLoading: isUserLoading } = useGetMeQuery()

    if (isDashboardLoading || isUserLoading) {
        return <DashboardSkeleton />
    }

    console.log(data)

    return (
        <>
            <UserHeader
                title="Dashboard"
                subtitle={`Bem-vindo de volta ${user.user.firstname}! Aqui está um resumo dos seus estudos`}
                style="text-2xl font-bold text-slate-800 pb-5" 
            />
            <div className="flex flex-col gap-6 pb-10">
                {/* Ações Rápidas (Seção Separada) */}
                

                {/* Linha 1: Resumo numérico (4 cards) */}
                <div>
                    <SummaryBoard />
                </div>

                {data?.stats.total === 0 && (
                    <div className="mt-2">
                        <EmptyState />
                    </div>
                )}

                {/* Grid Bento Principal */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Linha 2 do Grid */}
                    <div className="md:col-span-8 flex flex-col h-full min-h-[300px]">
                        <DashboardOngoings />
                    </div>
                    <div className="md:col-span-4 flex flex-col h-full min-h-[300px]">
                        <RecentActivity />
                    </div>

                    {/* Linha 3 do Grid */}
                    <div className="md:col-span-6 flex flex-col h-full min-h-[300px]">
                        <CategoryListAmounts />
                    </div>
                    <div className="md:col-span-6 flex flex-col h-full min-h-[300px]">
                        <DashboardFavorites />
                    </div>
                </div>
                <div className="bg-white border rounded-2xl p-6 shadow-sm">
                    <DashboardActionButtons />
                </div>
            </div>
        </>
    )
}

export default Dashboard