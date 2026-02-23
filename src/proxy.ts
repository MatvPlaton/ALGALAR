import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname.startsWith('/auth/login');
  const isProtectedPage = pathname.startsWith('/navigation');

  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/navigation/profile', request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/:path*'],
  };