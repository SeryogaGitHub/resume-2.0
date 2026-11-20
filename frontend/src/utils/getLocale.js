const supportedLocales = ['uk', 'en', 'pl', 'de', 'fr'];

export function getInitialLocale() {
  // Мова, яку користувач вибрав раніше
  const savedLocale = localStorage.getItem('locale');

  if (supportedLocales.includes(savedLocale)) {
    return savedLocale;
  }

  // Мови браузера та операційної системи
  const browserLocales = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

  for (const browserLocale of browserLocales) {
    const language = browserLocale
        .toLowerCase()
        .split('-')[0];

    if (supportedLocales.includes(language)) {
      return language;
    }
  }

  // Мова за замовчуванням
  return 'uk';
}