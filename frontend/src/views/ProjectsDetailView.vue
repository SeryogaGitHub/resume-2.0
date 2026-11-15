
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import OpenProjects from '@/components/OpenProjects.vue';
import ProjectsDetail from '@/components/projects/ProjectsDetail.vue';

import { projects } from '@/data/projects';

const route = useRoute();

const siteOrigin = 'https://seryogagithub.github.io';

const baseUrl = new URL(
    import.meta.env.BASE_URL,
    siteOrigin
);

const locales = {
  uk: 'uk_UA',
  en: 'en_US',
  pl: 'pl_PL',
  de: 'de_DE',
  fr: 'fr_FR'
};

// Поточний проєкт
const project = computed(() => {
  return projects.find(item =>
      String(item.id) === String(route.params.id)
  );
});

// Мова поточного маршруту
const currentLocale = computed(() => {
  const routeLocale = route.params.locale;

  return Object.prototype.hasOwnProperty.call(locales, routeLocale)
      ? routeLocale
      : 'uk';
});

// Шлях без мовного префікса
const cleanPath = computed(() => {
  return route.path.replace(/^\/(en|pl|de|fr)(?=\/|$)/, '');
});

// Формування URL для кожної мови
const localizedUrl = (language) => {
  const path = language === 'uk'
      ? cleanPath.value.slice(1)
      : `${language}${cleanPath.value === '/' ? '' : cleanPath.value}`;

  return new URL(path, baseUrl).href;
};

// SEO
const seoHead = computed(() => {
  if (!project.value?.seo) {
    return {};
  }

  const locale = currentLocale.value;

  const title = project.value.seo.title[locale];
  const description = project.value.seo.description[locale];

  const canonicalUrl = localizedUrl(locale);

  const alternateLinks = Object.keys(locales).map(language => ({
    rel: 'alternate',
    hreflang: language,
    href: localizedUrl(language)
  }));

  alternateLinks.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: localizedUrl('uk')
  });

  return {
    title,

    htmlAttrs: {
      lang: locale
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
        content: locales[locale]
      },
      {
        property: 'og:image',
        content: project.value.image
      },
      ...Object.entries(locales)
          .filter(([language]) => language !== locale)
          .map(([language, value]) => ({
            key: `og-locale-${language}`,
            property: 'og:locale:alternate',
            content: value
          })),
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
      },
      {
        name: 'twitter:image',
        content: project.value.image
      }
    ]
  };
});

useHead(seoHead);
</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <ProjectsDetail :project="project" />

      <OpenProjects />
    </main>

    <Footer />
  </div>
</template>
