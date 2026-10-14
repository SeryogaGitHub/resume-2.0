<script setup>
const title = 'Front-end, Senior HTML-верстальник, Junior(NodeJS, ReactJS, VueJS)';

const description = `
Роглядаю роботу віддалено на постійній основі. Створюю сучасні, швидкі та зручні вебінтерфейси
з використанням. Готовий до переїзду в країну, при потребі вчити мову.
`;
</script>

<template>
  <section class="top-section">
    <div class="center m-auto">
      <div class="flex align-center">
        <div class="text max-w-600">
          <p class="position">
            {{ title }}
          </p>

          <h1 class="mt-24">
            Сергій Липянець
          </h1>

          <p class="description">
            {{ description }}
          </p>

          <div class="btns mt-24">
            <a
                href="#portfolio"
                class="btn"
            >
              Переглянути роботи
            </a>

            <a
                href="@/assets/CV/EU-Resume-Front-end.pdf"
                class="btn"
                download="EU-Resume-Front-end-SERHII-LYPIANETS.pdf"
            >
              Завантажити CV
            </a>
          </div>
        </div>

        <div class="image">
          <img src="@img/photo.jpg" alt="Фото">
        </div>
      </div>
    </div>

    <div class="center mt-60">
      <div class="network">
        <a href="https://t.me/serg_ua_zt">Telegram</a>
        <a href="https://wa.me/+380961225761">WhatsApp</a>
        <a href="https://www.linkedin.com/in/serhii-lypianets-69844a195/">linkedin</a>
      </div>
    </div>
  </section>
</template>