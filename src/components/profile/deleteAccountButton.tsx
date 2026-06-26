"use client"
import { Activity, useState } from "react"
import { Button } from "../ui/button"
import { ConfirmationModal } from "../modals/confirmationModal"
import { useDeleteAccountMutation } from "@/app/reducer/authApi"
import { useDispatch, UseDispatch } from "react-redux"
import { baseApi } from "@/app/reducer/baseApi"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

export const DeleteAccountButton = () => {

    const [showModal, setShowModal] = useState(false)
    const handleCancel = () => setShowModal(false)
    const [deleteAccount] = useDeleteAccountMutation()
    const dispatch = useDispatch()
    const router = useRouter()
    const t = useTranslations('Profile');

    const handelDeleteAccount = async () => {
        try {
            await deleteAccount().unwrap()
            dispatch(baseApi.util.resetApiState())

            setShowModal(false)
            router.replace("/")
        } catch (error: any) {
            console.log("Erro ao excluir conta. ", error)
        }
    }

    return (
        <>
            <Activity mode={showModal ? "visible" : "hidden"}>
                <ConfirmationModal
                    confirmAction={handelDeleteAccount}
                    cancelAction={handleCancel}
                    confirmLabel={t('confirm')}
                    cancelLabel={t('cancel')}
                    title={t('deleteAccountModalTitle')}
                    subTitle={t('deleteAccountModalSub')}
                />
            </Activity>
            <Button variant="destructive" className="place-self-end" onClick={() => setShowModal(true)}>{t('deleteAccountBtn')}</Button>
        </>
    )
}