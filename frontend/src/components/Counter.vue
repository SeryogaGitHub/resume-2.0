<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>

  <button
      type="button"
      @click="toggle"
  >
    {{ isOpen ? 'Закрити' : 'Відкрити' }}
  </button>

  <p v-if="isOpen">
    Контент відкритий
  </p>

</template>