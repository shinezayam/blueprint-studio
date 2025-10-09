import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const lng = locale || "en";
  const messages = (await import(`@/messages/${lng}.json`)).default;
  return {
    locale: lng, 
    messages,
    // The time zone can either be statically defined, read from the
    // user profile if you store such a setting, or based on dynamic
    // request information like the locale or a cookie.
    timeZone: 'Asia/Ulaanbaatar'
  };
});


