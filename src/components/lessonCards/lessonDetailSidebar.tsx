import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu
} from "../ui/sidebar"
import { LessonDetails } from "./lessonDetails"
import { Subject } from "@/types/subject"
import { CardOptionsMenu } from "../cardOptions/cardOptionsMenu"
import { Separator } from "../ui/separator"
import { useTranslations } from "next-intl"

type Props = {
    selectedCard: Subject
    closeMobileModal: ()=>void
}

export const LessonDetailSidebar = ({ selectedCard, closeMobileModal }: Props) => {

    const t = useTranslations('LessonCards');

    return (
        <SidebarGroup>
            <SidebarMenu className="flex flex-col justify-between">
                <SidebarGroupLabel className="flex flex-row justify-between">
                    <span className=" text-slate-800 text-xl font-semibold">
                        {t('sidebarTitle')}
                    </span>
                    <span className="md:hidden flex text-xl text-red-500" onClick={closeMobileModal}>X</span>
                </SidebarGroupLabel>
                <Separator className="my-3" />
                {selectedCard === null &&
                    <span className="max-text-sm text-slate-500">{t('selectCard')}</span>
                }
            </SidebarMenu>
            {selectedCard &&
                <SidebarContent>
                    <SidebarGroupContent>
                        <LessonDetails selectedCard={selectedCard} />
                    </SidebarGroupContent>
                </SidebarContent>
            }
        </SidebarGroup>
    )
}