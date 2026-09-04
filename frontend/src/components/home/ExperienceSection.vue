<script setup>
const experience = [
  {
    id: 1,
    period: '2022 — Present',
    position: 'Frontend Developer',
    company: 'Freelance',
    description: 'Розробка та підтримка сучасних вебпроєктів.'
  },
  {
    id: 2,
    period: '2018 — 2022',
    position: 'Frontend Developer',
    company: 'Web Development',
    description: 'Верстка та розробка інтерактивних вебінтерфейсів.'
  },
  {
    id: 3,
    period: '2014 — 2018',
    position: 'HTML / Frontend Developer',
    company: 'Web Projects',
    description: 'Адаптивна верстка та JavaScript-розробка.'
  }
];
</script>

<template>
  <section
      id="experience"
      class="experience-section section"
  >
    <div class="center">

      <div class="heading">
        <div>
          <p class="label">
            Experience
          </p>

          <h2>
            My Experience
          </h2>
        </div>

        <a
            href="#"
            class="link"
        >
          Детальніше →
        </a>
      </div>

      <div class="list">

        <article
            v-for="item in experience"
            :key="item.id"
            class="item"
        >
          <div class="period">
            {{ item.period }}
          </div>

          <div class="content">

            <h3>
              {{ item.position }}
            </h3>

            <p class="company">
              {{ item.company }}
            </p>

            <p class="description">
              {{ item.description }}
            </p>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>