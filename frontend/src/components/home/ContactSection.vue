<script setup>
const contacts = [
  {
    id: 1,
    title: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com'
  },
  {
    id: 2,
    title: 'LinkedIn',
    value: 'LinkedIn',
    href: '#'
  },
  {
    id: 3,
    title: 'GitHub',
    value: 'GitHub',
    href: '#'
  }
];
</script>

<template>
  <section
      id="contact"
      class="contact-section section"
  >
    <div class="center">

      <div class="heading">
        <p class="label">
          Contact
        </p>

        <h2>
          Let's work together.
        </h2>

        <p class="description">
          Якщо у вас є цікавий проєкт або пропозиція
          щодо співпраці — зв'яжіться зі мною.
        </p>
      </div>

      <div class="list">

        <a
            v-for="contact in contacts"
            :key="contact.id"
            :href="contact.href"
            class="item"
        >
          <span class="title">
            {{ contact.title }}
          </span>

          <span class="value">
            {{ contact.value }}
          </span>
        </a>

      </div>

    </div>
  </section>
</template>