<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref } from 'vue';

const showAll = ref(false);
const emit = defineEmits([
  'show-all',
  'select-project'
]);

defineProps({
  projects: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <section
      id="portfolio"
      class="projects section"
  >
    <div class="center">

      <div class="heading">
        <div>
          <h2 class="label">
            Проекти
          </h2>

          <h3>
            Selected Projects
          </h3>
        </div>

        <BaseButton type="button"
                    class="link"
                    @click="showAll = !showAll"
        >
          {{ showAll ? 'Сховати' : 'Усі роботи →' }}
        </BaseButton>
      </div>

      <div class="list" v-if="showAll">
        <article
            v-for="(project, index) in projects"
            v-show="showAll || index < 3"
            :key="project.id"
            class="project"
        >
          <hr>
          <BaseButton
              type="button"
              class="image"
              @click="emit('select-project', project)"
          >
              {{project.title}}
              {{project.image}}
          </BaseButton>

          <div class="project-content">
            <h3>
              {{ project.title }}
            </h3>

            <p>
              {{ project.description }}
            </p>

            <ul>
              <li
                  v-for="technology in project.technologies"
                  :key="technology"
              >
                {{ technology }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>