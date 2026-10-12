<script setup>
import SkillItem from "@/components/home/SkillItem.vue";
import BaseList from "@/components/BaseList.vue";

const skills = [
  {
    id: 1,
    name: 'HTML / CSS',
    experience: '13+ років'
  },
  {
    id: 2,
    name: 'JavaScript',
    experience: '12+ років'
  },
  {
    id: 3,
    name: 'Vue.js',
    experience: '3+ років'
  },
  {
    id: 4,
    name: 'React',
    experience: '2+ років'
  },
  {
    id: 5,
    name: 'SCSS',
    experience: '10+ років'
  },
  {
    id: 6,
    name: 'Node.js',
    experience: 'Не комерційний досвід'
  }
];
</script>

<template>
  <section
      id="skills"
      class="skills-section section"
  >
    <div class="center">
      <h2>
        Technologies I Work With
      </h2>

      <BaseList :items="skills">
        <template #default="{ item }">
          <div class="skill">
            <h3>{{ item.name }}</h3>
            <h4>{{ item.experience }}</h4>
          </div>
        </template>
      </BaseList>
    </div>
  </section>
</template>