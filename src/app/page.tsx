"use client"
import { useAuth } from "@/context/userContext"
import { Header } from "@/ui/header/header"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const Page = () => {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (user) {
            router.push("/protected")
        }
    }, [user, router])

    return (
        <div className="bg-neutral-100 min-h-screen">
            <Header />
            <main className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Welcome to Studyhouse
                </h1>
            </main>
        </div>
    )
}

export default Page