<script setup>
import {ref, watch, onUnmounted} from 'vue';
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import MainNav from "@/components/MainNav.vue";


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

      <RouterLink to="/" class="logo h3">SL</RouterLink>

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