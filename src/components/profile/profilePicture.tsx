"use client"
import { Camera, Edit } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useGetMeQuery } from "@/app/reducer/userReducer"
import { useForm, } from "react-hook-form"
import { useUpdateAvatarMutation } from "@/app/reducer/userReducer"
import { useEffect, useState } from "react"
import { toast } from "sonner"

type Props = {
    editPicture: boolean
    setEditPicture: (arg: boolean) => void
}

export const ProfilePicture = ({ editPicture, setEditPicture }: Props) => {

    const { data: user, isLoading } = useGetMeQuery()
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const avatarUrl = user.user.avatar ? `${API_URL}${user.user.avatar}` : "https://github.com/shadcn.png"

    const [updateAvatar] = useUpdateAvatarMutation()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [file, setFile] = useState<File | null>(null)
    const [showEdit, setShowEdit] = useState(false)

    const handleCancelEdit = () => {
        setFile(null)
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
            const res = await updateAvatar(formData).unwrap()

            if(res.status === "success"){
                toast("Avatar atualizado")
                setFile(null)
            }
        } catch (error: any) {
            console.log("Erro ao atualizar avatar. ", error)
        }
        setEditPicture(false)
    }

    useEffect(() => {

    }, [])

    return (
        <div className="flex flex-col">
            <div>
                <img
                    className="w-20 h-20 rounded-full"
                    src={avatarUrl} alt="profile picture"
                    onMouseEnter={() => setShowEdit(true)}
                    onMouseLeave={() => setShowEdit(false)}
                />
                {!editPicture &&
                    <Edit onClick={() => setEditPicture(true)} className="cursor-pointer w-5 place-self-end absolute"/>
                }
            </div>
            {editPicture &&
                <div className="">
                    <form onSubmit={handleSubmit(handleUpdateAvatar)} className="flex flex-col">
                        <div className="place-self-center -mt-5">
                            <label htmlFor="avatarFile">
                                <Camera size={18} className={`cursor-pointer ${file && "text-green-500"}`} />
                            </label>
                            <Input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                                id="avatarFile"
                            />
                        </div>
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