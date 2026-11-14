export function localePath(path, locale) {
  const supportedLocales = ['uk', 'en', 'pl', 'de', 'fr'];

  const currentLocale = supportedLocales.includes(locale)
      ? locale
      : 'uk';

  const cleanPath = path.startsWith('/')
      ? path
      : `/${path}`;

  return currentLocale === 'uk'
      ? cleanPath
      : `/${currentLocale}${cleanPath}`;
}