<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

import { projectDetail } from '@data/projectDetail';

import defaultImage from '@/assets/image/default.svg';
import {localePath} from "@/components/utils/localePath.js";

defineProps({
  project: {
    type: Object,
    required: true
  }
});

const projectImages = import.meta.glob(
    '@/assets/image/projects-page/*.{jpg,jpeg,png,webp,avif}',
    {
      eager: true,
      import: 'default'
    }
);

const projectImage = (image) => {
  return projectImages[`/src/assets/image/projects-page/${image}`] || defaultImage;
};

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
            :to="localePath('/projects', locale)"
            class="h4"
            v-gsap
        >
          <svg width="15" height="12" viewBox="4 6 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          {{ content.back }}
        </RouterLink>

        <h1 class="mt-24" :key="locale"
            v-gsap-text="{
              opacity: 0,
              y: 20,
              duration: 0.3,
              stagger: 0.2,
              ease: 'power3.out'
            }">{{ project.title }}</h1>

        <header
            v-if="project.image"
            class="top-image"
            v-gsap
            :style="{ backgroundImage: `url(${projectImage(project.image)})` }"
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
          <div v-gsap>
            <div class="description">
              <h3>{{ content.overview }}</h3>
              <p>{{ project.description[locale] }}</p>
            </div>

            <div class="mt-24" v-gsap>
              <h4>Link:&nbsp;</h4>
              <a class="h4 text-red break-word" target="_blank" :href="project.url">{{ project.title }}</a>
            </div>
          </div>

          <div v-gsap class="detail">
            <div>
              <h3>{{ content.year }}</h3>
              <p>{{ project.year }}</p>
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