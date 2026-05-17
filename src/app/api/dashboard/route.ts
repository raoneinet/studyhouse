import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    try {
        const session = await getIronSession<SessionData>(
            await cookies(),
            sessionOptions
        );

        if (!session.isLoggedIn || !session.userId) {
            return NextResponse.json(
                { status: "error", message: "Não autenticado" },
                { status: 401 }
            );
        }

        const userId = session.userId;

        // Executar todas as queries em paralelo para otimizar o tempo de resposta
        const [
            total,
            ongoingCount,
            urgentCount,
            doneCount,
            continueStudyingRaw,
            favoritesRaw,
            recentActivityRaw,
            groupedCategories
        ] = await Promise.all([
            prisma.lesson.count({ where: { userId } }),
            prisma.lesson.count({ where: { userId, status: "ongoing" } }),
            prisma.lesson.count({ where: { userId, priority: "urgent" } }),
            prisma.lesson.count({ where: { userId, status: "done" } }),
            prisma.lesson.findMany({
                where: { userId, status: "ongoing" },
                take: 10,
                orderBy: { updatedAt: "desc" }
            }),
            prisma.lesson.findMany({
                where: { userId, isFavorite: true },
                take: 10,
                orderBy: { updatedAt: "desc" }
            }),
            prisma.lesson.findMany({
                where: { userId },
                take: 5,
                orderBy: { createdAt: "desc" }
            }),
            prisma.lesson.groupBy({
                by: ["category"],
                where: { userId },
                _count: {
                    category: true
                },
                orderBy: {
                    _count: {
                        category: "desc"
                    }
                }
            })
        ]);

        // Função auxiliar para mapear isFavorite (boolean) para is_favorite (number)
        const mapLesson = (lesson: any) => ({
            ...lesson,
            is_favorite: lesson.isFavorite ? 1 : 0
        });

        const continueStudying = continueStudyingRaw.map(mapLesson);
        const favorites = favoritesRaw.map(mapLesson);
        const recentActivity = recentActivityRaw.map(mapLesson);

        // Mapear categorias para o formato { category: string, total: number }
        const categories = groupedCategories.map((group) => ({
            category: group.category,
            total: group._count.category
        }));

        return NextResponse.json({
            status: "success",
            stats: {
                total,
                ongoing: ongoingCount,
                urgent: urgentCount,
                done: doneCount
            },
            continueStudying,
            favorites,
            recentActivity,
            categories
        });
    } catch (error) {
        console.error("[dashboard/GET]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
