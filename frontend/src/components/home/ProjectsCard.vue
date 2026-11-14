<script setup>
import {RouterLink} from 'vue-router';
import defaultImage from '@img/default.svg';
import { useI18n } from 'vue-i18n';
import {localePath} from "@/components/utils/localePath.js";

const { locale } = useI18n({ useScope: 'global' });

const setDefaultImage = (event) => {
  event.target.onerror = null;
  event.target.src = defaultImage;
  event.target.classList.add('rotate');
};

defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <RouterLink
      :to="localePath(`/projects/${project.id}`, locale)"
      class="item mt-60"
      v-gsap
  >
    <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        v-gsap-tilt="{
          perspective: 800,
          rotation: 15,
          movement: 25,
          duration: 0.8,
          ease: 'power3.out'
        }"
        @error="setDefaultImage"
    >

    <div class="flex mt-20">
      <h5>{{ project.title }}</h5>
      <p>{{ project.year }}</p>
    </div>
  </RouterLink>
</template>