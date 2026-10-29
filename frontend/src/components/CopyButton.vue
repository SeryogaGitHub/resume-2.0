<script setup>
import { ref, onBeforeUnmount } from 'vue'

const props = defineProps({
  copy: {
    type: String,
    required: true,
  },
})

const isCopied = ref(false)

let timeoutId

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(props.copy)

    isCopied.value = true

    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Не вдалося скопіювати текст:', error)
  }
}

onBeforeUnmount(() => {
  clearTimeout(timeoutId)
})
</script>

<template>
  <button
      class="copy-js"
      :class="{ active: isCopied }"
      type="button"
      aria-label="Копіювати"
      @click="copyText"
  >
    <svg
        class="not-ok"
        width="12"
        height="12"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M16.15 16.75H6.35C6.19087 16.75 6.03826 16.6868 5.92574 16.5743C5.81321 16.4617 5.75 16.3091 5.75 6.35C5.75 6.19087 5.81321 6.03826 5.92574 5.92574C6.03826 5.81321 6.19087 5.75 6.35 5.75H16.15C16.3091 5.75 16.4617 5.81321 16.5743 5.92574C16.6868 6.03826 16.75 6.19087 16.75 6.35V16.15C16.75 16.3091 16.6868 16.4617 16.5743 16.5743C16.4617 16.6868 16.3091 16.75 16.15 16.75Z"
          stroke="#212121"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
      />
      <path
          d="M11.75 5.75V1.35C11.75 1.19087 11.6868 1.03826 11.5743 0.925736C11.4617 0.813214 11.3091 0.75 11.15 0.75H1.35C1.19087 0.75 1.03826 0.813214 0.925736 0.925736C0.813214 1.03826 0.75 1.19087 0.75 1.35V11.15C0.75 11.3091 0.813214 11.4617 0.925736 11.5743C1.03826 11.6868 1.19087 11.75 1.35 11.75H5.75"
          stroke="#212121"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
      />
    </svg>

    <svg
        class="ok"
        width="14"
        height="10"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M5.4987 9.50008L1.9987 6.00008L0.832031 7.16675L5.4987 11.8334L15.4987 1.83341L14.332 0.666748L5.4987 9.50008Z"
          fill="#212121"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">

</style>
