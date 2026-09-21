<script setup>
import BaseCard from "@/components/BaseCard.vue";

defineProps({
  name: {
    type: String,
    required: true
  },

  level: {
    type: String,
    required: true,

    validator(value) {
      return [
        'Beginner',
        'Intermediate',
        'Advanced'
      ].includes(value);
    }
  },

  experience: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <article class="skill">
    <BaseCard>
      <template #header>
        <h3>
          {{ name }}
        </h3>
      </template>

      <hr>

      <template #level>
        <p>
          {{ level }}
        </p>
      </template>

      <template #experience>
        <h4>{{ experience }}</h4>
      </template>
    </BaseCard>
  </article>
</template>