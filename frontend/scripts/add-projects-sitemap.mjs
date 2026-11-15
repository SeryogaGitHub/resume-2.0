
import fs from 'node:fs';

const sitemapPath = 'public/sitemap.xml';

const baseUrl = 'https://seryogagithub.github.io/resume-2.0';

const locales = ['uk', 'en', 'pl', 'de', 'fr'];

const projectIds = Array.from({ length: 14 }, (_, index) => index + 1);

const getUrl = (locale, id) => {
  const prefix = locale === 'uk' ? '' : `/${locale}`;

  return `${baseUrl}${prefix}/projects/${id}`;
};

const generateProjectUrl = (id, locale) => {
  const alternates = locales.map(language => {
    return `        <xhtml:link rel="alternate" hreflang="${language}" href="${getUrl(language, id)}" />`;
  });

  alternates.push(
      `        <xhtml:link rel="alternate" hreflang="x-default" href="${getUrl('uk', id)}" />`
  );

  return [
    '    <url>',
    `        <loc>${getUrl(locale, id)}</loc>`,
    ...alternates,
    '        <changefreq>monthly</changefreq>',
    '        <priority>0.7</priority>',
    '    </url>'
  ].join('\n');
};

const projectUrls = projectIds.flatMap(id => {
  return locales.map(locale => generateProjectUrl(id, locale));
});

const projectSection = [
  '    <!-- PROJECT DETAILS -->',
  ...projectUrls,
  '    <!-- END PROJECT DETAILS -->'
].join('\n');

let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Видаляємо попередню автоматично створену секцію,
// щоб повторний запуск не створював дублікати.
sitemap = sitemap.replace(
    /\s*<!-- PROJECT DETAILS -->[\s\S]*?<!-- END PROJECT DETAILS -->/,
    ''
);

sitemap = sitemap.replace(
    '</urlset>',
    `${projectSection}\n\n</urlset>`
);

fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('Sitemap updated successfully.');
console.log(`Project details: ${projectUrls.length} URLs`);
console.log('Total expected URLs: 100');
