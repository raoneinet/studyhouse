"use client"
import { useEffect } from "react"
import { useAuth } from "@/context/userContext"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"
import { Toaster } from "@/components/ui/sonner"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {

    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push("/")
        }
    }, [user, router])

    if (!user) {
        return null
    }

    return (
        <SidebarProvider>
            <div className="flex w-full min-h-screen bg-[#F6F9FB]">
                <AppSidebar />
                <main className="flex-1 min-w-0 p-6">
                    <SidebarTrigger />
                    {children}
                </main>
                <Toaster />
            </div>
        </SidebarProvider>
    )
}

export default ProtectedLayout