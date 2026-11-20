<script setup>
import {ref, watch, onUnmounted} from 'vue';
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import MainNav from "@/components/MainNav.vue";
import logo from '@/assets/image/logo.svg';
import {localePath} from "@/components/utils/localePath.js";
import {useI18n} from "vue-i18n";
const {locale} = useI18n();

const btnMenu = ref(false);

watch(btnMenu, (value) => {
  document.body.classList.toggle('open-menu', value);
});

onUnmounted(() => {
  document.body.classList.remove('open-menu');
});

</script>

<template>
  <header class="main-header">
    <div class="center">

      <RouterLink
          :to="localePath('/', locale)"
          class="logo h3">
        <img :src="logo" alt="logo">
      </RouterLink>

      <MainNav />

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