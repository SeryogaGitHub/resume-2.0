<script setup>
import ProjectCard from './ProjectCard.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

</script>

<template>
  <section
      id="portfolio"
      class="projects-section section"
  >
    <div class="center">
      <header class="header">
        <div class="items">
          <h2 class="item">
            Проекти
          </h2>

          <div class="text-btn item">
            <div class="text">
              <p>
                Це тільки Декілька проектів ~7%:
              </p>
            </div>

            <div>
              <RouterLink to="/portfolio" class="btn white">
                Усі проєкти →
              </RouterLink>
            </div>
          </div>
        </div>
      </header>

      <div class="items align-center">
        <ProjectCard
            v-for="(project, index) in props.projects"
            v-show="index < 4"
            :key="project.id"
            :project="project"
        />
      </div>
    </div>
  </section>
</template>