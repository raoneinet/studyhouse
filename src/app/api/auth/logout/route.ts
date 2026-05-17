import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

export async function POST() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  session.destroy();

  return NextResponse.json({ status: "success", message: "Logout realizado" });
}
