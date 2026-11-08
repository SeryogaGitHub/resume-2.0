
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import Network from '@/components/Network.vue';
import CopyButton from '@/components/CopyButton.vue';

import { contactSection } from '@data/contactSection';

const { locale } = useI18n();

const translate = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return value?.[locale.value] ?? '';
};

const localizedContact = computed(() => ({
  title: translate(contactSection.title),
  location: translate(contactSection.location),
  description: translate(contactSection.description),
  email: translate(contactSection.email),
  phone: translate(contactSection.phone)
}));
</script>

<template>
  <section class="section top-contact">
    <div class="center">
      <div class="items">
        <div class="text">
          <h1>{{ localizedContact.title }}</h1>

          <h4 class="title">
            {{ localizedContact.location }}
          </h4>

          <p>
            {{ localizedContact.description }}
          </p>

          <div class="mt-24">
            {{ localizedContact.email }}:

            <a href="mailto:main.email.seryoga@gmail.com">
              main.email.seryoga@gmail.com
            </a>

            <CopyButton copy="main.email.seryoga@gmail.com" />
          </div>

          <div class="mt-24">
            {{ localizedContact.phone }}:

            <a href="tel:+380961225761">
              +380 96 122 57 61
            </a>

            <CopyButton copy="+380961225761" />
          </div>

          <Network class="mt-24" id="network-contact" />
        </div>

        <div class="image">
          <img
              src="@img/contact-page/contact-image.jpg"
              loading="lazy"
              alt="Contact"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
