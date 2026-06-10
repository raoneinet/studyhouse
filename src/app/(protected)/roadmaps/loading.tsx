import { Skeleton } from "@/components/ui/skeleton"

export default function RoadmapsLoading() {
    return (
        <div className="md:max-w-full pb-10">
            <div className="flex justify-between items-end pb-5">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-40 rounded-md" />
                    <Skeleton className="h-5 w-72 rounded-md" />
                </div>
                <Skeleton className="h-10 w-24 rounded-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white border rounded-lg p-5 h-[200px] flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                            <Skeleton className="h-6 w-24 rounded-full" />
                        </div>
                        <Skeleton className="h-6 w-3/4 rounded-md mb-2" />
                        <Skeleton className="h-4 w-full rounded-md mb-1" />
                        <Skeleton className="h-4 w-5/6 rounded-md mb-4 flex-grow" />
                        <div className="flex items-center justify-between pt-4 border-t mt-auto">
                            <Skeleton className="h-4 w-20 rounded-md" />
                            <Skeleton className="h-4 w-20 rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
