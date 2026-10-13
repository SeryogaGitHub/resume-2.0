<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <RouterLink
      :to="{
          name: 'project-detail',
          params: { id: project.id }
        }"
      class="item mt-60"
  >
    <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
    >

    <div class="flex mt-20">
      <p>{{ project.title }}</p>
      <p>{{ project.year }}</p>
    </div>
  </RouterLink>
</template>