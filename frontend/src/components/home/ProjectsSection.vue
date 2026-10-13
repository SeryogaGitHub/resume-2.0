<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref, computed } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

console.log(props.projects);

const emit = defineEmits([
  'show-all',
  'select-project'
]);

const showAll = ref(false);
const activeCategory = ref('Усі');


const categories = computed(() => [
  'Усі',
  ...new Set(
      props.projects.map(project => project.category)
  )
]);

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Усі') {
    return props.projects;
  }

  return props.projects.filter(project => {
    return project.category === activeCategory.value;
  });
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
            v-show="showAll || index < 4"
            :key="project.id"
            :project="project"
        />
      </div>

      <div hidden="hidden">
        <div class="heading" hidden="hidden">
          <div>
            <h3>
              Selected Projects
            </h3>
          </div>

          <BaseButton type="button"
                      class="link"
                      @click="showAll = !showAll"
          >
            {{ showAll ? 'Сховати' : 'Усі роботи →' }}
          </BaseButton>
        </div>

        <div class="filters">
          <button
              v-for="(category, index) in categories"
              :key="category + index"
              type="button"
              :class="{ active: activeCategory === category }"
              @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div class="list">
          <ProjectCard
              v-for="(project, index) in filteredProjects"
              v-show="showAll || index < 3"
              :key="project.id"
              :project="project"
          />
        </div>
      </div>
    </div>
  </section>
</template>