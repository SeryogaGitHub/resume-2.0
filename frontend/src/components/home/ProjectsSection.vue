<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref, computed } from 'vue';
import ProjectCard from './ProjectCard.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

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
        <div class="items align-center">
          <div>
            <h2>
              Проекти
            </h2>
          </div>

          <div class="big">
            <div class="text-btn">
              <div class="text">
                <p>
                  Це тільки Декліька проектів. Детельно можна переглянути, які ще мають актуальні посилання ~7%:
                </p>
              </div>

              <div>
                <RouterLink to="/portfolio" class="btn white">
                  Усі проєкти →
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="items align-center">
        <div class="item">
          <img src="@img/section/projects-section/projects-section-1.jpg" loading="lazy" alt="Фото">

          <div class="flex mt-20">
            <p>Web app UI</p>
            <p>2024</p>
          </div>
        </div>

        <div class="item big">
          <img src="@img/section/projects-section/projects-section-2.jpg" loading="lazy" alt="Фото">

          <div class="flex mt-20">
            <p>Web app UI</p>
            <p>2024</p>
          </div>
        </div>
      </div>

      <div class="items align-center mt-60">
        <div class="item big">
          <img src="@img/section/projects-section/projects-section-3.jpg" loading="lazy" alt="Фото">

          <div class="flex mt-20">
            <p>Web app UI</p>
            <p>2024</p>
          </div>
        </div>

        <div class="item">
          <img src="@img/section/projects-section/projects-section-4.jpg" loading="lazy" alt="Фото">

          <div class="flex mt-20">
            <p>Web app UI</p>
            <p>2024</p>
          </div>
        </div>
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
              @select="emit('select-project', $event)"
          />
        </div>
      </div>
    </div>
  </section>
</template>