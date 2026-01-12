"use client"
import { Calendar, CircleDot, Home, Inbox, Star, PlusCircle } from "lucide-react"
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
        url: "/myLessons",
        icon: Inbox,
    },
    {
        title: "Novo Card",
        url: "/newLesson",
        icon: PlusCircle,
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
                <MenuSidebarFooter />
            </SidebarFooter>
        </Sidebar>
    )
}