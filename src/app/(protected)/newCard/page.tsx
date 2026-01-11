import { CreateLessonForm } from "@/components/createLesson/createItem"
import { PageTitle } from "@/components/titles/pageTitle"

const CreateNewItem = () => {
    return (
        <div className="md:max-w-[1009px]">
            <PageTitle
                title="Novo Assunto"
                subtitle="Criar um novo assunto para estudar"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="bg-white border rounded-lg px-2 py-8">
                <CreateLessonForm />
            </div>
        </div>
    )
}

export default CreateNewItem