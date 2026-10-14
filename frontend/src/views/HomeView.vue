<script setup>
import Header from '@/components/Header.vue';
import TopSection from '@/components/home/TopSection.vue';
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import SkillsSection from "@/components/home/SkillsSection.vue";
import ExperienceSection from "@/components/home/ExperienceSection.vue";
import Footer from "@/components/Footer.vue";
import WhoIAm from "@/components/home/WhoIAm.vue";
import { projects } from '@/data/projects';
import FAQSection from "@/components/home/FAQSection.vue";
import ProjectView from "@/views/ProjectView.vue";
import {ref} from "vue";

const selectedProject = ref(null);

const showAllProjects = () => {
  console.log('Показати всі проєкти');
};

const selectProject = (project) => {
  console.log('Обраний проєкт:', project);
};
</script>

<template>
  <div class="home page">
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
          @select-project="selectedProject = $event"
      />
      <FAQSection />
      <SkillsSection />
    </main>

    <Footer />

  </div>
</template>