<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="center">

      <div class="content">

        <p class="copyright">
          © {{ currentYear }} Сергій Липянець
        </p>

        <a
            href="#"
            class="back-to-top"
        >
          Back to top ↑
        </a>

      </div>

    </div>
  </footer>
</template>