export const fallbackLng = "en";
export const languages = [fallbackLng, "tr"];
export const defaultNS = "common";

export type LangaugeKey = "en" | "tr"

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    debug: false,
    supportedLngs: languages,
    preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS: Array.isArray(ns) ? ns[0] : ns,
    ns,
  };
}
