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

const showAllProjects = () => {
  console.log('Показати всі проєкти');
};

const selectProject = (project) => {
  console.log('Обраний проєкт:', project);
};
</script>

<template>
  <div class="home">

    <Header />

    <main>
      <TopSection />
      <WhoIAm />
      <ExperienceSection />
      <ProjectsSection
          :projects="projects"
          @show-all="showAllProjects"
          @select-project="selectProject"
      />
      <FAQSection />
      <SkillsSection />
    </main>

    <Footer />

  </div>
</template>