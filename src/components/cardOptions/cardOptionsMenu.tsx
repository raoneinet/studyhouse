"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { useDeleteSubjectMutation } from "@/app/reducer/userReducer"
import { useRouter } from "next/navigation"

export const CardOptionsMenu = ({ cardId }: { cardId: number }) => {

    const router = useRouter()

    const [deleteSubject] = useDeleteSubjectMutation()

    const handleEditLesson= (id: number)=>{
        console.log("ID: ", id)
        router.push("/editLesson?id="+id)
    }

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
                <DropdownMenuItem onClick={()=>handleEditLesson(cardId)}>
                    <span>Editar</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDeleteSubject(cardId)}>
                    <span>Deletar</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}