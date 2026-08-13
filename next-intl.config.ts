export const locales = ["en", "mn"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "en";
export const timeZone = "Asia/Ulaanbaatar";


