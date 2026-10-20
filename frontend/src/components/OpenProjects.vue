<script setup>

import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <section class="section open-projects">
    <div class="center">
      <h2>Я відкритий до нових проєктів</h2>
      
      <div class="items">
        <div class="item">
          <div class="description"></div>

          <img src="@img/open-projects/open-projects-1.jpg" loading="lazy" alt="">
        </div>

        <div class="item big">
          <div class="description">
            <div>
              <p>Жодного візуального шуму чи типових шаблонів. Лише продуманий, індивідуальний дизайн, створений на основі вашої історії.</p>

              <RouterLink
                  to="/contact"
                  class="btn white"
              >
                <span>Розпочати співпрацю</span>

                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001" stroke="#847979" style="stroke-opacity:1;" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </RouterLink>
            </div>
          </div>

          <img src="@img/open-projects/open-projects-2.jpg" loading="lazy" alt=""></img>
        </div>

        <div class="item">
          <img src="@img/open-projects/open-projects-3.jpg" loading="lazy" alt="">

          <div class="description"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>