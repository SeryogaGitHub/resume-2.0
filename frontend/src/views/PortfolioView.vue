<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectCard from "@/components/home/ProjectCard.vue";
import { projects } from '@/data/projects';
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
    </main>

    <Footer />
  </div>
</template>