import { BookOpen } from "lucide-react"

export const Logobrand = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Learnizze</span>
        </div>
    )
}