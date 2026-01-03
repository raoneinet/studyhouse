"use client"
import { Calendar, CircleDot, Home, Inbox, Star } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { useAuth } from "@/context/userContext"
import { MenuSidebarFooter } from "./sidebar-footer"
import { MenuSidebarHeader } from "@/components/sidebar/sidebar-header"
import Link from "next/link"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Meus Cards",
        url: "/myCards",
        icon: Inbox,
    },
    {
        title: "Novo Card",
        url: "/newCard",
        icon: Calendar,
    },
    {
        title: "Favoritos",
        url: "/favorites",
        icon: Star,
    },
    {
        title: "EmAndamento",
        url: "/ongoing",
        icon: CircleDot,
    },
]

export function AppSidebar() {

    const { user, logout } = useAuth()

    return (
        <Sidebar variant="floating" collapsible="icon" >
            <SidebarHeader>
                <MenuSidebarHeader />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
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
                <MenuSidebarFooter user={user} logout={logout} />
            </SidebarFooter>
        </Sidebar>
    )
}