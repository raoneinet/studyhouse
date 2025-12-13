"use client"
import { LoggedOut } from "./loggedOut/page"
import { useAuth } from "@/context/userContext"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

const Page = ({ children }: { children: React.ReactNode }) => {

    const { user } = useAuth()

    return (
        <div className="bg-neutral-100 min-h-screen">
            {user &&
                <SidebarProvider>
                    <AppSidebar />
                    <main>
                        {children}
                    </main>
                </SidebarProvider>
            }
            {!user &&
                <LoggedOut/>
            }
        </div>
    )
}

export default Page