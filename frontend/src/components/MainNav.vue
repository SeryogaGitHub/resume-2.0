<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { header } from '@data/header';
import { localePath } from '@/components/utils/localePath.js';

const { locale } = useI18n({ useScope: 'global' });

const navigation = computed(() => [
  {
    title: header.navigation.home[locale.value],
    to: localePath('/', locale.value)
  },
  {
    title: header.navigation.skills[locale.value],
    to: localePath('/skills', locale.value)
  },
  {
    title: header.navigation.projects[locale.value],
    to: localePath('/projects', locale.value)
  },
  {
    title: header.navigation.about[locale.value],
    to: localePath('/about', locale.value)
  },
  {
    title: header.navigation.contacts[locale.value],
    to: localePath('/contact', locale.value)
  }
]);
</script>

<template>
  <nav class="main-nav">
    <RouterLink
        v-for="item in navigation"
        :key="item.to"
        :to="item.to"
    >
      {{ item.title }}
    </RouterLink>
  </nav>
</template>