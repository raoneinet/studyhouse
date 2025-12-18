import { StatusType } from "@/types/statusType"
import { Circle, CircleDot, CheckCircle2, AlertCircle, CircleMinus } from "lucide-react"

export const statusOptions: StatusType[] = [
    {
        id: "notstarted",
        label: "Não iniciado",
        icon: Circle,
        color: "text-gray-400",
        bgColor: "bg-gray-100",
        textColor: "text-gray-700"
    },
    {
        id: "ongoing",
        label: "Em andamento",
        icon: CircleMinus,
        color: "text-blue-500",
        bgColor: "bg-blue-100",
        textColor: "text-blue-700"
    },
    {
        id: "onhold",
        label: "Em pausa",
        icon: AlertCircle,
        color: "text-orange-500",
        bgColor: "bg-orange-100",
        textColor: "text-orange-700"
    },
    {
        id: "done",
        label: "Concluído",
        icon: CheckCircle2,
        color: "text-green-500",
        bgColor: "bg-green-100",
        textColor: "text-green-700"
    }
]