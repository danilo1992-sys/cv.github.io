import { labels } from "@/i18n/ui";

const defaultLang = 'es';

export function translation(lang: keyof typeof labels) {
  return function translate(key: keyof typeof labels[typeof defaultLang]) {
    
  }
}
