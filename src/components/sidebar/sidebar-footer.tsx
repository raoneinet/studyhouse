"use client"
import {
    BadgeCheck,
    ChevronsUpDown,
    LogOut,
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
import { useRouter } from "next/navigation"
import { baseApi } from "@/app/reducer/baseApi"
import { useDispatch } from "react-redux"
import { useGetMeQuery } from "@/app/reducer/authApi"
import { useLogoutMutation } from "@/app/reducer/authApi"


export const MenuSidebarFooter = () => {

    const { data: user, isLoading, isError } = useGetMeQuery()
    const [logout] = useLogoutMutation()

    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const avatarUrl = user.user.avatar ? `https://estudaki.site${user.user.avatar}` : "https://github.com/shadcn.png"

    const { isMobile } = useSidebar()

    const dispatch = useDispatch()

    const router = useRouter()

    const goToAccount = () => router.push("/account")

    const handleLogout = async () => {
        try {
            await logout().unwrap()
            dispatch(baseApi.util.resetApiState())
            router.replace("/")
        }catch(error: any){
            console.log("Erro ao fazer log out. ", error)
            return
        }
    }

    return (
        <SidebarMenu className="w-fit">
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <UserAvatar avatar={avatarUrl} />
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) w-fit rounded-lg"
                        side="bottom"
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <UserAvatar avatar={API_URL + user.user.avatar} />
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-bold">{user.user.firstname} {user.user.lastname}</span>
                                    <span className="truncate text-xs opacity-70">{user.user.username}</span>
                                    <span className="truncate text-xs opacity-70">{user.user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={goToAccount}>
                                <BadgeCheck />
                                Conta
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