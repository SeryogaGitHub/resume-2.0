<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

import defaultImage from '@/assets/image/default.svg';

defineProps({
  project: {
    type: Object,
    required: true
  }
});

const { locale } = useI18n();

const content = computed(() => ({
  back: {
    uk: '← Усі проєкти',
    en: '← All projects',
    pl: '← Wszystkie projekty',
    de: '← Alle Projekte'
  }[locale.value],

  overview: {
    uk: 'Огляд проєкту',
    en: 'Project overview',
    pl: 'Opis projektu',
    de: 'Projektübersicht'
  }[locale.value],

  year: {
    uk: 'Рік:',
    en: 'Year:',
    pl: 'Rok:',
    de: 'Jahr:'
  }[locale.value],

  role: {
    uk: 'Роль:',
    en: 'Role:',
    pl: 'Rola:',
    de: 'Rolle:'
  }[locale.value],

  technologies: {
    uk: 'Технології:',
    en: 'Technologies:',
    pl: 'Technologie:',
    de: 'Technologien:'
  }[locale.value]
}));
</script>

<template>
  <section class="section project-detail">
    <div class="center">
      <template v-if="project">
        <RouterLink
            :to="{ name: 'projects' }"
            class="h4"
        >
          {{ content.back }}
        </RouterLink>

        <h1 class="mt-24">{{ project.title }}</h1>

        <header
            v-if="project.image"
            class="top-image"
            :style="{ backgroundImage: `url(${project.image})` }"
        >
        </header>

        <img
            v-else
            :src="defaultImage"
            :alt="project.title"
            class="rotate"
            loading="lazy"
        >

        <section class="description-detail section">
          <div class="description">
            <h3>{{ content.overview }}</h3>
            <p>{{ project.description[locale] }}</p>
          </div>

          <div class="detail">
            <div>
              <h3>{{ content.year }}</h3>
              <p>{{ project.year }}</p>
            </div>

            <div>
              <h3>{{ content.role }}</h3>
              <p>UX/UI Design, Web Strategy</p>
            </div>

            <div>
              <h3>{{ content.technologies }}</h3>

              <ul class="list">
                <li
                    v-for="technology in project.technologies"
                    :key="technology"
                >
                  {{ technology }}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </template>
    </div>
  </section>
</template>

<style scoped>
</style>