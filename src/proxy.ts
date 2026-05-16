import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getIronSession } from "iron-session"
import { sessionOptions, SessionData } from "@/lib/session"

/**
 * Rotas que só podem ser acedidas por utilizadores NÃO autenticados.
 * Se o utilizador já estiver logado, será redirecionado para /dashboard.
 */
const AUTH_ONLY_ROUTES = ["/login", "/register"]

/**
 * Prefixos de rotas protegidas.
 * Utilizadores não autenticados serão redirecionados para /login.
 */
const PROTECTED_PREFIXES = [
    "/dashboard",
    "/account",
    "/myLessons",
    "/newLesson",
    "/editLesson",
    "/favorites",
    "/ongoing",
]

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Lê a sessão iron-session a partir dos cookies do pedido
    const res = NextResponse.next()
    const session = await getIronSession<SessionData>(request, res, sessionOptions)
    const isLoggedIn = session.isLoggedIn === true

    // Rotas protegidas → redirecionar para /login se não autenticado
    const isProtected = PROTECTED_PREFIXES.some((prefix) =>
        pathname === prefix || pathname.startsWith(prefix + "/")
    )

    if (isProtected && !isLoggedIn) {
        const loginUrl = new URL("/login", request.url)
        loginUrl.searchParams.set("from", pathname)
        return NextResponse.redirect(loginUrl)
    }

    // Rotas de autenticação (login/register) → redirecionar para /dashboard se já autenticado
    const isAuthRoute = AUTH_ONLY_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    )

    if (isAuthRoute && isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    // Landing page → redirecionar para /dashboard se já autenticado
    if (pathname === "/" && isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return res
}

export const config = {
    matcher: [
        /*
         * Executa o middleware em todas as rotas EXCETO:
         * - _next/static  (ficheiros estáticos)
         * - _next/image   (optimizações de imagem)
         * - favicon.ico
         * - api/*         (rotas de API internas — auth é gerida pelo próprio handler)
         */
        "/((?!_next/static|_next/image|favicon.ico|api/).*)",
    ],
}
