<script setup>
import { reactive, ref, watch } from 'vue';

const form = reactive({
  email: ''
});

const emailError = ref('');

watch(
    () => form.email,
    (newValue) => {

      if (
          newValue &&
          !newValue.includes('@')
      ) {
        emailError.value = 'Некоректний email';
        return;
      }

      emailError.value = '';
    }
);
</script>

<template>

  <input
      v-model="form.email"
      type="email"
      placeholder="Email"
  >

  <p v-if="emailError">
    {{ emailError }}
  </p>

</template>