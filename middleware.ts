// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isStandbyMode = true; 
  const { pathname } = request.nextUrl;

  // Allow the home page, the logo, and Next.js internal files to load
  if (pathname === '/' || pathname.startsWith('/_next') || pathname.toLowerCase().includes('logo')) {
    return NextResponse.next();
  }

  // Redirect all other traffic to the standby home page
  if (isStandbyMode) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}