"use client"
import { useAuth } from "@/context/userContext"
import { Header } from "@/components/header/header"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import LandingPage from "@/components/lp/landingpage"
import { Spinner } from "@/components/loading/spinner"

const Page = () => {
    const { user, loading, setLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (user && !loading) {
            router.push("/dashboard")
        }
    }, [user, loading, router])

    return (
        <>
            {loading && <Spinner />}
            {!loading && !user &&
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