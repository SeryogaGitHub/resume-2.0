import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import 'animate.css';

import WOW from 'wow.js';

import './assets/scss/main.scss';

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app');

new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 100,
  mobile: true,
  live: true
}).init();