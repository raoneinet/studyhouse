"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Logobrand } from "../header/logobrand"
import { UserMenuDropdown } from "../header/userMenuDropdown"
import { useAuth } from "@/context/userContext"
import Link from "next/link"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Meus Cards",
        url: "/protected/myCards",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {

    const { user } = useAuth()

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-8">
                        <Logobrand
                            title="Studyhouse"
                            subtitle="Organize seus estudos de forma fácil"
                        />
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            {item.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarGroupLabel className="flex gap-3">
                        {user &&
                            <>
                                <UserMenuDropdown />
                                <p className="text-lg">{`${user?.firstname} ${user?.lastname}`}</p>
                            </>
                        }
                    </SidebarGroupLabel>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}