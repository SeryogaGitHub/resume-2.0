<script setup>
import {useRoute, RouterLink} from 'vue-router';
import {ref, watch} from 'vue';
import {getProjectById} from '@/api/products.js';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();

const project = ref(null);
const loading = ref(false);
const error = ref('');

async function loadProject(id) {
  loading.value = true;
  error.value = '';
  project.value = null;

  try {
    project.value = await getProjectById(id);
  } catch (err) {
    error.value = 'Проєкт не знайдено або не вдалося завантажити.';
    console.error(err);
  } finally {
    loading.value = false;
  }
}

watch(
    () => route.params.id,
    (id) => {
      loadProject(id);
    },
    {immediate: true}
);
</script>

<template>
  <div class="page">
    <Header/>

    <main class="page project-detail">
      <section class="section">
        <div class="center">
          <RouterLink
              :to="{ name: 'portfolio' }"
              class="back-link"
          >
            ← Усі проєкти
          </RouterLink>

          <p v-if="loading">
            Завантаження проєкту...
          </p>

          <img
              v-if="project.imageBig"
              :src="project.imageBig"
              :alt="project.title"
              class="project-detail-image"
          >

          <section v-else-if="error">
            <h1>Не вдалося завантажити проєкт</h1>
            <p>{{ error }}</p>
          </section>

          <template v-if="project">
            <header class="project-detail-header">


              <p>{{ project.year }}</p>

              <h1>{{ project.title }}</h1>

              <p>
                {{ project.description }}
              </p>
            </header>



            <section class="project-detail-description">
              <h2>Про проєкт</h2>
              <p>{{ project.description }}</p>
            </section>

            <section class="project-detail-technologies">
              <h2>Технології</h2>

              <ul>
                <li
                    v-for="technology in project.technologies"
                    :key="technology"
                >
                  {{ technology }}
                </li>
              </ul>
            </section>

            <RouterLink
                :to="{
              name: 'project-detail',
              params: { id: project.id }
            }"
                class="portfolio-link"
            >
              Детальніше про проєкт →
            </RouterLink>
          </template>
        </div>
      </section>
    </main>

    <Footer/>
  </div>
</template>
