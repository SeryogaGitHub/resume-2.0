
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const SITE = 'https://seryogagithub.github.io/resume-2.0';

const locales = {
  uk: 'uk_UA',
  en: 'en_US',
  pl: 'pl_PL',
  de: 'de_DE',
  fr: 'fr_FR'
};

const projectIds = Array.from({ length: 14 }, (_, i) => i + 1);

function getAttribute(tag, attribute) {
  const escaped = attribute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = tag.match(
      new RegExp(`\\b${escaped}\\s*=\\s*["']([^"']*)["']`, 'i')
  );

  return match?.[1] ?? '';
}

function getMetaTags(html) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => match[0]);
}

function getLinkTags(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)].map(match => match[0]);
}

function getMeta(html, attribute, value) {
  return getMetaTags(html).filter(tag =>
      getAttribute(tag, attribute) === value
  );
}

function getLink(html, attribute, value) {
  return getLinkTags(html).filter(tag =>
      getAttribute(tag, attribute) === value
  );
}

function getContent(tag) {
  return getAttribute(tag, 'content');
}

function checkTag(report, tags, name, errors) {
  if (tags.length !== 1) {
    errors.push(`${name}: знайдено ${tags.length}, очікується 1`);
    return;
  }

  if (!getContent(tags[0]).trim()) {
    errors.push(`${name}: порожній content`);
  }
}

const results = [];

for (const id of projectIds) {
  for (const [locale, ogLocale] of Object.entries(locales)) {
    const relativePath = locale === 'uk'
        ? `projects/${id}.html`
        : `${locale}/projects/${id}.html`;

    const filePath = path.join(DIST, relativePath);
    const errors = [];

    if (!fs.existsSync(filePath)) {
      results.push({
        id,
        locale,
        status: 'FAIL',
        errors: ['HTML-файл не знайдено']
      });

      continue;
    }

    const html = fs.readFileSync(filePath, 'utf8');

    const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? '';
    const htmlLang = getAttribute(htmlTag, 'lang');

    if (htmlLang !== locale) {
      errors.push(`html lang: ${htmlLang || 'відсутній'}, очікується ${locale}`);
    }

    const titleTags = [...html.matchAll(/<title\b[^>]*>[\s\S]*?<\/title>/gi)];

    if (titleTags.length !== 1) {
      errors.push(`title: знайдено ${titleTags.length}, очікується 1`);
    } else if (!titleTags[0][0].replace(/<\/?title[^>]*>/gi, '').trim()) {
      errors.push('title: порожній');
    }

    checkTag(
        'description',
        getMeta(html, 'name', 'description'),
        'description',
        errors
    );

    const canonicalTags = getLink(html, 'rel', 'canonical');
    const expectedCanonical = `${SITE}/${locale === 'uk' ? '' : `${locale}/`}projects/${id}`;

    if (canonicalTags.length !== 1) {
      errors.push(`canonical: знайдено ${canonicalTags.length}, очікується 1`);
    } else {
      const actual = getAttribute(canonicalTags[0], 'href');

      if (actual !== expectedCanonical) {
        errors.push(`canonical: ${actual}`);
      }
    }

    for (const language of Object.keys(locales)) {
      const tags = getLink(html, 'hreflang', language);

      if (tags.length !== 1) {
        errors.push(`hreflang ${language}: знайдено ${tags.length}, очікується 1`);
        continue;
      }

      const expectedHref = language === 'uk'
          ? `${SITE}/projects/${id}`
          : `${SITE}/${language}/projects/${id}`;

      const actualHref = getAttribute(tags[0], 'href');

      if (actualHref !== expectedHref) {
        errors.push(`hreflang ${language}: неправильний URL`);
      }
    }

    const defaultTags = getLink(html, 'hreflang', 'x-default');

    if (defaultTags.length !== 1) {
      errors.push(`hreflang x-default: знайдено ${defaultTags.length}, очікується 1`);
    } else if (
        getAttribute(defaultTags[0], 'href') !== `${SITE}/projects/${id}`
    ) {
      errors.push('hreflang x-default: неправильний URL');
    }

    for (const [property, label] of [
      ['og:title', 'og:title'],
      ['og:description', 'og:description'],
      ['og:image', 'og:image'],
      ['og:locale', 'og:locale']
    ]) {
      const tags = getMeta(html, 'property', property);

      if (tags.length !== 1) {
        errors.push(`${label}: знайдено ${tags.length}, очікується 1`);
      } else if (!getContent(tags[0]).trim()) {
        errors.push(`${label}: порожній content`);
      }
    }

    const actualOgLocale = getMeta(html, 'property', 'og:locale');

    if (
        actualOgLocale.length === 1 &&
        getContent(actualOgLocale[0]) !== ogLocale
    ) {
      errors.push(`og:locale: очікується ${ogLocale}`);
    }

    for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
      const tags = getMeta(html, 'name', name);

      if (tags.length !== 1) {
        errors.push(`${name}: знайдено ${tags.length}, очікується 1`);
      } else if (!getContent(tags[0]).trim()) {
        errors.push(`${name}: порожній content`);
      }
    }

    results.push({
      id,
      locale,
      status: errors.length ? 'FAIL' : 'OK',
      errors
    });
  }
}

const passed = results.filter(item => item.status === 'OK').length;
const failed = results.length - passed;

console.log('\nSEO-ПЕРЕВІРКА ПРОЄКТІВ\n');

for (const result of results) {
  const status = result.status === 'OK' ? 'OK' : 'FAIL';

  console.log(
      `${status.padEnd(5)} | Проєкт ${String(result.id).padStart(2, '0')} | ${result.locale}`
  );

  for (const error of result.errors) {
    console.log(`      └─ ${error}`);
  }
}

console.log('\n------------------------------');
console.log(`Усього сторінок: ${results.length}`);
console.log(`Успішно:         ${passed}`);
console.log(`З помилками:     ${failed}`);
console.log('------------------------------\n');

if (failed > 0) {
  process.exitCode = 1;
}
