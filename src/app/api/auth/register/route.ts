import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";

const registerSchema = z.object({
  firstname: z.string().min(2, "Nome deve ter ao menos 2 caracteres").max(50),
  lastname: z.string().min(2, "Sobrenome deve ter ao menos 2 caracteres").max(50),
  username: z
    .string()
    .min(3, "Username inválido")
    .max(50)
    .regex(/^@[a-zA-Z0-9._-]{2,}$/, "Username inválido"),
  email: z.email("Email inválido").max(255),
  password: z.string().min(6, "Senha deve ter ao menos 6 caracteres").max(128),
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data de nascimento inválida"),
  profession: z.string().max(100).optional(),
  country: z.string().max(100).optional(),
});

function parseBody(formData: FormData): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") result[key] = value;
  }
  return result;
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") ?? "";

    let raw: Record<string, unknown>;

    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      raw = parseBody(await req.formData());
    } else {
      raw = await req.json();
    }

    const parsed = registerSchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        { status: "error", message: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const {
      firstname,
      lastname,
      username,
      email,
      password,
      date_of_birth,
      profession,
      country,
    } = parsed.data;

    const normalizedEmail = email.toLowerCase().trim();

    const existing = await prisma.user.findFirst({
      where: { OR: [{ email: normalizedEmail }, { username }] },
      select: { email: true, username: true },
    });

    if (existing) {
      const message =
        existing.email === normalizedEmail
          ? "Email já cadastrado"
          : "Username já em uso, tente novamente";
      return NextResponse.json({ status: "error", message }, { status: 409 });
    }

    const hashedPassword = await hashPassword(password);

    await prisma.user.create({
      data: {
        firstname: firstname.trim(),
        lastname: lastname.trim(),
        username,
        email: normalizedEmail,
        password: hashedPassword,
        date_of_birth: new Date(date_of_birth),
        profession: profession?.trim() || null,
        country: country?.trim() || null,
      },
    });

    return NextResponse.json(
      { status: "success", message: "Conta criada com sucesso" },
      { status: 201 }
    );
  } catch (error) {
    console.error("[register]", error);
    return NextResponse.json(
      { status: "error", message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
