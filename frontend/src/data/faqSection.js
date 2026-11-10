const localized = (uk, en, pl, de) => ({
  uk,
  en,
  pl,
  de
});

export const faqSection = {
  title: localized(
      "Запитання",
      "FAQ’s",
      "FAQ’s",
      "FAQ’s"
  ),

  subtitle: localized(
      'Залишилися запитання?',
      'Still have questions?',
      'Masz jeszcze pytania?',
      'Noch Fragen?'
  ),

  items: [
    {
      id: 1,
      title: localized(
          'Який у вас досвід?',
          'How much experience do you have?',
          'Jakie masz doświadczenie?',
          'Wie viel Berufserfahrung haben Sie?'
      ),
      description: localized(
          'Маю понад 13 років досвіду у веброзробці.',
          'I have over 13 years of experience in web development.',
          'Mam ponad 13 lat doświadczenia w tworzeniu stron internetowych.',
          'Ich habe über 13 Jahre Erfahrung in der Webentwicklung.'
      )
    },
    {
      id: 2,
      title: localized(
          'З якими технологіями працюєте?',
          'Which technologies do you work with?',
          'Z jakimi technologiami pracujesz?',
          'Mit welchen Technologien arbeiten Sie?'
      ),
      description: localized(
          'HTML, CSS, SCSS, JavaScript, Vue.js, React та інші технології.',
          'HTML, CSS, SCSS, JavaScript, Vue.js, React, and other technologies.',
          'HTML, CSS, SCSS, JavaScript, Vue.js, React i inne technologie.',
          'HTML, CSS, SCSS, JavaScript, Vue.js, React und weitere Technologien.'
      )
    },
    {
      id: 3,
      title: localized(
          'Чи працюєте ви віддалено?',
          'Are you available for remote work?',
          'Czy pracujesz zdalnie?',
          'Arbeiten Sie remote?'
      ),
      description: localized(
          'Так, розглядаю віддалену співпрацю на постійній основі.',
          'Yes, I am open to long-term remote collaboration.',
          'Tak, jestem otwarty na stałą współpracę zdalną.',
          'Ja, ich bin an einer langfristigen Remote-Zusammenarbeit interessiert.'
      )
    }
  ]
};
