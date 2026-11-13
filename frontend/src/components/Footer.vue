<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { footer } from '@data/footer';

import MainNav from "@/components/MainNav.vue";
import Network from "@/components/Network.vue";

const { locale } = useI18n();

const content = computed(() => ({
  location: footer.location[locale.value],
  time: footer.time[locale.value],
  titleMenu: footer.titleMenu[locale.value],
  titleNeatwork: footer.titleNeatwork[locale.value],

}));
</script>

<template>
  <footer class="main-footer">
    <div class="center">
      <h2 class="h1 text-center">Full-stack</h2>

      <div class="bottom">
        <div class="info-contact item">
          <div>
            <h4 class="font-weight-4">{{ content.location }}</h4>
            <h5 class="font-weight-4">{{ content.time }}</h5>
          </div>

          <div class="mt-60">
            <a href="tel:+380961225761">+380 96 122 57 61</a>

            <div class="mt-12">
              <a href="mailto:main.email.seryoga@gmail.com">main.email.seryoga@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div class="item">
          <div>
            <h4>{{ content.titleMenu }}</h4>

            <MainNav />
          </div>
        </div>

        <div class="item">
          <div>
            <h4>{{ content.titleNeatwork }}</h4>

            <Network />
          </div>
        </div>
      </div>

<!--      <a-->
<!--          href="#"-->
<!--          class="back-to-top"-->
<!--      >-->
<!--        <span>{{ buttons.backToTop[locale] }}</span> ↑-->
<!--      </a>-->
    </div>
  </footer>
</template>

<style scoped>
</style>
