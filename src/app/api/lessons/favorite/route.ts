import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
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

        const body = await req.json();
        const { id, isFavorite } = body;

        const lessonId = parseInt(id, 10);

        if (isNaN(lessonId) || typeof isFavorite !== "boolean") {
            return NextResponse.json(
                { status: "error", message: "Dados inválidos" },
                { status: 400 }
            );
        }

        // Verificar que a lição pertence ao utilizador autenticado
        const lesson = await prisma.lesson.findUnique({
            where: { id: lessonId },
            select: { userId: true },
        });

        if (!lesson) {
            return NextResponse.json(
                { status: "error", message: "Lição não encontrada" },
                { status: 404 }
            );
        }

        if (lesson.userId !== session.userId) {
            return NextResponse.json(
                { status: "error", message: "Sem permissão para alterar esta lição" },
                { status: 403 }
            );
        }

        const updatedLesson = await prisma.lesson.update({
            where: { id: lessonId },
            data: { isFavorite },
        });

        // Mapear para o formato do frontend
        const data = {
            ...updatedLesson,
            is_favorite: updatedLesson.isFavorite ? 1 : 0,
        };

        return NextResponse.json({
            status: "success",
            message: "Estado de favorito atualizado",
            data,
        });
    } catch (error) {
        console.error("[lessons/favorite]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
