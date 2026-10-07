<script setup>
import {
  onMounted,
  onUnmounted
} from 'vue';

let timer;

onMounted(() => {
  timer = setInterval(() => {
    console.log('Таймер працює');
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);

  console.log('Таймер зупинено');
});
</script>

<template>
  <div>
    Таймер
  </div>
</template>