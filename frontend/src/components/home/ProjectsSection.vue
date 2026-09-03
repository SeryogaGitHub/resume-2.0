<script setup>
const projects = [
  {
    id: 1,
    title: 'E-commerce',
    description: 'Сучасний інтернет-магазин з адаптивним інтерфейсом.',
    technologies: ['Vue.js', 'SCSS', 'Node.js'],
    image: '/images/projects/ecommerce.jpg',
    url: '#'
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'Корпоративний сайт із сучасною структурою та анімаціями.',
    technologies: ['JavaScript', 'SCSS', 'Vite'],
    image: '/images/projects/corporate.jpg',
    url: '#'
  },
  {
    id: 3,
    title: 'Web Application',
    description: 'Інтерактивний вебзастосунок з роботою через API.',
    technologies: ['Vue.js', 'REST API', 'MySQL'],
    image: '/images/projects/application.jpg',
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

      <div class="projects-heading">
        <div>
          <p class="projects-label">
            Portfolio
          </p>

          <h2>
            Selected Projects
          </h2>
        </div>

        <a
            href="#"
            class="projects-link"
        >
          Усі роботи →
        </a>
      </div>

      <div class="projects-list">

        <article
            v-for="project in projects"
            :key="project.id"
            class="project"
        >
          <a
              :href="project.url"
              class="project-image"
          >
            <img
                :src="project.image"
                :alt="project.title"
            >
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