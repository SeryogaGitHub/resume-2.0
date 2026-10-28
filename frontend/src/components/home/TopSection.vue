<script setup>
import Network from "@/components/Network.vue";

const title = 'Front-end, Web Developer, Junior(NodeJS, ReactJS, VueJS)';

const description = `
Роглядаю роботу віддалено на постійній основі. Створюю сучасні, швидкі та зручні вебінтерфейси
з використанням. Готовий до переїзду в країну, при потребі вчити мову. Технологія вже не має значення, з якою потрібно, з тією працюю.
`;
</script>

<template>
  <section class="top-section section pb-0">
    <div class="center m-auto">
      <div class="flex align-center">
        <div class="text max-w-700">
          <p class="h3 position">
            {{ title }}
          </p>

          <h1 class="mt-24">
            Сергій Липянець
          </h1>

          <p class="description">
            {{ description }}
          </p>

          <div hidden="hidden">
            <div class="btns mt-60">
              <a
                  href="#projects"
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