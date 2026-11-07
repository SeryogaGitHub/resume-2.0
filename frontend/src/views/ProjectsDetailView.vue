<script setup>
import {computed, ref} from 'vue';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import OpenProjects from '@/components/OpenProjects.vue';
import ProjectsDetail from '@/components/projects/ProjectsDetail.vue';
import { projects } from '@/data/projects';

import {useRoute} from "vue-router";
const route = useRoute();

const project = computed(() => {
  return projects.find(item => {
    return String(item.id) === String(route.params.id);
  });
});
</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <ProjectsDetail :project/>

      <OpenProjects />
    </main>

    <Footer />
  </div>
</template>