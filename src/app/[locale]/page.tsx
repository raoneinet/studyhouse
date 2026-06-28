"use client"
import { Header } from "@/components/header/header"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/loading/spinner"
import { useGetMeQuery } from "@/app/reducer/authApi"
import LearnizzeLanding from "@/components/lp/landingPagev2"
import { Analytics } from "@vercel/analytics/react"

const Page = () => {
    const { data: user, isLoading, isError } = useGetMeQuery()
    const router = useRouter()

    useEffect(() => {
        if (user && !isLoading) {
            router.replace("/dashboard")
        }
    }, [user, isLoading, router])

    return (
        <>
            {isLoading && <Spinner />}
            {!isLoading && !user &&
                <div className="min-h-screen">
                    <Header />
                    <main className="min-h-screen flex items-center justify-center">
                        <LearnizzeLanding />
                    </main>
                </div>
            }
            <Analytics />
        </>
    )
}

export default Page