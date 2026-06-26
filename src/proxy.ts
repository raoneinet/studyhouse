import { NextResponse, NextRequest } from "next/server"
import { getIronSession } from "iron-session"
import { sessionOptions, SessionData } from "@/lib/session"
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const AUTH_ONLY_ROUTES = ["/login", "/register"]

const PROTECTED_PREFIXES = [
    "/dashboard",
    "/account",
    "/myLessons",
    "/newLesson",
    "/editLesson",
    "/favorites",
    "/ongoing",
    "/search",
    "/roadmaps"
]

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Ignore static files/API just in case config matcher misses
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return NextResponse.next()
    }

    const pathnameWithoutLocale = pathname.replace(/^\/(en|pt)/, '') || '/';

    const res = NextResponse.next()
    const session = await getIronSession<SessionData>(request, res, sessionOptions)
    const isLoggedIn = session.isLoggedIn === true

    const isProtected = PROTECTED_PREFIXES.some((prefix) =>
        pathnameWithoutLocale === prefix || pathnameWithoutLocale.startsWith(prefix + "/")
    )

    if (isProtected && !isLoggedIn) {
        const loginUrl = new URL("/login", request.url)
        loginUrl.searchParams.set("from", pathnameWithoutLocale)
        return NextResponse.redirect(loginUrl)
    }

    const isAuthRoute = AUTH_ONLY_ROUTES.some(
        (route) => pathnameWithoutLocale === route || pathnameWithoutLocale.startsWith(route + "/")
    )

    if (isAuthRoute && isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    if (pathnameWithoutLocale === "/" && isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    // next-intl geolocation logic
    const hasLocaleCookie = request.cookies.has('NEXT_LOCALE');

    if (!hasLocaleCookie) {
        const country = (request as any).geo?.country || request.headers.get('x-vercel-ip-country');
        if (country === 'BR') {
            const headers = new Headers(request.headers);
            headers.set('accept-language', 'pt,pt-BR;q=0.9,en;q=0.8');
            const newReq = new NextRequest(request, { headers });
            
            // We must merge the iron-session cookies/headers set in `res` into the final response
            const intlRes = intlMiddleware(newReq);
            // Actually getIronSession only READS cookies in the proxy unless we saved a new session. We didn't mutate it.
            return intlRes;
        }
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: [
        '/',
        '/(pt|en)/:path*',
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ],
}
