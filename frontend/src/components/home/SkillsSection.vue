<script setup>
import SkillItem from "@/components/home/SkillItem.vue";
import BaseList from "@/components/BaseList.vue";

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

      <BaseList :items="skills">
        <template #default="{ item }">
          <div class="skill">
            <h3>{{ item.name }}</h3>
            <p>Рівень: {{ item.level }}</p>
            <h4>{{ item.experience }}</h4>
          </div>
        </template>
      </BaseList>
    </div>
  </section>
</template>