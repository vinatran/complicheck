import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Routes that require authentication
const protectedRoutes = ['/dashboard', '/assessment']

// Routes that should redirect to dashboard if already logged in
const authRoutes = ['/login', '/signup']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

  // Get the session token from cookies
  const supabaseToken = request.cookies.get('sb-access-token')?.value
    || request.cookies.get('sb-nwamfpnqrprykupcwbbb-auth-token')?.value

  // For protected routes, redirect to login if no token
  if (isProtectedRoute && !supabaseToken) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // For auth routes, redirect to dashboard if already logged in
  if (isAuthRoute && supabaseToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/assessment/:path*',
    '/login',
    '/signup',
  ],
}
