import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function DELETE(
    _req: NextRequest,
    context: { params: Promise<{ id: string }> } | { params: { id: string } }
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

        const resolvedParams = await context.params;
        const noteId = parseInt(resolvedParams.id, 10);

        if (isNaN(noteId)) {
            return NextResponse.json(
                { status: "error", message: "ID da nota inválido" },
                { status: 400 }
            );
        }

        // Encontrar a nota e popular o dono da lição
        const note = await prisma.note.findUnique({
            where: { id: noteId },
            include: {
                lesson: {
                    select: { userId: true },
                },
            },
        });

        if (!note) {
            return NextResponse.json(
                { status: "error", message: "Nota não encontrada" },
                { status: 404 }
            );
        }

        if (note.lesson.userId !== session.userId) {
            return NextResponse.json(
                { status: "error", message: "Sem permissão para eliminar esta nota" },
                { status: 403 }
            );
        }

        await prisma.note.delete({
            where: { id: noteId },
        });

        return NextResponse.json({
            status: "success",
            message: "Nota eliminada com sucesso",
        });
    } catch (error) {
        console.error("[notes/DELETE]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
