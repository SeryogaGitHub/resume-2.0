<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});

const emit = defineEmits([
  'select'
]);
</script>

<template>
  <article class="project">

    <button
        type="button"
        class="image"
        @click="emit('select', project)"
    >
      {{ project.image }}
    </button>

    <div class="content">

      <p class="category">
        {{ project.category }}
      </p>

      <h3>
        {{ project.title }}
      </h3>

      <p>
        {{ project.description }}
      </p>

      <ul>
        <li
            v-for="technology in project.technologies"
            :key="technology"
        >
          {{ technology }}
        </li>
      </ul>

    </div>

  </article>
</template>