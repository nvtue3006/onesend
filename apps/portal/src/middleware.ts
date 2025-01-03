import createMiddleware from 'next-intl/middleware';
import { locales } from '@/locale';
import { NextRequest, NextResponse } from 'next/server';

// const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? '';

export default async function middleware(req: NextRequest) {
	// const origin = req.headers.get('origin') || req.headers.get('referer');
	// if (origin && !origin.startsWith(ALLOWED_ORIGIN)) {
	// 	return new NextResponse('Forbidden: Invalid origin', { status: 403 });
	// }

	return createMiddleware({
		defaultLocale: 'en',
		locales,
	})(req);
}

export const config = {
	matcher: ['/((?!_next|favicon.ico|.env|.*\\.svg|api).*)'],
};
