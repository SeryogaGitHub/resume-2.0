<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="page">
    <Header />

    <main class="main-content">
      <section class="section">
        <div class="center">
          <h2>Blog</h2>

          <article>Блог в найближчий час запрацює</article>

          <RouterLink to="/" class="btn"
          >
            <span>Головна</span>

            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001" stroke="#fff" style="stroke:#fff;stroke-opacity:1;" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>