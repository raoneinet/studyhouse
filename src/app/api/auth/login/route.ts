import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/password";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, SessionData } from "@/lib/session";

const loginSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(1, "Senha obrigatória").max(128),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { status: "error", message: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;
    const normalizedEmail = email.toLowerCase().trim();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        id: true,
        email: true,
        username: true,
        firstname: true,
        lastname: true,
        avatar: true,
        password: true,
        status: true,
      },
    });

    // Mesma mensagem para email ou senha errados — evita user enumeration
    if (!user || !(await verifyPassword(password, user.password))) {
      return NextResponse.json(
        { status: "error", message: "Email ou senha incorretos" },
        { status: 401 }
      );
    }

    if (user.status !== "ACTIVE") {
      // Reativa a conta se estiver pausada ou pendente de exclusão
      await prisma.user.update({
        where: { id: user.id },
        data: { status: "ACTIVE" },
      });
      user.status = "ACTIVE";
    }

    const session = await getIronSession<SessionData>(
      await cookies(),
      sessionOptions
    );

    session.isLoggedIn = true;
    session.userId = user.id;
    session.email = user.email;
    session.username = user.username;
    session.firstname = user.firstname;
    session.lastname = user.lastname;
    session.avatar = user.avatar;

    await session.save();

    return NextResponse.json({
      status: "success",
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("[login]", error);
    return NextResponse.json(
      { status: "error", message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
