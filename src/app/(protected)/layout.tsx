"use client"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { Spinner } from "@/components/loading/spinner"
import { useGetMeQuery } from "@/app/reducer/authApi"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {

    const {data: user, isLoading, isError} = useGetMeQuery()

    if (isLoading) {
        return <Spinner />
    }

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