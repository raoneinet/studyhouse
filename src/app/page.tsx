"use client"
import { Header } from "@/components/header/header"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import LandingPage from "@/components/lp/landingpage"
import { Spinner } from "@/components/loading/spinner"
import { useGetMeQuery } from "./reducer/userReducer"

const Page = () => {
    const { data: user, isLoading, isError } = useGetMeQuery()
    const router = useRouter()

    console.log("RTK user: ", user)
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
                        <LandingPage />
                    </main>
                </div>
            }
        </>
    )
}

export default Page