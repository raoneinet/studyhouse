import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

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

    await prisma.user.update({
      where: { id: session.userId },
      data: { status: "PAUSED" },
    });

    // Clean up the session since the account is now paused
    session.destroy();

    return NextResponse.json({
      status: "success",
      message: "Conta suspensa com sucesso",
    });
  } catch (error) {
    console.error("[pause_account]", error);
    return NextResponse.json(
      { status: "error", message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
