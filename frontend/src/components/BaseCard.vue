<script setup>
</script>
<template>
  <article class="card">

    <header class="header">
      <slot name="header" />
    </header>

    <slot />

    <div class="info">
      <slot name="level" />

      <slot name="experience" />
    </div>

  </article>
</template>