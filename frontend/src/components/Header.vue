<script setup>
const navigation = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Skills',
    to: '/skills'
  },
  {
    title: 'Portfolio',
    to: '/portfolio'
  },
  {
    title: 'Experience',
    to: '/experience'
  },
  {
    title: 'Contact',
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