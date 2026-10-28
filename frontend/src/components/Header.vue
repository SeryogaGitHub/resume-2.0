<script setup>

import { ref, watch, onUnmounted } from 'vue';

const btnMenu = ref(false);

watch(btnMenu, (value) => {
  document.body.classList.toggle('open-menu', value);
});

onUnmounted(() => {
  document.body.classList.remove('open-menu');
});

const navigation = [
  {
    title: 'Головна',
    to: '/'
  },
  {
    title: 'Технології',
    to: '/skills'
  },
  {
    title: 'Портфоліо',
    to: '/projects'
  },
  {
    title: 'Про мене',
    to: '/about'
  },
  // {
  //   title: 'Блог',
  //   to: '/blog'
  // },
  {
    title: 'Контакти',
    to: '/contact'
  }
];
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