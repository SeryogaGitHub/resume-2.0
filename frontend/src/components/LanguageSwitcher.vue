<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

const languages = [
  { code: 'uk', name: 'UA' },
  { code: 'en', name: 'EN' },
  { code: 'pl', name: 'PL' },
  { code: 'de', name: 'DE' }
];

const changeLanguage = (language) => {
  locale.value = language;

  localStorage.setItem('locale', language);
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