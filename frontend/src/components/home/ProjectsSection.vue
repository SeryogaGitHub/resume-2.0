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

const categories = [
  'Усі',
  'E-commerce',
  'Corporate',
  'Web Application'
];

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
                  These aren’t just design exercises. They're real projects.
                </p>
              </div>

              <BaseButton type="button"
                          class="btn white"
              >
                <span>Більше робіт</span>

                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001" stroke="#847979" style="stroke:#847979;stroke:color(display-p3 0.5176 0.4745 0.4745);stroke-opacity:1;" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </BaseButton>
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
  </section>
</template>