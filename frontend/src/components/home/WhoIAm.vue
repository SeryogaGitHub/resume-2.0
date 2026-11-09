<script setup>
import { useI18n } from 'vue-i18n';
import { whoIAm } from '@data/whoIAm';
import {buttons} from "@/data/buttons.js";

const { locale } = useI18n();
</script>

<template>
  <section class="who-i-am section">
    <div class="center">
      <h2 class="wow animate__fadeInUp">{{ whoIAm.title[locale] }}</h2>

      <div class="flex">
        <div class="image-left wow animate__fadeInUp">
          <img
              src="@img/index-page/who-i-am/who-i-am-left.jpg"
              loading="lazy"
              alt=""
          >
        </div>

        <div class="text">
          <p class="wow animate__fadeInUp">{{ whoIAm.description[locale] }}</p>

          <p class="wow animate__fadeInUp">{{ whoIAm.workPreferences[locale] }}</p>

          <RouterLink to="/about" class="btn white wow animate__fadeInUp">
            <span>{{ buttons.learnMore[locale] }}</span>

            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001" stroke="#847979" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
        </div>

        <div class="image-right wow animate__fadeInUp">
          <img
              src="@img/index-page/who-i-am/who-i-am-right.jpg"
              loading="lazy"
              alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>