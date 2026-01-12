import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const PUBLIC_ROUTES = ['/', '/login', '/register', '/landing'];
const PROTECTED_ROUTES = ['/home'];

async function verifyToken(token: string, secret: string): Promise<boolean> {
    try {
        const encodedSecret = new TextEncoder().encode(secret);
        await jwtVerify(token, encodedSecret);
        return true;
    } catch {
        return false;
    }
}

export async function middleware(request: NextRequest) {
    const SECRET_KEY = process.env.MEERKAT_JWT_SECRET;
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");
    const { pathname } = request.nextUrl;

    // Check if user is authenticated
    const isAuthenticated = token?.value && SECRET_KEY
        ? await verifyToken(token.value, SECRET_KEY)
        : false;

    // Check if the current path is a public route
    const isPublicRoute = PUBLIC_ROUTES.some(route =>
        pathname === route || pathname.startsWith(route + '/')
    );

    // Check if the current path is a protected route
    const isProtectedRoute = PROTECTED_ROUTES.some(route =>
        pathname === route || pathname.startsWith(route + '/')
    );

    // If authenticated user tries to access public pages, redirect to /home
    if (isAuthenticated && isPublicRoute) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    // If unauthenticated user tries to access protected pages, redirect to /login
    if (!isAuthenticated && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow access
    return NextResponse.next();
}

export const config = {
    // Match both public routes and protected routes
    matcher: ['/', '/login', '/register', '/landing', '/home/:path*']
}