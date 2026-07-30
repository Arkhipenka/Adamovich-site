import type {
  Locale,
  LocalizedText,
  RequiredLocalizedText,
} from "@/types/common.types";

export type LocalizableText =
  | string
  | LocalizedText
  | RequiredLocalizedText
  | null
  | undefined;

export function getLocalizedText(
  text: LocalizableText,
  locale: Locale,
) {
  if (!text) return "";
  if (typeof text === "string") return text;

  return text[locale] || text.ru || text.en || text.be || "";
}
