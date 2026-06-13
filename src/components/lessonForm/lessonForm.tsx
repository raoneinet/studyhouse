"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
import { useEffect, useState } from "react"
import { formSchema } from "@/utils/formSchema"
import { useRouter } from "next/navigation"
import { BookOpen, Link as LinkIcon, Tags, X, Plus, PlaySquare } from "lucide-react"

export const LessonForm = ({ initialValue, submitData }: { initialValue?: Subject, submitData?: any }) => {

    const router = useRouter()
    const [newLink, setNewLink] = useState("")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            links: [],
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
                    : [],
                description: initialValue.description,
                category: initialValue.category,
                status: initialValue.status,
                tags: initialValue.tags,
                priority: initialValue.priority
            })
        }
    }, [initialValue, form])

    const cancelLesson = () => {
        if (initialValue) {
            form.reset()
        }
        router.back()
    }

    const handleAddLink = (e: React.MouseEvent) => {
        e.preventDefault()
        if (!newLink.trim()) return
        if (fields.length >= 5) {
            console.log("Máximo de 5 links")
            return
        }
        append({ value: newLink.trim() })
        setNewLink("")
    }

    // Function to guess link type for icon
    const getLinkIcon = (url: string) => {
        if (url.includes('youtube.com') || url.includes('youtu.be')) return <PlaySquare size={16} className="text-red-500" />
        return <LinkIcon size={16} className="text-orange-500" />
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitData)} className="space-y-6">
                
                {/* Card 1: Informações Principais */}
                <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <BookOpen className="text-orange-500" size={24} />
                        <h2 className="text-xl font-bold text-slate-800">Informações Principais</h2>
                    </div>
                    
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">Título</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Ex. Introdução à Fotografia Digital" className="h-11 rounded-xl" />
                                    </FormControl>
                                    <FormDescription>Dê um título claro e objetivo ao seu assunto.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">Descrição</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder="Detalhes principais, anotações ou resumo sobre este assunto..." className="min-h-[120px] resize-y rounded-xl" />
                                    </FormControl>
                                    <FormDescription>Insira uma descrição detalhada para te ajudar a lembrar do contexto.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Card 2: Recursos Adicionais (Links) */}
                <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <LinkIcon className="text-orange-500" size={24} />
                        <h2 className="text-xl font-bold text-slate-800">Recursos Adicionais</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <Input 
                                value={newLink} 
                                onChange={(e) => setNewLink(e.target.value)}
                                placeholder="https://www.exemplo.com/artigo" 
                                className="h-11 rounded-xl flex-1"
                                onKeyDown={(e) => {
                                    if(e.key === 'Enter') {
                                        e.preventDefault();
                                        handleAddLink(e as any);
                                    }
                                }}
                            />
                            <Button 
                                type="button" 
                                onClick={handleAddLink}
                                disabled={fields.length >= 5 || !newLink.trim()}
                                className="h-11 px-6 rounded-xl bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors font-medium"
                            >
                                <Plus size={18} className="mr-2" /> Adicionar
                            </Button>
                        </div>
                        <p className="text-sm text-slate-500">Salve seus links de consulta. Máximo de 5 links.</p>

                        {/* Link Pills/Cards */}
                        {fields.length > 0 && (
                            <div className="flex flex-wrap gap-3 mt-4">
                                {fields.map((item, index) => (
                                    <div key={item.id} className="flex items-center gap-3 bg-slate-50 border rounded-xl py-2 px-4 shadow-sm w-full md:w-auto overflow-hidden">
                                        {getLinkIcon(item.value)}
                                        <span className="text-sm text-slate-700 truncate max-w-[200px]">{item.value.replace(/^https?:\/\//, '')}</span>
                                        <button 
                                            type="button" 
                                            onClick={() => remove(index)}
                                            className="ml-auto text-slate-400 hover:text-red-500 transition-colors"
                                        >
                                            <X size={16} />
                                        </button>
                                        {/* Hidden inputs to keep react-hook-form tracking the values */}
                                        <input type="hidden" {...form.register(`links.${index}.value` as const)} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Card 3: Classificação */}
                <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <Tags className="text-orange-500" size={24} />
                        <h2 className="text-xl font-bold text-slate-800">Classificação</h2>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-6">
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">Categoria</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="w-full h-11 rounded-xl">
                                                <SelectValue placeholder="Selecione..." />
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
                                                <SelectItem value="economics">Economia</SelectItem>
                                                <SelectItem value="law">Direito</SelectItem>
                                                <SelectItem value="world">Mundo</SelectItem>
                                                <SelectItem value="biology">Biologia</SelectItem>
                                                <SelectItem value="humanities">Humanidades</SelectItem>
                                                <SelectItem value="politics">Política</SelectItem>
                                                <SelectItem value="other">Outro</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">Status</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="w-full h-11 rounded-xl">
                                                <SelectValue placeholder="Selecione..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="notstarted">Não lido</SelectItem>
                                                <SelectItem value="ongoing">Lendo</SelectItem>
                                                <SelectItem value="onhold">Em pausa</SelectItem>
                                                <SelectItem value="done">Concluído</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">Prioridade</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="w-full h-11 rounded-xl">
                                                <SelectValue placeholder="Selecione..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="low">Baixa</SelectItem>
                                                <SelectItem value="medium">Média</SelectItem>
                                                <SelectItem value="high">Alta</SelectItem>
                                                <SelectItem value="urgent">Urgente</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-slate-700 font-medium">Tags</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Ex: video, artigo, tutorial (separe por vírgulas)" className="h-11 rounded-xl" />
                                </FormControl>
                                <FormDescription>Adicione palavras-chave separadas por vírgula para facilitar a busca no futuro.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Ações */}
                <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                    <Button 
                        type="button" 
                        variant="outline" 
                        className="h-12 px-8 rounded-xl font-medium" 
                        onClick={cancelLesson}
                    >
                        Cancelar
                    </Button>
                    <Button 
                        type="submit" 
                        className="h-12 px-10 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-md transition-colors"
                    >
                        Salvar Assunto
                    </Button>
                </div>
            </form>
        </Form>
    )
}