"use client"
import { Activity, useState } from "react"
import { Button } from "../ui/button"
import { ConfirmationModal } from "../modals/confirmationModal"
import { usePauseAccountMutation } from "@/app/reducer/authApi"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { baseApi } from "@/app/reducer/baseApi"

export const PauseAccountButton = () => {
    const [pauseAccount] = usePauseAccountMutation()
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const router = useRouter()

    const handleCancel = () => setShowModal(false)

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
                    confirmLabel="Confirmar"
                    cancelLabel="Cancelar"
                    title="Suspender a Conta?"
                    subTitle=" Sua conta será reativada ao fazer login novamente."
                />
            </Activity>
            <Button
                variant="outline"
                className="place-self-end"
                onClick={() => setShowModal(true)}
            >
                Suspender Conta
            </Button>
        </>
    )
}