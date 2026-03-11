import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Hackathon-er jonno ekta simple mock security token check
  // (Pore eita amra Supabase session diye replace korbo)
  const hasToken = request.cookies.get("campus-ai-auth-token");

  const isDashboardRoute =
    request.nextUrl.pathname.startsWith("/student") ||
    request.nextUrl.pathname.startsWith("/faculty") ||
    request.nextUrl.pathname.startsWith("/admin");

  // Jodi user dashboard-e jete chay kintu logged in na thake, login page-e pathao
  if (isDashboardRoute && !hasToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Kon kon route-e ei guard kaj korbe
export const config = {
  matcher: ["/student/:path*", "/faculty/:path*", "/admin/:path*"],
};
