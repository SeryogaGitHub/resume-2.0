import { createI18n } from 'vue-i18n';

export const supportedLocales = ['uk', 'en', 'pl', 'de', 'fr'];

const i18n = createI18n({
  legacy: false,
  locale: 'uk',
  fallbackLocale: 'uk',
  messages: {}
});

export default i18n;