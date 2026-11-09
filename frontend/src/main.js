import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

import {
  gsapAnimation,
  gsapTilt,
  gsapText
} from '@/directives/gsap';

import './assets/scss/main.scss';

const app = createApp(App);

app.use(i18n);
app.use(router);

app.directive('gsap', gsapAnimation);
app.directive('gsap-tilt', gsapTilt);
app.directive('gsap-text', gsapText);

app.mount('#app');