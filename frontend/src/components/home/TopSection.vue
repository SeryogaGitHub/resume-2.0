<script setup>
import Network from "@/components/Network.vue";

import { useI18n } from 'vue-i18n';
import { topSection } from '@data/topSection';
import {buttons} from "@/data/buttons.js";
import {localePath} from "@/components/utils/localePath.js";
import {RouterLink} from "vue-router";

const { locale } = useI18n();
</script>

<template>
  <section class="top-section section pb-0">
    <div class="center m-auto">
      <div class="flex align-center">
        <div v-gsap="{ y: 60, duration: .7 }" class="text max-w-700">
          <p class="h3 text-red">
            {{ topSection.title[locale] }}
          </p>

          <h1 class="mt-24" :key="locale"
              v-gsap-text="{
              opacity: 0,
              y: 20,
              duration: 0.3,
              stagger: 0.2,
              ease: 'power3.out'
            }">
            {{ topSection.name[locale] }}
          </h1>

          <p class="description">
            {{ topSection.description[locale] }}
          </p>

          <div class="btns mt-60">
            <RouterLink
                :to="localePath('/projects', locale)"
                class="btn"
                v-gsap-tilt="{
                    perspective: 300,
                    rotation: 20,
                    movement: 8,
                    duration: 0.3,
                    ease: 'power3.out'
                }"
            >
              {{ buttons.viewWork[locale] }}
            </RouterLink>

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
          <img src="@img/photo.jpg" fetchpriority="high" :alt="topSection.title[locale]">
        </div>
      </div>
    </div>

    <div class="center mt-60">
      <Network />
    </div>
  </section>
</template>