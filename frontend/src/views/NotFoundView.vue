<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {useI18n} from "vue-i18n";
import {computed} from "vue";
import {notFoundPage} from "@/data/notFoundPage.js";
import { buttons } from '@/data/buttons.js';
import {localePath} from "@/components/utils/localePath.js";
import {RouterLink} from "vue-router";

const { locale } = useI18n();

import { useSeo } from '@/composables/useSeo';

useSeo('notFound');

const translate = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return value?.[locale.value] ?? '';
};

const localizedNotFoundPage = computed(() => ({
  title: translate(notFoundPage.title),
  description: translate(notFoundPage.description),
  suggestion: translate(notFoundPage.suggestion),
}));
</script>
<template>
  <div class="page not-found">
    <Header />
    <main class="main-content">
      <section class="section">
        <div class="center">
          <div class="items">
            <div v-gsap class="top-image">
              <img src="@img/not-found-page/top-image.jpg" loading="lazy" alt="">
            </div>

            <div class="text section">
              <h1 class="h3" :key="locale"
                v-gsap-text="{
                  opacity: 0,
                  y: 20,
                  duration: 2,
                  stagger: 0.2,
                  ease: 'power3.out'
                }">
                404. {{ localizedNotFoundPage.title }}
              </h1>

              <p v-gsap>
                {{ localizedNotFoundPage.description }}
              </p>

              <p v-gsap>
                {{ localizedNotFoundPage.suggestion }}
              </p>

              <RouterLink
                :to="localePath('/', locale)"
                class="btn"
                v-gsap-tilt="{
                  perspective: 300,
                  rotation: 20,
                  movement: 8,
                  duration: 0.4,
                  ease: 'power3.out'
                }"
              >
                {{ buttons.learnMore[locale] }}
              </RouterLink>
            </div>

            <div v-gsap class="bottom-image">
              <img src="@img/not-found-page/bottom-image.jpg" loading="lazy" alt="">
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>

</template>