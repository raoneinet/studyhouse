import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useForm, SubmitHandler } from "react-hook-form"
import { useUpdateUserPersonalInfoMutation } from "@/app/reducer/userApi"
import { useGetMeQuery } from "@/app/reducer/authApi"
import { toast } from "sonner"

type Props = {
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

export const PersonalInfo = ({ editPersonal, setIsEditing }: Props) => {

    const [updateUserPersonalInfo] = useUpdateUserPersonalInfoMutation()

    const { data: user } = useGetMeQuery()

    const userData = user?.user || {}

    const formatDateForInput = (dateStr?: string) => {
        if (!dateStr) return "";
        try {
            return new Date(dateStr).toISOString().split('T')[0];
        } catch {
            return "";
        }
    }

    const formatDateForDisplay = (dateStr?: string) => {
        if (!dateStr) return "Não informado";
        try {
            // Usa timezone local para evitar que 1990-01-01 vire 1989-12-31 no Brasil
            const date = new Date(dateStr);
            return new Date(date.getTime() + date.getTimezoneOffset() * 60000).toLocaleDateString('pt-BR');
        } catch {
            return "Não informado";
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<UpdatePersonalInfo>({
        defaultValues: {
            firstname: userData.firstname || "",
            lastname: userData.lastname || "",
            email: userData.email || "",
            date_of_birth: formatDateForInput(userData.date_of_birth),
            profession: userData.profession || "",
            country: userData.country || ""
        }
    })

    const handleCancelEdit = () => {
        setIsEditing(false)
    }

    const handleSaveEdit: SubmitHandler<UpdatePersonalInfo> = async (data) => {
        try {
            await updateUserPersonalInfo(data).unwrap()
            setIsEditing(false)
            toast("Usuário atualizado com sucesso")
        } catch (error: any) {
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
                                defaultValue={userData.firstname}
                                {...register("firstname")}
                                className="w-full px-4 py-2 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Primeiro nome"
                            />
                            <Input
                                defaultValue={userData.lastname}
                                {...register("lastname")}
                                className="w-full px-4 py-2 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Sobrenome"
                            />
                        </div>
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-2xl text-slate-800">
                            {`${userData.firstname} ${userData.lastname}`}
                        </p>
                    }
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mt-2">Email</label>
                    {editPersonal ?
                        <Input
                            type="email"
                            defaultValue={userData.email}
                            {...register("email")}
                            className="w-full px-4 py-2 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="joao@email.com"
                        />
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-2xl text-slate-800">
                            {userData.email || 'Não informado'}
                        </p>
                    }
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mt-2">Data de nascimento</label>
                    {editPersonal ?
                        <Input
                            type="date"
                            defaultValue={formatDateForInput(userData.date_of_birth)}
                            {...register("date_of_birth")}
                            className="w-full px-4 py-2 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-2xl text-slate-800">
                            {formatDateForDisplay(userData.date_of_birth)}
                        </p>
                    }
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mt-2">Profissão</label>
                    {editPersonal ?
                        <Input
                            defaultValue={userData.profession || ""}
                            {...register("profession")}
                            className="w-full px-4 py-2 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="estudante"
                        />
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-2xl text-slate-800">
                            {userData.profession || 'Não informado'}
                        </p>
                    }
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mt-2">País</label>
                    {editPersonal ?
                        <Input
                            defaultValue={userData.country || ""}
                            {...register("country")}
                            className="w-full px-4 py-2 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="Brasil"
                        />
                        :
                        <p className="px-4 py-2 bg-slate-50 rounded-2xl text-slate-800">
                            {userData.country || 'Não informado'}
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