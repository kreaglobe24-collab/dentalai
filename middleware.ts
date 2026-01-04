import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si c'est une route d'API ou un asset statique, laisser passer
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') // fichiers avec extension
  ) {
    return NextResponse.next();
  }

  // Pour toutes les autres routes, servir index.html
  return NextResponse.rewrite(new URL('/index.html', request.url));
}

export const config = {
  matcher: [
    // Exclure les fichiers statiques
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
