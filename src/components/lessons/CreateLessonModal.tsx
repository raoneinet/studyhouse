"use client"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { toast } from "sonner"
import { Plus, X, Loader2, BookOpen } from "lucide-react"
import { useCreateLessonMutation } from "@/app/reducer/lessonsApi"
import { getFormSchema } from "@/utils/formSchema"
import { useTranslations } from "next-intl"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type FormValues = z.infer<ReturnType<typeof getFormSchema>>

export const CreateLessonModal = () => {
    const [open, setOpen] = useState(false)
    const [createLesson, { isLoading }] = useCreateLessonMutation()
    const t = useTranslations('LessonForm')
    const formSchema = getFormSchema(t)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            category: "",
            status: "notstarted",
            priority: "medium",
            tags: "",
            links: [{ value: "" }],
        },
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "links",
    })

    const handleSubmit = async (values: FormValues) => {
        try {
            await createLesson(values).unwrap()
            toast.success("Lição criada!", {
                description: values.title,
            })
            form.reset()
            setOpen(false)
        } catch (error: any) {
            toast.error("Erro ao criar lição", {
                description: error?.data?.message ?? "Tente novamente.",
            })
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    id="create-lesson-btn"
                    className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white"
                >
                    <Plus className="w-4 h-4" />
                    Nova Lição
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        <BookOpen className="w-5 h-5 text-orange-600" />
                        Criar Nova Lição
                    </DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-5 mt-2"
                        id="create-lesson-form"
                    >
                        {/* Título */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Título</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Ex. Introdução à Programação"
                                            id="lesson-title"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Descrição */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Descrição</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            rows={3}
                                            placeholder="Anotações e descrição sobre este assunto..."
                                            id="lesson-description"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Categoria / Status / Prioridade */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Categoria</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger id="lesson-category">
                                                    <SelectValue placeholder="Selecione" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="history">História</SelectItem>
                                                <SelectItem value="math">Matemática</SelectItem>
                                                <SelectItem value="programming">Programação</SelectItem>
                                                <SelectItem value="computing">Computação</SelectItem>
                                                <SelectItem value="engineering">Engenharia</SelectItem>
                                                <SelectItem value="language">Línguas</SelectItem>
                                                <SelectItem value="linguistics">Linguística</SelectItem>
                                                <SelectItem value="science">Ciência</SelectItem>
                                                <SelectItem value="economics">Economia</SelectItem>
                                                <SelectItem value="law">Lei/Direito</SelectItem>
                                                <SelectItem value="world">Mundo</SelectItem>
                                                <SelectItem value="biology">Biologia</SelectItem>
                                                <SelectItem value="humanities">Humanidades</SelectItem>
                                                <SelectItem value="politics">Política</SelectItem>
                                                <SelectItem value="other">Outro</SelectItem>
                                            </SelectContent>
                                        </Select>
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
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger id="lesson-status">
                                                    <SelectValue placeholder="Selecione" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="notstarted">Não lido</SelectItem>
                                                <SelectItem value="ongoing">Lendo</SelectItem>
                                                <SelectItem value="onhold">Em pausa</SelectItem>
                                                <SelectItem value="done">Concluído</SelectItem>
                                            </SelectContent>
                                        </Select>
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
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger id="lesson-priority">
                                                    <SelectValue placeholder="Selecione" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="low">Baixa</SelectItem>
                                                <SelectItem value="medium">Média</SelectItem>
                                                <SelectItem value="high">Alta</SelectItem>
                                                <SelectItem value="urgent">Urgente</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Tags */}
                        <FormField
                            control={form.control}
                            name="tags"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tags</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="#video, #tutorial, #artigo..."
                                            id="lesson-tags"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Links */}
                        <div className="space-y-2">
                            <FormLabel>Links de referência</FormLabel>
                            {fields.map((item, index) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name={`links.${index}.value`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="flex gap-2">
                                                    <Input
                                                        {...field}
                                                        placeholder="https://www..."
                                                        id={`lesson-link-${index}`}
                                                    />
                                                    {fields.length > 1 && (
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => remove(index)}
                                                            className="shrink-0 text-red-500 hover:text-red-600"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </Button>
                                                    )}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                            {fields.length < 5 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="mt-1"
                                    onClick={() => append({ value: "" })}
                                    id="add-link-btn"
                                >
                                    <Plus className="w-3 h-3 mr-1" />
                                    Adicionar link
                                </Button>
                            )}
                        </div>

                        {/* Acções */}
                        <div className="flex justify-end gap-3 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setOpen(false)}
                                id="cancel-lesson-btn"
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="bg-orange-600 hover:bg-orange-700 text-white"
                                id="submit-lesson-btn"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        A criar...
                                    </>
                                ) : (
                                    "Criar Lição"
                                )}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
