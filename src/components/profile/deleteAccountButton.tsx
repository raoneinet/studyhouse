"use client"
import { Activity, useState } from "react"
import { Button } from "../ui/button"
import { ConfirmationModal } from "../modals/confirmationModal"
import { useDeleteAccountMutation } from "@/app/reducer/authApi"
import { useDispatch, UseDispatch } from "react-redux"
import { baseApi } from "@/app/reducer/baseApi"
import { useRouter } from "next/navigation"

export const DeleteAccountButton = () => {

    const [showModal, setShowModal] = useState(false)
    const handleCancel = () => setShowModal(false)
    const [deleteAccount] = useDeleteAccountMutation()
    const dispatch = useDispatch()
    const router = useRouter()

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
                    confirmLabel="Confirmar"
                    cancelLabel="Cancelar"
                    title="Deletar a Conta?"
                    subTitle=" Sua conta e todos os seus dados serão em 2 dias. Para reverter, basta fazer login dentro de 2 dias."
                />
            </Activity>
            <Button variant="destructive" className="place-self-end" onClick={() => setShowModal(true)}>Deletar Conta</Button>
        </>
    )
}