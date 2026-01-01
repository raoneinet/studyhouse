"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontal, MoreHorizontalIcon } from "lucide-react"
import { useDeleteSubjectMutation } from "@/app/reducer/userReducer"
import { SidebarMenuAction } from "../ui/sidebar"

export const CardOptionsMenu = ({ cardId }: { cardId: number }) => {

    const [deleteSubject] = useDeleteSubjectMutation()

    const handleDeleteSubject = async (id: number) => {
        try {
            await deleteSubject(id).unwrap()
            console.log("APAGOU O ID: ", id)
        } catch (error: any) {
            console.log("Erro ao eliminar assunto. ", error)
        }
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start">
                <DropdownMenuItem>
                    <span>Edit Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDeleteSubject(cardId)}>
                    <span>Delete Project</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}