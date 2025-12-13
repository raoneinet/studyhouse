"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
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
import { MenuSidebarFooter } from "./sidebar-footer"
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
        title: "Novo Cart",
        url: "/protected/newCard",
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
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <MenuSidebarFooter />
            </SidebarFooter>
        </Sidebar>
    )
}