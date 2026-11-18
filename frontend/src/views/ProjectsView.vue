<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectsCard from '@/components/home/ProjectsCard.vue';
import OpenProjects from '@/components/OpenProjects.vue';
import { useI18n } from 'vue-i18n';
import { projects } from '@/data/projects';
import { useSeo } from '@/composables/useSeo';
import {computed} from "vue";
import {projectsSection} from "@/data/projectsSection.js";

useSeo('projects');

const { locale } = useI18n();

const content = computed(() => ({
  title: projectsSection.title[locale.value]
}));
</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <section class="projects-section section">
        <div class="center">
          <h1 :key="locale"
              v-gsap-text="{
              opacity: 0,
              y: 20,
              duration: 1,
              stagger: 0.2,
              ease: 'power3.out'
            }">{{ content.title }}</h1>

          <div class="items align-center">
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
