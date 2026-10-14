<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import TopSection from "@/components/home/TopSection.vue";
import DescriptionSection from "@/components/about/DescriptionSection.vue";
</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <TopSection />
      <DescriptionSection />
    </main>

    <Footer />
  </div>
</template>