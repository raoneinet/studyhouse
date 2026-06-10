import { Skeleton } from "@/components/ui/skeleton"

export const DashboardSkeleton = () => {
    return (
        <div className="w-full pb-10 space-y-8 mt-5">
            {/* Header */}
            <div className="space-y-2 pb-5">
                <Skeleton className="h-8 w-48 rounded-md" />
                <Skeleton className="h-5 w-96 rounded-md" />
            </div>

            {/* Summary Board */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-32 w-full rounded-xl" />
            </div>

            {/* Ongoings */}
            <div className="space-y-4">
                <Skeleton className="h-6 w-48 rounded-md" />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-48 w-full rounded-lg hidden xl:block" />
                </div>
            </div>

            {/* Categories & Recent Activity */}
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 space-y-4">
                    <Skeleton className="h-6 w-40 rounded-md" />
                    <Skeleton className="h-64 w-full rounded-xl" />
                </div>
                <div className="flex-1 space-y-4">
                    <Skeleton className="h-6 w-40 rounded-md" />
                    <Skeleton className="h-64 w-full rounded-xl" />
                </div>
            </div>

            {/* Favorites */}
            <div className="space-y-4">
                <Skeleton className="h-6 w-48 rounded-md" />
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-48 w-full rounded-lg hidden xl:block" />
                </div>
            </div>
        </div>
    )
}
