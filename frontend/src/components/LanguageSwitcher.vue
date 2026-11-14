<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

const { locale } = useI18n({ useScope: 'global' });

const route = useRoute();
const router = useRouter();

const languages = [
  { code: 'uk', name: 'UA' },
  { code: 'en', name: 'EN' },
  { code: 'pl', name: 'PL' },
  { code: 'de', name: 'DE' },
  { code: 'fr', name: 'FR' }
];

const changeLanguage = (language) => {
  const currentPath = route.path.replace(
      /^\/(en|pl|de|fr)(?=\/|$)/,
      ''
  );

  const newPath = language === 'uk'
      ? currentPath || '/'
      : `/${language}${currentPath || ''}`;

  router.push(newPath);
};
</script>

<template>
  <div class="language-switcher">
    <button
        v-for="language in languages"
        :key="language.code"
        type="button"
        :class="{ active: locale === language.code }"
        :aria-pressed="locale === language.code"
        @click="changeLanguage(language.code)"
    >
      {{ language.name }}
    </button>
  </div>
</template>