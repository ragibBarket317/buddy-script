import { NextResponse } from 'next/server'

export function proxy(request) {
  const token = request.cookies.get('token')?.value

  console.log('TOKEN:', token)
  console.log('PATH:', request.nextUrl.pathname)

  return NextResponse.next()
}
