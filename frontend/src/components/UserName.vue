<script setup>
import { ref, computed } from 'vue';

const firstName = ref('Сергій');
const lastName = ref('Липянець');

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});
</script>

<template>
  <div>

    <p>
      Ім'я: {{ firstName }}
    </p>

    <p>
      Прізвище: {{ lastName }}
    </p>

    <p>
      Повне ім'я: {{ fullName }}
    </p>

  </div>
</template>