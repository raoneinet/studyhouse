import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function PATCH(req: NextRequest) {
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

        // Prevent updating sensitive fields through this endpoint
        delete body.id;
        delete body.password;
        delete body.status;
        delete body.createdAt;
        delete body.updatedAt;

        // Ensure date_of_birth is a valid ISO-8601 string or Date object if it's being updated
        if (body.date_of_birth) {
            const parsedDate = new Date(body.date_of_birth);
            if (!isNaN(parsedDate.getTime())) {
                body.date_of_birth = parsedDate.toISOString();
            } else {
                delete body.date_of_birth; // skip invalid dates
            }
        }

        const updatedUser = await prisma.user.update({
            where: { id: session.userId },
            data: body,
            select: {
                id: true,
                email: true,
                username: true,
                firstname: true,
                lastname: true,
                avatar: true,
                date_of_birth: true,
                profession: true,
                country: true,
                status: true,
            }
        });

        return NextResponse.json({
            status: "success",
            message: "Perfil atualizado com sucesso",
            data: updatedUser
        });
    } catch (error) {
        console.error("[user/PATCH]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor ao atualizar perfil" },
            { status: 500 }
        );
    }
}
