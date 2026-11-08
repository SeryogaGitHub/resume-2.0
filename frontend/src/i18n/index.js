import { createI18n } from 'vue-i18n';

const supportedLocales = ['uk', 'en', 'pl', 'de'];

const getInitialLocale = () => {
  const savedLocale = localStorage.getItem('locale');

  if (supportedLocales.includes(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = navigator.language
      .split('-')[0]
      .toLowerCase();

  return supportedLocales.includes(browserLocale)
      ? browserLocale
      : 'uk';
};

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'uk',
  messages: {}
});

export default i18n;