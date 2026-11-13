<script setup>
import Header from '@/components/Header.vue';
import FormSection from '@/components/contact/FormSection.vue';
import Footer from '@/components/Footer.vue';
import TopContact from "@/components/contact/TopContact.vue";
import FAQSection from "@/components/home/FAQSection.vue";
</script>

<template>
  <div class="contact page">

    <Header />

    <main class="main-content">
      <TopContact />
<!--      <FormSection />-->
      <FAQSection />
    </main>

    <Footer />

  </div>
</template>