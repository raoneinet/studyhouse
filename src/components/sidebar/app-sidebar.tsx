"use client"
import { CircleDot, Home, Inbox, Star, PlusCircle, Map } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuBadge,
} from "@/components/ui/sidebar"
import { MenuSidebarHeader } from "@/components/sidebar/sidebar-header"
import Link from "next/link"
import { useSidebar } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

export function AppSidebar() {
    const { setOpenMobile, isMobile } = useSidebar()
    const pathname = usePathname()
    const t = useTranslations('Sidebar');
    
    const navGroups = [
        {
            label: t('overview'),
            items: [
                {
                    title: t('dashboard'),
                    url: "/dashboard",
                    icon: Home,
                    matchPath: ["/", "/dashboard"]
                },
                {
                    title: t('roadmaps'),
                    url: "/roadmaps",
                    icon: Map,
                    badge: t('badgeNew')
                },
            ]
        },
        {
            label: t('myStudies'),
            items: [
                {
                    title: t('myCards'),
                    url: "/myLessons",
                    icon: Inbox,
                },
                {
                    title: t('favorites'),
                    url: "/favorites",
                    icon: Star,
                },
                {
                    title: t('ongoing'),
                    url: "/ongoing",
                    icon: CircleDot,
                },
            ]
        }
    ]

    return (
        <Sidebar variant="floating" collapsible="icon" >
            <SidebarHeader>
                <MenuSidebarHeader />
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {/* Main Action Button */}
                <div className="px-4 py-4 mb-2">
                    <Link
                        href="/newLesson"
                        onClick={() => {
                            if (isMobile) setOpenMobile(false)
                        }}
                        className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl transition-all shadow-sm shadow-orange-500/20"
                    >
                        <PlusCircle size={20} />
                        <span className="group-data-[collapsible=icon]:hidden">{t('newCard')}</span>
                    </Link>
                </div>

                {navGroups.map((group) => (
                    <SidebarGroup key={group.label} className="pt-0">
                        <SidebarGroupLabel className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            {group.label}
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => {
                                    // Check active state
                                    const isActive = item.matchPath && item.matchPath.length > 0
                                        ? item.matchPath.includes(pathname)
                                        : pathname.startsWith(item.url)
                                        
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton 
                                                asChild 
                                                isActive={isActive}
                                                tooltip={item.title}
                                                className={`transition-colors py-5 ${
                                                    isActive 
                                                    ? "bg-orange-50 text-orange-600 font-bold hover:bg-orange-100 hover:text-orange-700" 
                                                    : "text-slate-600 hover:bg-slate-100 font-medium"
                                                }`}
                                            >
                                                <Link 
                                                    href={item.url}
                                                    onClick={() => {
                                                        if (isMobile) setOpenMobile(false)
                                                    }}
                                                    className="flex items-center gap-3 w-full"
                                                >
                                                    <item.icon className={isActive ? "text-orange-500" : "text-slate-400"} />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                            {item.badge && (
                                                <SidebarMenuBadge className="bg-orange-100 text-orange-600 text-[10px] font-bold px-1.5 py-0 rounded-xl uppercase tracking-wider">
                                                    {item.badge}
                                                </SidebarMenuBadge>
                                            )}
                                        </SidebarMenuItem>
                                    )
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    )
}