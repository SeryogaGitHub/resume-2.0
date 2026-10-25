<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectsCard from '@/components/home/ProjectsCard.vue';
import OpenProjects from '@/components/OpenProjects.vue';

import { getProjects } from '@/api/products.js';
import { onMounted, ref } from 'vue';
import PortfolioAlert from "@/components/PortfolioAlert.vue";

const projects = ref([]);
const loading = ref(false);
const error = ref('');

async function loadProjects() {
  loading.value = true;
  error.value = '';

  try {
    projects.value = await getProjects();
  } catch (err) {
    error.value = 'Не вдалося завантажити проєкти. Технічні роботи.';
    console.error(err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <section class="projects-section section">
        <div class="center">
          <h1>Портфоліо</h1>

          <PortfolioAlert v-if="!projects.length" :loading :error />

          <div v-else class="items align-center">
            <ProjectsCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
          </div>
        </div>
      </section>

      <OpenProjects />
    </main>

    <Footer />
  </div>
</template>
