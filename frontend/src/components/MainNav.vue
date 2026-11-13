<script setup>
import {computed} from 'vue';
import { useI18n } from 'vue-i18n';
import { header } from '@data/header';

const { locale } = useI18n();

const navigation = computed(() => [
  {
    title: header.navigation.home[locale.value],
    to: '/'
  },
  {
    title: header.navigation.skills[locale.value],
    to: '/skills'
  },
  {
    title: header.navigation.projects[locale.value],
    to: '/projects'
  },
  {
    title: header.navigation.about[locale.value],
    to: '/about'
  },
  // {
  //   title: header.navigation.blog[locale.value],
  //   to: '/blog'
  // },
  {
    title: header.navigation.contacts[locale.value],
    to: '/contact'
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

<style scoped>

</style>