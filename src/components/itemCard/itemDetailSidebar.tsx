import { Edit } from "lucide-react"
import { SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"


export const ItemDetailSidebar = () => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-slate-800 text-lg font-semibold">Card de estudo</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarGroupAction>
                        <Edit /> <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}