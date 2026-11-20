<script setup>
import { useHead } from '@unhead/vue';

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${import.meta.env.BASE_URL}favicon.svg`
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${import.meta.env.BASE_URL}favicon-32x32.png`
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: `${import.meta.env.BASE_URL}favicon-96x96.png`
    },
    {
      rel: 'shortcut icon',
      href: `${import.meta.env.BASE_URL}favicon.ico`
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `${import.meta.env.BASE_URL}apple-touch-icon.png`
    },
    {
      rel: 'manifest',
      href: `${import.meta.env.BASE_URL}site.webmanifest`
    }
  ]
});
</script>

<template>
  <RouterView />
</template>