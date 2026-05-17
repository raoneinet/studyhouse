import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";
import { hashPassword, verifyPassword } from "@/lib/password";
import { z } from "zod";

const passwordSchema = z.object({
  actualPassword: z.string().min(1, "Senha atual é obrigatória"),
  newPassword: z.string().min(6, "Nova senha deve ter ao menos 6 caracteres").max(128),
});

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
    const parsed = passwordSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { status: "error", message: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { actualPassword, newPassword } = parsed.data;

    const user = await prisma.user.findUnique({
      where: { id: session.userId },
    });

    if (!user) {
      return NextResponse.json(
        { status: "error", message: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    const isMatch = await verifyPassword(actualPassword, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { status: "error", message: "A senha atual está incorreta" },
        { status: 401 }
      );
    }

    const newHashedPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: newHashedPassword },
    });

    return NextResponse.json({
      status: "success",
      message: "Senha alterada com sucesso",
    });
  } catch (error) {
    console.error("[change-password]", error);
    return NextResponse.json(
      { status: "error", message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
