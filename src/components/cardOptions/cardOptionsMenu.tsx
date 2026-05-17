"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { useDeleteLessonMutation } from "@/app/reducer/lessonsApi"
import { useRouter } from "next/navigation"
import { ConfirmDeleteDialog } from "@/components/ui/confirm-delete-dialog"

type Props = {
    cardId: number
    viewMore?: (id: number) => void
}

export const CardOptionsMenu = ({ cardId, viewMore }: Props) => {

    const router = useRouter()

    const [deleteLesson] = useDeleteLessonMutation()

    const handleEditLesson = (id: number) => router.push("/editLesson?id=" + id)


    const handleDeleteLesson = async (id: number) => {
        try {
            await deleteLesson(id).unwrap()
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
                <DropdownMenuItem onClick={() => handleEditLesson(cardId)}>
                    <span>Editar</span>
                </DropdownMenuItem>
                
                <ConfirmDeleteDialog
                    trigger={
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <span>Deletar</span>
                        </DropdownMenuItem>
                    }
                    onConfirm={() => handleDeleteLesson(cardId)}
                />
                {viewMore &&
                    <DropdownMenuItem onSelect={() => viewMore(cardId)}>
                        <span>Visualizar</span>
                    </DropdownMenuItem>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}