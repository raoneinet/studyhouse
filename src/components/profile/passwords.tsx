import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useChangePasswordMutation } from "@/app/reducer/authApi"
import { useForm, SubmitHandler } from "react-hook-form"

export const Passwords = ({ editPassword, setEditPassword }: { editPassword: boolean, setEditPassword: (arg: boolean) => void }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [changePassword] = useChangePasswordMutation()

    const handleCancelEdit = () => {
        setEditPassword(false)
    }

    const handleSaveEdit = async (values: any) => {
        const actualPassword: string = values.actualPassword.trim()
        const newPassword: string = values.newPassword.trim()
        try {
            await changePassword({actualPassword, newPassword}).unwrap()
            console.log("Senhas: ",values)
        } catch (error: any) {
            console.log("Ocorreu um erro ao alterar senha: ", error)
        }
        setEditPassword(false)
    }
    return (
        <div className="w-full flex flex-col gap-2">
            <form onSubmit={handleSubmit(handleSaveEdit)}>
                <div className="w-full">
                    {editPassword ?
                        <div className={`flex-col gap-2 ${editPassword ? "flex" : "hidden"} `}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Senha Atual</label>
                                <Input
                                    type="password"
                                    {...register("actualPassword")}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="*********"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Nova Senha</label>
                                <Input
                                    type="password"
                                    {...register("newPassword")}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="*********"
                                />
                            </div>
                        </div>
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                            *********
                        </p>
                    }
                </div>
                {editPassword &&
                    <div className="w-full flex gap-3 justify-end">
                        < Button
                            type="button"
                            variant="link"
                            onClick={handleCancelEdit}
                            className="w-fit cursor-pointer"
                        >Cancelar</Button>

                        < Button
                            type="submit"
                            variant="default"
                            className="w-fit cursor-pointer"
                        >Salvar</Button>
                    </div>
                }
            </form>
        </div>
    )
}