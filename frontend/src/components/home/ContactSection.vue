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
      class="contact-section section"
  >
    <div class="center">

      <div class="heading">
        <p class="label">
          Contact
        </p>

        <h2>
          Let's work together
        </h2>
      </div>

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
        >
          Надіслати
        </button>

      </form>

    </div>
  </section>
</template>