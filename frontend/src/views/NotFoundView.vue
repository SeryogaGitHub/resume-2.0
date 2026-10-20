<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import topImage from '@/assets/image/not-found-page/top-image.jpg';
import bottomImage from '@/assets/image/not-found-page/bottom-image.jpg';
</script>
<template>
  <div class="page not-found">
    <Header />
    <main class="main-content">
      <section class="section">
        <div class="center">
          <div class="items">
            <div class="top-image">
              <img src="@img/not-found-page/top-image.jpg" loading="lazy" alt="">
            </div>

            <div class="text section">
              <h1 class="h3">
                404. Сторінку не знайдено!
              </h1>

              <p>
                Цієї сторінки більше не існує, але ваш час — цінний.
              </p>

              <p>
                Дозвольте допомогти вам знайти те, що ви насправді шукали: можливо, створити проєкт, мої послуги або спосіб зв’язатися з зімною.
              </p>

              <RouterLink
                  to="/"
                  class="btn"
              >
                На головну
              </RouterLink>
            </div>

            <div class="bottom-image">
              <img src="@img/not-found-page/bottom-image.jpg" loading="lazy" alt="">
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>

</template>