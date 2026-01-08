"use client"
import { Edit } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useGetMeQuery } from "@/app/reducer/userReducer"
import { useForm, } from "react-hook-form"
import { z } from "zod"
import { useUpdateAvatarMutation } from "@/app/reducer/userReducer"
import { useState } from "react"

type Props = {
    editPicture: boolean
    setEditPicture: (arg: boolean) => void
}

const formSchema = z.object({
    avatar: z.instanceof(File).optional()
})

export const ProfilePicture = ({ editPicture, setEditPicture }: Props) => {

    const { data: user, isLoading } = useGetMeQuery()
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const avatarUrl = user.user.avatar ? `${API_URL}${user.user.avatar}` : "https://github.com/shadcn.png"

    const [updateAvatar] = useUpdateAvatarMutation()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [file, setFile] = useState<File | null>(null)

    const handleCancelEdit = () => {
        setEditPicture(false)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0]
        if (selected) {
            setFile(selected)
        }
    }

    const handleUpdateAvatar = async () => {
        if (!file) return

        const formData = new FormData()
        formData.append("avatar", file)

        try {
            await updateAvatar(formData).unwrap()

        } catch (error: any) {
            console.log("Erro ao atualizar avatar. ", error)
        }
        setEditPicture(false)
    }

    return (
        <div>
            <img className="w-20 h-20 rounded-full" src={avatarUrl} alt="profile picture" />
            <Edit onClick={() => setEditPicture(true)} className="cursor-pointer w-4 place-self-end -mt-4" />
            {editPicture &&
                <div className="flex justify-between">
                    <form onSubmit={handleSubmit(handleUpdateAvatar)}>
                        <Input
                            type="file"
                            accept="image/*"
                            className="px-2 py-2"
                            onChange={handleFileChange}
                        />
                        <div className="flex gap-3 justify-end">
                            < Button
                                type="button"
                                variant="link"
                                onClick={handleCancelEdit}
                                className="w-fit cursor-pointer"
                            >Cancelar</Button>

                            < Button
                                type="submit"
                                variant="default"
                                className="w-fit cursor-pointer"
                            >Salvar</Button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}