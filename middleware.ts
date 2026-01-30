import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware is disabled - auth is handled client-side
// This avoids cookie/localStorage mismatch issues with Supabase
export async function middleware(request: NextRequest) {
    return NextResponse.next()
}

export const config = {
    matcher: [],
}
