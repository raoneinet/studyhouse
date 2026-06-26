"use client"
import { LessonForm } from "@/components/lessonForm/lessonForm"
import { UserHeader } from "@/components/header/userHeader"
import { toast } from "sonner"
import { getFormSchema } from "@/utils/formSchema"
import { z } from "zod"
import { useCreateLessonMutation } from "@/app/reducer/lessonsApi"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { useTranslations } from "next-intl"

const CreateNewItemContent = () => {

    const searchParams = useSearchParams();
    const roadmapId = searchParams.get("roadmapId");

    const [createLesson] = useCreateLessonMutation()
    const router = useRouter()
    const t = useTranslations('Pages');

    const handleCreateItem = async (values: z.infer<ReturnType<typeof getFormSchema>>) => {

        const created_at = new Date().toISOString().slice(0, 19).replace("T", " ")
        const payload = roadmapId 
            ? { ...values, created_at, roadmapId: parseInt(roadmapId, 10) } 
            : { ...values, created_at };

        try {
            const createItem = await createLesson(payload).unwrap()

            toast(t('lessonCreated'), {
                description: values.title
            })

            if (roadmapId) {
                router.push(`/roadmaps/${roadmapId}`)
            } else {
                router.push("/myLessons")
            }
        } catch (error: any) {
            console.log("Erro ao criar assunto. ", error)
        }
    }

    return (
        <>
            <UserHeader
                title={t('newLessonTitle')}
                subtitle={t('newLessonSub')}
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="md:max-w-[1009px] w-full">
                <LessonForm
                    submitData={handleCreateItem}
                />
            </div>
        </>
    )
}

const CreateNewItem = () => {
    const t = useTranslations('Loading');
    return (
        <Suspense fallback={<div>{t('spinner')}</div>}>
            <CreateNewItemContent />
        </Suspense>
    )
}

export default CreateNewItem
