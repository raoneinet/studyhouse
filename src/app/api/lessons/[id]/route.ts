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

        // Resolving params properly based on Next.js 14/15 standards
        const resolvedParams = await context.params;
        const id = resolvedParams.id;
        
        const lessonId = parseInt(id, 10);

        if (isNaN(lessonId)) {
            return NextResponse.json(
                { status: "error", message: "ID inválido" },
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
                { status: "error", message: "Sem permissão para eliminar esta lição" },
                { status: 403 }
            );
        }

        await prisma.lesson.delete({ where: { id: lessonId } });

        return NextResponse.json({
            status: "success",
            message: "Lição eliminada com sucesso",
        });
    } catch (error) {
        console.error("[lessons/DELETE]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}

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
        const id = resolvedParams.id;
        const lessonId = parseInt(id, 10);

        if (isNaN(lessonId)) {
            return NextResponse.json(
                { status: "error", message: "ID inválido" },
                { status: 400 }
            );
        }

        const lesson = await prisma.lesson.findUnique({
            where: { id: lessonId },
            include: { notes: true }
        });

        if (!lesson || lesson.userId !== session.userId) {
            return NextResponse.json(
                { status: "error", message: "Lição não encontrada" },
                { status: 404 }
            );
        }

        return NextResponse.json(lesson);
    } catch (error) {
        console.error("[lessons/GET]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}

export async function PATCH(
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
        const id = resolvedParams.id;
        const lessonId = parseInt(id, 10);

        if (isNaN(lessonId)) {
            return NextResponse.json(
                { status: "error", message: "ID inválido" },
                { status: 400 }
            );
        }

        const lesson = await prisma.lesson.findUnique({
            where: { id: lessonId },
            select: { userId: true },
        });

        if (!lesson || lesson.userId !== session.userId) {
            return NextResponse.json(
                { status: "error", message: "Lição não encontrada ou sem permissão" },
                { status: 404 }
            );
        }

        const body = await req.json();

        const updatedLesson = await prisma.lesson.update({
            where: { id: lessonId },
            data: body,
        });

        return NextResponse.json({
            status: "success",
            message: "Lição atualizada com sucesso",
            data: updatedLesson
        });
    } catch (error) {
        console.error("[lessons/PATCH]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
