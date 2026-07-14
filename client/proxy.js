import { NextResponse } from 'next/server'

const AUTH_ROUTES = ['/login', '/register']
const PROTECTED_ROUTES = ['/feed']

export function proxy(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true'
  const { pathname } = request.nextUrl

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route))
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  )
  const isRootRoute = pathname === '/'

  if (isRootRoute) {
    return NextResponse.redirect(
      new URL(isLoggedIn ? '/feed' : '/login', request.url),
    )
  }

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL('/feed', request.url))
  }

  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/feed/:path*', '/login', '/register'],
}
