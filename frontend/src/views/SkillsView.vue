<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BaseList from "@/components/BaseList.vue";

const skills = [
  {
    id: 1,
    name: 'HTML / CSS',
    experience: '13+ років',
    description: "Почав вивчати в 2009 році, коли ще популярні були лінії по яким рухається текст, і ве була в атрибутах 'font'"
  },
  {
    id: 2,
    name: 'JavaScript',
    experience: '12+ років',
    description: "Почав вивчати в 2009 році, коли ще популярні були лінії по яким рухається текст, і ве була в атрибутах 'font'"
  },
  {
    id: 3,
    name: 'Vue.js',
    experience: '3+ років',
    description: "Почав вивчати в 2009 році, коли ще популярні були лінії по яким рухається текст, і ве була в атрибутах 'font'"
  },
  {
    id: 4,
    name: 'React',
    experience: '2+ років'
    ,description: "Почав вивчати в 2009 році, коли ще популярні були лінії по яким рухається текст, і ве була в атрибутах 'font'"
  },
  {
    id: 5,
    name: 'SCSS',
    experience: '10+ років',
    description: "Почав вивчати в 2009 році, коли ще популярні були лінії по яким рухається текст, і ве була в атрибутах 'font'"
  },
  {
    id: 6,
    name: 'Node.js',
    experience: 'Не комерційний досвід',
    description: "Почав вивчати в 2009 році, коли ще популярні були лінії по яким рухається текст, і ве була в атрибутах 'font'"
  }
];
</script>

<template>
  <div class="skills page">
    <Header />

    <main class="main-content">
      <section
          id="skills"
          class="skills-section section"
      >
        <div class="center">
          <h2>
            Технології, з якими я працюю
          </h2>

          <BaseList :items="skills">
            <template #default="{ item }">
              <div class="skill-detail">
                <div class="skill">
                  <h3>{{ item.name }}</h3>
                  <h4>{{ item.experience }}</h4>
                </div>
              </div>

              <div class="detail">
                {{ item.description }}
              </div>
            </template>
          </BaseList>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>