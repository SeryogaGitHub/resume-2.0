<script setup>
import Header from '@/components/Header.vue';
import TopSection from '@/components/home/TopSection.vue';
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import SkillsSection from "@/components/home/SkillsSection.vue";
import ExperienceSection from "@/components/home/ExperienceSection.vue";
import Footer from "@/components/Footer.vue";

const projects = [
  {
    id: 1,
    title: 'E-commerce',
    description: 'Сучасний інтернет-магазин з адаптивним інтерфейсом.',
    technologies: ['Vue.js', 'SCSS', 'Node.js'],
    image: '🛒',
    url: '#'
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'Корпоративний сайт із сучасною структурою та анімаціями.',
    technologies: ['JavaScript', 'SCSS', 'Vite'],
    image: '🏢',
    url: '#'
  },
  {
    id: 3,
    title: 'Web Application',
    description: 'Інтерактивний вебзастосунок з роботою через API.',
    technologies: ['Vue.js', 'REST API', 'MySQL'],
    image: '⚡',
    url: '#'
  }
];
</script>

<template>
  <div class="home">

    <Header />

    <main>
      <TopSection />
      <ProjectsSection :projects="projects"/>
      <SkillsSection />
      <ExperienceSection />
    </main>

    <Footer />

  </div>
</template>