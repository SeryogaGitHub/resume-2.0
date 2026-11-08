<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { footer } from '@/data/footer.js';
import {buttons} from "@/data/buttons.js";

const { locale } = useI18n();

const currentYear = new Date().getFullYear();

const translate = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return value?.[locale.value] ?? '';
};

const localizedFooter = computed(() => ({
  copyright: translate(footer.copyright)
}));
</script>

<template>
  <footer class="main-footer">
    <div class="center">
      <div class="flex">

        <p class="copyright">
          © {{ currentYear }} {{ localizedFooter.copyright }}
        </p>

        <a
            href="#"
            class="back-to-top"
        >
          <span>{{ buttons.backToTop[locale] }}</span> ↑
        </a>

      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
