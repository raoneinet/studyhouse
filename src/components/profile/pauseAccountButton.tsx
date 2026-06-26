"use client"
import { Activity, useState } from "react"
import { Button } from "../ui/button"
import { ConfirmationModal } from "../modals/confirmationModal"
import { usePauseAccountMutation } from "@/app/reducer/authApi"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { baseApi } from "@/app/reducer/baseApi"
import { useTranslations } from "next-intl"

export const PauseAccountButton = () => {
    const [pauseAccount] = usePauseAccountMutation()
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const router = useRouter()

    const handleCancel = () => setShowModal(false)
    const t = useTranslations('Profile');

    const handlePauseAccount = async () => {
        try {
            await pauseAccount().unwrap()
            dispatch(baseApi.util.resetApiState())
            
            setShowModal(false)
            router.replace("/")
        } catch (error: any) {
            console.log("Erro ao pausar conta.", error)
        }
    }

    return (
        <>
            <Activity mode={showModal ? "visible" : "hidden"}>
                <ConfirmationModal
                    confirmAction={handlePauseAccount}
                    cancelAction={handleCancel}
                    confirmLabel={t('confirm')}
                    cancelLabel={t('cancel')}
                    title={t('pauseAccountModalTitle')}
                    subTitle={t('pauseAccountModalSub')}
                />
            </Activity>
            <Button
                variant="outline"
                className="place-self-end"
                onClick={() => setShowModal(true)}
            >
                {t('pauseAccountBtn')}
            </Button>
        </>
    )
}