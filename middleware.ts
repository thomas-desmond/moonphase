import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.geo)
  if (request.geo && request.geo.latitude && request.geo.longitude) {
    return NextResponse.redirect(new URL(`/?lat=${request.geo.latitude}&lng=${request.geo.longitude}`, request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}