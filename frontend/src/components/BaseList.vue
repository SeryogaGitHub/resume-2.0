<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <ul class="list">
    <li
        v-for="item in items"
        :key="item.id"
        class="item"
    >
      <slot :item="item" />
    </li>
  </ul>
</template>