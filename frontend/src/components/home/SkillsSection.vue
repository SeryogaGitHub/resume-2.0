<script setup>
const skills = [
  {
    id: 1,
    name: 'HTML / CSS',
    level: 'Advanced',
    experience: '12+ years'
  },
  {
    id: 2,
    name: 'JavaScript',
    level: 'Advanced',
    experience: '10+ years'
  },
  {
    id: 3,
    name: 'Vue.js',
    level: 'Advanced',
    experience: '3+ years'
  },
  {
    id: 4,
    name: 'React',
    level: 'Intermediate',
    experience: '2+ years'
  },
  {
    id: 5,
    name: 'SCSS',
    level: 'Advanced',
    experience: '10+ years'
  },
  {
    id: 6,
    name: 'Node.js',
    level: 'Intermediate',
    experience: 'Learning / Projects'
  }
];
</script>

<template>
  <section
      id="skills"
      class="skills-section section"
  >
    <div class="center">

      <div class="heading">

        <div>
          <p class="label">
            Skills
          </p>

          <h2>
            Technologies I Work With
          </h2>
        </div>

        <a
            href="#"
            class="link"
        >
          Усі навички →
        </a>

      </div>

      <div class="list">

        <article
            v-for="skill in skills"
            :key="skill.id"
            class="skill"
        >
          <h3>
            {{ skill.name }}
          </h3>

          <div class="skill-info">
            <span>
              {{ skill.level }}
            </span>

            <span>
              {{ skill.experience }}
            </span>
          </div>
        </article>

      </div>

    </div>
  </section>
</template>