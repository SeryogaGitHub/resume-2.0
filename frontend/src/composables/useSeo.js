
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';

import { seo } from '@/data/seo';

const siteOrigin = 'https://seryogagithub.github.io';

const locales = {
  uk: 'uk_UA',
  en: 'en_US',
  pl: 'pl_PL',
  de: 'de_DE',
  fr: 'fr_FR'
};

const supportedLocales = Object.keys(locales);

export function useSeo(page = 'home') {
  const route = useRoute();

  const head = computed(() => {
    const content = seo[page];

    if (!content) return {};

    // Визначаємо мову безпосередньо з URL
    const routeLocale = route.params.locale;

    const currentLocale = supportedLocales.includes(routeLocale)
        ? routeLocale
        : 'uk';

    const title = content.title?.[currentLocale];
    const description = content.description?.[currentLocale];
    const keywords = content.keywords?.[currentLocale];

    // Шлях без мовного префікса
    const cleanPath = route.path.replace(
        /^\/(en|pl|de|fr)(?=\/|$)/,
        ''
    );

    // Базова адреса сайту
    const baseUrl = new URL(
        import.meta.env.BASE_URL,
        siteOrigin
    );

    // URL поточної сторінки
    const localizedPath = currentLocale === 'uk'
        ? cleanPath.slice(1)
        : `${currentLocale}${cleanPath === '/' ? '' : cleanPath}`;

    const canonicalUrl = new URL(
        localizedPath,
        baseUrl
    ).href;

    // Альтернативні мовні адреси
    const alternateLinks = supportedLocales.map(language => {
      const path = language === 'uk'
          ? cleanPath.slice(1)
          : `${language}${cleanPath === '/' ? '' : cleanPath}`;

      return {
        rel: 'alternate',
        hreflang: language,
        href: new URL(path, baseUrl).href
      };
    });

    alternateLinks.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: new URL(cleanPath.slice(1), baseUrl).href
    });

    return {
      title,

      htmlAttrs: {
        lang: currentLocale
      },

      link: [
        {
          rel: 'canonical',
          href: canonicalUrl
        },
        ...alternateLinks
      ],

      meta: [
        {
          name: 'description',
          content: description
        },

        ...(keywords
            ? [{
              name: 'keywords',
              content: keywords.join(', ')
            }]
            : []),

        // Open Graph
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'Serhii Lypianets — Web Developer'
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:url',
          content: canonicalUrl
        },
        {
          property: 'og:locale',
          content: locales[currentLocale]
        },

        ...Object.entries(locales)
            .filter(([language]) => language !== currentLocale)
            .map(([language, value]) => ({
              key: `og-locale-${language}`,
              property: 'og:locale:alternate',
              content: value
            })),

        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        }
      ]
    };
  });

  useHead(head);
}
