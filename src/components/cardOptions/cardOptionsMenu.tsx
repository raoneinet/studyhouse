"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { MoreHorizontalIcon } from "lucide-react"
import { useDeleteCardMutation } from "@/app/reducer/userReducer"

export const CardOptionsMenu = ({cardId}: {cardId: number} ) => {

    const [deleteCard] = useDeleteCardMutation()

    const handleDeleteSubject = async (id: number) => {
        try {
            await deleteCard(id).unwrap()
            console.log("APAGOU O ID: ", id)
        } catch (error: any) {
            console.log("Erro ao eliminar assunto. ", error)
        }
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" aria-label="Open menu" size="icon-sm">
                    <MoreHorizontalIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit" align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteSubject(cardId)}>
                        Eliminar
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}