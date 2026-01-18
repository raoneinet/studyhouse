"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRegisterUserMutation } from "@/app/reducer/authApi"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const formSchema = z.object({
    firstname: z.string("Nome deve conter ao menos 2 letras"),
    lastname: z.string("Sobrenome deve conter ao menos 2 letras"),
    avatar: z.instanceof(File).optional(),
    date_of_birth: z.iso.date(),
    profession: z.string().optional(),
    country: z.string().optional(),
    email: z.email(),
    password: z.string().min(2, "Senha deve conter no mínimo 6 caracteres")
})

export const RegisterForm = () => {

    const router = useRouter()

    const [registerUser] = useRegisterUserMutation()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            avatar: undefined,
            date_of_birth: "2025-01-01",
            profession: "",
            country: "",
            email: "",
            password: "",
        }
    })

    const handleRegistration = async (values: z.infer<typeof formSchema>) => {

        const email = values.email.split("@")
        const dob = values.date_of_birth.split("-")
        const randNum = Math.floor(Math.random() * 10)
        const username = `@${email[0] + dob[0] + "_" + randNum}`

        const formData = new FormData()
        formData.append("firstname", values.firstname)
        formData.append("lastname", values.lastname ?? "")
        formData.append("username", username)
        formData.append("date_of_birth", values.date_of_birth)
        formData.append("profession", values.profession ?? "")
        formData.append("country", values.country ?? "")
        formData.append("email", values.email)
        formData.append("password", values.password)

        if (values.avatar) {
            formData.append("avatar", values.avatar)
        }

        try {
            const createUser = await registerUser(formData).unwrap()

            if (createUser.status === "success") {
                console.log("Usuário criado! Faça login")
                router.push("/login")
                toast(`${createUser.message}. Faça login`)
            }else{
                console.log("Erro ao criar conta. ",createUser.message)
                toast(`${createUser.message}. Verifique os dados`)
            }

            return createUser
        } catch (error: any) {
            console.log("Erro ao registrar usuário: ", error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegistration)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Prrimeiro nome" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sobrenome</FormLabel>
                            <FormControl>
                                <Input placeholder="Sobrenome" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="avatar"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Foto de perfil</FormLabel>
                            <FormControl>
                                <Input type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            form.setValue("avatar", file);
                                        }
                                    }} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date_of_birth"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Data de nascimento</FormLabel>
                            <FormControl>
                                <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="profession"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Profissão</FormLabel>
                            <FormControl>
                                <Input placeholder="Estudante, programador..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>País</FormLabel>
                            <FormControl>
                                <Input placeholder="Brasil..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="exemplo@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="******" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="outline" className="cursor-pointer">Criar conta</Button>
            </form>
        </Form>
    )
}