// configure i18n
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/locale";

export default getRequestConfig(async ({ locale }:{locale:string}) => {
    if (!locales.includes(locale)) notFound();

    return {
        messages: (
            await (locale === "vi"
                ?
                import("@/locales/vi.json")
                : import(`@/locales/en.json`))
        ).default,
    };
});