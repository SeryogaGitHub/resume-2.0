<script setup>
const navigation = [
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Skills',
    href: '#skills'
  },
  {
    title: 'Portfolio',
    href: '#portfolio'
  },
  {
    title: 'Experience',
    href: '#experience'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
];
</script>

<template>
  <header class="header">
    <div class="center">

      <a
          href="/"
          class="logo"
      >
        SL
      </a>

      <nav class="navigation">
        <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
        >
          {{ item.title }}
        </a>
      </nav>

      <a
          href="#contact"
          class="button"
      >
        Contact
      </a>

    </div>
  </header>
</template>