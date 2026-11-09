
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { descriptionSection } from '@data/descriptionSection.js';

const { locale } = useI18n();

const content = computed(() => ({
  info: descriptionSection.info.map(item => ({
    id: item.id,
    label: item.label[locale.value],
    value: item.value[locale.value]
  })),

  text: descriptionSection.text.map(item => ({
    id: item.id,
    content: item.content[locale.value]
  }))
}));
</script>

<template>
  <section class="section description-section">
    <div class="center">
      <table>
        <tbody>
        <tr v-for="item in content.info" :key="item.id" class="wow animate__fadeInUp">
          <td>{{ item.label }}</td>
          <td>{{ item.value }}</td>
        </tr>
        </tbody>
      </table>

      <p v-for="item in content.text" :key="item.id" class="wow animate__fadeInUp">
        {{ item.content }}
      </p>
    </div>
  </section>
</template>

<style scoped>

</style>
