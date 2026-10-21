<script setup>
import PortfolioCard from './PortfolioCard.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
  },
  error: {
    type: String,
  }
});

</script>

<template>
  <section
      id="portfolio"
      class="portfolio-section section"
  >
    <div class="center" v-if="loading">
      <header class="header">
        <div class="items">
          <h2 class="item">
            Проекти
          </h2>

          <div class="text-btn item">
            <div class="text">
              <p>
                Усі проекти - Це тільки Декілька проектів ~7%:
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

      <p>Завантаження проєктів...</p>
    </div>

    <div class="center" v-if="error">
      <p >
        {{ error }}
      </p>
    </div>

    <div class="center" v-else>
      <header class="header">
        <div class="items">
          <h2 class="item">
            Проекти
          </h2>

          <div class="text-btn item">
            <div class="text">
              <p>
                Усі проекти - Це тільки Декілька проектів ~7%:
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
        <PortfolioCard
            v-for="(project, index) in props.projects"
            v-show="index < 4"
            :key="project.id"
            :project="project"
        />
      </div>
    </div>
  </section>
</template>