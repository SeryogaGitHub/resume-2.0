
<script setup>
import { ref, onMounted } from 'vue';
import {
  getProjects,
  createProject,
  deleteProject,
  updateProject
} from '@/api/products.js';
import BaseButton from "@/components/BaseButton.vue";

const projects = ref([]);
const loading = ref(false);
const saving = ref(false);
const editingId = ref(null);
const error = ref('');

const form = ref({
  title: '',
  category: 'Web Application',
  year: new Date().getFullYear(),
  description: '',
  technologies: ''
});


function editProject(project) {
  editingId.value = project.id;

  form.value = {
    title: project.title ?? '',
    category: project.category ?? 'Web Application',
    year: project.year ?? new Date().getFullYear(),
    description: project.description ?? '',
    technologies: Array.isArray(project.technologies)
        ? project.technologies.join(', ')
        : ''
  };
}


async function loadProjects() {
  loading.value = true;
  error.value = '';

  try {
    projects.value = await getProjects();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}


async function saveProject() {
  if (!form.value.title.trim()) {
    error.value = 'Введи назву проєкту.';
    return;
  }

  saving.value = true;
  error.value = '';

  const projectData = {
    title: form.value.title.trim(),
    category: form.value.category,
    year: Number(form.value.year),
    description: form.value.description.trim(),
    technologies: form.value.technologies
        .split(',')
        .map(item => item.trim())
        .filter(Boolean)
  };

  try {
    if (editingId.value !== null) {
      const updatedProject = await updateProject(
          editingId.value,
          projectData
      );

      projects.value = projects.value.map(project =>
          project.id === updatedProject.id
              ? updatedProject
              : project
      );
    } else {
      const newProject = await createProject(projectData);
      projects.value.push(newProject);
    }

    resetForm();
  } catch (err) {
    error.value = err.message;
  } finally {
    saving.value = false;
  }
}

function resetForm() {
  editingId.value = null;

  form.value = {
    title: '',
    category: 'Web Application',
    year: new Date().getFullYear(),
    description: '',
    technologies: ''
  };
}


async function removeProject(id) {
  const confirmed = window.confirm(
      'Точно видалити цей проєкт?'
  );

  if (!confirmed) return;

  error.value = '';

  try {
    await deleteProject(id);

    projects.value = projects.value.filter(
        project => project.id !== id
    );
  } catch (err) {
    error.value = err.message;
  }
}

onMounted(loadProjects);
</script>

<template>
  <main class="projects-admin">
    <div class="center">
      <h1>Керування проєктами</h1>

      <p v-if="error">
        {{ error }}
      </p>

      <form @submit.prevent="saveProject">
        <input
            id="title"
            v-model="form.title"
            placeholder="Назва проєкту"
            required
        >

        <select
            id="category"
            v-model="form.category"
        >
          <option>Категорія</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Corporate">Corporate</option>
          <option value="Web Application">
            Web Application
          </option>
        </select>

        <input
            id="year"
            v-model.number="form.year"
            type="number"
            min="2000"
            placeholder="Рік"
            required
        >

        <textarea
            id="description"
            v-model="form.description"
            placeholder="Опис"
        />

        <div>
          <input
              id="technologies"
              v-model="form.technologies"
              placeholder="Технології через кому Vue 3, Node.js, SCSS"
          >
        </div>

        <BaseButton type="submit" :disabled="saving">
          {{
            saving
                ? 'Збереження...'
                : editingId !== null
                    ? 'Зберегти зміни'
                    : 'Додати проєкт'
          }}
        </BaseButton>

        <BaseButton
            v-if="editingId !== null"
            type="button"
            @click="resetForm"
        >
          Скасувати
        </BaseButton>
      </form>

      <h2>Список проєктів</h2>

      <p v-if="loading">
        Завантаження...
      </p>

      <ul v-else>
        <li v-for="project in projects" :key="project.id">
          <span>{{ project.title }} ({{ project.year }})</span>

          <BaseButton
              type="button"
              @click="editProject(project)"
              class="btn white"
          >
            Редагувати
          </BaseButton>

          <BaseButton
              type="button"
              @click="removeProject(project.id)"
              class="btn"
          >
            Видалити
          </BaseButton>
        </li>
      </ul>
    </div>
  </main>
</template>
