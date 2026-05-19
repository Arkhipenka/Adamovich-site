import type {
  Locale,
  LocalizedText,
  RequiredLocalizedText,
} from "@/types/common.types";

export function getLocalizedText(
  text: LocalizedText | RequiredLocalizedText,
  locale: Locale,
) {
  return text[locale] || text.ru || text.en || text.be || "";
}
