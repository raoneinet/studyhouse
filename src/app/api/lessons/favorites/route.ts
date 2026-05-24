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

        const { searchParams } = new URL(req.url);
        const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
        const limit = Math.min(
            50,
            Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10))
        );
        const skip = (page - 1) * limit;

        const where = { 
            userId: session.userId,
            isFavorite: true,
            roadmapId: null 
        };

        const [lessons, totalItems] = await prisma.$transaction([
            prisma.lesson.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip,
                take: limit,
            }),
            prisma.lesson.count({ where }),
        ]);

        const totalPages = Math.ceil(totalItems / limit);

        // Mapear para o formato esperado pelo frontend (Subject type)
        const data = lessons.map(({ isFavorite, ...rest }) => ({
            ...rest,
            is_favorite: isFavorite ? 1 : 0,
        }));

        return NextResponse.json({
            status: "success",
            data,
            page,
            limit,
            totalItems,
            totalPages,
        });
    } catch (error) {
        console.error("[lessons/favorites/GET]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}
