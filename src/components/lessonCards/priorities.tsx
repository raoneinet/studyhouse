import { PriorityType } from "@/types/priorityType"
import { priorityOptions } from "@/utils/priorityOptions"
import { AlertCircle } from "lucide-react"

export const Priorities = ({ priority }: { priority: string }) => {

    const priorities: PriorityType[] = priorityOptions.filter(opt => opt.id === priority)

    return (
        <>
            {priorities.map((item) => (
                <div
                    key={item.id}
                    className={`${item.bgColor} ${item.borderColor} ${item.color} text-xs items-center flex gap-1 px-2 rounded-xl`}
                >
                    <AlertCircle className="w-3" />
                    <span>{item.label}</span>
                </div>
            ))}
        </>
    )
}