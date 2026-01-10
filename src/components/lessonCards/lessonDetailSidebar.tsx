import { Edit } from "lucide-react"
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu
} from "../ui/sidebar"
import { LessonDetails } from "./lessonDetails"
import { Subject } from "@/types/subject"
import { CardOptionsMenu } from "../cardOptions/cardOptionsMenu"
import { Separator } from "../ui/separator"

export const LessonDetailSidebar = ({ selectCard, closeMobileModal }: { selectCard: Subject, closeMobileModal?: ()=>void }) => {

    return (
        <SidebarGroup>
            <SidebarMenu className="flex flex-col justify-between">
                <SidebarGroupLabel className="flex flex-row justify-between">
                    <span className=" text-slate-800 text-xl font-semibold">
                        Detalhes de estudo
                    </span>
                    {selectCard !== null &&
                        <CardOptionsMenu cardId={selectCard.id} />
                    }
                    <span className="md:hidden flex text-xl text-red-500" onClick={closeMobileModal}>X</span>
                </SidebarGroupLabel>
                <Separator className="my-3" />
                {selectCard === null &&
                    <span className="max-text-sm text-slate-500">Selecione um card para ver os detalhes</span>
                }
            </SidebarMenu>
            {selectCard &&
                <SidebarContent>
                    <SidebarGroupContent>
                        <LessonDetails selectedCard={selectCard} />
                    </SidebarGroupContent>
                </SidebarContent>
            }
        </SidebarGroup>
    )
}