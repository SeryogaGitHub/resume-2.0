const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const notFoundPage = {
  title: localized(
      'Сторінку не знайдено',
      'Page not found',
      'Nie znaleziono strony',
      'Seite nicht gefunden',
      'Page introuvable'
  ),

  description: localized(
      'Схоже, цієї сторінки не існує або її було переміщено. Але не варто витрачати час на пошуки.',
      'It looks like this page doesn’t exist or has been moved. But there’s no need to waste your time searching.',
      'Wygląda na to, że ta strona nie istnieje lub została przeniesiona. Nie trać jednak czasu na jej szukanie.',
      'Diese Seite scheint nicht zu existieren oder wurde verschoben. Verschwenden Sie jedoch keine Zeit mit der Suche.',
      'Il semble que cette page n’existe pas ou qu’elle ait été déplacée. Inutile toutefois de perdre votre temps à la chercher.'
  ),

  suggestion: localized(
      'Перегляньте мої проєкти, дізнайтеся більше про мої послуги або зв’яжіться зі мною — можливо, саме тут ви знайдете те, що шукали.',
      'Explore my projects, learn more about my services or get in touch — you might find exactly what you were looking for.',
      'Zobacz moje projekty, poznaj moje usługi lub skontaktuj się ze mną — być może właśnie tutaj znajdziesz to, czego szukasz.',
      'Entdecken Sie meine Projekte, erfahren Sie mehr über meine Leistungen oder kontaktieren Sie mich — vielleicht finden Sie hier genau das, wonach Sie suchen.',
      'Découvrez mes projets, apprenez-en plus sur mes services ou contactez-moi — vous trouverez peut-être exactement ce que vous cherchez.'
  )
};
