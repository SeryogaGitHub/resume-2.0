<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import defaultImage from '@img/default.svg';
import { experienceSection } from '@data/experienceSection';
import {buttons} from "@/data/buttons.js";

const { locale } = useI18n();

const content = computed(() => ({
  title: experienceSection.title[locale.value],

  paragraphs: experienceSection.paragraphs.map(
      paragraph => paragraph[locale.value]
  ),

  button: experienceSection.button[locale.value],

  items: experienceSection.items.map(item => ({
    ...item,
    position: item.position[locale.value],
    description: item.description[locale.value]
  }))
}));

// Images
const logos = import.meta.glob(
    '/src/assets/image/index-page/experience-section/*',
    {
      eager: true,
      import: 'default',
      query: '?url'
    }
);

const setDefaultImage = (event) => {
  event.target.onerror = null;
  event.target.src = defaultImage;
  event.target.classList.add('rotate');
};
</script>

<template>
  <section
      id="experience"
      class="experience-section section"
  >
    <div class="center">
      <h2 v-gsap-text="{
        opacity: 0,
        y: 20,
        duration: 2,
        stagger: 0.2,
        delay: 2,
        ease: 'power3.out'
      }">
        {{ content.title }}
      </h2>

      <div class="text-list">
        <div class="text">
          <div>
            <p
                v-for="(paragraph, index) in content.paragraphs"
                :key="index"
                v-gsap="{x: 260, duration: 1, delay: 0.3}"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <ul class="list">
          <li
              v-for="item in content.items"
              :key="item.id"
              class="item"
              v-gsap
          >
            <div class="detail">
              <div class="logo-text">
                <div class="logo">
                  <img
                      :src="logos[`/src/assets/image/index-page/experience-section/${item.logo}`] || defaultImage"
                      :alt="item.company"
                      loading="lazy"
                      @error="setDefaultImage"
                  >
                </div>

                <div>
                  {{ item.period }}

                  <h4 class="title">
                    {{ item.position }}
                  </h4>

                  <p class="company">
                    {{ item.company }}
                  </p>
                </div>
              </div>

              <p class="description">
                {{ item.description }}
              </p>
            </div>

            <div></div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
