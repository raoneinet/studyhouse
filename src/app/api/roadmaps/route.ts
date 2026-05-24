import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

const createRoadmapSchema = z.object({
    title: z.string().trim().min(2, "Título deve ter mais de 2 caracteres"),
    description: z.string().optional(),
    goal: z.string().trim().min(2, "Meta não pode ficar vazia"),
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
        const parsed = createRoadmapSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { status: "error", message: parsed.error.issues[0].message },
                { status: 400 }
            );
        }

        const { title, description, goal } = parsed.data;

        const roadmap = await prisma.roadmap.create({
            data: {
                title,
                description,
                goal,
                userId: session.userId,
            },
        });

        return NextResponse.json(
            { status: "success", message: "Roadmap criado com sucesso", roadmap },
            { status: 201 }
        );
    } catch (error) {
        console.error("[roadmaps/POST]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}

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

        const roadmaps = await prisma.roadmap.findMany({
            where: { userId: session.userId },
            orderBy: { createdAt: "desc" },
            include: {
                _count: {
                    select: { lessons: true }
                }
            }
        });

        return NextResponse.json({
            status: "success",
            data: roadmaps,
        });
    } catch (error) {
        console.error("[roadmaps/GET]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
