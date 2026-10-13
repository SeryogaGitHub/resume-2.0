<script setup>
import {computed} from 'vue';
import {useRoute, RouterLink} from 'vue-router';
import {projects} from '@/data/projects.js';

const route = useRoute();

const project = computed(() => {
  return projects.find(item => {
    return String(item.id) === String(route.params.id);
  });
});
</script>

<template>
  <main class="project-detail">
    <div class="center">
      <RouterLink
          :to="{ name: 'portfolio' }"
          class="back-link"
      >
        ← Усі проєкти
      </RouterLink>

      <template v-if="project">
        <header class="project-detail-header">
          <img
              v-if="project.logo"
              :src="project.logo"
              :alt="`${project.title} logo`"
              class="project-detail-logo"
          >

          <p>{{ project.year }}</p>

          <h1>{{ project.title }}</h1>

          <p>
            {{ project.description  }}
          </p>
        </header>

        <img
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
            class="project-detail-image"
        >

        <section class="project-detail-description">
          <h2>Про проєкт</h2>
          <p>{{ project.description }}</p>
        </section>

        <section class="project-detail-technologies">
          <h2>Технології</h2>

          <ul>
            <li
                v-for="technology in project.technologies"
                :key="technology"
            >
              {{ technology }}
            </li>
          </ul>
        </section>

        <RouterLink
            :to="{
              name: 'project-detail',
              params: { id: project.id }
            }"
                      class="portfolio-link"
                  >
          Детальніше про проєкт →
        </RouterLink>
      </template>

      <section v-else>
        <h1>Проєкт не знайдено</h1>
        <p>Перевір адресу або повернися до портфоліо.</p>
      </section>
    </div>
  </main>
</template>
