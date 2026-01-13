"use client"
import { useRouter } from "next/navigation"
import { useCreateSubjectMutation } from "@/app/reducer/userReducer"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
import { Subject } from "@/types/subject"
import { useEffect } from "react"
import { formSchema } from "@/utils/formSchema"


export const LessonForm = ({ initialValue, submitData }: { initialValue?: Subject, submitData?: any }) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            links: [{ value: "" }],
            description: "",
            category: "",
            status: "",
            tags: "",
            priority: ""
        }
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "links"
    })

    useEffect(() => {
        if (initialValue) {
            form.reset({
                title: initialValue.title,
                links: initialValue.links?.length
                    ? initialValue.links.map(link => ({ value: link }))
                    : [{ value: "" }],
                description: initialValue.description,
                category: initialValue.category,
                status: initialValue.status,
                tags: initialValue.tags,
                priority: initialValue.priority
            })
        }
    }, [initialValue, form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitData)} className="space-y-8">
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
                    {fields.map((item, index) => (
                        <FormField
                            key={item.id}
                            control={form.control}
                            name={`links.${index}.value`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        className="flex justify-between"
                                    >Link
                                        {fields.length > 1 &&
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                onClick={() => remove(index)}
                                                className="h-5 px-2 rounded-full"
                                            >x</Button>
                                        }
                                    </FormLabel>
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
                    ))}


                    {fields.length < 5 &&
                        <Button
                            type="button"
                            className="flex-1 bg-blue-600 text-white place-self-end"
                            onClick={() => {
                                if (fields.length >= 5) return console.log("Máximo de 5 links")
                                append({ value: "" })
                            }}
                        >+</Button>
                    }
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder="Descrição e anotações sobre este assunto" />
                            </FormControl>
                            <FormDescription>
                                Insira uma descrição do assunto
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Categoria</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Matématica" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="history">História</SelectItem>
                                            <SelectItem value="math">Matemática</SelectItem>
                                            <SelectItem value="programming">Programação</SelectItem>
                                            <SelectItem value="computing">Computação</SelectItem>
                                            <SelectItem value="engineering">Engenharia</SelectItem>
                                            <SelectItem value="language">Línguas</SelectItem>
                                            <SelectItem value="linguistics">Linguística</SelectItem>
                                            <SelectItem value="science">Ciência</SelectItem>
                                            <SelectItem value="economics">Econômia</SelectItem>
                                            <SelectItem value="law">Lei/Direito</SelectItem>
                                            <SelectItem value="world">Mundo</SelectItem>
                                            <SelectItem value="biology">Biologia</SelectItem>
                                            <SelectItem value="humanities">Humanidades</SelectItem>
                                            <SelectItem value="politics">Política</SelectItem>
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
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Lendo..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="notstarted">Não lido</SelectItem>
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
                    <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Prioridade</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Alta" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">Baixa</SelectItem>
                                            <SelectItem value="medium">Média</SelectItem>
                                            <SelectItem value="high">Alta</SelectItem>
                                            <SelectItem value="urgent">Urgente</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>
                                    Informe o grau de importância
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="#video, #tutorial, #artigo..." />
                                </FormControl>
                                <FormDescription>
                                    Adicione tags para melhor identificar o assunto
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full flex gap-3">
                    <Button type="submit" className="flex-1 bg-blue-600 text-white">Salvar</Button>
                    <Button type="button" variant="outline" className="w-fit">Cancelar</Button>
                </div>
            </form>
        </Form>
    )
}