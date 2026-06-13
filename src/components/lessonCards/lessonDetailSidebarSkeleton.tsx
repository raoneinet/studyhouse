import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "../ui/separator"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarContent,
    SidebarGroupContent
} from "../ui/sidebar"

export const LessonDetailSidebarSkeleton = () => {
    return (
        <SidebarGroup>
            <SidebarMenu className="flex flex-col justify-between">
                <SidebarGroupLabel className="flex flex-row justify-between">
                    <span className="text-slate-800 text-xl font-semibold">
                        Detalhes de estudo
                    </span>
                    <Skeleton className="md:hidden h-6 w-6 rounded-xl" />
                </SidebarGroupLabel>
                <Separator className="my-3" />
            </SidebarMenu>
            <SidebarContent>
                <SidebarGroupContent className="p-4 space-y-6">
                    {/* Header Details */}
                    <div className="space-y-3">
                        <div className="flex gap-2">
                            <Skeleton className="h-6 w-20 rounded-full" />
                            <Skeleton className="h-6 w-24 rounded-full" />
                        </div>
                        <Skeleton className="h-8 w-full rounded-xl" />
                        <Skeleton className="h-4 w-full rounded-xl" />
                        <Skeleton className="h-4 w-4/5 rounded-xl" />
                    </div>

                    <Separator />

                    {/* Meta info */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-24 rounded-xl" />
                            <div className="flex gap-2">
                                <Skeleton className="h-6 w-16 rounded-xl" />
                                <Skeleton className="h-6 w-20 rounded-xl" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-32 rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-8 w-full rounded-xl" />
                                <Skeleton className="h-8 w-full rounded-xl" />
                            </div>
                        </div>
                    </div>
                </SidebarGroupContent>
            </SidebarContent>
        </SidebarGroup>
    )
}
