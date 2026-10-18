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
        Детальніше →
      </RouterLink>
    </div>
  </section>
</template>