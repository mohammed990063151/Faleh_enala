export type Locale = "ar" | "en";

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

export type TranslationKeys = typeof import("./translations").translations.ar;
