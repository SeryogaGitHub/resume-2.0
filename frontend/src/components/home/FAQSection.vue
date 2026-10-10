<script setup>

import Accordion from "@/components/Accordion.vue";
</script>

<template>
  <section class="faq-section">
    <div class="center">
      <h2>FAQ’s</h2>

      <div class="wrap-accordion-list">
        <div class="left">
          <div class="image">
            <img src="@img/section/faq-section/faq-section.jpg" alt="">
            <h3 class="mt-24">Still have questions?</h3>
          </div>
        </div>

        <div class="accordion-list">
          <Accordion title="Який у вас досвід?">
            <p>
              Маю понад 13 років досвіду у веброзробці.
            </p>
          </Accordion>

          <Accordion title="З якими технологіями працюєте?">
            <p>
              HTML, CSS, SCSS, JavaScript, Vue.js,
              React та інші технології.
            </p>
          </Accordion>

          <Accordion title="Чи працюєте ви віддалено?">
            <p>
              Так, розглядаю віддалену співпрацю.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>