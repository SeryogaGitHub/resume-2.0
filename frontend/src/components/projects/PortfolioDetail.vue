
<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { ref, watch } from 'vue';

const props = defineProps({
  getProjectById: {
    type: Function,
    required: true
  }
});

const emit = defineEmits(['loading', 'error']);

const route = useRoute();

const project = ref(null);
const loading = ref(false);
const error = ref('');

async function loadProject(id) {
  loading.value = true;
  error.value = '';
  project.value = null;

  emit('loading', true);
  emit('error', '');

  try {
    project.value = await props.getProjectById(id);

    if (!project.value) {
      error.value = 'Проєкт не знайдено.';
      emit('error', error.value);
    }
  } catch (err) {
    error.value = 'Проєкт не знайдено або не вдалося завантажити.';

    emit('error', error.value);

    console.error(err);
  } finally {
    loading.value = false;

    emit('loading', false);
  }
}

watch(
    () => route.params.id,
    (id) => {
      loadProject(id);
    },
    { immediate: true }
);
</script>

<template>
  <section class="section project-detail">
    <div class="center">
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

        <section class="description-detail section">
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
        </section>
      </template>
    </div>
  </section>
</template>

<style scoped>

</style>