import {z} from "zod"
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

const formSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    date_of_birth: z.iso.date(),
    email: z.email(),
    password: z.string()
})

export const RegisterForm = ()=>{

    const form = useForm<z.infer <typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            date_of_birth: "2025-01-01",
            email: "",
            password: "",
        }
    })

    const handleRegistration = (values: z.infer <typeof formSchema>)=>{
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegistration)} className="space-y-8">
                <FormField 
                    control={form.control}
                    name="firstname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Prrimeiro nome" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="lastname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Sobrenome</FormLabel>
                            <FormControl>
                                <Input placeholder="Sobrenome" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="date_of_birth"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Data de nascimento</FormLabel>
                            <FormControl>
                                <Input type="date" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="exemplo@email.com" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input placeholder="******" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="outline">Criar conta</Button>
            </form>
        </Form>
    )
}