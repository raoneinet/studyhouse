import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu"
import {
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "../ui/sidebar"
import { ChevronUp } from "lucide-react"
import { useAuth } from "@/context/userContext"
import { UserAvatar } from "../header/userAvatar"

export const MenuSidebarFooter = () => {

    const user = useAuth()

    return (
        <>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    {user &&
                                        <>
                                            <UserAvatar /> {user?.user?.firstname} {user?.user?.lastname}
                                            <ChevronUp className="ml-auto" />
                                        </>
                                    }
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuLabel>{user?.user?.email}</DropdownMenuLabel>
                                <DropdownMenuLabel className="opacity-50 -mt-1">{user?.user?.username}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Perfil</DropdownMenuItem>
                                <DropdownMenuItem>Configurações</DropdownMenuItem>
                                <DropdownMenuItem onClick={user?.logout}>Sair</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </>
    )
}