<script setup>
const emit = defineEmits([
  'show-all'
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
          <p class="label">
            Portfolio
          </p>

          <h2>
            Selected Projects
          </h2>
        </div>

        <button
            type="button"
            class="link"
            @click="emit('show-all')"
        >
          Усі роботи →
        </button>
      </div>

      <div class="list">

        <article
            v-for="project in projects"
            :key="project.id"
            class="project"
        >
          <button
              type="button"
              class="image"
              @click="emit('select-project', project)"
          >
            {{project.title}}
            {{project.image}}
          </button>

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