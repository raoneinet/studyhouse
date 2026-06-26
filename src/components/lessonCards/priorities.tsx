import { PriorityType } from "@/types/priorityType"
import { priorityOptions } from "@/utils/priorityOptions"
import { AlertCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export const Priorities = ({ priority }: { priority: string }) => {

    const priorities: PriorityType[] = priorityOptions.filter(opt => opt.id === priority)
    const t = useTranslations('LessonCards');

    return (
        <>
            {priorities.map((item) => (
                <div
                    key={item.id}
                    className={`${item.bgColor} ${item.borderColor} ${item.color} text-xs items-center flex gap-1 px-2 rounded-xl`}
                >
                    <AlertCircle className="w-3" />
                    {/* @ts-ignore - Dynamic key usage is intentional here */}
                    <span>{t(`priority_${item.id}`)}</span>
                </div>
            ))}
        </>
    )
}