"use client"
import { useAuth } from "@/context/userContext"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {

    const { user } = useAuth()
    const router = useRouter()

    if (!user) {
        router.push("/")
    }

    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-[#F6F9FB] overflow-x-hidden">
                <AppSidebar />
                <main className="w-screen px-4 py-6">
                    <SidebarTrigger />
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}

export default ProtectedLayout