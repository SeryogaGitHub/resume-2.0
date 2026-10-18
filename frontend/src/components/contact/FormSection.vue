<script setup>
import { reactive } from 'vue';
import BaseButton from "@/components/BaseButton.vue";

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
      <h3>Напишіть кілька рядків — а далі я зв'яжус з вама.</h3>

      <p>
        Поділіться деталями про ваші проєкти, щоб ми я міг краще зрозуміти ваші потреби та цілі.
      </p>


      <form
          class="form"
          @submit.prevent="submitForm"
      >

        <input
            v-model="form.name"
            type="text"
            placeholder="Ваше ім'я:"
        >

        <input
            v-model="form.email"
            type="email"
            placeholder="Ваш email:"
        >

        <textarea
            v-model="form.message"
            placeholder="Ваше повідомлення:"
        ></textarea>

        <div class="wrap-button">
          <BaseButton type="button" class="btn">Надіслати</BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>