import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isValidLocale } from "@/i18n/config";

/**
 * Middleware — locale detection & redirect.
 *
 * Strategy (always-prefix):
 * - `/pricing` → `/zh/pricing` or `/en/pricing`  (301)
 * - `/zh/pricing` → pass through
 * - `/en/pricing` → pass through
 *
 * This ensures every user-facing page is wrapped by
 * `[lang]/layout.tsx` which provides I18nProvider + SSR `html lang`
 * + correct hreflang.
 *
 * Static assets, API routes, and special paths are left untouched.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 0. "/" renders the root page directly (which ships Header + Footer) ──
  if (pathname === "/") {
    return NextResponse.next();
  }

  // ── 1. Skip requests that already have a locale prefix ──
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // ── 2. Skip static / API / special paths ──
  const isSpecialPath =
    /^\/(?:api|_next|_static|_vercel|sitemap\.xml|robots\.txt|favicon\.ico|guide\.html|sw\.js)(?:\/|$)/.test(
      pathname,
    );
  if (isSpecialPath) {
    return NextResponse.next();
  }

  // ── 3. Detect locale ──
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLang = request.headers.get("Accept-Language");

  let detected: string = defaultLocale;

  if (cookieLocale && isValidLocale(cookieLocale)) {
    detected = cookieLocale;
  } else if (acceptLang) {
    const preferred = acceptLang.split(",")[0]?.split("-")[0]?.toLowerCase();
    if (preferred && isValidLocale(preferred)) {
      detected = preferred;
    }
  }

  // ── 4. Always redirect to the prefixed URL ──
  // Even the default locale gets a prefix so that [lang]/layout.tsx
  // wraps every page and I18nProvider is always available.
  const newUrl = new URL(`/${detected}${pathname}`, request.url);
  const res = NextResponse.redirect(newUrl, 301);

  res.cookies.set("NEXT_LOCALE", detected, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return res;
}

export const config = {
  matcher: [
    // Match all paths except static assets, API routes and common files
    "/((?!api|_next|_static|_vercel|favicon\\.ico|sitemap\\.xml|robots\\.txt|guide\\.html|sw\\.js|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif)$).*)",
  ],
};
