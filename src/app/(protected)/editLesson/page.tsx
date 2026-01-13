"use client"
import { LessonForm } from "@/components/lessonForm/lessonForm"
import { PageTitle } from "@/components/titles/pageTitle"
import { useLazyGetLessonByIdQuery } from "@/app/reducer/lessonsApi"
import { useUpdateLessonMutation } from "@/app/reducer/lessonsApi"
import { useEffect } from "react"
import { useState } from "react"
import { Subject } from "@/types/subject"
import { useRouter } from "next/navigation"

const EditLesson = () => {

    const router = useRouter()
    const [editLesson, setEditLesson] = useState<Subject>()
    const [triggerGetLessonById] = useLazyGetLessonByIdQuery()
    const [updateLesson] = useUpdateLessonMutation()

    const handleEditLesson = async () => {
        const url = window.location.href
        const id = Number(url.split("?id=")[1])
        
        try {
            const res = await triggerGetLessonById(id).unwrap()
            setEditLesson(res)
        } catch (error: any) {
            console.log("Erro ao buscar ID. ", id + " Não é válido")
        }
    }

    const handleSubmitForm = async (values: any) => {
        if (!editLesson?.id || editLesson.id === undefined) return

        try {
            await updateLesson({ id: editLesson?.id, data: values }).unwrap()
            router.push("/myLessons")
        } catch (error: any) {
            console.log("Error ao enviar novos valores. ", error)
        }

    }

    useEffect(() => {
        handleEditLesson()
    }, [])

    return (
        <div className="md:max-w-[1009px]">
            <PageTitle
                title="Editar Assunto"
                subtitle="Edite seus assuntos de forma fácil"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="bg-white border rounded-lg px-2 py-8">
                <LessonForm
                    initialValue={editLesson}
                    submitData={handleSubmitForm}
                />
            </div>
        </div>
    )
}

export default EditLesson