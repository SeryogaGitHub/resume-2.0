<script setup>
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);
</script>

<template>
  <div class="accordion">
    <button
        class="accordion__header"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
    >
      <span>{{ title }}</span>

      <span
          class="accordion__icon"
          :class="{ 'is-open': isOpen }"
          aria-hidden="true"
      >
        +
      </span>
    </button>

    <div
        class="accordion__content"
        :class="{ 'is-open': isOpen }"
        :inert="!isOpen"
    >
      <div class="accordion__inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  border-bottom: 1px solid #ddd;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    border: 0;
    background: transparent;
    text-align: left;
    font: inherit;
    cursor: pointer;
  }

  &__icon {
    font-size: 24px;
    transition: transform 0.3s ease;

    &.is-open {
      transform: rotate(45deg);
    }
  }

  &__content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.35s ease;

    &.is-open {
      grid-template-rows: 1fr;
    }
  }

  &__inner {
    min-height: 0;
    overflow: hidden;
  }

  &__content.is-open &__inner {
    padding-bottom: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .accordion__content,
  .accordion__icon {
    transition: none;
  }
}
</style>