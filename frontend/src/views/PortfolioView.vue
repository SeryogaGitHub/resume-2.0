<script setup>
import Header from '@/components/Header.vue';
import ProjectsSection from '@/components/home/ProjectsSection.vue';
import Footer from '@/components/Footer.vue';

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
  <div class="portfolio">

    <Header />

    <main>
      <ProjectsSection :projects="projects" />
    </main>

    <Footer />

  </div>
</template>