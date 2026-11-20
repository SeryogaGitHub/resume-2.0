<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BaseList from '@/components/BaseList.vue';
import OpenProjects from '@/components/OpenProjects.vue';

import {skills, skillsView} from '@/data/skills.js';
import {tools, toolsView} from '@/data/tools.js';
import { useSeo } from '@/composables/useSeo';

useSeo('skills');
const { locale } = useI18n();

const translate = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return value?.[locale.value] ?? '';
};

const localizedSkills = computed(() => ({
  title: translate(skillsView.title),
  skills: skills.map(item => ({
    ...item,
    name: translate(item.name),
    experience: translate(item.experience),
    description: translate(item.description)
  }))
}));

const localizedTools = computed(() => ({
  title: translate(toolsView.title),
  tools: tools.map(item => ({
    ...item,
    name: translate(item.name),
    experience: translate(item.experience),
    description: translate(item.description)
  }))
}));
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
          <h2 :key="locale"
              v-gsap-text="{
              opacity: 0,
              y: 20,
              duration: 0.3,
              stagger: 0.2,
              ease: 'power3.out'
            }">{{ localizedSkills.title }}</h2>

          <BaseList :items="localizedSkills.skills">
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

          <h2 :key="locale"
              v-gsap-text="{
              opacity: 0,
              y: 20,
              duration: 0.7,
              stagger: 0.2,
              ease: 'power3.out'
            }" class="mt-60">
            {{ localizedTools.title }}
          </h2>

          <BaseList :items="localizedTools.tools">
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