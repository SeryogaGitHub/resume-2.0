
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export const gsapAnimation = {
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


export const gsapTilt = {
  mounted(el, binding) {
    const options = {
      perspective: 650,
      rotation: 10,
      movement: 20,
      duration: 0.6,
      ease: 'power3.out',
      ...binding.value
    };

    gsap.set(el, {
      transformPerspective: options.perspective,
      transformStyle: 'preserve-3d',
      transformOrigin: 'center center'
    });

    const rotateX = gsap.quickTo(el, 'rotationX', {
      duration: options.duration,
      ease: options.ease
    });

    const rotateY = gsap.quickTo(el, 'rotationY', {
      duration: options.duration,
      ease: options.ease
    });

    const moveX = gsap.quickTo(el, 'x', {
      duration: options.duration,
      ease: options.ease
    });

    const moveY = gsap.quickTo(el, 'y', {
      duration: options.duration,
      ease: options.ease
    });

    const handlePointerMove = (e) => {
      if (e.pointerType === 'touch') return;

      const rect = el.getBoundingClientRect();

      const x = gsap.utils.clamp(
          0, 1,
          (e.clientX - rect.left) / rect.width
      );

      const y = gsap.utils.clamp(
          0, 1,
          (e.clientY - rect.top) / rect.height
      );

      rotateX(gsap.utils.interpolate(
          options.rotation,
          -options.rotation,
          y
      ));

      rotateY(gsap.utils.interpolate(
          -options.rotation,
          options.rotation,
          x
      ));

      moveX(gsap.utils.interpolate(
          -options.movement,
          options.movement,
          x
      ));

      moveY(gsap.utils.interpolate(
          -options.movement,
          options.movement,
          y
      ));
    };

    const reset = () => {
      rotateX(0);
      rotateY(0);
      moveX(0);
      moveY(0);
    };

    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerleave', reset);

    el._gsapTiltCleanup = () => {
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerleave', reset);
      gsap.killTweensOf(el);
    };
  },

  unmounted(el) {
    el._gsapTiltCleanup?.();
  }
};


export const gsapText = {
  mounted(el, binding) {
    const options = {
      duration: 1,
      y: 80,
      rotationX: 180,
      stagger: 0.05,
      ease: 'back.out(1.7)',
      delay: 0,
      ...binding.value
    };

    let split;

    const animate = async () => {
      await document.fonts.ready;

      if (!el.isConnected) return;

      split?.revert();

      split = SplitText.create(el, {
        type: 'chars, words',
        wordsClass: 'gsap-word',
        charsClass: 'gsap-char',
        aria: 'auto'
      });

      gsap.set(el, { autoAlpha: 1 });

      gsap.from(split.chars, {
        duration: options.duration,
        opacity: 0,
        scale: 0,
        y: options.y,
        rotationX: options.rotationX,
        transformOrigin: '0% 50% -50',
        ease: options.ease,
        stagger: options.stagger,
        delay: options.delay,
        onComplete: () => {
          split?.revert();
          split = null;
        }
      });
    };

    el._gsapTextAnimate = animate;

    if (binding.value?.autoplay !== false) {
      animate();
    }
  },

  unmounted(el) {
    el._gsapTextAnimate = null;
    gsap.killTweensOf(el);
  }
};

