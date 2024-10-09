import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"], // Only home and API webhook are public

  afterAuth: (auth, req) => {
    const protectedRoutes = ['/dashboard', '/search', '/leaderboard', '/shop', '/settings'];

    if (!auth.userId && protectedRoutes.includes(req.nextUrl.pathname)) {
      // Redirect unauthenticated users to the login page
      const loginUrl = new URL('/sign-in', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
