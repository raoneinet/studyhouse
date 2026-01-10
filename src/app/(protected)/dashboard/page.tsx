"use client"
import { RecentActivity } from "@/components/dashboard/recentActivity"
import { CategoryListAmounts } from "@/components/dashboard/categoryListAmount"
import { FavoriteCards } from "@/components/dashboard/favoriteCards"
import { Ongoing } from "@/components/dashboard/ongoing"
import { Title } from "@/components/title/title"
import { SummaryBoard } from "@/components/dashboard/summaryBoard"
import { EmptyState } from "@/components/emptyState/emptyState"
import { useGetDashBoardDataQuery, useGetMeQuery } from "@/app/reducer/userReducer"

const Dashboard = () => {

    const { data } = useGetDashBoardDataQuery()
    const {data: user} = useGetMeQuery()

    return (
        <>
            <Title
                title="Dashboard"
                subtitle={`Bem-vindo de volta ${user.user.firstname}! Aqui está um resumo dos seus estudos`}
                style="text-2xl font-bold text-slate-800 pb-5"
            />
            <div>
                <SummaryBoard />
            </div>
            {data?.stats.total === 0 &&
                <div className="mt-5">
                    <EmptyState />
                </div>
            }
            <div className="mt-5">
                <Ongoing />
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
                <CategoryListAmounts />
                <RecentActivity />
            </div>
            <div>
                <FavoriteCards />
            </div>
        </>
    )
}

export default Dashboard