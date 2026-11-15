
import { createI18n } from 'vue-i18n';

export const supportedLocales = ['uk', 'en', 'pl', 'de', 'fr'];

export function createAppI18n() {
  return createI18n({
    legacy: false,
    locale: 'uk',
    fallbackLocale: 'uk',
    messages: {}
  });
}
