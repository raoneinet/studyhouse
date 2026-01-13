"use client"
import { useState } from "react"
import { User } from "lucide-react"
import { PersonalInfo } from "./personalInfo"
import { Edit, LockIcon } from "lucide-react"
import { Passwords } from "./passwords"
import { ProfilePicture } from "./profilePicture"
import { DeleteAccount } from "./deleteAccount"
import { useGetMeQuery } from "@/app/reducer/userApi"

export const Profile = () => {

    const [editPicture, setEditPicture] = useState(false)
    const [editPersonal, setEditPersonal] = useState(false)
    const [editPassword, setEditPassword] = useState(false)
    const { data:user, isLoading } = useGetMeQuery()

    const handleEditing = () => setEditPersonal(true)

    return (
        <div className="py-5 w-full lg:max-w-5xl">
            <div className="lg:max-w-4xl rounded-lg flex flex-col items-start gap-5">
                <div className="border bg-white p-3 w-full mx-auto rounded-lg flex items-start justify-between">
                    <ProfilePicture editPicture={editPicture} setEditPicture={setEditPicture} />
                    <div className="">
                        <h2 className="font-medium text-2xl">{user.user.firstname} {user.user.lastname}</h2>
                        <p className="text-slate-600">{user.user.username}</p>
                    </div>
                </div>
                <div className="border bg-white p-3 w-full mx-auto rounded-lg flex flex-col items-start gap-5">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <User className="text-blue-600" size={24} />
                            <h1 className="font-medium">Informações Pessoais</h1>
                        </div>
                        {!editPersonal &&
                            <Edit onClick={handleEditing} className="cursor-pointer w-4" />
                        }
                    </div>
                    <PersonalInfo editPersonal={editPersonal} setIsEditing={setEditPersonal} />
                </div>
                <div className="border bg-white p-3 w-full mx-auto rounded-lg flex flex-col items-start gap-5">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <LockIcon className="text-blue-600" size={24} />
                            <h1 className="font-medium">Senha</h1>
                        </div>
                        {!editPassword &&
                            <Edit onClick={() => setEditPassword(true)} className="cursor-pointer w-4" />
                        }
                    </div>
                    <Passwords editPassword={editPassword} setEditPassword={setEditPassword} />
                </div>
                <div className="border bg-white p-3 w-full mx-auto rounded-lg flex flex-col items-start gap-5">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <LockIcon className="text-blue-600" size={24} />
                            <h1 className="font-medium">Conta</h1>
                        </div>
                    </div>
                    <DeleteAccount />
                </div>
            </div>
        </div >
    )
}