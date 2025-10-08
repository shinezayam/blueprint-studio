import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const lng = locale || "en";
  const messages = (await import(`@/messages/${lng}.json`)).default;
  return {locale: lng, messages};
});


