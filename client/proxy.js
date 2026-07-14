import { NextResponse } from 'next/server'

export function proxy(request) {
  const token = request.cookies.get('token')?.value

  console.log('TOKEN:', !!token)
  console.log('PATH:', request.nextUrl.pathname)

  const { pathname } = request.nextUrl

  if (pathname.startsWith('/feed') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if ((pathname === '/login' || pathname === '/register') && token) {
    return NextResponse.redirect(new URL('/feed', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/feed/:path*', '/login', '/register'],
}
