import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

const createGroupSchema = z.object({
    name: z.string().trim().min(2, "Nome deve ter mais de 2 caracteres"),
});

export async function POST(
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

        // Verify roadmap ownership
        const roadmap = await prisma.roadmap.findUnique({
            where: { id: roadmapId, userId: session.userId }
        });

        if (!roadmap) {
            return NextResponse.json(
                { status: "error", message: "Roadmap não encontrado" },
                { status: 404 }
            );
        }

        const body = await req.json();
        const parsed = createGroupSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { status: "error", message: parsed.error.issues[0].message },
                { status: 400 }
            );
        }

        // Get max order
        const lastGroup = await prisma.roadmapGroup.findFirst({
            where: { roadmapId },
            orderBy: { order: 'desc' }
        });
        const order = lastGroup ? lastGroup.order + 1 : 0;

        const group = await prisma.roadmapGroup.create({
            data: {
                name: parsed.data.name,
                order,
                roadmapId,
            }
        });

        return NextResponse.json(
            { status: "success", message: "Grupo criado com sucesso", group },
            { status: 201 }
        );
    } catch (error) {
        console.error("[roadmaps/groups/POST]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
