"use client"
import { LessonForm } from "@/components/lessonForm/lessonForm"
import { PageTitle } from "@/components/titles/pageTitle"
import { useLazyGetSubjectByIdQuery } from "@/app/reducer/userReducer"
import { useUpdateLessonMutation } from "@/app/reducer/userReducer"
import { useEffect } from "react"
import {useState} from "react"
import { Subject } from "@/types/subject"

const EditLesson = () => {

    const [editLesson, setEditLesson] = useState<Subject>()
    const [triggerGetSubjectById] = useLazyGetSubjectByIdQuery()
    const [updateLesson] = useUpdateLessonMutation()

    const handleEditLesson = async () => {
        const url = window.location.href
        const id = Number(url.split("?id=")[1])
        const res = await triggerGetSubjectById(id).unwrap()
        setEditLesson(res)
    }

    const handleSaveLessonEdition = async (values: any)=>{
        console.log("Dados a enviar: ", values)
        await updateLesson(values).unwrap()
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
                    submitData={handleSaveLessonEdition}
                />
            </div>
        </div>
    )
}

export default EditLesson