<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BaseList from "@/components/BaseList.vue";
import { skills } from '@/data/skills.js';
import { tools } from '@/data/tools.js';
import OpenProjects from "@/components/OpenProjects.vue";
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
          <h2>Технології</h2>

          <BaseList :items="skills">
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

          <h2 class="mt-60">Інструменти</h2>

          <BaseList :items="tools">
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