import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  // 1. Redirect from auth pages if already logged in
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 2. Force Onboarding if logged in but not completed
  const isProtected = pathname.startsWith('/dashboard') || pathname.startsWith('/contribute') || pathname.startsWith('/authors');
  
  if (token) {
    // If onboarding is not completed and we are not already on onboarding page
    if (!token.onboarding_completed && pathname !== '/onboarding') {
      // Allow only onboarding and essential assets
      if (isProtected || pathname === '/') {
        return NextResponse.redirect(new URL('/onboarding', request.url));
      }
    }
    
    // If onboarding IS completed and they try to go back to onboarding
    if (token.onboarding_completed && pathname === '/onboarding') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  } else {
    // If NOT logged in and trying to access protected routes
    if (isProtected || pathname === '/onboarding') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
