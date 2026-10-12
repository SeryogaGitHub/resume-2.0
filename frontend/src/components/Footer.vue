<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="center">

      <div class="flex">

        <p class="copyright">
          © {{ currentYear }} Сергій Липянець
        </p>

        <a
            href="#"
            class="back-to-top"
        >
          Вверх ↑
        </a>
      </div>
    </div>
  </footer>
</template>