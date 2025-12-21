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
import { CardOptionsMenu } from "../cardOptions/cardOptionsMenu"

export const ItemDetailSidebar = ({ selectCard }: { selectCard: Card }) => {

    return (
        <SidebarGroup>
            <SidebarMenu className="flex flex-row justify-between">
                <SidebarGroupLabel className="text-slate-800 text-lg font-semibold">Card de estudo</SidebarGroupLabel>
                {selectCard !== null &&
                    <CardOptionsMenu />
                }
            </SidebarMenu>

            {selectCard &&
                <SidebarContent>
                    <SidebarGroupContent>
                        <CardSideDetail selectedCard={selectCard} />
                    </SidebarGroupContent>
                </SidebarContent>
            }
        </SidebarGroup>
    )
}