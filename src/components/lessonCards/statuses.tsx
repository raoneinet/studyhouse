import { StatusType } from "@/types/statusType"
import { statusOptions } from "@/utils/statusOptions"

export const Statuses = ({ status }: { status: string }) => {

    const statuses: StatusType[] = statusOptions.filter(opt => opt.id === status)

    return (
        <>
            {statuses.map(stat => {
                const Icon = stat.icon
                return (
                    <div
                        key={stat.id}
                        className={`${stat.bgColor} w-full flex gap-3 px-5 py-2`}
                    >
                        <Icon className={`${stat.color} w-4`} />
                        <span className={`${stat.textColor}`}>
                            {stat.label}
                        </span>
                    </div>
                )
            }
            )}
        </>
    )
}