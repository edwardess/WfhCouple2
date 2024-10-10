import { NextRequest, NextResponse } from 'next/server';

// Middleware function to allow all routes without authentication
export default function middleware(req: NextRequest) {
  console.log("Middleware activated for route:", req.nextUrl.pathname); // Log the accessed route

  // Allow all requests to proceed without any authentication checks
  return NextResponse.next();
}

// Matcher configuration
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)'], // Match all routes except for static files and _next
};
