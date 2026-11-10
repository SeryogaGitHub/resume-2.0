# resume-2.0

# node version 
v24.21.0

# breakpoint

1024, 768, 560, 460, 359

@include m(1024px){

}

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
# GSAP — підключення анімацій у Vue 3

У проєкті використовуються GSAP та його плагіни для створення анімацій появи блоків, текстових ефектів і 3D-взаємодії з елементами.

## 1. Встановлення GSAP

Встановлюємо бібліотеку:

```bash
npm install gsap
```

Імпортуємо GSAP та необхідні плагіни:

```js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
```

## 2. Структура файлів

Для зручності анімації можна винести в окремий файл із власними директивами Vue.

```text
src/
├── directives/
│   └── gsap.js
├── components/
│   └── Accordion.vue
├── main.js
└── App.vue
```

## 3. Підключення директив

У файлі `src/main.js` імпортуємо директиви:

```js
import {
  gsapAnimation,
  gsapTilt
} from '@/directives/gsap';
```

Реєструємо їх у Vue:

```js
const app = createApp(App);

app.directive('gsap', gsapAnimation);
app.directive('gsap-tilt', gsapTilt);

app.mount('#app');
```

Після реєстрації директиви доступні в усіх компонентах застосунку.

---

## 4. Анімація появи блоків — ScrollTrigger

Для анімації появи елементів під час прокручування сторінки використовується плагін `ScrollTrigger`.

Він відстежує положення елемента відносно вікна браузера та запускає анімацію, коли елемент потрапляє в задану область видимості.

### Використання

Достатньо додати директиву `v-gsap` до потрібного елемента:

```vue
<section v-gsap>
  <h2>Про мене</h2>
  <p>Інформація про мене</p>
</section>
```

### Налаштування анімації

Директиві можна передавати параметри:

```vue
<div
  v-gsap="{
    y: 60,
    duration: 1,
    delay: 0.2,
    ease: 'power2.out'
  }"
>
  Контент
</div>
```

| Параметр | Значення за замовчуванням | Опис |
|---|---|---|
| `y` | `40` | Початкове зміщення по вертикалі, px |
| `duration` | `0.8` | Тривалість анімації, секунди |
| `delay` | `0` | Затримка перед запуском, секунди |
| `ease` | `'power2.out'` | Тип плавності анімації |

### Приклад для кількох блоків

```vue
<section class="section">
  <h2 v-gsap>Про мене</h2>

  <div v-gsap="{ y: 50, delay: 0.1 }">
    Перший блок
  </div>

  <div v-gsap="{ y: 50, delay: 0.3 }">
    Другий блок
  </div>

  <div v-gsap="{ y: 50, delay: 0.5 }">
    Третій блок
  </div>
</section>
```

Кожен елемент запускає власну анімацію під час потрапляння в область видимості.

---

## 5. Анімація тексту — SplitText

`SplitText` — плагін GSAP, який дозволяє розбивати текст на окремі символи, слова або рядки та анімувати їх незалежно один від одного.

### Підключення

```js
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
```

### Приклад використання

```vue
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const title = ref(null);

let split;
let animation;

onMounted(async () => {
  await document.fonts.ready;

  split = SplitText.create(title.value, {
    type: 'chars',
    charsClass: 'char'
  });

  animation = gsap.from(split.chars, {
    opacity: 0,
    y: 30,
    rotationX: 90,
    scale: 0.8,
    duration: 0.6,
    ease: 'back.out(1.7)',
    stagger: 0.02,
    onComplete: () => {
      split?.revert();
      split = null;
    }
  });
});

onUnmounted(() => {
  animation?.kill();
  split?.revert();
});
</script>

<template>
  <h1 ref="title">
    Привіт! Я веброзробник
  </h1>
</template>
```

### Параметри SplitText

| Параметр | Опис |
|---|---|
| `type: 'chars'` | Розбиває текст на символи |
| `type: 'words'` | Розбиває текст на слова |
| `type: 'lines'` | Розбиває текст на рядки |
| `charsClass` | CSS-клас для окремих символів |

### Основні параметри анімації

| Параметр | Опис |
|---|---|
| `opacity` | Прозорість символів |
| `y` | Вертикальне зміщення, px |
| `rotationX` | Поворот по осі X |
| `scale` | Масштаб |
| `duration` | Тривалість анімації |
| `ease` | Плавність анімації |
| `stagger` | Затримка між появою символів |

### Анімація тексту в акордеоні

SplitText також можна використовувати під час відкриття акордеона.

Основна логіка:

```js
watch(isOpen, async (value) => {
  if (!value) {
    animation?.kill();
    split?.revert();
    split = null;
    return;
  }

  await nextTick();
  await document.fonts.ready;

  split = SplitText.create(content.value, {
    type: 'chars',
    charsClass: 'char'
  });

  animation = gsap.from(split.chars, {
    opacity: 0,
    y: 30,
    rotationX: 90,
    duration: 0.6,
    stagger: 0.02,
    ease: 'back.out(1.7)',
    onComplete: () => {
      split?.revert();
      split = null;
    }
  });
});
```

Для такого прикладу необхідно імпортувати `watch` і `nextTick` з Vue, а також оголосити `content`, `split` та `animation`.

**Важливо:** якщо всередині текстового контейнера є кнопки, посилання або інші компоненти, SplitText краще застосовувати лише до окремих текстових елементів.

---

## 6. Інтерактивний 3D-ефект — Tilt

Для створення 3D-ефекту використовується власна директива `v-gsap-tilt`.

Вона реагує на положення курсора та змінює нахил і зміщення елемента.

### Використання

```vue
<div v-gsap-tilt>
  3D-елемент
</div>
```

Директиву можна застосовувати до різних елементів:

```vue
<div v-gsap-tilt class="card">
  Картка
</div>

<button v-gsap-tilt>
  Натиснути
</button>

<img v-gsap-tilt src="@/assets/image/photo.jpg" alt="Фото">
```

### Налаштування 3D-ефекту

```vue
<div
  v-gsap-tilt="{
    perspective: 650,
    rotation: 10,
    movement: 20,
    duration: 0.6,
    ease: 'power3.out'
  }"
>
  Контент
</div>
```

| Параметр | Значення за замовчуванням | Опис |
|---|---|---|
| `perspective` | `650` | Глибина 3D-перспективи, px |
| `rotation` | `10` | Максимальний кут нахилу, градуси |
| `movement` | `20` | Максимальне зміщення, px |
| `duration` | `0.6` | Тривалість переходу, секунди |
| `ease` | `'power3.out'` | Плавність руху |

### 3D-ефект для кнопок і дрібних елементів

Для невеликих елементів доцільно використовувати меншу перспективу та більший кут нахилу.

```vue
<button
  v-gsap-tilt="{
    perspective: 300,
    rotation: 20,
    movement: 8,
    duration: 0.4,
    ease: 'power3.out'
  }"
>
  Кнопка
</button>
```

Результат — помітніший 3D-нахил із невеликим зміщенням кнопки.

### Як працює ефект

1. Визначається положення курсора відносно елемента.
2. Обчислюються координати по горизонталі та вертикалі.
3. Залежно від координат змінюються `rotationX` та `rotationY`.
4. Додатково змінюються `x` та `y` для створення ефекту руху.
5. Після виходу курсора за межі елемента трансформації повертаються до початкового стану.

На сенсорних пристроях ефект не запускається, якщо використовується перевірка `pointerType === 'touch'`.

---

## 7. Офіційна документація

- [GSAP — основна документація](https://gsap.com/docs/v3/)
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [SplitText](https://gsap.com/docs/v3/Plugins/SplitText/)
- [GSAP QuickTo](https://gsap.com/docs/v3/GSAP/gsap.quickTo/)
- [Vue 3 — власні директиви](https://vuejs.org/guide/reusability/custom-directives.html)