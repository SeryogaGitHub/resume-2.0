<script setup>
const title = 'Frontend Developer';

const description = `
Створюю сучасні, швидкі та зручні вебінтерфейси
з використанням JavaScript, Vue.js, React
та сучасних web-технологій.
`;
</script>

<template>
  <section class="top-section">
    <div class="center">

      <div class="hero-content">

        <p class="hero-label">
          {{ title }}
        </p>

        <h1>
          Сергій Липянець
        </h1>

        <p class="hero-description">
          {{ description }}
        </p>

        <div class="hero-actions">
          <a
              href="#portfolio"
              class="button"
          >
            Переглянути роботи
          </a>

          <a
              href="/cv.pdf"
              class="button button-outline"
              download
          >
            Завантажити CV
          </a>
        </div>

      </div>

    </div>
  </section>
</template>