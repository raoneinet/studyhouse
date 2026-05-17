import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function GET(
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
        const lessonId = parseInt(resolvedParams.id, 10);

        if (isNaN(lessonId)) {
            return NextResponse.json(
                { status: "error", message: "ID da lição inválido" },
                { status: 400 }
            );
        }

        // Validate ownership
        const lesson = await prisma.lesson.findUnique({
            where: { id: lessonId },
            select: { userId: true },
        });

        if (!lesson || lesson.userId !== session.userId) {
            return NextResponse.json(
                { status: "error", message: "Lição não encontrada ou sem permissão" },
                { status: 403 }
            );
        }

        const notes = await prisma.note.findMany({
            where: { lessonId },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({
            status: "success",
            data: notes,
        });
    } catch (error) {
        console.error("[lessons/notes/GET]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}

export async function POST(
    req: NextRequest,
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
        const lessonId = parseInt(resolvedParams.id, 10);

        if (isNaN(lessonId)) {
            return NextResponse.json(
                { status: "error", message: "ID da lição inválido" },
                { status: 400 }
            );
        }

        const body = await req.json();
        const { content } = body;

        if (!content || typeof content !== "string" || content.trim() === "") {
            return NextResponse.json(
                { status: "error", message: "Conteúdo da nota é obrigatório" },
                { status: 400 }
            );
        }

        // Validate ownership
        const lesson = await prisma.lesson.findUnique({
            where: { id: lessonId },
            select: { userId: true },
        });

        if (!lesson || lesson.userId !== session.userId) {
            return NextResponse.json(
                { status: "error", message: "Lição não encontrada ou sem permissão" },
                { status: 403 }
            );
        }

        const newNote = await prisma.note.create({
            data: {
                content: content.trim(),
                lessonId,
            },
        });

        return NextResponse.json({
            status: "success",
            message: "Nota adicionada com sucesso",
            data: newNote,
        });
    } catch (error) {
        console.error("[lessons/notes/POST]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
