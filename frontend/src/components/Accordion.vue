<script setup>
import { ref, watch, nextTick, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

defineProps({
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

  const text = content.value.querySelector('.accordion-text p');

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
        class="accordion-header"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
    >
      <span>{{ title }}</span>

      <span
          class="accordion-icon"
          :class="{ 'is-open': isOpen }"
          aria-hidden="true"
      >
        +
      </span>
    </button>

    <div
        ref="content"
        class="accordion-content"
        :class="{ 'is-open': isOpen }"
        :inert="!isOpen"
    >
      <div class="accordion-inner">
        <div class="accordion-text">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
