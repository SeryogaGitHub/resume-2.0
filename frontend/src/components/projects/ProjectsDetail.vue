<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

import { projectDetail } from '@data/projectDetail';

import defaultImage from '@/assets/image/default.svg';

defineProps({
  project: {
    type: Object,
    required: true
  }
});

const { locale } = useI18n();

const content = computed(() => ({
  back: projectDetail.back[locale.value],
  overview: projectDetail.overview[locale.value],
  year: projectDetail.year[locale.value],
  role: projectDetail.role[locale.value],
  technologies: projectDetail.technologies[locale.value]
}));
</script>

<template>
  <section class="section project-detail">
    <div class="center">
      <template v-if="project">
        <RouterLink
            :to="{ name: 'projects' }"
            class="h4"
            v-gsap
        >
          <svg width="15" height="12" viewBox="4 6 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          {{ content.back }}
        </RouterLink>

        <h1 class="mt-24">{{ project.title }}</h1>

        <header
            v-if="project.image"
            class="top-image"
            v-gsap
            :style="{ backgroundImage: `url(${project.image})` }"
        >
        </header>

        <img
            v-else
            :src="defaultImage"
            :alt="project.title"
            class="rotate"
            loading="lazy"
            v-gsap
        >

        <article class="description-detail mt-60">
          <div v-gsap class="description">
            <h3>{{ content.overview }}</h3>
            <p>{{ project.description[locale] }}</p>
          </div>

          <div v-gsap class="detail">
            <div>
              <h3>{{ content.year }}</h3>
              <p>{{ project.year }}</p>
            </div>

            <div v-gsap>
              <h3>{{ content.role }}</h3>
              <p>UX/UI Design, Web Strategy</p>
            </div>

            <div>
              <h3 v-gsap>{{ content.technologies }}</h3>

              <ul class="list">
                <li
                    v-for="technology in project.technologies"
                    :key="technology"
                    v-gsap
                >
                  {{ technology }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </template>
    </div>
  </section>
</template>

<style scoped>
</style>