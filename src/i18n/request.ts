import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const lng = locale || "en";
  // Intentional swap: the /en route serves Mongolian, /mn serves English
  // (the printed QR points at /en and its audience is Mongolian).
  const contentLng = lng === "en" ? "mn" : "en";
  const messages = (await import(`@/messages/${contentLng}.json`)).default;
  return {
    locale: lng,
    messages,
    // The time zone can either be statically defined, read from the
    // user profile if you store such a setting, or based on dynamic
    // request information like the locale or a cookie.
    timeZone: 'Asia/Ulaanbaatar'
  };
});


