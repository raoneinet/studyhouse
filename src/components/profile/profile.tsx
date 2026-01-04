"use client"
import { useState } from "react"
import { useAuth } from "@/context/userContext"
import { User } from "lucide-react"
import { PersonalInfo } from "./personalInfo"
import { Edit } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const Profile = () => {

    const [isEditing, setIsEditing] = useState(false)
    const { user } = useAuth()

    const API_URL = process.env.NEXT_PUBLIC_API_URL

    const avatarUrl = user?.avatar ? `${API_URL}${user.avatar}` : "https://github.com/shadcn.png"

    const handleEditing = () => setIsEditing(true)

    return (
        <div className="py-5 w-full lg:max-w-5xl">
            <div className="lg:max-w-4xl mx-auto rounded-lg flex flex-col items-start gap-5">
                <div className="border bg-white p-3 w-full mx-auto rounded-lg flex items-start justify-between">
                    <div className="flex gap-5">
                        <div>
                            <img className="w-20 h-20 rounded-full" src={avatarUrl} alt="profile picture" />
                            {isEditing &&
                                <Input
                                    type="file"
                                    accept="image/*"
                                    className="px-2 py-2"
                                />
                            }

                        </div>
                        <div>
                            <h2 className="font-medium text-2xl">{user?.firstname} {user?.lastname}</h2>
                            <p className="text-slate-600">{user?.username}</p>
                        </div>
                    </div>
                    <Edit onClick={handleEditing} />
                </div>
                <div className="border bg-white p-3 w-full mx-auto rounded-lg flex flex-col items-start gap-5">
                    <div className="flex gap-2">
                        <User className="text-blue-600" size={24} />
                        <h1 className="font-medium">Informações Pessoais</h1>
                    </div>
                    <PersonalInfo user={user} editing={isEditing} />
                    {isEditing &&
                        < Button variant={"outline"} onClick={() => setIsEditing(false)}>Salvar</Button>
                    }
                </div>
            </div>
        </div >
    )
}