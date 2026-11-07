
<script setup>
import { RouterLink } from 'vue-router';
import defaultImage from "@/assets/image/default.svg";

defineProps({
  project: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <section class="section project-detail">
    <div class="center">
      <template v-if="project">
        <RouterLink
            :to="{ name: 'projects' }"
            class="h4"
        >
          ← Усі проєкти
        </RouterLink>

        <h1 class="mt-24">{{ project.title }}</h1>

        <header
            v-if="project.image"
            class="top-image"
            :style="{ backgroundImage: `url(${project.image})` }"
        >
        </header>

        <img
            v-else
            :src="defaultImage"
            :alt="project.title"
            class="rotate"
            loading="lazy"
        >

        <section class="description-detail section">
          <div class="description">
            <h3>Огляд проєкту</h3>
            <p>{{ project.description }}</p>
          </div>

          <div class="detail">
            <div>
              <h3>Рік:</h3>
              <p>{{ project.year }}</p>
            </div>

            <div>
              <h3>Роль:</h3>
              <p>UX/UI Design, Web Strategy</p>
            </div>

            <div>
              <h3>Технології:</h3>
              <ul class="list">
                <li
                    v-for="technology in project.technologies"
                    :key="technology"
                >
                  {{ technology }}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </template>
    </div>
  </section>
</template>

<style scoped>
</style>
