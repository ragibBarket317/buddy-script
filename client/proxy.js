import { NextResponse } from 'next/server'

export function proxy(request) {
  const token = request.cookies.get('token')?.value

  const { pathname } = request.nextUrl
  const isHomePage = pathname === '/'
  const isAuthPage =
    pathname.startsWith('/login') || pathname.startsWith('/register')

  const isProtectedPage = pathname.startsWith('/feed')

  if (isHomePage) {
    if (token) {
      return NextResponse.redirect(new URL('/feed', request.url))
    }

    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isProtectedPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/feed', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/feed/:path*', '/login', '/register'],
}
