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
        <div class="text max-w-700">
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
            >
              {{ buttons.viewWork[locale] }}
            </a>

            <a
                href="https://github.com/SeryogaGitHub/resume-2.0/blob/main/frontend/src/assets/CV/EN-Resume-Front-end.pdf"
                class="btn"
                target="_blank"
            >
              {{ buttons.downloadCV[locale] }}
            </a>
          </div>
        </div>

        <div class="image">
          <img src="@img/photo.jpg" loading="lazy" alt="Фото">
        </div>
      </div>
    </div>

    <div class="center mt-60">
      <Network />
    </div>
  </section>
</template>