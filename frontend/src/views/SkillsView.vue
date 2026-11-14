<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BaseList from '@/components/BaseList.vue';
import OpenProjects from '@/components/OpenProjects.vue';

import { skills } from '@/data/skills.js';
import { tools } from '@/data/tools.js';
import { useSeo } from '@/composables/useSeo';

useSeo('skills');
const { locale } = useI18n();

const translate = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return value?.[locale.value] ?? '';
};

const localizedSkills = computed(() =>
    skills.map(item => ({
      ...item,
      name: translate(item.name),
      experience: translate(item.experience),
      description: translate(item.description)
    }))
);

const localizedTools = computed(() =>
    tools.map(item => ({
      ...item,
      name: translate(item.name),
      experience: translate(item.experience),
      description: translate(item.description)
    }))
);

const sectionTitles = computed(() => {
  const translations = {
    uk: {
      skills: 'Технології',
      tools: 'Інструменти'
    },
    en: {
      skills: 'Technologies',
      tools: 'Tools'
    },
    pl: {
      skills: 'Technologie',
      tools: 'Narzędzia'
    },
    de: {
      skills: 'Technologien',
      tools: 'Werkzeuge'
    }
  };

  return translations[locale.value] ?? translations.uk;
});
</script>

<template>
  <div class="skills page">
    <Header />

    <main class="main-content">
      <section
          id="skills"
          class="skills-section full-detail section"
      >
        <div class="center">
          <h2>{{ sectionTitles.skills }}</h2>

          <BaseList :items="localizedSkills">
            <template #default="{ item }">
              <div class="skill-detail">
                <div class="skill">
                  <h3>{{ item.name }}</h3>
                  <h4>{{ item.experience }}</h4>
                </div>

                <div class="detail mt-24">
                  {{ item.description }}
                </div>
              </div>
            </template>
          </BaseList>

          <h2 class="mt-60">
            {{ sectionTitles.tools }}
          </h2>

          <BaseList :items="localizedTools">
            <template #default="{ item }">
              <div class="skill-detail">
                <div class="skill">
                  <h3>{{ item.name }}</h3>
                  <h4>{{ item.experience }}</h4>
                </div>

                <div class="detail mt-24">
                  {{ item.description }}
                </div>
              </div>
            </template>
          </BaseList>
        </div>
      </section>

      <OpenProjects />
    </main>

    <Footer />
  </div>
</template>