
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

import ProjectsCard from './ProjectsCard.vue';
import { projectsSection } from '@data/projectsSection';
import { messages } from '@data/messages';
import { buttons } from '@data/buttons';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
});

const { locale } = useI18n();

const content = computed(() => ({
  title: projectsSection.title[locale.value],
  description: projectsSection.description[locale.value],
  allProjects: buttons.allProjects[locale.value],
  loading: messages.loading[locale.value]
}));
</script>

<template>
  <section
      id="projects"
      class="projects-section section"
  >
    <div class="center">

      <header v-gsap class="header">
        <div class="items">

          <h2 class="item">
            {{ content.title }}
          </h2>

          <div class="text-btn item">

            <div class="text">
              <p>
                {{ content.description }}
              </p>
            </div>

            <div>
              <RouterLink
                  to="/projects"
                  class="btn white"
              >
                {{ content.allProjects }} →
              </RouterLink>
            </div>

          </div>
        </div>
      </header>

      <p v-if="loading">
        {{ content.loading }}
      </p>

      <p v-else-if="error">
        {{ error }}
      </p>

      <div
          v-else
          class="items align-center"
      >
        <ProjectsCard
            v-for="(project, index) in props.projects"
            v-show="index < 4"
            :key="project.id"
            :project="project"
        />
      </div>

    </div>
  </section>
</template>
