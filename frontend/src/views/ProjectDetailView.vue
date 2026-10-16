<script setup>
import {useRoute, RouterLink} from 'vue-router';
import {ref, watch} from 'vue';
import {getProjectById} from '@/api/products.js';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import OpenProjects from "@/components/OpenProjects.vue";

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
          <p v-if="loading">
            Завантаження проєкту...
          </p>

          <section v-else-if="error">
            <h1>Не вдалося завантажити проєкт</h1>
            <p>{{ error }}</p>
          </section>

          <template v-if="project">
            <h1>{{ project.title }}</h1>

            <header class="top-image" :style="{ backgroundImage: `url(${project.imageBig})` }">
              <RouterLink
                  :to="{ name: 'portfolio' }"
                  class="back-link"
              >
                ← Усі проєкти
              </RouterLink>
            </header>

            <div class="description-detail section">
              <div class="description">
                <h3>Огляд проєкту</h3>

                <p>
                  {{ project.description }}
                </p>
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
            </div>
          </template>
        </div>
      </section>

      <OpenProjects />
    </main>

    <Footer/>
  </div>
</template>
