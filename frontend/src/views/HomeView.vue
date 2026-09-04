<script setup>
import Header from '@/components/Header.vue';
import TopSection from '@/components/home/TopSection.vue';
import ProjectsSection from "@/components/home/ProjectsSection.vue";
import SkillsSection from "@/components/home/SkillsSection.vue";
import ExperienceSection from "@/components/home/ExperienceSection.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="home">

    <Header />

    <main>
      <TopSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
    </main>

    <Footer />

  </div>
</template>