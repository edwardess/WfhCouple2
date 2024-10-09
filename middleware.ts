import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"],  // Only allow home and webhook routes for public access
  
  afterAuth: (auth, req) => {
    const protectedRoutes = ['/dashboard', '/search', '/leaderboard', '/shop', '/settings'];

    console.log("Auth Object:", JSON.stringify(auth, null, 2));  // Log full auth object to check for unexpected values
    console.log("Auth User ID:", auth.userId);  // Log userId
    console.log("Auth Session ID:", auth.sessionId);  // Log sessionId
    console.log("Current Path:", req.nextUrl.pathname);  // Log current route being accessed

    // Protect the routes if no userId and it's a protected route
    if (!auth.userId && protectedRoutes.includes(req.nextUrl.pathname)) {
      console.log("No user authenticated, redirecting to /sign-in");
      const loginUrl = new URL('/sign-in', req.url);
      return NextResponse.redirect(loginUrl);
    }

    // If authenticated, log and allow access
    console.log("User authenticated, access allowed for route:", req.nextUrl.pathname);
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],  // Match routes that aren't static assets or Next.js internals
};
