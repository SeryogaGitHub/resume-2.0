import { ViteSSG } from 'vite-ssg';

import App from './App.vue';
import { routes } from './router';
import i18n from './i18n';

import { projects } from '@/data/projects';

import {
  gsapAnimation,
  gsapTilt,
  gsapText
} from '@/directives/gsap';

import './assets/scss/main.scss';

const locales = ['uk', 'en', 'pl', 'de', 'fr'];

export const createApp = ViteSSG(
    App,
    {
      routes,
      base: import.meta.env.BASE_URL
    },
    ({ app, router }) => {
      app.use(i18n);

      app.directive('gsap', gsapAnimation);
      app.directive('gsap-tilt', gsapTilt);
      app.directive('gsap-text', gsapText);

      router.beforeEach((to) => {
        const supportedLocales = ['uk', 'en', 'pl', 'de', 'fr'];

        const currentLocale = to.params.locale || 'uk';

        if (!supportedLocales.includes(currentLocale)) {
          return '/';
        }

        i18n.global.locale.value = currentLocale;
      });
    }
);

export function includedRoutes(paths) {
  const locales = ['uk', 'en', 'pl', 'de', 'fr'];

  const pages = [
    '/',
    '/projects',
    '/skills',
    '/about',
    '/blog',
    '/contact'
  ];

  const localizedPaths = pages.flatMap(path =>
      locales.map(locale => {
        if (locale === 'uk') {
          return path;
        }

        return `/${locale}${path === '/' ? '' : path}`;
      })
  );

  const projectPaths = projects.flatMap(project =>
      locales.map(locale => {
        const path = `/projects/${project.id}`;

        return locale === 'uk'
            ? path
            : `/${locale}${path}`;
      })
  );

  return [
    ...new Set([
      ...localizedPaths,
      ...projectPaths
    ])
  ];
}