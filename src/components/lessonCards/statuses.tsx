import { StatusType } from "@/types/statusType"
import { statusOptions } from "@/utils/statusOptions"
import { CardOptionsStatus } from "../cardOptions/cardOptionsStatus"
import { Subject } from "@/types/subject"

type Props = {
    status: Subject
    handleUpdateStatus?: any
}

export const Statuses = ({ status, handleUpdateStatus }: Props) => {

    const statuses: StatusType[] = statusOptions.filter(opt => opt.id === status?.status)

    return (
        <>
            {statuses.map((stat: StatusType) => {
                const Icon = stat.icon
                return (
                    <div
                        key={stat.id}
                        className={`${stat.bgColor} w-full flex px-2 items-center justify-between rounded-lg`}
                    >
                        <div className="flex gap-2">
                            <Icon className={`${stat.color} w-4`} />
                            <span className={`${stat.textColor}`}>
                                {stat.label}
                            </span>
                        </div>
                        <CardOptionsStatus label={stat} id={status.id} handleUpdateStatus={handleUpdateStatus}/>
                    </div>
                )
            }
            )}
        </>
    )
}