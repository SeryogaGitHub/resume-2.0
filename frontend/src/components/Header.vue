<script setup>
import {ref, watch, onUnmounted, computed} from 'vue';
import { useI18n } from 'vue-i18n';
import { header } from '@data/header';
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

const { locale } = useI18n();
const btnMenu = ref(false);

watch(btnMenu, (value) => {
  document.body.classList.toggle('open-menu', value);
});

onUnmounted(() => {
  document.body.classList.remove('open-menu');
});

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
  <header class="main-header">
    <div class="center">

      <RouterLink
          to="/"
          class="logo h3"
      >
        SL
      </RouterLink>

      <nav class="main-nav">
        <RouterLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
        >
          {{ item.title }}
        </RouterLink>
      </nav>

      <LanguageSwitcher />

      <button
          class="btn-menu"
          :class="{ open: btnMenu }"
          @click="btnMenu = !btnMenu"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>