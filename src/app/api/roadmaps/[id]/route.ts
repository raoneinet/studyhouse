import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
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

        const roadmapId = parseInt((await params).id, 10);

        if (isNaN(roadmapId)) {
            return NextResponse.json(
                { status: "error", message: "ID de roadmap inválido" },
                { status: 400 }
            );
        }

        const roadmap = await prisma.roadmap.findUnique({
            where: {
                id: roadmapId,
                userId: session.userId,
            },
            include: {
                lessons: {
                    orderBy: { createdAt: "asc" }
                }
            }
        });

        if (!roadmap) {
            return NextResponse.json(
                { status: "error", message: "Roadmap não encontrado" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            status: "success",
            data: roadmap,
        });
    } catch (error) {
        console.error("[roadmaps/[id]/GET]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
