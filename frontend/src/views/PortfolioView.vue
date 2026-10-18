<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectCard from "@/components/home/ProjectCard.vue";
import { projects } from '@/data/projects';
import OpenProjects from "@/components/OpenProjects.vue";
</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <section class="projects-section section">
        <div class="center">
          <h1>Портфоліо</h1>

          <div class="items align-center">
            <ProjectCard
                v-for="(project, index) in projects"
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