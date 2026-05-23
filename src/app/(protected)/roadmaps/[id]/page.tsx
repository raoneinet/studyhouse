import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AddLessonDialog } from "@/components/roadmaps/AddLessonDialog";

export const metadata = {
    title: "Detalhes do Roadmap - StudyHouse",
};

export default async function RoadmapDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const session = await getIronSession<SessionData>(
        await cookies(),
        sessionOptions
    );

    if (!session.isLoggedIn || !session.userId) {
        redirect("/login");
    }

    const roadmapId = parseInt((await params).id, 10);

    const roadmap = await prisma.roadmap.findUnique({
        where: { id: roadmapId, userId: session.userId },
        include: {
            lessons: {
                orderBy: { createdAt: "asc" },
            },
        },
    });

    if (!roadmap) {
        return (
            <div className="container mx-auto py-8 px-4 text-center">
                <h1 className="text-2xl font-bold mb-4">Roadmap não encontrado</h1>
                <Link href="/dashboard">
                    <Button variant="outline">Voltar para o início</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border mb-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                            Meta: {roadmap.goal}
                        </span>
                        <h1 className="text-3xl font-bold">{roadmap.title}</h1>
                    </div>
                    <AddLessonDialog roadmapId={roadmap.id}>
                        <Button>Adicionar Lição</Button>
                    </AddLessonDialog>
                </div>
                {roadmap.description && (
                    <p className="text-muted-foreground mt-2">{roadmap.description}</p>
                )}
            </div>

            <h2 className="text-xl font-bold mb-4">Lições do Roadmap ({roadmap.lessons.length})</h2>
            
            {roadmap.lessons.length === 0 ? (
                <div className="text-center py-12 bg-muted/30 rounded-lg border border-dashed border-border">
                    <p className="text-muted-foreground mb-4">Nenhuma lição adicionada ainda.</p>
                    <AddLessonDialog roadmapId={roadmap.id}>
                        <Button variant="outline">Criar a primeira lição</Button>
                    </AddLessonDialog>
                </div>
            ) : (
                <div className="space-y-4">
                    {roadmap.lessons.map((lesson, index) => (
                        <div key={lesson.id} className="bg-white p-4 rounded-lg shadow-sm border flex items-center gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                                {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-lg truncate">{lesson.title}</h3>
                                <p className="text-sm text-slate-500 line-clamp-1">{lesson.description}</p>
                            </div>
                            <div>
                                <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600">
                                    {lesson.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
