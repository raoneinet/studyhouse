import StudyAppLayout from "@/components/dashboard/dashboard"
import { Title } from "@/components/title/title"

const MyCards = () => {
    return (
        <div className="w-full">
            <Title
                title="Dashboard"
                subtitle="Bem-vindo de volta! Aqui está um resumo dos seus estudos"
                style="text-2xl font-bold text-slate-800 pb-5"
            />
            <StudyAppLayout/>
        </div>
    )
}

export default MyCards