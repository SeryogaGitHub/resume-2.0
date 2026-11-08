<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { openProjects } from '@data/openProjects';
import {buttons} from "@data/buttons.js";

const { locale } = useI18n();

const content = computed(() => ({
  title: openProjects.title[locale.value],
  description: openProjects.description[locale.value],
  button: buttons.startCollaboration[locale.value]
}));
</script>

<template>
  <section class="section open-projects">
    <div class="center">
      <h2>{{ content.title }}</h2>

      <div class="items">
        <div class="item">
          <div class="description"></div>

          <img
              src="@img/open-projects/open-projects-1.jpg"
              loading="lazy"
              alt=""
          >
        </div>

        <div class="item big">
          <div class="description">
            <div>
              <p>{{ content.description }}</p>

              <RouterLink
                  to="/contact"
                  class="btn white"
              >
                <span>{{ buttons.startCollaboration[locale] }}</span>

                <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001"
                      stroke="#847979"
                      style="stroke-opacity:1;"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
                </svg>
              </RouterLink>
            </div>
          </div>

          <img
              src="@img/open-projects/open-projects-2.jpg"
              loading="lazy"
              alt=""
          >
        </div>

        <div class="item">
          <img
              src="@img/open-projects/open-projects-3.jpg"
              loading="lazy"
              alt=""
          >

          <div class="description"></div>
        </div>
      </div>
    </div>
  </section>
</template>