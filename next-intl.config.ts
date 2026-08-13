export const locales = ["en", "mn"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "mn";
export const timeZone = "Asia/Ulaanbaatar";


