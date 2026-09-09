<script setup>
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

        <a
            href="#"
            class="link"
        >
          Усі роботи →
        </a>
      </div>

      <div class="list">

        <article
            v-for="project in projects"
            :key="project.id"
            class="project"
        >
          <a
              :href="project.url"
              class="project-image"
          >
            {{project.image}}
          </a>

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