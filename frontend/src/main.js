
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

import gsapAnimation from '@/directives/gsap';

import '@scss/main.scss';

const app = createApp(App);

app.use(i18n);
app.use(router);

app.directive('gsap', gsapAnimation);

app.mount('#app');
