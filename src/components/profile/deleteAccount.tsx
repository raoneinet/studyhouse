import { Button } from "../ui/button"
import { DeleteAccountButton } from "./deleteAccountButton"
import { PauseAccountButton } from "./pauseAccountButton"

export const DeleteAccount = () => {

    return (
        <>
            <div className="w-full flex flex-col gap-4">
                <div>
                    <p>Para excluir sua conta, prossiga com o botão abaixo.</p>
                    <p>
                        <span className="font-bold uppercase">Nota Importante!</span> Ao excluir sua conta, todas as informações nela contidas serão eliminadas da nossa base de dados permanentemente, e não será possível recuperar.
                    </p>
                </div>
                <div className="flex gap-3 place-self-end">
                    <PauseAccountButton />
                    <DeleteAccountButton/>
                </div>
            </div>
        </>
    )
}