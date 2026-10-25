<script setup>
import { RouterLink } from 'vue-router';
import defaultImage from '@img/default.svg';

const setDefaultImage = (event) => {
  event.target.onerror = null;
  event.target.src = defaultImage;
  event.target.classList.add('rotate');
};

defineProps({
  article: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <RouterLink
      :to="{
          name: 'blog-detail',
          params: { id: article.id }
        }"
  >
    <img
        :src="article.image"
        :alt="article.title"
        loading="lazy"
        @error="setDefaultImage"
        class="image"
    >

    <h4 class="mt-20">{{ article.title }}</h4>

    <div class="flex mt-20">
      <div class="tags">
        <p v-for="item in article.tags"
           :key="item.slug"
        >{{ item }}</p>

        <p>{{ article.year }}</p>
      </div>

      <button class="link">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.83333 1.16663L0.5 8.49996" stroke-linecap="round" stroke="#867B7B" style="stroke:#867B7B;stroke:color(display-p3 0.5255 0.4824 0.4824);stroke-opacity:1;"/>
          <path d="M3.83301 0.587688C3.83301 0.587688 7.58867 0.271095 8.15867 0.841035C8.72861 1.41098 8.41194 5.16668 8.41194 5.16668" stroke-linecap="round" stroke-linejoin="round" stroke="#867B7B" style="stroke:#867B7B;stroke:color(display-p3 0.5255 0.4824 0.4824);stroke-opacity:1;"/>
        </svg>
      </button>
    </div>
  </RouterLink>
</template>