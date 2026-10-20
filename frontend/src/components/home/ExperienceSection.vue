<script setup>
import defaultImage from '@img/default.svg';

const setDefaultImage = (event) => {
  event.target.onerror = null;
  event.target.src = defaultImage;
  event.target.classList.add('rotate');
};

const experience = [
  {
    id: 1,
    period: '08.2013 — 11.2013',
    logo: 'index-page/experience-section/wua.png',
    position: 'Контент менеджер',
    company: 'wedding.ua',
    description: 'Роміщення контенту на порталі'
  },
  {
    id: 2,
    period: '12.2013 — 2026',
    logo: 'index-page/experience-section/freelancer.png',
    position: 'Frontend Developer',
    company: 'Freelance',
    description: 'Десятки проектів між основною заянятістю, верстка та розробка інтерактивних вебінтерфейсів.'
  },
  {
    id: 3,
    period: '2015 — 2016',
    logo: 'index-page/experience-section/meets.png',
    position: 'Frontend Developer',
    company: 'meets.com',
    description: 'Адаптивна верстка та JavaScript-розробка, портал знайомств'
  },
  {
    id: 4,
    period: '02.2016 — 12.2016',
    logo: 'index-page/experience-section/zcode.svg',
    position: 'Frontend Developer',
    company: 'ZR code',
    description: 'Робота над сайтом компанії, декілька супутніх проетів.'
  },
  {
    id: 5,
    period: '2017 — 09.2017',
    logo: 'index-page/experience-section/ss.svg',
    position: 'Frontend Developer',
    company: 'Syntech software',
    description: 'Робота над сайтом компанії, декілька супутніх проетів.'
  },
  {
    id: 6,
    period: '11.2018 — 09.2026',
    logo: 'index-page/experience-section/web-t.jpeg',
    position: 'Frontend Developer',
    company: 'Web-t',
    description: 'Проекти топ компаній України, Світу, різного маштабу'
  }
];
</script>

<template>
  <section
      id="experience"
      class="experience-section section"
  >
    <div class="center">
      <h2>
        Мій Досвід
      </h2>

      <div class="text-list">
        <div class="text">
          <div>

            <p>Мені подобається моя професія FullStack, і я хочу й надалі розвивати свої навички та професійно зростати
              в цьому напрямку.</p>

            <p>Зараз я шукаю не просто колег, а команду однодумців, яка справді цінує якість своєї роботи та продукту.
              Для мене важливо не працювати за принципом «швидко зробити, здати й забути», а створювати якісний і
              продуманий результат, за який не соромно.</p>

            <p>До кожного проєкту підходжу відповідально та уважно до деталей. Прагну створювати чистий і структурований
              код без зайвих стилів, непотрібного коду чи тимчасових рішень за принципом «аби працювало».</p>

            <p>Ініціативність — не просто виконую поставлені завдання, а пропоную власні ідеї та покращення, якщо бачу
              можливість зробити продукт або процес кращим. </p>💡

            <p>Завзятість — доводжу завдання до результату й не зупиняюся перед складнощами. Якщо виникає проблема,
              шукаю рішення, а не обхідний шлях. 💪</p>

            <p>Готовий розпочати роботу хоч із наступного дня. Так було і раніше: на попередньому місці роботи я
              пропрацював 7 років і, якби не війна, із задоволенням працював би там і далі.</p>

            <p>Буду радий поспілкуватися та розповісти більше про свій досвід, проєкти й те, як можу бути корисним вашій
              команді.</p>

            <div hidden="hidden">
              <p>
                Досвід самостійного створення повноцінних сайтів від А до Я. Розумію як
                оптимізувати код, файли, проект під Google Page Speed. Я спеціаліст не просто
                «переходу дизайну на браузерну мову», а ще з почуттям стиля і розуміння
                сучасних тенденцій.
              </p>

              <p>
                Професію яка приносить задоволення, коли починаю працювати, повністю
                поглинаюся в процес!
              </p>

              <p>
                Шукаю роботу на постійній основі в ОФІСІ з офіційним працевлаштуванням і
                Кар'єрним ростом. Також цікаво робота віддалено.
              </p>

              <p>
                Маю поняття як потрібно працювати віддалено, ставлюся до цього
                відповідально. Є веб-камера, високошвидкісний інтернет, все що потрібно для
                зв'язку, акамулятор на 7 годин, потужний ноутбук мешкаю в районі де не
                вимикали світло в минулому році.
              </p>

              <p>
                Преоритетним на даний момент є для мене розвиток і практичне
                використання: <strong>NodeJs, ES6, VueJs, ReactJs, React Native, TypeScript</strong>
              </p>

              <p>
                Робочий графік найбільше влаштовує з <strong>9:00 - 17:00 (7 робочих годин)</strong>
              </p>
            </div>
          </div>

          <div>
            <RouterLink
                to="/experience"
                class="btn"
            >
              <span>Детальнінше</span>

              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001" stroke="#fff" style="stroke:#fff;stroke-opacity:1;" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
          </div>
        </div>

        <ul class="list">
          <li
              v-for="item in experience"
              :key="item.id"
              class="item"
          >
            <div class="detail">
              <div class="logo-text">
                <div class="logo">
                  <img
                      :src="`src/assests/image/${item.logo}`"
                      :alt="item.company"
                      loading="lazy"
                      @error="setDefaultImage"
                  >
                </div>

                <div>
                  {{ item.period }}

                  <h4 class="title">
                    {{ item.position }}
                  </h4>

                  <p class="company">
                    {{ item.company }}
                  </p>
                </div>
              </div>

              <p class="description">
                {{ item.description }}
              </p>
            </div>

            <div></div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>