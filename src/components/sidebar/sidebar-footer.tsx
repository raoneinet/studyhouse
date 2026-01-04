"use client"
import {
    BadgeCheck,
    ChevronsUpDown,
    LogOut,
    Settings
} from "lucide-react"
import { UserAvatar } from "../header/userAvatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from "@/components/ui/sidebar"
import { User } from "@/types/user"
import { useRouter } from "next/navigation"
import { userApi } from "@/app/reducer/userReducer"
import { useDispatch } from "react-redux"

export const MenuSidebarFooter = ({ user, logout }: { user: User | null, logout: any }) => {

    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const avatarUrl = user?.avatar ? `${API_URL}${user.avatar}` : "https://github.com/shadcn.png"

    const { isMobile } = useSidebar()

    const dispatch = useDispatch()

    const router = useRouter()

    const goToAccount = ()=>{
        router.push("/account")
    }

    const handleLogout = () => {
        logout()
        dispatch(userApi.util.resetApiState())
        router.push("/")
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <UserAvatar avatar={avatarUrl} />
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{user?.firstname} {user?.lastname}</span>
                                <span className="truncate text-xs">{user?.username}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <UserAvatar avatar={API_URL+user?.avatar} />
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-bold">{user?.firstname} {user?.lastname}</span>
                                    <span className="truncate text-xs opacity-70">{user?.username}</span>
                                    <span className="truncate text-xs opacity-70">{user?.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={goToAccount}>
                                <BadgeCheck />
                                Conta
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings />
                                Configurações
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut />
                            Sair
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}