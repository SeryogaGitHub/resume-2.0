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

      <div class="content">

        <p class="label">
          {{ title }}
        </p>

        <h1>
          Сергій Липянець
        </h1>

        <p class="description">
          {{ description }}
        </p>

        <div class="actions">
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