<script setup>
import Header from '@/components/Header.vue';
import TopSection from '@/components/home/TopSection.vue';
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import SkillsSection from "@/components/home/SkillsSection.vue";
import ExperienceSection from "@/components/home/ExperienceSection.vue";
import Footer from "@/components/Footer.vue";
import WhoIAm from "@/components/home/WhoIAm.vue";
import FAQSection from "@/components/home/FAQSection.vue";
import ProjectView from "@/views/ProjectView.vue";
import {ref, onMounted} from "vue";
import { getProjects } from '@/api/products.js';
import { skills } from '@/data/skills.js';

const projects = ref([]);
const loading = ref(false);
const error = ref('');

async function loadProjects() {
  loading.value = true;
  error.value = '';

  try {
    projects.value = await getProjects();
  } catch (err) {
    error.value = 'Не вдалося завантажити проєкти.';
    console.error(err);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadProjects();
});

const selectedProject = ref(null);
</script>

<template>
  <div class="page home">
    <Header />

    <main class="main-content">
      <TopSection />
      <WhoIAm />
      <ExperienceSection />
      <ProjectView
          v-if="selectedProject"
          :project="selectedProject"
          @back="selectedProject = null"
      />

      <ProjectsSection
          v-else
          :projects="projects"
          :loading
          :error
          @select-project="selectedProject = $event"
      />
      <FAQSection />
      <SkillsSection :skills />
    </main>

    <Footer />

  </div>
</template>