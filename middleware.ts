import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export default authMiddleware({
  // Temporarily allow all routes by adding them to publicRoutes
  publicRoutes: ['/', '/dashboard', '/search', '/leaderboard', '/shop', '/settings', '/api/webhook'], 

  afterAuth: (auth, req) => {
    console.log("Auth Status:", auth);  
    console.log("User ID:", auth.userId);  
    console.log("Session ID:", auth.sessionId);  

    // Since all routes are public now, no redirect for unauthenticated users.
    console.log("Access allowed for route:", req.nextUrl.pathname);
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],  
};
