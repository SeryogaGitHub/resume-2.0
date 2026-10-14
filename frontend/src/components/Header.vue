<script setup>
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
    to: '/portfolio'
  },
  {
    title: 'Про мене',
    to: '/about'
  },
  {
    title: 'Досвід',
    to: '/experience'
  },
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
          class="logo"
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

    </div>
  </header>
</template>