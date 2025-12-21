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
import { Subject } from "@/types/subject"
import { CardOptionsMenu } from "../cardOptions/cardOptionsMenu"

export const ItemDetailSidebar = ({ selectCard }: { selectCard: Subject }) => {

    return (
        <SidebarGroup>
            <SidebarMenu className="flex flex-row justify-between">
                <SidebarGroupLabel className="text-slate-800 text-lg font-semibold">Card de estudo</SidebarGroupLabel>
                {selectCard !== null &&
                    <CardOptionsMenu cardId={selectCard.id}/>
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