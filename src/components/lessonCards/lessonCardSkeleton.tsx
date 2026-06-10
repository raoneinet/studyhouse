import { Skeleton } from "@/components/ui/skeleton"

export const LessonCardSkeleton = () => {
    return (
        <div className="p-4 bg-white rounded-lg border">
            <div className="flex-1 flex flex-col justify-between h-full space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-6 w-24 rounded-full" />
                    </div>
                    <Skeleton className="h-8 w-8 rounded-md" />
                </div>
                
                {/* Body */}
                <div className="py-2 space-y-3">
                    <Skeleton className="h-6 w-3/4 rounded-md" />
                    <Skeleton className="h-4 w-full rounded-md" />
                    <Skeleton className="h-4 w-5/6 rounded-md" />
                </div>
                
                {/* Tags and Links */}
                <div className="flex gap-4 py-2 flex-wrap">
                    <Skeleton className="h-6 w-16 rounded-md" />
                    <Skeleton className="h-6 w-24 rounded-md" />
                </div>
                <div className="flex gap-2 py-2 items-center">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-16 rounded-md" />
                </div>
                
                {/* Statuses */}
                <div className="py-2">
                    <Skeleton className="h-10 w-full rounded-md" />
                </div>
                
                {/* Notes */}
                <Skeleton className="h-10 w-full rounded-md" />
            </div>
        </div>
    )
}
