<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import OpenProjects from '@/components/OpenProjects.vue';

import { blog } from '@/data/blog.js';
import PortfolioAlert from "@/components/PortfolioAlert.vue";
import BlogCard from "@/components/blog/BlogCard.vue";

console.log(blog);

</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <section class="blog-section section">
        <div class="center">
          <h1>Блог</h1>

          <PortfolioAlert v-if="!blog.length" :loading :error />

          <div v-else class="items">
            <BlogCard
                v-for="article in blog"
                :key="article.id"
                :article
                class="blog-detail"
            />
          </div>
        </div>
      </section>
      <OpenProjects />
    </main>
    <Footer />
  </div>
</template>
