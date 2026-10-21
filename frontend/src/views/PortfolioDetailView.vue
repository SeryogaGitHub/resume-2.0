<script setup>
import { ref } from 'vue';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import OpenProjects from '@/components/OpenProjects.vue';
import PortfolioDetail from '@/components/projects/PortfolioDetail.vue';

import { getProjectById } from '@/api/products.js';
import PortfolioMessage from "@/components/PortfolioMessage.vue";

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
      <PortfolioMessage v-show="loading || error" :loading :error />

      <PortfolioDetail
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