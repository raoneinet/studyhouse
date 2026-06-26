"use client"
import { useState } from "react"
import { User, LockIcon, LogOut, Edit } from "lucide-react"
import { PersonalInfo } from "./personalInfo"
import { Passwords } from "./passwords"
import { ProfilePicture } from "./profilePicture"
import { DeleteAccount } from "./deleteAccount"
import { useGetMeQuery } from "@/app/reducer/authApi"
import { useLogoutMutation } from "@/app/reducer/authApi"
import { useDispatch } from "react-redux"
import { baseApi } from "@/app/reducer/baseApi"
import { useTranslations } from "next-intl"

export const Profile = () => {
    const [activeTab, setActiveTab] = useState<'personal' | 'conta'>('personal')
    const [editPicture, setEditPicture] = useState(false)
    const [editPersonal, setEditPersonal] = useState(false)
    const [editPassword, setEditPassword] = useState(false)
    
    const { data:user, isLoading } = useGetMeQuery()
    const [logout] = useLogoutMutation()
    const dispatch = useDispatch()
    const t = useTranslations('Profile');

    const handleLogout = async () => {
        try {
            await logout().unwrap()
            dispatch(baseApi.util.resetApiState())
            window.location.href = "/"
        }catch(error: any){
            console.log("Erro ao fazer log out. ", error)
        }
    }

    if (isLoading) {
        return <div className="py-5 text-slate-500">{t('loadingInfo')}</div>
    }

    if (!user || !user.user) {
        return <div className="py-5 text-red-500">{t('loadUserError')}</div>
    }

    return (
        <div className="py-5 w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                
                {/* Left Sidebar Menu */}
                <div className="bg-white rounded-3xl shadow-sm border p-8 flex flex-col items-center w-full md:w-80 shrink-0">
                    <div className="mb-4">
                        <ProfilePicture editPicture={editPicture} setEditPicture={setEditPicture} />
                    </div>
                    <h2 className="font-bold text-2xl text-slate-800 text-center">{user.user.firstname} {user.user.lastname}</h2>
                    <p className="text-slate-500 text-sm mt-1 mb-8">{user.user.username}</p>

                    <div className="w-full flex flex-col gap-2">
                        <button 
                            onClick={() => setActiveTab('personal')}
                            className={`flex items-center gap-3 w-full px-5 py-4 rounded-2xl transition-all font-medium ${
                                activeTab === 'personal' 
                                ? 'bg-orange-50 text-orange-600' 
                                : 'text-slate-500 hover:bg-slate-50'
                            }`}
                        >
                            <User size={20} className={activeTab === 'personal' ? 'text-orange-600' : 'text-slate-400'} />
                            {t('personalInfoTab')}
                        </button>
                        
                        <button 
                            onClick={() => setActiveTab('conta')}
                            className={`flex items-center gap-3 w-full px-5 py-4 rounded-2xl transition-all font-medium ${
                                activeTab === 'conta' 
                                ? 'bg-orange-50 text-orange-600' 
                                : 'text-slate-500 hover:bg-slate-50'
                            }`}
                        >
                            <LockIcon size={20} className={activeTab === 'conta' ? 'text-orange-600' : 'text-slate-400'} />
                            {t('accountPasswordTab')}
                        </button>
                        
                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl transition-all font-medium text-slate-500 hover:bg-slate-50"
                        >
                            <LogOut size={20} className="text-slate-400" />
                            {t('logout')}
                        </button>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 w-full flex flex-col gap-6">
                    {activeTab === 'personal' && (
                        <div className="bg-white rounded-3xl shadow-sm border p-8 md:p-10 w-full">
                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-2xl font-bold text-slate-800">{t('personalInfoTitle')}</h1>
                                {!editPersonal && (
                                    <Edit onClick={() => setEditPersonal(true)} className="cursor-pointer w-5 text-slate-400 hover:text-orange-500 transition-colors" />
                                )}
                            </div>
                            <PersonalInfo editPersonal={editPersonal} setIsEditing={setEditPersonal} />
                        </div>
                    )}

                    {activeTab === 'conta' && (
                        <>
                            <div className="bg-white rounded-3xl shadow-sm border p-8 md:p-10">
                                <div className="flex justify-between items-center mb-8">
                                    <h1 className="text-2xl font-bold text-slate-800">{t('passwordTitle')}</h1>
                                    {!editPassword && (
                                        <Edit onClick={() => setEditPassword(true)} className="cursor-pointer w-5 text-slate-400 hover:text-orange-500 transition-colors" />
                                    )}
                                </div>
                                <Passwords editPassword={editPassword} setEditPassword={setEditPassword} />
                            </div>
                            
                            <div className="bg-white rounded-3xl shadow-sm border p-8 md:p-10">
                                <h1 className="text-2xl font-bold text-slate-800 mb-6">{t('accountTitle')}</h1>
                                <DeleteAccount />
                            </div>
                        </>
                    )}
                </div>
                
            </div>
        </div>
    )
}