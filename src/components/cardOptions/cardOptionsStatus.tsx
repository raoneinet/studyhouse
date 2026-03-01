"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronRight } from "lucide-react"
import { statusOptions } from "@/utils/statusOptions"
import { StatusType } from "@/types/statusType"

type Props = {
    id: number
    label: StatusType
    handleUpdateStatus: any
}

export const CardOptionsStatus = ({ id, label, handleUpdateStatus }: Props) => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <ChevronRight className={label.color} />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="end">
                {statusOptions.map(stat =>
                    stat.id !== label.id && (
                        <DropdownMenuItem
                            textValue={stat.id}
                            key={stat.id}
                            onClick={() => handleUpdateStatus({ id, status: stat.id })}
                        >
                            <span>{stat.label}</span>
                        </DropdownMenuItem>
                    ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}