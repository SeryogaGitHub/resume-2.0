<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log(form);
};
</script>

<template>
  <section
      id="contact"
      class="form-section section"
  >
    <div class="center">
      <h3>Enter a few lines — we’ll take it from there</h3>

      <p>
        Share a few details about your project so we can understand your needs and goals better.
      </p>

      <form
          class="form"
          @submit.prevent="submitForm"
      >

        <input
            v-model="form.name"
            type="text"
            placeholder="Ваше ім'я"
        >

        <input
            v-model="form.email"
            type="email"
            placeholder="Ваш email"
        >

        <textarea
            v-model="form.message"
            placeholder="Ваше повідомлення"
        ></textarea>

        <button
            type="submit"
            class="btn"
        >
          Надіслати
        </button>

      </form>
    </div>
  </section>
</template>