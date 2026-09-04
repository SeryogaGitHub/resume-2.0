<script setup>
const projects = [
  {
    id: 1,
    title: 'E-commerce',
    description: 'Сучасний інтернет-магазин з адаптивним інтерфейсом.',
    technologies: ['Vue.js', 'SCSS', 'Node.js'],
    image: '🛒',
    url: '#'
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'Корпоративний сайт із сучасною структурою та анімаціями.',
    technologies: ['JavaScript', 'SCSS', 'Vite'],
    image: '🏢',
    url: '#'
  },
  {
    id: 3,
    title: 'Web Application',
    description: 'Інтерактивний вебзастосунок з роботою через API.',
    technologies: ['Vue.js', 'REST API', 'MySQL'],
    image: '⚡',
    url: '#'
  }
];
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