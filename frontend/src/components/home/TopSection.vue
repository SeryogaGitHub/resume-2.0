<script setup>
import Network from "@/components/Network.vue";

import { useI18n } from 'vue-i18n';
import { topSection } from '@data/topSection';
import {buttons} from "@/data/buttons.js";

const { locale } = useI18n();
</script>

<template>
  <section class="top-section section pb-0">
    <div class="center m-auto">
      <div class="flex align-center">
        <div v-gsap="{ y: 60, duration: 1, delay: 0.3 }" class="text max-w-700">
          <p class="h3 text-red">
            {{ topSection.title[locale] }}
          </p>

          <h1 class="mt-24">
            {{ topSection.name[locale] }}
          </h1>

          <p class="description">
            {{ topSection.description[locale] }}
          </p>

          <div class="btns mt-60">
            <a
                href="#projects"
                class="btn"
                v-gsap-tilt="{
                  perspective: 300,
                  rotation: 20,
                  movement: 8,
                  duration: 0.4,
                  ease: 'power3.out'
                }"
            >
              {{ buttons.viewWork[locale] }}
            </a>

            <a
                :href="topSection.linkCV[locale]"
                class="btn"
                target="_blank"
                v-gsap-tilt="{
                  perspective: 300,
                  rotation: 20,
                  movement: 8,
                  duration: 0.4,
                  ease: 'power3.out'
                }"
            >
              {{ buttons.downloadCV[locale] }}
            </a>
          </div>
        </div>

        <div v-gsap="{ y: -60, duration: 1 }" class="image">
          <img src="@img/photo.jpg" loading="lazy" alt="Фото">
        </div>
      </div>
    </div>

    <div class="center mt-60">
      <Network />
    </div>
  </section>
</template>