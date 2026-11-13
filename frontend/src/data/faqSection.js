
const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const faqSection = {
  title: localized(
      'Запитання',
      'FAQs',
      'FAQ',
      'FAQ',
      'FAQ'
  ),

  subtitle: localized(
      'Залишилися запитання?',
      'Still have questions?',
      'Masz jeszcze pytania?',
      'Noch Fragen?',
      'Vous avez encore des questions ?'
  ),

  items: [
    {
      id: 1,
      title: localized(
          'Який у вас досвід?',
          'How much experience do you have?',
          'Jakie masz doświadczenie?',
          'Wie viel Berufserfahrung haben Sie?',
          'Quelle est votre expérience professionnelle ?'
      ),
      description: localized(
          'Маю понад 13 років досвіду у веброзробці.',
          'I have over 13 years of experience in web development.',
          'Mam ponad 13 lat doświadczenia w tworzeniu stron internetowych.',
          'Ich habe über 13 Jahre Erfahrung in der Webentwicklung.',
          'J’ai plus de 13 ans d’expérience dans le développement web.'
      )
    },
    {
      id: 2,
      title: localized(
          'З якими технологіями працюєте?',
          'Which technologies do you work with?',
          'Z jakimi technologiami pracujesz?',
          'Mit welchen Technologien arbeiten Sie?',
          'Avec quelles technologies travaillez-vous ?'
      ),
      description: localized(
          'HTML, CSS, SCSS, Vite, JavaScript, Vue.js, React.js, Node.js та інші технології. За 13 років роботи у веброзробці я працював із великою кількістю технологій і добре розумію їхні основи, принципи роботи та взаємозв’язки. Вибір технології для мене — передусім питання завдання та вимог проєкту, а не складності. Швидко адаптуюся до нових інструментів і технологій залежно від потреб проєкту.',
          'HTML, CSS, SCSS, Vite, JavaScript, Vue.js, React.js, Node.js, and other technologies. With 13 years of web development experience, I have worked with a wide range of technologies and understand their fundamentals, principles, and relationships. Choosing a technology is primarily a matter of project requirements and goals, rather than complexity. I quickly adapt to new tools and technologies as needed.',
          'HTML, CSS, SCSS, Vite, JavaScript, Vue.js, React.js, Node.js i inne technologie. Przez 13 lat pracy w branży web development pracowałem z wieloma technologiami i dobrze rozumiem ich podstawy, zasady działania oraz wzajemne zależności. Wybór technologii to przede wszystkim kwestia wymagań i celów projektu, a nie stopnia trudności. Szybko dostosowuję się do nowych narzędzi i technologii w zależności od potrzeb projektu.',
          'HTML, CSS, SCSS, Vite, JavaScript, Vue.js, React.js, Node.js und weitere Technologien. In 13 Jahren Webentwicklung habe ich mit einer Vielzahl von Technologien gearbeitet und verstehe ihre Grundlagen, Funktionsweisen und Zusammenhänge. Die Wahl der Technologie hängt für mich vor allem von den Anforderungen und Zielen des Projekts ab, nicht von ihrer Komplexität. Ich passe mich schnell an neue Tools und Technologien an.',
          'HTML, CSS, SCSS, Vite, JavaScript, Vue.js, React.js, Node.js et d’autres technologies. Avec 13 ans d’expérience dans le développement web, j’ai travaillé avec un large éventail de technologies et je maîtrise leurs fondamentaux, leurs principes de fonctionnement et leurs interactions. Pour moi, le choix d’une technologie dépend avant tout des objectifs et des exigences du projet, et non de sa complexité. Je m’adapte rapidement aux nouveaux outils et technologies en fonction des besoins du projet.'
      )
    },
    {
      id: 3,
      title: localized(
          'Чи працюєте ви віддалено?',
          'Are you available for remote work?',
          'Czy pracujesz zdalnie?',
          'Arbeiten Sie remote?',
          'Êtes-vous disponible pour travailler à distance ?'
      ),
      description: localized(
          'Так, розглядаю віддалену співпрацю на постійній основі.',
          'Yes, I am open to long-term remote collaboration.',
          'Tak, jestem otwarty na stałą współpracę zdalną.',
          'Ja, ich bin an einer langfristigen Remote-Zusammenarbeit interessiert.',
          'Oui, je suis ouvert à une collaboration à distance sur le long terme.'
      )
    }
  ]
};
