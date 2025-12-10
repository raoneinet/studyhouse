"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Title } from "@/components/title/title"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
    title: z.string().min(2),
    link: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.string(),

})

export const CreateItem = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            link: "",
            description: "",
            category: "",
            status: "",
        }
    })

    const handleCreateItem = (values: z.infer<typeof formSchema>) => {

    }

    return (
        <div className="w-3xl">
            <Title
                title="Adicionar Novo Item"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleCreateItem)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Título</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Ex. Introdução à História" />
                                </FormControl>
                                <FormDescription>
                                    Dê um título ao assunto de estudo
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col">
                        <FormField
                            control={form.control}
                            name="link"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Link</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="https://www..." />
                                    </FormControl>
                                    <FormDescription>
                                        Salve os seus liks de consulta
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="button" className="flex-1 bg-blue-600 text-white place-self-end">+</Button>
                    </div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Descrição</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Descrição e anotações sobre este assunto" />
                                </FormControl>
                                <FormDescription>
                                    Insira uma descrição do assunto
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-10">
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Categoria</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Theme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="light">IA</SelectItem>
                                                <SelectItem value="dark">História</SelectItem>
                                                <SelectItem value="math">Matemática</SelectItem>
                                                <SelectItem value="programming">Programação</SelectItem>
                                                <SelectItem value="computing">Computação</SelectItem>
                                                <SelectItem value="engineer">Engenharia</SelectItem>
                                                <SelectItem value="language">Línguas</SelectItem>
                                                <SelectItem value="linguistics">Linguística</SelectItem>
                                                <SelectItem value="science">Ciência</SelectItem>
                                                <SelectItem value="economics">Econômia</SelectItem>
                                                <SelectItem value="law">Lei/Direito</SelectItem>
                                                <SelectItem value="other">Outro</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        Insira uma descrição do assunto
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Theme" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="start">Não lido</SelectItem>
                                                <SelectItem value="ongoing">Lendo</SelectItem>
                                                <SelectItem value="onhold">Em pausa</SelectItem>
                                                <SelectItem value="done">Concluído</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        Insira uma descrição do assunto
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full flex gap-3">
                        <Button type="submit" className="flex-1 bg-blue-600 text-white">Criar</Button>
                        <Button type="button" variant="outline" className="w-fit">Cancelar</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}