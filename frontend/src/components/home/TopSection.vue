<script setup>
import Network from "@/components/Network.vue";

const title = 'Front-end / Web Developer | Full-stack Developer (Junior: Node.js, React.js, Vue.js)';

const description = `Розглядаю пропозиції віддаленої роботи на постійній основі. Маю багаторічний досвід веброзробки, створюю сучасні, швидкі та адаптивні вебінтерфейси. Відкритий до роботи з різними технологіями, швидко освоюю нові інструменти та розвиваюся в напрямі Full-stack (Node.js, React, Vue). Приорітет до переїзду за кордон та вивчення мови.`;
</script>

<template>
  <section class="top-section section pb-0">
    <div class="center m-auto">
      <div class="flex align-center">
        <div class="text max-w-700">
          <p class="h3 text-red">
            {{ title }}
          </p>

          <h1 class="mt-24">
            Сергій Липянець
          </h1>

          <p class="description">
            {{ description }}
          </p>

          <div class="btns mt-60">
            <a
                href="#projects"
                class="btn"
            >
              Переглянути роботи
            </a>

            <a
                href="https://github.com/SeryogaGitHub/resume-2.0/blob/main/frontend/src/assets/CV/EN-Resume-Front-end.pdf"
                class="btn"
            >
              Завантажити CV
            </a>
          </div>
        </div>

        <div class="image">
          <img src="@img/photo.jpg" loading="lazy" alt="Фото">
        </div>
      </div>
    </div>

    <div class="center mt-60">
      <Network />
    </div>
  </section>
</template>