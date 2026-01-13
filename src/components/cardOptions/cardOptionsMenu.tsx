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

export const CardOptionsMenu = ({ cardId }: { cardId: number }) => {

    const router = useRouter()

    const [deleteLesson] = useDeleteLessonMutation()

    const handleEditLesson= (id: number)=>{
        console.log("ID: ", id)
        router.push("/editLesson?id="+id)
    }

    const handleDeleteLesson = async (id: number) => {
        try {
            await deleteLesson(id).unwrap()
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
                <DropdownMenuItem onClick={()=>handleEditLesson(cardId)}>
                    <span>Editar</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDeleteLesson(cardId)}>
                    <span>Deletar</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}