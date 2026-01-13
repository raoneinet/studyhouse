"use client"
import { LessonForm } from "@/components/lessonForm/lessonForm"
import { PageTitle } from "@/components/titles/pageTitle"
import { toast } from "sonner"
import { formSchema } from "@/utils/formSchema"
import { z } from "zod"
import { useCreateLessonMutation } from "@/app/reducer/lessonsApi"
import { useRouter } from "next/navigation"

const CreateNewItem = () => {

    const [createLesson] = useCreateLessonMutation()
    const router = useRouter()

    const handleCreateItem = async (values: z.infer<typeof formSchema>) => {

        const created_at = new Date().toISOString().slice(0, 19).replace("T", " ")

        try {
            const createItem = await createLesson({ ...values, created_at }).unwrap()

            toast("Criado assunto de estudo", {
                description: values.title
            })

            router.push("/myLessons")
        } catch (error: any) {
            console.log("Erro ao criar assunto. ", error)
        }
    }

    return (
        <div className="md:max-w-[1009px]">
            <PageTitle
                title="Novo Assunto"
                subtitle="Criar um novo assunto para estudar"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="bg-white border rounded-lg px-2 py-8">
                <LessonForm
                    submitData={handleCreateItem}
                />
            </div>
        </div>
    )
}

export default CreateNewItem
