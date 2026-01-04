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
import { useRegisterUserMutation } from "@/app/reducer/userReducer"
import { LoginForm } from "../login/loginForm"

const formSchema = z.object({
    firstname: z.string("Nome deve conter ao menos 2 letras"),
    lastname: z.string("Sobrenome deve conter ao menos 2 letras"),
    avatar: z.instanceof(File).optional(),
    date_of_birth: z.iso.date(),
    email: z.email(),
    password: z.string().min(2, "Senha deve conter no mínimo 6 caracteres")
})

export const RegisterForm = () => {

    const [registerUser] = useRegisterUserMutation()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            avatar: undefined,
            date_of_birth: "2025-01-01",
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
        formData.append("firstname", values.firstname);
        formData.append("lastname", values.lastname ?? "");
        formData.append("username", username);
        formData.append("date_of_birth", values.date_of_birth);
        formData.append("email", values.email);
        formData.append("password", values.password);

        if (values.avatar) {
            formData.append("avatar", values.avatar);
        }

        try {
            const createUser = await registerUser(formData).unwrap()

            if(createUser.status === "success"){
                return <LoginForm/>
            }

            return createUser
        } catch (error: any) {
            console.log("Erro ao registrar usuário: ", error)
        }

        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegistration)} className="space-y-8">
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
                <Button type="submit" variant="outline">Criar conta</Button>
            </form>
        </Form>
    )
}