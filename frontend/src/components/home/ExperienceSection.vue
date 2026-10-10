<script setup>
import BaseButton from "@/components/BaseButton.vue";

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
      <h2>
        Мій Досвід
      </h2>

      <div class="text-list">
        <div class="text">
          <div>A few honest words from the people we’ve worked with — thoughtful, useful, and built to last.</div>

          <div>
            <BaseButton type="button"
                        class="btn"
            >
              <span>Детальніше</span>

              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001" stroke="#fff" style="stroke:#fff;stroke-opacity:1;" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </BaseButton>
          </div>
        </div>

        <ul class="list">
          <li
              v-for="item in experience"
              :key="item.id"
              class="item"
          >
            <div class="detail">
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
            </div>

            <div></div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>