<script setup>
import {computed} from 'vue';
import {useI18n} from 'vue-i18n';
import {RouterLink} from 'vue-router';

import ProjectsCard from './ProjectsCard.vue';
import {projectsSection} from '@data/projectsSection';
import {messages} from '@data/messages';
import {buttons} from '@data/buttons';

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

const {locale} = useI18n();

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

          <h2
              :key="locale"
            v-gsap-text="{
              opacity: 0,
              y: 20,
              duration: 2,
              stagger: 0.2,
              delay: 2,
              ease: 'power3.out'
            }"
            class="item"
          >
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
                <span>{{ content.allProjects }}</span>

                <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001"
                      stroke="#847979"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
                </svg>
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
