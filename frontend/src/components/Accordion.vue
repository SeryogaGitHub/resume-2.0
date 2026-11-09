
<script setup>
import { ref, watch, nextTick, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);
const content = ref(null);

let split;
let animation;

watch(isOpen, async (value) => {
  if (!value) {
    animation?.kill();
    split?.revert();
    split = null;
    return;
  }

  await nextTick();
  await document.fonts.ready;

  if (!content.value) return;

  split?.revert();

  const text = content.value.querySelector('.accordion__text');

  if (!text) return;

  split = SplitText.create(text, {
    type: 'chars',
    charsClass: 'char'
  });

  animation = gsap.from(split.chars, {
    opacity: 0,
    y: 30,
    rotationX: 90,
    scale: 0.8,
    duration: 0.6,
    ease: 'back.out(1.7)',
    stagger: 0.02,
    onComplete: () => {
      split?.revert();
      split = null;
    }
  });
});

onUnmounted(() => {
  animation?.kill();
  split?.revert();
});
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
        ref="content"
        class="accordion__content"
        :class="{ 'is-open': isOpen }"
        :inert="!isOpen"
    >
      <div class="accordion__inner">
        <div class="accordion__text">
          <slot />
        </div>
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

    @media screen and (max-width: 768px){
      padding: 10px 0;
    }
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

.accordion {
  &__text {
    perspective: 500px;
  }

  &__text .char {
    display: inline-block;
    transform-style: preserve-3d;
  }
}
</style>