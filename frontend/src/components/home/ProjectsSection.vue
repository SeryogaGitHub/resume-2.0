<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref } from 'vue';
import ProjectCard from "@/components/home/ProjectCard.vue";

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
        <ProjectCard
            v-for="(project, index) in projects"
            v-show="showAll || index < 3"
            :key="project.id"
            :project="project"
            @select="emit('select-project', $event)"
        />
      </div>
    </div>
  </section>
</template>