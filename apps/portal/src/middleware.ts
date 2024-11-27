import createMiddleware from "next-intl/middleware";
import {locales} from "@/locale";

export default createMiddleware({
    defaultLocale: "en",
    locales,
});

export const config = {
    matcher: [
        '/((?!_next|favicon.ico|.*\\.svg).*)',
    ],
}