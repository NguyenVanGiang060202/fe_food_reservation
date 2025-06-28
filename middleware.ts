import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard', '/profile', '/settings', '/orders', '/cart', '/checkout']
const publicRoutes = ['/login', '/signup', '/']


export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  if (!accessToken && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (accessToken && isPublicRoute) {
    return NextResponse.redirect(new URL('/profile', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}