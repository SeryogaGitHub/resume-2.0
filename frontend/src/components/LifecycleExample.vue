<script setup>
import {
  ref,
  computed,
  watch,
  onMounted,
  onUpdated,
  onUnmounted
} from 'vue';

const count = ref(0);

const doubleCount = computed(() => {
  return count.value * 2;
});

const multiply = computed(() => {
  return count.value * 10;
});

watch(count, (newValue, oldValue) => {
  console.log(
      'Count:',
      oldValue,
      '→',
      newValue
  );
});

onMounted(() => {
  console.log('Компонент змонтований');
});

onUpdated(() => {
  console.log('DOM оновлено');
});

onUnmounted(() => {
  console.log('Компонент видалений');
});

const increment = () => {
  count.value++;
};

const ten = () => {
  count.value *= 10
};

const reset = () => {
  count.value = 0;
};
</script>

<template>
  <section class="lifecycle-example">
    <h2>
      Lifecycle Example
    </h2>

    <p>
      Count: {{ count }}
    </p>

    <p>
      Double: {{ doubleCount }}
    </p>

    <p>
      {{ multiply }}
    </p>

    <button
        type="button"
        @click="increment"
    >
      Додати
    </button>

    <button
        type="button"
        @click="ten"
    >
      множити на 10
    </button>

    <button
        type="button"
        @click="reset"
    >
      Скинути
    </button>
  </section>
</template>