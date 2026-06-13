import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

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

        const formData = await req.formData();
        const file = formData.get("avatar") as File | null;

        if (!file) {
            return NextResponse.json(
                { status: "error", message: "Nenhum arquivo enviado" },
                { status: 400 }
            );
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
            return NextResponse.json(
                { status: "error", message: "O arquivo deve ser uma imagem" },
                { status: 400 }
            );
        }

        // Validate file size (2MB max)
        if (file.size > 2 * 1024 * 1024) {
            return NextResponse.json(
                { status: "error", message: "O arquivo deve ter no máximo 2MB" },
                { status: 400 }
            );
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Generate unique filename
        const ext = file.name.split('.').pop();
        const uniqueSuffix = crypto.randomBytes(16).toString('hex');
        const fileName = `${session.userId}-${uniqueSuffix}.${ext}`;

        // Ensure directory exists
        const uploadDir = path.join(process.cwd(), "public", "uploads", "avatars");
        try {
            await fs.access(uploadDir);
        } catch {
            await fs.mkdir(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, fileName);
        await fs.writeFile(filePath, buffer);

        // Update database
        const avatarPath = `/uploads/avatars/${fileName}`;
        const updatedUser = await prisma.user.update({
            where: { id: session.userId },
            data: { avatar: avatarPath },
            select: {
                id: true,
                avatar: true,
            }
        });

        return NextResponse.json({
            status: "success",
            message: "Avatar atualizado com sucesso",
            data: updatedUser
        });

    } catch (error) {
        console.error("[user/avatar/PATCH]", error);
        return NextResponse.json(
            { status: "error", message: "Erro interno do servidor ao atualizar avatar" },
            { status: 500 }
        );
    }
}
