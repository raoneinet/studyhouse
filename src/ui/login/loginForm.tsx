"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/userContext"

const formSchema = z.object({
    email: z.email({ pattern: z.regexes.email }),
    password: z.string().min(6)
})

export const LoginForm = () => {

    const { login } = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleLogin = async (values: z.infer<typeof formSchema>) => {
        try {
            const userFetch = await fetch("http://localhost/studyhouse_backend/api/login.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            })

            const data = await userFetch.json()
            
            if(data.status === "success"){
                if(data.token) localStorage.setItem("token", data.token)

                login(data.user)
            }
        } catch (error: any) {
            console.log("Erro ao fazer login: ", error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-8 md:w-95 md:float-right">
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="******"
                                    {...field} />
                            </FormControl>
                            <FormDescription className="text-xs">
                                Deve conter no mínimo 6 dígitos
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button variant="outline" type="submit">Entrar</Button>
            </form>
        </Form>
    )
}