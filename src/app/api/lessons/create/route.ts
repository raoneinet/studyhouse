import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

const createLessonSchema = z.object({
    title: z.string().trim().min(2, "Título deve ter mais de 2 caracteres"),
    description: z.string().trim().min(2, "Descrição não pode ficar vazia"),
    category: z.enum([
        "history", "math", "programming", "computing", "engineering",
        "language", "linguistics", "science", "economics", "law",
        "world", "biology", "humanities", "politics", "other",
    ], { error: "Categoria inválida" }),
    status: z.enum(["notstarted", "ongoing", "onhold", "done"], {
        error: "Status inválido",
    }),
    priority: z.enum(["low", "medium", "high", "urgent"], {
        error: "Prioridade inválida",
    }),
    tags: z.string().optional(),
    links: z
        .array(z.object({ value: z.string().optional() }))
        .optional()
        .transform((arr) =>
            (arr ?? []).map((l) => l.value ?? "").filter(Boolean)
        ),
    roadmapId: z.number().optional(),
    roadmapGroupId: z.number().optional(),
});

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
        const parsed = createLessonSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { status: "error", message: parsed.error.issues[0].message },
                { status: 400 }
            );
        }

        const { title, description, category, status, priority, tags, links, roadmapId, roadmapGroupId } =
            parsed.data;

        const lesson = await prisma.lesson.create({
            data: {
                title,
                description,
                category,
                status,
                priority,
                tags,
                links,
                userId: session.userId,
                roadmapId,
                roadmapGroupId,
            },
        });

        return NextResponse.json(
            { status: "success", message: "Lição criada com sucesso", lesson },
            { status: 201 }
        );
    } catch (error) {
        console.error("[lessons/create]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
