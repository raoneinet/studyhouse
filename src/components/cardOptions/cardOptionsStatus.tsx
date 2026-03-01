"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronRight } from "lucide-react"
import { statusOptions } from "@/utils/statusOptions"

export const CardOptionsStatus = ({id, label, handleUpdateStatus}:{id: any, label: any, handleUpdateStatus: any}) => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <ChevronRight className={label.color} />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="end">
                {statusOptions.map(stat => 
                    stat.id !== label.id && (
                    <DropdownMenuItem textValue={stat.id} key={stat.id} onClick={()=>handleUpdateStatus({id, status: stat.id})}>
                        <span>{stat.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}