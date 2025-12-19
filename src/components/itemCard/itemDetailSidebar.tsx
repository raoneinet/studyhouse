import { Edit } from "lucide-react"
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu
} from "../ui/sidebar"
import { CardSideDetail } from "./cardSideDetail"
import { Card } from "@/types/card"

export const ItemDetailSidebar = (selectCard: any) => {

    console.log("aqui...",selectCard.selectCard)
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-slate-800 text-lg font-semibold">Card de estudo</SidebarGroupLabel>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarGroupAction>
                        <Edit /> <span className="sr-only">Edit Project</span>
                    </SidebarGroupAction>
                </SidebarMenu>
                <SidebarGroupContent>
                    <CardSideDetail selectedCard={selectCard.selectCard}/>
                </SidebarGroupContent>
            </SidebarContent>
        </SidebarGroup>
    )
}