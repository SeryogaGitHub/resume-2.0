
<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <section class="project-view">
    <div class="center">
      <button
          type="button"
          @click="$emit('back')"
      >
        ← Назад до проєктів
      </button>

      <p>{{ project.category }}</p>

      <h1>{{ project.title }}</h1>

      <p>{{ project.description }}</p>

      <img
          :src="project.image"
          :alt="project.title"
      >

      <h2>Технології</h2>

      <ul>
        <li
            v-for="technology in project.technologies"
            :key="technology"
        >
          {{ technology }}
        </li>
      </ul>

      <a
          v-if="project.url && project.url !== '#'"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
      >
        Переглянути проєкт
      </a>
    </div>
  </section>
</template>
