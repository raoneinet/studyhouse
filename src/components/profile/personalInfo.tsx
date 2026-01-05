import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useForm, SubmitHandler } from "react-hook-form"
import { useUpdateUserPersonalInfoMutation } from "@/app/reducer/userReducer"
import { toast } from "sonner"

type Props = {
    user: any,
    editPersonal: boolean,
    setIsEditing: (arg: boolean) => void
}

type UpdatePersonalInfo = {
    firstname: string
    lastname: string
    email: string
    date_of_birth: any
    profession: string
    country: string
}

export const PersonalInfo = ({ user, editPersonal, setIsEditing }: Props) => {

    const [updateUserPersonalInfo] = useUpdateUserPersonalInfoMutation()

    const { register, handleSubmit, formState: { errors } } = useForm<UpdatePersonalInfo>()

    const handleCancelEdit = () => {
        setIsEditing(false)
    }

    const handleSaveEdit: SubmitHandler<UpdatePersonalInfo> = async (data) => {
        try {
            await updateUserPersonalInfo({ ...user, ...data }).unwrap()
            setIsEditing(false)
            toast("Usuário atualizado com sucesso")
        }catch(error: any){
            console.log("Erro ao atualizar usuário", error)
            toast("Erro ao atualizar usuário")
            setIsEditing(false)
        }
    }

    return (
        <div className="w-full flex flex-col gap-3">
            <form onSubmit={handleSubmit(handleSaveEdit)}>
                <div>
                    <label className="block text-sm font-medium text-slate-700">Nome Completo</label>
                    {editPersonal ?
                        <div className="w-full flex gap-2">
                            <Input
                                defaultValue={user.firstname}
                                {...register("firstname")}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Primeiro nome"
                            />
                            <Input
                                defaultValue={user.lastname}
                                {...register("lastname")}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Sobrenome"
                            />
                        </div>
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                            {`${user.firstname} ${user.lastname}`}
                        </p>
                    }
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mt-2">Email</label>
                    {editPersonal ?
                        <Input
                            type="email"
                            defaultValue={user.email}
                            {...register("email")}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="joao@email.com"
                        />
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                            {user.email || 'Não informado'}
                        </p>
                    }
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mt-2">Data de nascimento</label>
                    {editPersonal ?
                        <Input
                            type="date"
                            defaultValue={user.date_of_birth}
                            {...register("date_of_birth")}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                            {user.date_of_birth}
                        </p>
                    }
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mt-2">Profissão</label>
                    {editPersonal ?
                        <Input
                            defaultValue={user.profession || "Não informado"}
                            {...register("profession")}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="estudante"
                        />
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                            {user.profession || 'Não informado'}
                        </p>
                    }
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mt-2">País</label>
                    {editPersonal ?
                        <Input
                            defaultValue={user.country || "Não Informado"}
                            {...register("country")}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Brasil"
                        />
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-lg text-slate-800">
                            {user.country || 'Não informado'}
                        </p>
                    }
                </div>
                {editPersonal &&
                    <div className="flex gap-3 justify-end mt-5">
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