<script setup>
import { ref } from 'vue';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import OpenProjects from '@/components/OpenProjects.vue';
import ProjectsDetail from '@/components/projects/ProjectsDetail.vue';

import { getProjectById } from '@/api/products.js';
import PortfolioAlert from "@/components/PortfolioAlert.vue";

const loading = ref(true);
const error = ref('');

function handleLoading(value) {
  loading.value = value;
}

function handleError(value) {
  error.value = value;
}
</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <PortfolioAlert v-show="loading || error" :loading :error />

      <ProjectsDetail
          v-show="!loading && !error"
          :getProjectById
          @loading="handleLoading"
          @error="handleError"
      />

      <OpenProjects />
    </main>

    <Footer />
  </div>
</template>