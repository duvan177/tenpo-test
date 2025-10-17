
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import ROUTES from "./app/config/routes";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith(ROUTES.AUTH.BASE);
  const isProtectedPage = request.nextUrl.pathname.startsWith(
    ROUTES.DASHBOARD.BASE
  );
  
  if (isProtectedPage && !token) {
    return NextResponse.redirect(new URL(ROUTES.AUTH.LOGIN, request.url));
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD.HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/auth/:path*",
  ],
};
