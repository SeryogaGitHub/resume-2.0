<script setup>
import Header from '@/components/Header.vue';
import TopSection from '@/components/home/TopSection.vue';
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import SkillsSection from "@/components/home/SkillsSection.vue";
import ExperienceSection from "@/components/home/ExperienceSection.vue";
import Footer from "@/components/Footer.vue";
import WhoIAm from "@/components/home/WhoIAm.vue";
import FAQSection from "@/components/home/FAQSection.vue";
import {ref} from "vue";
import { projects } from '@/data/projects';
import { skills } from '@/data/skills.js';

const selectedProject = ref(null);
</script>

<template>
  <div class="page home">
    <Header />

    <main class="main-content">
      <TopSection />
      <WhoIAm />
      <ExperienceSection />
      <ProjectsSection
          :projects="projects"
          @select-project="selectedProject = $event"
      />
      <FAQSection />
      <SkillsSection :skills />
    </main>

    <Footer />

  </div>
</template>