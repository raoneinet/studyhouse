import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export async function DELETE(req: NextRequest) {
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

    // According to the prompt in the UI, data is deleted immediately or scheduled. 
    // The schema doesn't have a "scheduled for deletion" date, just a DELETED status or we actually delete it.
    // However, the UI says "Sua conta e todos os seus dados serão em 2 dias. Para reverter, basta fazer login dentro de 2 dias."
    // Since there's no scheduler implemented yet, we will mark the status as DELETED for now, 
    // and a background job should ideally clean it up later.
    // If the user logs in while DELETED, we could potentially reactivate it or block them.
    await prisma.user.update({
      where: { id: session.userId },
      data: { status: "DELETED" },
    });

    // Clean up the session since the account is deleted
    session.destroy();

    return NextResponse.json({
      status: "success",
      message: "Conta deletada/agendada para exclusão com sucesso",
    });
  } catch (error) {
    console.error("[delete_account]", error);
    return NextResponse.json(
      { status: "error", message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
