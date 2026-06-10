import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AddLessonDialog } from "@/components/roadmaps/AddLessonDialog";
import { AddGroupDialog } from "@/components/roadmaps/AddGroupDialog";
import { RoadmapLessonItem } from "@/components/roadmaps/RoadmapLessonItem";
import { DeleteRoadmapButton } from "@/components/roadmaps/DeleteRoadmapButton";
import { FolderPlus, PlusCircle, ArrowLeft } from "lucide-react";

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
            groups: {
                orderBy: [
                    { order: "asc" },
                    { createdAt: "asc" }
                ],
                include: {
                    lessons: {
                        orderBy: { createdAt: "asc" },
                    },
                },
            },
            lessons: {
                where: { roadmapGroupId: null }, // Only fetch uncategorized lessons
                orderBy: { createdAt: "asc" },
            },
        },
    });

    if (!roadmap) {
        return (
            <div className="container mx-auto py-8 px-4 text-center">
                <h1 className="text-2xl font-bold mb-4">Roadmap não encontrado</h1>
                <Link href="/roadmaps">
                    <Button variant="outline">Voltar para roadmaps</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Link href="/roadmaps" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Todos os Roadmaps
            </Link>
            
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-sm border border-border mb-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                            Meta: {roadmap.goal}
                        </span>
                        <h1 className="text-3xl font-bold">{roadmap.title}</h1>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                        <AddGroupDialog roadmapId={roadmap.id}>
                            <Button variant="outline" className="gap-2">
                                <FolderPlus className="w-4 h-4" /> Novo Grupo
                            </Button>
                        </AddGroupDialog>
                        <AddLessonDialog roadmapId={roadmap.id}>
                            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                                <PlusCircle className="w-4 h-4" /> Lição Avulsa
                            </Button>
                        </AddLessonDialog>
                        <DeleteRoadmapButton roadmapId={roadmap.id} />
                    </div>
                </div>
                {roadmap.description && (
                    <p className="text-muted-foreground mt-2">{roadmap.description}</p>
                )}
            </div>

            <div className="space-y-8">
                {/* Renderizar os Grupos */}
                {roadmap.groups.map((group) => (
                    <div key={group.id} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                    {group.order + 1}
                                </span>
                                {group.name}
                            </h2>
                            <AddLessonDialog roadmapId={roadmap.id} groupId={group.id}>
                                <Button variant="secondary" size="sm" className="gap-2 bg-white hover:bg-slate-100 border">
                                    <PlusCircle className="w-4 h-4 text-blue-600" /> Adicionar Lição
                                </Button>
                            </AddLessonDialog>
                        </div>
                        
                        {group.lessons.length === 0 ? (
                            <div className="text-center py-6 bg-white rounded-lg border border-dashed border-slate-300">
                                <p className="text-slate-500 text-sm">Este grupo ainda não tem lições.</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {group.lessons.map((lesson) => (
                                    <RoadmapLessonItem key={lesson.id} lesson={lesson} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Renderizar Lições Avulsas (Sem grupo) */}
                {roadmap.lessons.length > 0 && (
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 opacity-80">
                        <h2 className="text-lg font-bold text-slate-700 mb-4">Outras Lições (Geral)</h2>
                        <div className="space-y-3">
                            {roadmap.lessons.map((lesson) => (
                                <RoadmapLessonItem key={lesson.id} lesson={lesson} />
                            ))}
                        </div>
                    </div>
                )}
                
                {roadmap.groups.length === 0 && roadmap.lessons.length === 0 && (
                    <div className="text-center py-16 bg-muted/30 rounded-lg border border-dashed border-border flex flex-col items-center">
                        <FolderPlus className="w-12 h-12 text-slate-300 mb-4" />
                        <h3 className="text-lg font-semibold text-slate-700 mb-2">Estruture seu aprendizado</h3>
                        <p className="text-muted-foreground mb-6 max-w-sm">
                            Crie grupos para organizar suas áreas de estudo (ex: Módulos, Disciplinas) e adicione lições dentro deles.
                        </p>
                        <AddGroupDialog roadmapId={roadmap.id}>
                            <Button>Criar meu primeiro grupo</Button>
                        </AddGroupDialog>
                    </div>
                )}
            </div>
        </div>
    );
}
