
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted(el, binding) {
    const options = {
      y: 40,
      duration: 0.8,
      delay: 0,
      ease: 'power2.out',
      ...binding.value
    };

    const animation = gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: options.y
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: options.duration,
          delay: options.delay,
          ease: options.ease,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none play reverse'
          }
        }
    );

    el._gsapAnimation = animation;
  },

  unmounted(el) {
    el._gsapAnimation?.scrollTrigger?.kill();
    el._gsapAnimation?.kill();
  }
};
