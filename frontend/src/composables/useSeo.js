import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { seo } from '@/data/seo';

export function useSeo(page = 'home') {
  const { locale } = useI18n();

  const updateSeo = () => {
    const content = seo[page];

    if (!content) return;

    const currentLocale = locale.value;

    const title = content.title?.[currentLocale];
    const description = content.description?.[currentLocale];

    if (!title || !description) return;

    document.title = title;
    document.documentElement.lang = currentLocale;

    let metaDescription = document.querySelector(
        'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  };

  watch(locale, updateSeo, { immediate: true });
}