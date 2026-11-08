<script setup>
import {computed} from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  count: {
    type: Number,
    default: null
  }
});

const visibleItems = computed(() => {
  return props.count ? props.items.slice(0, props.count) : props.items;
});
</script>

<template>
  <ul class="list">
    <li
        v-for="item in visibleItems"
        :key="item.id"
        class="item"
    >
      <slot :item="item" />
    </li>
  </ul>
</template>