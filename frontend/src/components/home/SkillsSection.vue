
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

import BaseList from '@/components/BaseList.vue';
import { buttons } from '@/data/buttons.js';

const props = defineProps({
  skills: {
    type: Array,
    required: true
  },
  skillsSection: {
    type: Object,
    required: true
  }
});

const { locale } = useI18n({ useScope: 'global' });

const translate = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return value?.[locale.value] ?? '';
};

const localizedSkills = computed(() =>
    props.skills.map(skill => ({
      ...skill,
      name: translate(skill.name),
      experience: translate(skill.experience),
      description: translate(skill.description)
    }))
);
</script>

<template>
  <section id="skills" class="skills-section section">
    <div class="center">

      <h2
        :key="locale"
        v-gsap-text="{
          opacity: 0,
          y: 20,
          duration: 2,
          stagger: 0.2,
          delay: 0,
          ease: 'power3.out'
        }"
      >
        {{ skillsSection.title[locale] }}
      </h2>

      <BaseList :items="localizedSkills" :count="6">
        <template #default="{ item }">
          <div class="skill-detail" v-gsap>
            <h4>{{ item.name }}</h4>
            <h5>{{ item.experience }}</h5>
          </div>
        </template>
      </BaseList>

      <RouterLink
          to="/skills"
          class="btn"
          v-gsap-tilt="{
          perspective: 300,
          rotation: 20,
          movement: 8,
          duration: 0.4,
          ease: 'power3.out'
        }"
      >
        <span>{{ buttons.learnMore[locale] }}</span>

        <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001"
              stroke="#fff"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </RouterLink>

    </div>
  </section>
</template>
