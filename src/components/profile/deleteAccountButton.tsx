import { Activity, useState } from "react"
import { Button } from "../ui/button"
import { ConfirmationModal } from "../modals/confirmationModal"

export const DeleteAccountButton = () => {

    const [showModal, setShowModal] = useState(false)
    const handleCancel = () => setShowModal(false)

    const handelDeleteAccount = () => {

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
                    subTitle=" Sua conta e todos os seus dados serão excluídos. Esta ação é permanente."
                />
            </Activity>
            <Button variant="destructive" className="place-self-end" onClick={() => setShowModal(true)}>Deletar Conta</Button>
        </>
    )
}