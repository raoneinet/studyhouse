import { Button } from "../ui/button"
import { usePauseAccountMutation } from "@/app/reducer/authApi"
import { useRouter } from "next/navigation"

export const DeleteAccount = () => {

    const [pauseAccount] = usePauseAccountMutation()

    const router = useRouter()

    const handlePauseAccount = async ()=>{
        try{
            await pauseAccount().unwrap()
            router.push("/")

        }catch(error: any){
            console.log("Erro ao pausar conta.")
        }
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <div>
                <p>Para excluir sua conta, prossiga com o botão abaixo.</p>
                <p>
                    <span className="font-bold uppercase">Nota Importante!</span> Ao excluir sua conta, todas as informações nela contidas serão eliminadas da nossa base de dados permanentemente, e não será possível recuperar.
                </p>
            </div>
            <div className="flex gap-3 place-self-end">
                <Button variant="outline" className="place-self-end" onClick={handlePauseAccount}>Suspender Conta</Button>
                <Button variant="destructive" className="place-self-end">Deletar Conta</Button>
            </div>
        </div>
    )
}