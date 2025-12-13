"use client"

import { useAuth } from "@/context/userContext"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { LoggedOut } from "../loggedOut/page"
import { useRouter } from "next/navigation"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {

    const { user } = useAuth()
    const router = useRouter()

    if (!user) {
        router.push("/")
    }

    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-neutral-100 overflow-x-hidden">
                <AppSidebar />
                <main className="w-screen bg-[#F6F9FB] px-6">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}

export default ProtectedLayout