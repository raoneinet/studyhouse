import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

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

  return NextResponse.json({
    status: "success",
    user: {
      id: session.userId,
      email: session.email,
      username: session.username,
      firstname: session.firstname,
      lastname: session.lastname,
      avatar: session.avatar,
    },
  });
}
