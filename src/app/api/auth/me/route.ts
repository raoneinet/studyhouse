import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  if (!session.isLoggedIn) {
    return NextResponse.json(
      { status: "error", message: "Não autenticado" },
      { status: 401 }
    );
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: session.userId },
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
      status: true
    }
  });

  if (!dbUser) {
    return NextResponse.json(
      { status: "error", message: "Usuário não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: "success",
    user: dbUser,
  });
}
