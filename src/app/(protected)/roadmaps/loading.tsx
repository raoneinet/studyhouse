import { Skeleton } from "@/components/ui/skeleton"

export default function RoadmapsLoading() {
    return (
        <div className="md:max-w-full pb-10">
            <div className="flex justify-between items-end pb-5">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-40 rounded-xl" />
                    <Skeleton className="h-5 w-72 rounded-xl" />
                </div>
                <Skeleton className="h-10 w-24 rounded-xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white border rounded-2xl p-5 h-[200px] flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                            <Skeleton className="h-6 w-24 rounded-full" />
                        </div>
                        <Skeleton className="h-6 w-3/4 rounded-xl mb-2" />
                        <Skeleton className="h-4 w-full rounded-xl mb-1" />
                        <Skeleton className="h-4 w-5/6 rounded-xl mb-4 flex-grow" />
                        <div className="flex items-center justify-between pt-4 border-t mt-auto">
                            <Skeleton className="h-4 w-20 rounded-xl" />
                            <Skeleton className="h-4 w-20 rounded-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
