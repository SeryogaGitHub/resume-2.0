<script setup>
import { reactive } from 'vue';

const user = reactive({
  name: 'Сергій Липянець',
  position: 'Frontend Developer',
  experience: '12+ років'
});


</script>

<template>
  <div class="user-profile">

    <h2>
      {{ user.name }}
    </h2>

    <p>
      {{ user.position }}
    </p>

    <p>
      Досвід: {{ user.experience }}
    </p>

  </div>
</template>