<script setup>

import {RouterLink} from "vue-router";
import {ref} from "vue";

const loading = ref(true);
const error = ref('');

defineProps({
  loading: {
    type: Boolean,
    required: true
  },
  error: {
    type: String,
  },
  length: {
    type: Number,
  }
});
</script>

<template>
  <section v-if="loading" class="section">
    <div class="center">
      Завантаження проєкту...
    </div>
  </section>

  <section v-else-if="error" class="section">
    <div class="center">
      <RouterLink
          :to="{ name: 'portfolio' }"
          class="back-link"
      >
        ← Усі проєкти
      </RouterLink>

      <h2 class="mt-24 text-red">Не вдалося завантажити проєкт</h2>
      <h4>{{ error }}</h4>
    </div>
  </section>

  <section v-else>
    <div class="center">
      <RouterLink
          :to="{ name: 'portfolio' }"
          class="back-link"
      >
        ← Усі проєкти
      </RouterLink>

      <h2 class="mt-24 text-red">Проєктів поки немає.</h2>
    </div>
  </section>
</template>

<style scoped>

</style>