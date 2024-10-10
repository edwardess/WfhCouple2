import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook", "/portfolio"],  // Add /portfolio to public routes

  afterAuth: (auth, req) => {
    const protectedRoutes = ['/dashboard', '/search', '/leaderboard', '/shop', '/settings'];

    console.log("Auth Status:", auth);
    console.log("User ID:", auth.userId);
    console.log("Session ID:", auth.sessionId);
    console.log("Route being accessed:", req.nextUrl.pathname);

    if (!auth.userId && protectedRoutes.includes(req.nextUrl.pathname)) {
      console.log("No user authenticated, redirecting to sign-in.");
      const loginUrl = new URL('/sign-in', req.url);
      return NextResponse.redirect(loginUrl);
    }

    console.log("User authenticated, access allowed.");
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
