<script setup>
import BaseList from "@/components/BaseList.vue";
import {RouterLink} from "vue-router";

defineProps({
  skills: {
    type: Object,
    required: true
  }
});
</script>

<template>
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
            <h4>{{ item.name }}</h4>
            <h5>{{ item.experience }}</h5>
          </div>
        </template>
      </BaseList>

      <RouterLink to="/skills" class="btn">
        <span>Детальнінше</span>

        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.700237 0.700073C0.700237 0.700073 5.7002 4.38249 5.7002 5.70007C5.7002 7.01774 0.700195 10.7001 0.700195 10.7001" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="stroke: rgb(255, 255, 255); stroke-opacity: 1;"></path></svg>
      </RouterLink>
    </div>
  </section>
</template>