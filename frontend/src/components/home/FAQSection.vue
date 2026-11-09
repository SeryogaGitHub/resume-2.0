
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import Accordion from '@/components/Accordion.vue';
import { faqSection } from '@data/faqSection.js';

const { locale } = useI18n();

const content = computed(() => ({
  title: faqSection.title[locale.value],
  subtitle: faqSection.subtitle[locale.value],

  items: faqSection.items.map(item => ({
    id: item.id,
    title: item.title[locale.value],
    description: item.description[locale.value]
  }))
}));
</script>

<template>
  <section class="faq-section section">
    <div class="center">
      <h2 class="wow animate__fadeInUp">
        {{ content.title }}
      </h2>

      <div class="wrap-accordion-list">
        <div class="left">
          <div class="image wow animate__fadeInUp">
            <img
                src="@img/index-page/faq-section/faq-section.jpg"
                loading="lazy"
                alt=""
            >

            <h4 class="mt-24 mb-0 wow animate__fadeInUp">
              {{ content.subtitle }}
            </h4>
          </div>
        </div>

        <div class="accordion-list">
          <Accordion
              v-for="item in content.items"
              :key="item.id"
              :title="item.title"
              class="wow animate__fadeInUp"
          >
            <p>
              {{ item.description }}
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
