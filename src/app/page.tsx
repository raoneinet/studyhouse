"use client"
import { Header } from "@/components/header/header"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import LandingPage from "@/components/lp/landingpage"
import { Spinner } from "@/components/loading/spinner"
import { useGetMeQuery } from "@/app/reducer/userApi"
import EstudakiLanding from "@/components/lp/landingPagev2"

const Page = () => {
    const { data: user, isLoading, isError } = useGetMeQuery()
    const router = useRouter()

    useEffect(() => {
        if (user && !isLoading) {
            router.push("/dashboard")
        }
    }, [user, isLoading, router])

    return (
        <>
            {isLoading && <Spinner />}
            {!isLoading && !user &&
                <div className="min-h-screen">
                    <Header />
                    <main className="min-h-screen flex items-center justify-center">
                        <EstudakiLanding />
                    </main>
                </div>
            }
        </>
    )
}

export default Page