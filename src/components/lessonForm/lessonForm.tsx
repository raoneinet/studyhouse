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
import { getFormSchema } from "@/utils/formSchema"
import { useRouter } from "next/navigation"
import { BookOpen, Link as LinkIcon, Tags, X, Plus, PlaySquare } from "lucide-react"
import { useTranslations } from "next-intl"

export const LessonForm = ({ initialValue, submitData }: { initialValue?: Subject, submitData?: any }) => {

    const router = useRouter()
    const [newLink, setNewLink] = useState("")
    const t = useTranslations('LessonForm');
    const formSchema = getFormSchema(t);

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
    const getLinkIcon = (url?: string) => {
        if (!url) return <LinkIcon size={16} className="text-orange-500" />
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
                        <h2 className="text-xl font-bold text-slate-800">{t('mainInfo')}</h2>
                    </div>
                    
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">{t('title')}</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder={t('titlePlaceholder')} className="h-11 rounded-xl" />
                                    </FormControl>
                                    <FormDescription>{t('titleDesc')}</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">{t('description')}</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder={t('descriptionPlaceholder')} className="min-h-[120px] resize-y rounded-xl" />
                                    </FormControl>
                                    <FormDescription>{t('descriptionDesc')}</FormDescription>
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
                        <h2 className="text-xl font-bold text-slate-800">{t('additionalResources')}</h2>
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
                                <Plus size={18} className="mr-2" /> {t('add')}
                            </Button>
                        </div>
                        <p className="text-sm text-slate-500">{t('linksLimit')}</p>

                        {/* Link Pills/Cards */}
                        {fields.length > 0 && (
                            <div className="flex flex-wrap gap-3 mt-4">
                                {fields.map((item, index) => (
                                    <div key={item.id} className="flex items-center gap-3 bg-slate-50 border rounded-xl py-2 px-4 shadow-sm w-full md:w-auto overflow-hidden">
                                        {getLinkIcon(item.value)}
                                        <span className="text-sm text-slate-700 truncate max-w-[200px]">{item.value?.replace(/^https?:\/\//, '') || ''}</span>
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
                        <h2 className="text-xl font-bold text-slate-800">{t('classification')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-6">
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-slate-700 font-medium">{t('category')}</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="w-full h-11 rounded-xl">
                                                <SelectValue placeholder={t('select')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="history">{t('cat_history')}</SelectItem>
                                                <SelectItem value="math">{t('cat_math')}</SelectItem>
                                                <SelectItem value="programming">{t('cat_programming')}</SelectItem>
                                                <SelectItem value="computing">{t('cat_computing')}</SelectItem>
                                                <SelectItem value="engineering">{t('cat_engineering')}</SelectItem>
                                                <SelectItem value="language">{t('cat_language')}</SelectItem>
                                                <SelectItem value="linguistics">{t('cat_linguistics')}</SelectItem>
                                                <SelectItem value="science">{t('cat_science')}</SelectItem>
                                                <SelectItem value="economics">{t('cat_economics')}</SelectItem>
                                                <SelectItem value="law">{t('cat_law')}</SelectItem>
                                                <SelectItem value="world">{t('cat_world')}</SelectItem>
                                                <SelectItem value="biology">{t('cat_biology')}</SelectItem>
                                                <SelectItem value="humanities">{t('cat_humanities')}</SelectItem>
                                                <SelectItem value="politics">{t('cat_politics')}</SelectItem>
                                                <SelectItem value="other">{t('cat_other')}</SelectItem>
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
                                    <FormLabel className="text-slate-700 font-medium">{t('status')}</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="w-full h-11 rounded-xl">
                                                <SelectValue placeholder={t('select')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="notstarted">{t('status_notstarted')}</SelectItem>
                                                <SelectItem value="ongoing">{t('status_ongoing')}</SelectItem>
                                                <SelectItem value="onhold">{t('status_onhold')}</SelectItem>
                                                <SelectItem value="done">{t('status_done')}</SelectItem>
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
                                    <FormLabel className="text-slate-700 font-medium">{t('priority')}</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="w-full h-11 rounded-xl">
                                                <SelectValue placeholder={t('select')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="low">{t('priority_low')}</SelectItem>
                                                <SelectItem value="medium">{t('priority_medium')}</SelectItem>
                                                <SelectItem value="high">{t('priority_high')}</SelectItem>
                                                <SelectItem value="urgent">{t('priority_urgent')}</SelectItem>
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
                                <FormLabel className="text-slate-700 font-medium">{t('tags')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('tagsPlaceholder')} className="h-11 rounded-xl" />
                                </FormControl>
                                <FormDescription>{t('tagsDesc')}</FormDescription>
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
                        {t('cancel')}
                    </Button>
                    <Button 
                        type="submit" 
                        className="h-12 px-10 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-md transition-colors"
                    >
                        {t('saveSubject')}
                    </Button>
                </div>
            </form>
        </Form>
    )
}