
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import PortfolioCard from '@/components/home/PortfolioCard.vue';
import OpenProjects from '@/components/OpenProjects.vue';

import { getProjects } from '@/api/products.js';
import { onMounted, ref } from 'vue';
import PortfolioMessage from "@/components/PortfolioMessage.vue";

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
      <section class="portfolio-section section">
        <div class="center">
          <h1>Портфоліо</h1>

          <PortfolioMessage v-if="!projects.length" :loading :error />

          <div v-else class="items align-center">
            <PortfolioCard
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
