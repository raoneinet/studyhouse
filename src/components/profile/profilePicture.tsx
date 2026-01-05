import { Edit } from "lucide-react"
import { Input } from "../ui/input"
import { useAuth } from "@/context/userContext"
import { Button } from "../ui/button"

type Props = {
    editPicture: boolean
    setEditPicture: (arg: boolean) => void
}

export const ProfilePicture = ({ editPicture, setEditPicture }: Props) => {

    const { user } = useAuth()
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const avatarUrl = user?.avatar ? `${API_URL}${user.avatar}` : "https://github.com/shadcn.png"

    console.log(avatarUrl)


    const handleCancelEdit = () => {
        setEditPicture(false)
    }

    const handleSaveEdit = () => {
        setEditPicture(false)
    }

    return (
        <div>
            <img className="w-20 h-20 rounded-full" src={avatarUrl} alt="profile picture" />
            <Edit onClick={() => setEditPicture(true)} className="cursor-pointer w-4 place-self-end -mt-4" />
            {editPicture &&
                <div className="flex justify-between">
                    <Input
                        type="file"
                        accept="image/*"
                        className="px-2 py-2"
                    />
                    <div className="flex gap-3 justify-end">
                        < Button
                            variant="link"
                            onClick={handleCancelEdit}
                            className="w-fit cursor-pointer"
                        >Cancelar</Button>

                        < Button
                            variant="default"
                            onClick={handleSaveEdit}
                            className="w-fit cursor-pointer"
                        >Salvar</Button>
                    </div>
                </div>
            }
        </div>
    )
}