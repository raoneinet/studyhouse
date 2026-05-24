import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserHeader } from "@/components/header/userHeader";
import { DeleteRoadmapIcon } from "@/components/roadmaps/DeleteRoadmapIcon";
import { Map, Target, CalendarDays, BookOpen } from "lucide-react";

export const metadata = {
    title: "Meus Roadmaps - StudyHouse",
};

export default async function RoadmapsPage() {
    const session = await getIronSession<SessionData>(
        await cookies(),
        sessionOptions
    );

    if (!session.isLoggedIn || !session.userId) {
        redirect("/login");
    }

    const roadmaps = await prisma.roadmap.findMany({
        where: { userId: session.userId },
        orderBy: { createdAt: "desc" },
        include: {
            _count: {
                select: { lessons: true }
            }
        }
    });

    return (
        <div className="md:max-w-full pb-10">
            <div className="flex justify-between items-end pb-5">
                <UserHeader
                    title={`Roadmaps (${roadmaps.length})`}
                    subtitle="Suas trilhas de estudo focadas em metas"
                    style="text-2xl font-bold text-neutral-800"
                >
                    <Link href="/roadmaps/create">
                        <Button className="gap-2">
                            <Map className="w-4 h-4" />
                            Novo Roadmap
                        </Button>
                    </Link>
                </UserHeader>
            </div>

            {roadmaps.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-lg border border-dashed border-neutral-300">
                    <Map className="w-12 h-12 mx-auto text-neutral-300 mb-4" />
                    <h3 className="text-lg font-semibold text-neutral-700 mb-2">Nenhum roadmap encontrado</h3>
                    <p className="text-neutral-500 mb-6 max-w-sm mx-auto">
                        Comece definindo sua primeira grande meta de estudos e organize suas lições.
                    </p>
                    <Link href="/roadmaps/create">
                        <Button>Criar meu primeiro Roadmap</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {roadmaps.map((roadmap) => (
                        <Link key={roadmap.id} href={`/roadmaps/${roadmap.id}`}>
                            <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col group">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">
                                        <Target className="w-3 h-3" />
                                        {roadmap.goal}
                                    </span>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <DeleteRoadmapIcon roadmapId={roadmap.id} />
                                    </div>
                                </div>
                                
                                <h3 className="text-lg font-bold text-neutral-800 mb-2 line-clamp-1">
                                    {roadmap.title}
                                </h3>
                                
                                <p className="text-sm text-neutral-500 mb-4 line-clamp-2 flex-grow">
                                    {roadmap.description || "Sem descrição"}
                                </p>
                                
                                <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t mt-auto">
                                    <div className="flex items-center gap-1">
                                        <BookOpen className="w-4 h-4" />
                                        <span>{roadmap._count.lessons} lições</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CalendarDays className="w-4 h-4" />
                                        <span>
                                            {new Date(roadmap.createdAt).toLocaleDateString('pt-BR')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
