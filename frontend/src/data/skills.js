
const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const skills = [
  {
    id: 1,
    name: 'HTML / CSS',
    experience: localized(
        '16+ років',
        '16+ years',
        '16+ lat',
        '16+ Jahre',
        '16+ ans'
    ),
    description: localized(
        'Працюю з HTML і CSS з 2009 року. Пройшов шлях від перших вебсторінок із застарілими HTML-атрибутами до сучасної адаптивної та семантичної верстки. Постійно вдосконалюю підходи до розробки, вивчаю нові можливості стандартів і знаходжу ефективні рішення для складних інтерфейсів.',
        'I have been working with HTML and CSS since 2009. I have progressed from creating early web pages using outdated HTML attributes to modern responsive and semantic markup. I continuously improve my development practices, explore new web standards and find effective solutions for complex interfaces.',
        'Pracuję z HTML i CSS od 2009 roku. Przeszedłem drogę od tworzenia pierwszych stron internetowych z użyciem przestarzałych atrybutów HTML do nowoczesnego, responsywnego i semantycznego kodowania. Stale doskonalę swoje podejście do tworzenia stron, poznaję nowe możliwości standardów i znajduję skuteczne rozwiązania dla złożonych interfejsów.',
        'Ich arbeite seit 2009 mit HTML und CSS. Dabei habe ich mich von den ersten Webseiten mit veralteten HTML-Attributen bis hin zu modernem, responsivem und semantischem Markup weiterentwickelt. Ich verbessere kontinuierlich meine Arbeitsweise, beschäftige mich mit neuen Webstandards und finde effektive Lösungen für komplexe Oberflächen.',
        'Je travaille avec HTML et CSS depuis 2009. J’ai évolué de la création de premières pages web utilisant des attributs HTML obsolètes vers une intégration moderne, responsive et sémantique. J’améliore continuellement mes méthodes de développement, explore les nouvelles possibilités des standards web et trouve des solutions efficaces pour les interfaces complexes.'
    )
  },
  {
    id: 2,
    name: 'JavaScript',
    experience: localized(
        '12+ років',
        '12+ years',
        '12+ lat',
        '12+ Jahre',
        '12+ ans'
    ),
    description: localized(
        'Маю практичний досвід розробки інтерактивних елементів інтерфейсу: слайдерів, попапів, кастомних select-компонентів, анімацій та інших UI-рішень. Працюю з npm-бібліотеками, створюю власні компоненти та використовую JavaScript у розробці на Vue.js, React і Node.js.',
        'I have hands-on experience developing interactive UI elements, including sliders, popups, custom select components, animations and other UI solutions. I work with npm libraries, build custom components and use JavaScript in Vue.js, React and Node.js development.',
        'Mam praktyczne doświadczenie w tworzeniu interaktywnych elementów interfejsu, takich jak slidery, popupy, niestandardowe komponenty select, animacje i inne rozwiązania UI. Pracuję z bibliotekami npm, tworzę własne komponenty i wykorzystuję JavaScript w projektach opartych na Vue.js, React i Node.js.',
        'Ich verfüge über praktische Erfahrung in der Erstellung interaktiver UI-Elemente wie Slider, Pop-ups, benutzerdefinierte Select-Komponenten, Animationen und anderer UI-Lösungen. Ich arbeite mit npm-Bibliotheken, entwickle eigene Komponenten und setze JavaScript in Projekten mit Vue.js, React und Node.js ein.',
        'J’ai une expérience pratique dans le développement d’éléments d’interface interactifs : sliders, fenêtres pop-up, composants select personnalisés, animations et autres solutions UI. Je travaille avec des bibliothèques npm, crée mes propres composants et utilise JavaScript dans des projets développés avec Vue.js, React et Node.js.'
    )
  },
  {
    id: 3,
    name: 'Vue.js',
    experience: localized(
        '3+ роки',
        '3+ years',
        '3+ lata',
        '3+ Jahre',
        '3+ ans'
    ),
    description: localized(
        'Маю практичний досвід роботи з Vue.js, зокрема у створенні компонентів та інтерактивних елементів інтерфейсу. Використовував технологію для розробки власного сайту-резюме та закріплення знань на практиці. Постійно поглиблюю розуміння екосистеми Vue.js, компонентного підходу та сучасних принципів розробки.',
        'I have practical experience working with Vue.js, particularly in developing components and interactive UI elements. I have used the technology to build my own portfolio website and apply my knowledge in practice. I continuously deepen my understanding of the Vue.js ecosystem, component-based architecture and modern development principles.',
        'Mam praktyczne doświadczenie w pracy z Vue.js, w szczególności w tworzeniu komponentów i interaktywnych elementów interfejsu. Wykorzystałem tę technologię do stworzenia własnej strony z portfolio i rozwijania umiejętności w praktyce. Stale poszerzam wiedzę na temat ekosystemu Vue.js, podejścia komponentowego i nowoczesnych zasad tworzenia aplikacji.',
        'Ich habe praktische Erfahrung mit Vue.js, insbesondere bei der Erstellung von Komponenten und interaktiven UI-Elementen. Ich habe diese Technologie für die Erstellung meiner eigenen Portfolio-Website genutzt, um meine Kenntnisse praktisch zu vertiefen. Ich erweitere kontinuierlich mein Verständnis des Vue.js-Ökosystems, der Arbeit mit Komponenten und moderner Erstellungsregeln.',
        'J’ai une expérience pratique avec Vue.js, notamment dans la création de composants et d’éléments d’interface interactifs. J’ai utilisé cette technologie pour développer mon propre site portfolio et mettre mes connaissances en pratique. J’approfondis continuellement ma compréhension de l’écosystème Vue.js, de l’approche par composants et des principes modernes de développement.'
    )
  },
  {
    id: 4,
    name: 'React',
    experience: localized(
        '3+ роки',
        '3+ years',
        '3+ lata',
        '3+ Jahre',
        '3+ ans'
    ),
    description: localized(
        'Маю досвід роботи з React у комерційних проєктах, зокрема над проєктом сервісу доставки їжі для ринку ОАЕ у 2017 році. Працював над проєктом у команді з досвідченішим розробником. Також використовував React у подальших проєктах для створення інтерактивних компонентів та інтерфейсів.',
        'I have experience working with React on commercial projects, including a food delivery service for the UAE market in 2017. I worked on the project as part of a team alongside a more experienced developer. I also used React in subsequent projects to build interactive components and user interfaces.',
        'Mam doświadczenie w pracy z React w projektach komercyjnych, w tym przy tworzeniu serwisu dostawy jedzenia na rynek ZEA w 2017 roku. Pracowałem nad tym projektem w zespole z bardziej doświadczonym programistą. Wykorzystywałem również React w kolejnych projektach do tworzenia interaktywnych komponentów i interfejsów.',
        'Ich habe Erfahrung mit React in kommerziellen Projekten, darunter die Erstellung eines Essenslieferdienstes für den Markt der Vereinigten Arabischen Emirate im Jahr 2017. Ich arbeitete dabei in einem Team mit einem erfahreneren Entwickler. Auch in späteren Projekten habe ich React zur Erstellung interaktiver Komponenten und Oberflächen eingesetzt.',
        'J’ai travaillé avec React sur des projets commerciaux, notamment sur un service de livraison de repas destiné au marché des Émirats arabes unis en 2017. J’ai participé à ce projet au sein d’une équipe, aux côtés d’un développeur plus expérimenté. J’ai également utilisé React dans des projets ultérieurs pour créer des composants et des interfaces interactifs.'
    )
  },
  {
    id: 5,
    name: 'SCSS',
    experience: localized(
        '10+ років',
        '10+ years',
        '10+ lat',
        '10+ Jahre',
        '10+ ans'
    ),
    description: localized(
        'Високий рівень володіння SCSS. Використовую препроцесор у повсякденній роботі для створення масштабованих стилів, повторного використання коду та підтримки структури проєктів. Маю досвід роботи з Grunt, Gulp і Vite.',
        'Advanced knowledge of SCSS. I use this preprocessor in my daily work to create scalable stylesheets, reuse code and maintain well-organized project structures. I have experience working with Grunt, Gulp and Vite.',
        'Bardzo dobra znajomość SCSS. Na co dzień korzystam z tego preprocesora do tworzenia skalowalnych stylów, ponownego wykorzystywania kodu i utrzymywania uporządkowanej struktury projektów. Mam doświadczenie w pracy z Grunt, Gulp i Vite.',
        'Sehr gute SCSS-Kenntnisse. Ich verwende diesen Tool täglich, um skalierbare Stylesheets zu erstellen, Code wiederzuverwenden und eine übersichtliche Struktur des Projekts beizubehalten. Ich habe Erfahrung mit Grunt, Gulp und Vite.',
        'Je maîtrise très bien SCSS. J’utilise ce préprocesseur au quotidien pour créer des feuilles de style évolutives, réutiliser le code et maintenir une structure de projet organisée. J’ai également de l’expérience avec Grunt, Gulp et Vite.'
    )
  },
  {
    id: 6,
    name: 'Node.js',
    experience: localized(
        '1+ рік',
        '1+ year',
        '1+ rok',
        '1+ Jahr',
        '1+ an'
    ),
    description: localized(
        'Розвиваюся у напрямі Backend-розробки. Маю практичний некомерційний досвід роботи з Node.js, розумію принципи побудови серверної частини застосунків, створюю REST API та працюю з базами даних MySQL, PostgreSQL і MongoDB. Один із пріоритетних напрямів професійного розвитку — Full-stack розробка.',
        'I am developing my skills in backend development. I have practical, non-commercial experience with Node.js, understand the principles of building application backends, create REST APIs and work with MySQL, PostgreSQL and MongoDB databases. Full-stack development is one of my main professional development priorities.',
        'Rozwijam się w kierunku programowania backendowego. Mam praktyczne, niekomercyjne doświadczenie z Node.js, rozumiem zasady budowania zaplecza aplikacji, tworzę REST API i pracuję z bazami danych MySQL, PostgreSQL oraz MongoDB. Jednym z głównych kierunków mojego rozwoju zawodowego jest Full-stack development.',
        'Ich entwickle mich im Bereich der Backend weiter. Ich verfüge über praktische, nicht-kommerzielle Erfahrung mit Node.js, verstehe die Grundlagen der Erstellung Server-Anwendungen, erstelle REST-APIs und arbeite mit den Datenbanken MySQL, PostgreSQL und MongoDB. Full-Stack-Erstellung ist einer meiner wichtigsten beruflichen Ziele.',
        'Je développe mes compétences en développement backend. J’ai une expérience pratique non commerciale avec Node.js, je comprends les principes de conception de la partie serveur des applications, crée des API REST et travaille avec les bases de données MySQL, PostgreSQL et MongoDB. Le développement Full-stack est l’un de mes principaux axes de progression professionnelle.'
    )
  },
  {
    id: 7,
    name: 'PHP',
    experience: localized(
        '14+ років',
        '14+ years',
        '14+ lat',
        '14+ Jahre',
        '14+ ans'
    ),
    description: localized(
        'Маю досвід роботи з PHP у десятках вебпроєктів. Переважно займався розробкою та доопрацюванням функціональності, інтеграцією рішень і модифікацією тем та модулів. Працював із WordPress, OpenCart, Symfony, Yii2 і Laravel.',
        'I have experience working with PHP across dozens of web projects. My work has mainly involved developing and extending functionality, integrating solutions, and modifying themes and modules. I have worked with WordPress, OpenCart, Symfony, Yii2 and Laravel.',
        'Mam doświadczenie w pracy z PHP w kilkudziesięciu projektach internetowych. Zajmowałem się głównie tworzeniem i rozbudową funkcjonalności, integracją rozwiązań oraz modyfikacją motywów i modułów. Pracowałem z WordPress, OpenCart, Symfony, Yii2 i Laravel.',
        'Ich habe Erfahrung mit PHP in Dutzenden von Webprojekten. Zu meinen Aufgaben gehörten hauptsächlich die Erstellung und Erweiterung von Funktionen, die Integration von Lösungen sowie die Anpassung von Themes und Modulen. Ich habe mit WordPress, OpenCart, Symfony, Yii2 und Laravel gearbeitet.',
        'J’ai travaillé avec PHP sur des dizaines de projets web. Mes missions concernaient principalement le développement et l’amélioration de fonctionnalités, l’intégration de solutions ainsi que la modification de thèmes et de modules. J’ai travaillé avec WordPress, OpenCart, Symfony, Yii2 et Laravel.'
    )
  },
  {
    id: 8,
    name: 'LESS',
    experience: localized(
        '12+ років',
        '12+ years',
        '12+ lat',
        '12+ Jahre',
        '12+ ans'
    ),
    description: localized(
        'Маю багаторічний досвід використання LESS у вебпроєктах. Використовую препроцесор для організації стилів, роботи зі змінними, вкладеністю та повторного використання CSS-коду.',
        'I have many years of experience using LESS in web projects. I use this preprocessor to organize stylesheets, work with variables and nesting, and reuse CSS code.',
        'Mam wieloletnie doświadczenie w korzystaniu z LESS w projektach internetowych. Używam tego preprocesora do organizowania stylów, pracy ze zmiennymi i zagnieżdżeniami oraz ponownego wykorzystywania kodu CSS.',
        'Ich verfüge über langjährige Erfahrung mit LESS in Webprojekten. Ich verwende diesen Tool zur Strukturierung von Stylesheets, zur Arbeit mit Variablen und verschachtelten Regeln sowie zur Wiederverwendung von CSS-Code.',
        'J’ai plusieurs années d’expérience dans l’utilisation de LESS pour des projets web. J’utilise ce préprocesseur pour organiser les styles, travailler avec les variables et l’imbrication, ainsi que réutiliser le code CSS.'
    )
  },
  {
    id: 9,
    name: 'MySQL',
    experience: localized(
        '14+ років',
        '14+ years',
        '14+ lat',
        '14+ Jahre',
        '14+ ans'
    ),
    description: localized(
        'Маю досвід роботи з MySQL, переважно під час розгортання, налаштування та наповнення баз даних. Працюю із SQL-запитами, таблицями та структурою даних, необхідною для функціонування вебзастосунків.',
        'I have experience working with MySQL, mainly in database deployment, configuration and data management. I work with SQL queries, tables and data structures required for web applications.',
        'Mam doświadczenie w pracy z MySQL, głównie podczas wdrażania, konfiguracji i uzupełniania baz danych. Pracuję z zapytaniami SQL, tabelami i strukturami danych niezbędnymi do działania aplikacji internetowych.',
        'Ich habe Erfahrung mit MySQL, hauptsächlich bei der Bereitstellung, Konfiguration und Befüllung von Datenbanken. Ich arbeite mit SQL-Abfragen, Tabellen und Datenstrukturen, die für den Betrieb von Web-Apps erforderlich sind.',
        'J’ai de l’expérience avec MySQL, principalement dans le déploiement, la configuration et l’alimentation de bases de données. Je travaille avec des requêtes SQL, des tables et des structures de données nécessaires au fonctionnement des applications web.'
    )
  },
  {
    id: 10,
    name: 'Tailwind CSS',
    experience: localized(
        '6 проєктів',
        '6 projects',
        '6 projektów',
        '6 Projekte',
        '6 projets'
    ),
    description: localized(
        'Маю практичний досвід використання Tailwind CSS у кількох проєктах. Розумію utility-first підхід, принципи побудови адаптивних інтерфейсів і можливості швидкого створення стилізованих компонентів.',
        'I have practical experience using Tailwind CSS in several projects. I understand the utility-first approach, the principles of building responsive interfaces and how to quickly create styled components.',
        'Mam praktyczne doświadczenie w korzystaniu z Tailwind CSS w kilku projektach. Znam podejście utility-first, zasady tworzenia responsywnych interfejsów oraz możliwości szybkiego budowania stylizowanych komponentów.',
        'Ich habe praktische Erfahrung mit Tailwind CSS in mehreren Projekten. Ich kenne den Utility-First-Ansatz, die Prinzipien der Erstellung responsiver Oberflächen und die Möglichkeiten zur schnellen Erstellung gestalteter Komponenten.',
        'J’ai une expérience pratique de Tailwind CSS dans plusieurs projets. Je maîtrise l’approche utility-first, les principes de création d’interfaces responsives et les possibilités de développement rapide de composants stylisés.'
    )
  },
  {
    id: 11,
    name: 'React Native',
    experience: localized(
        '4 проєкти',
        '4 projects',
        '4 projekty',
        '4 Projekte',
        '4 projets'
    ),
    description: localized(
        'Маю досвід роботи з React Native над кількома невеликими проєктами. Самостійно опановував документацію та реалізовував функціональність мобільних застосунків. Один із перших проєктів був виконаний як університетська екзаменаційна робота та отримав оцінку 86 зі 100.',
        'I have experience working with React Native on several small projects. I independently studied the documentation and implemented functionality for mobile applications. One of my first projects was completed as a university examination assignment and received a score of 86 out of 100.',
        'Mam doświadczenie w pracy z React Native przy kilku mniejszych projektach. Samodzielnie poznawałem dokumentację i wdrażałem funkcjonalności aplikacji mobilnych. Jeden z moich pierwszych projektów został wykonany jako praca egzaminacyjna na uczelni i otrzymał ocenę 86 na 100.',
        'Ich habe Erfahrung mit React Native aus mehreren kleineren Projekten. Ich habe mich selbstständig mit der Dokumentation vertraut gemacht und Funktionen für mobile Anwendungen entwickelt. Eines meiner ersten Projekte entstand als an der Uni erstellte Prüfungsprojekt und erhielt 86 von 100 Punkten.',
        'J’ai travaillé avec React Native sur plusieurs petits projets. J’ai étudié la documentation de manière autonome et développé des fonctionnalités pour des applications mobiles. L’un de mes premiers projets a été réalisé dans le cadre d’un examen universitaire et a obtenu la note de 86 sur 100.'
    )
  },
  {
    id: 12,
    name: localized(
        'Методологія БЕМ',
        'BEM Methodology',
        'Metodologia BEM',
        'BEM-Methodik',
        'Méthodologie BEM'
    ),
    experience: localized(
        'Практичний досвід',
        'Practical experience',
        'Doświadczenie praktyczne',
        'Praktische Erfahrung',
        'Expérience pratique'
    ),
    description: localized(
        'Розумію принципи методології БЕМ та її застосування для побудови структурованої, передбачуваної й масштабованої CSS-архітектури.',
        'I understand the principles of the BEM methodology and how to apply them to build structured, predictable and scalable CSS architectures.',
        'Znam zasady metodologii BEM i jej zastosowanie w tworzeniu uporządkowanej, przewidywalnej i skalowalnej architektury CSS.',
        'Ich verstehe die Prinzipien der BEM-Methodik und ihre Anwendung beim Aufbau einer strukturierten, vorhersehbaren und skalierbaren CSS-Aufbau.',
        'Je comprends les principes de la méthodologie BEM et son utilisation pour construire une architecture CSS structurée, prévisible et évolutive.'
    )
  },
  {
    id: 13,
    name: 'Git, GitHub, GitLab',
    experience: localized(
        '10+ років',
        '10+ years',
        '10+ lat',
        '10+ Jahre',
        '10+ ans'
    ),
    description: localized(
        'Використовую Git для контролю версій у робочих проєктах. Маю досвід ведення історії змін, роботи з репозиторіями та підтримки командної розробки.',
        'I use Git for version control in professional projects. I have experience maintaining change history, working with repositories and supporting collaborative development.',
        'Używam Git do kontroli wersji w projektach komercyjnych. Mam doświadczenie w prowadzeniu historii zmian, pracy z repozytoriami i wspieraniu pracy zespołowej.',
        'Ich verwende Git zur Versionsverwaltung in beruflichen Projekten. Ich habe Erfahrung mit der Verwaltung der Änderungen, der Arbeit mit Repositories und der Unterstützung gemeinsamer Abläufe.',
        'J’utilise Git pour le contrôle de version dans mes projets professionnels. J’ai de l’expérience dans le suivi de l’historique des modifications, le travail avec des dépôts et la collaboration au sein d’équipes de développement.'
    )
  },
  {
    id: 14,
    name: 'Bootstrap',
    experience: localized(
        '12+ років',
        '12+ years',
        '12+ lat',
        '12+ Jahre',
        '12+ ans'
    ),
    description: localized(
        'Маю багаторічний досвід використання Bootstrap у вебпроєктах. Використовую готову сітку, компоненти та утиліти, за потреби адаптую стандартні стилі під дизайн і вимоги конкретного проєкту.',
        'I have many years of experience using Bootstrap in web projects. I work with its grid system, components and utility classes, adapting the default styles to match the design and requirements of each project when necessary.',
        'Mam wieloletnie doświadczenie w korzystaniu z Bootstrap w projektach internetowych. Używam gotowego systemu siatki, komponentów i klas pomocniczych, a w razie potrzeby dostosowuję domyślne style do projektu graficznego i wymagań konkretnego projektu.',
        'Ich verfüge über langjährige Erfahrung mit Bootstrap in Webprojekten. Ich verwende das integrierte Grid-System, Komponenten und Utility-Klassen und passe bei Bedarf die Standardstile an das Design und die Anforderungen des jeweiligen Projekts an.',
        'J’ai plusieurs années d’expérience dans l’utilisation de Bootstrap pour des projets web. J’utilise son système de grille, ses composants et ses classes utilitaires, et adapte si nécessaire les styles par défaut au design et aux exigences de chaque projet.'
    )
  },
  {
    id: 15,
    name: 'jQuery',
    experience: localized(
        '13+ років',
        '13+ years',
        '13+ lat',
        '13+ Jahre',
        '13+ ans'
    ),
    description: localized(
        'Використовую бібліотеку для розробки інтерактивних елементів вебінтерфейсів, роботи з DOM, обробки подій, AJAX-запитів, створення анімацій та взаємодії з іншими плагінами й бібліотеками. Допомагає швидко реалізовувати функціональність і підтримувати наявні вебпроєкти.',
        'I use this library to develop interactive web interface elements, manipulate the DOM, handle events and AJAX requests, create animations, and integrate with other plugins and libraries. It helps me implement functionality quickly and maintain existing web projects.',
        'Wykorzystuję tę bibliotekę do tworzenia interaktywnych elementów interfejsów internetowych, pracy z DOM, obsługi zdarzeń i zapytań AJAX, tworzenia animacji oraz integracji z innymi wtyczkami i bibliotekami. Ułatwia szybkie wdrażanie funkcjonalności i utrzymywanie istniejących projektów internetowych.',
        'Ich verwende diese Bibliothek zur Erstellung interaktiver Web-Elemente, zur Arbeit mit dem DOM, zur Verarbeitung von Ereignissen und AJAX-Anfragen, zur Erstellung von Animationen sowie zur Integration anderer Plugins und Bibliotheken. Sie ermöglicht eine schnelle Implementierung von Funktionen und die Wartung bestehender Webprojekte.',
        'J’utilise cette bibliothèque pour développer des éléments interactifs d’interfaces web, manipuler le DOM, gérer les événements et les requêtes AJAX, créer des animations et interagir avec d’autres plugins et bibliothèques. Elle me permet d’implémenter rapidement des fonctionnalités et de maintenir des projets web existants.'
    )
  },
  {
    id: 16,
    name: 'NPM',
    experience: localized(
        '13+ років',
        '13+ years',
        '13+ lat',
        '13+ Jahre',
        '13+ ans'
    ),
    description: localized(
        'Використовую для підключення, налаштування й інтеграції сторонніх бібліотек і модулів у вебпроєкти. Працював із різноманітними рішеннями для реалізації анімацій, слайдерів, попапів, вбудовування YouTube-контенту та інших інтерактивних елементів інтерфейсу.',
        'I use npm to install, configure and integrate third-party libraries and modules into web projects. I have worked with various solutions for implementing animations, sliders, popups, embedding YouTube content and adding other interactive interface elements.',
        'Używam npm do instalowania, konfigurowania i integrowania zewnętrznych bibliotek oraz modułów w projektach internetowych. Pracowałem z różnymi rozwiązaniami do tworzenia animacji, sliderów, popupów, osadzania treści z YouTube i innych interaktywnych elementów interfejsu.',
        'Ich verwende npm, um externe Bibliotheken und Module in Webprojekte einzubinden, zu konfigurieren und zu integrieren. Ich habe mit verschiedenen Lösungen zur Umsetzung von Animationen, Slidern, Pop-ups, der Einbettung von YouTube-Inhalten und anderen interaktiven UI-Elementen gearbeitet.',
        'J’utilise npm pour installer, configurer et intégrer des bibliothèques et des modules tiers dans des projets web. J’ai travaillé avec différentes solutions pour créer des animations, des sliders, des fenêtres pop-up, intégrer du contenu YouTube et ajouter d’autres éléments interactifs aux interfaces.'
    )
  },
  {
    id: 17,
    name: 'Gulp',
    experience: localized(
        '8+ років',
        '8+ years',
        '8+ lat',
        '8+ Jahre',
        '8+ ans'
    ),
    description: localized(
        'Маю досвід автоматизації процесів розробки та збирання вебпроєктів. Налаштовував завдання для компіляції SCSS, обробки й оптимізації CSS, JavaScript та графічних ресурсів. Використовував Gulp для автоматизації рутинних процесів і прискорення розробки.',
        'I have experience automating development workflows and web project build processes. I configured tasks for SCSS compilation and for processing and optimizing CSS, JavaScript and image assets. I used Gulp to automate repetitive tasks and speed up development.',
        'Mam doświadczenie w automatyzacji procesów tworzenia i budowania projektów internetowych. Konfigurowałem zadania do kompilacji SCSS oraz przetwarzania i optymalizacji CSS, JavaScript i zasobów graficznych. Używałem Gulp do automatyzacji powtarzalnych zadań i przyspieszania pracy.',
        'Ich habe Erfahrung mit der Automatisierung von Arbeitsabläufen und Build-Prozessen für Webprojekte. Ich habe Aufgaben zur SCSS-Kompilierung sowie zur Verarbeitung und Optimierung von CSS, JavaScript und Bilder eingerichtet. Mit Gulp habe ich wiederkehrende Aufgaben automatisiert und die Erstellung beschleunigt.',
        'J’ai de l’expérience dans l’automatisation des processus de développement et de compilation de projets web. J’ai configuré des tâches pour compiler SCSS, traiter et optimiser CSS, JavaScript et les ressources graphiques. J’ai utilisé Gulp pour automatiser les tâches répétitives et accélérer le développement.'
    )
  },
  {
    id: 18,
    name: 'Vite',
    experience: localized(
        '2+ роки',
        '2+ years',
        '2+ lata',
        '2+ Jahre',
        '2+ ans'
    ),
    description: localized(
        'Основний інструмент для збирання сучасних вебпроєктів. Маю досвід налаштування середовища розробки, роботи з модулями, інтеграції SCSS та JavaScript, швидкого оновлення сторінок під час розробки й підготовки оптимізованої production-збірки. Планую надалі розвивати експертизу в екосистемі Vite.',
        'My primary tool for building modern web projects. I have experience configuring development environments, working with modules, integrating SCSS and JavaScript, using fast page updates during development and preparing optimized production builds. I plan to continue expanding my expertise in the Vite ecosystem.',
        'To moje główne narzędzie do budowania nowoczesnych projektów internetowych. Mam doświadczenie w konfiguracji środowiska programistycznego, pracy z modułami, integracji SCSS i JavaScript, korzystaniu z szybkiego odświeżania stron podczas developmentu oraz przygotowywaniu zoptymalizowanych wersji produkcyjnych. Planuję dalej rozwijać swoją wiedzę w ekosystemie Vite.',
        'Mein wichtigstes Werkzeug zum Erstellen moderner Webprojekte. Ich habe Erfahrung mit der Konfiguration von Umgebungen, der Arbeit mit Modulen, der Integration von SCSS und JavaScript, schnellen Seitenaktualisierungen während der Erstellung und der Erstellung optimierter Builds für den Einsatz. Ich plane, meine Kenntnisse im Vite-Ökosystem weiter auszubauen.',
        'C’est mon principal outil pour compiler des projets web modernes. J’ai de l’expérience dans la configuration de l’environnement de développement, le travail avec les modules, l’intégration de SCSS et JavaScript, le rechargement rapide des pages pendant le développement et la préparation de versions de production optimisées. Je souhaite continuer à approfondir mes connaissances de l’écosystème Vite.'
    )
  },
  {
    id: 19,
    name: 'HTML Email',
    experience: localized(
        '6+ років',
        '6+ years',
        '6+ lat',
        '6+ Jahre',
        '6+ ans'
    ),
    description: localized(
        'Маю досвід створення кількох десятків HTML-листів та email-розсилок. Розумію особливості верстки для різних поштових клієнтів, створення адаптивних шаблонів і забезпечення сумісності стилів з урахуванням обмеженої підтримки CSS.',
        'I have experience creating dozens of HTML emails and email campaigns. I understand the specifics of email development for different email clients, creating responsive templates and ensuring style compatibility despite limited CSS support.',
        'Mam doświadczenie w tworzeniu kilkudziesięciu wiadomości HTML i kampanii mailingowych. Znam specyfikę kodowania wiadomości dla różnych klientów pocztowych, tworzenia responsywnych szablonów i zapewniania zgodności stylów z uwzględnieniem ograniczonej obsługi CSS.',
        'Ich habe Erfahrung mit der Erstellung von Dutzenden HTML-E-Mails und E-Mail-Kampagnen. Ich kenne die Besonderheiten der E-Mail-Erstellung für verschiedene E-Mail-Clients, der Erstellung responsiver Vorlagen und der Sicherstellung der Stilkompatibilität unter Berücksichtigung der eingeschränkten CSS-Unterstützung.',
        'J’ai de l’expérience dans la création de plusieurs dizaines d’e-mails HTML et de campagnes d’e-mailing. Je connais les spécificités de l’intégration pour différents clients de messagerie, la création de modèles responsives et les méthodes permettant d’assurer la compatibilité des styles malgré la prise en charge limitée de CSS.'
    )
  },
  {
    id: 20,
    name: 'OpenCart',
    experience: localized(
        '5+ років',
        '5+ years',
        '5+ lat',
        '5+ Jahre',
        '5+ ans'
    ),
    description: localized(
        'Маю досвід роботи з кількома десятками проєктів на OpenCart. Займався доопрацюванням функціональності, адаптацією тем, внесенням змін у шаблони та виправленням помилок. Останнім часом переважно виконую точкові доопрацювання.',
        'I have experience working on several dozen OpenCart projects. My work has included extending functionality, adapting themes, modifying templates and fixing bugs. Recently, I have mainly focused on specific improvements and targeted modifications.',
        'Mam doświadczenie w pracy przy kilkudziesięciu projektach opartych na OpenCart. Zajmowałem się rozbudową funkcjonalności, dostosowywaniem motywów, modyfikacją szablonów i usuwaniem błędów. Ostatnio skupiam się głównie na konkretnych poprawkach i punktowych modyfikacjach.',
        'Ich habe Erfahrung mit mehreren Dutzend OpenCart-Projekten. Zu meinen Aufgaben gehörten die Erweiterung der Funktionen, die Anpassung von Themes, Änderungen an Templates und die Fehlerbehebung. In letzter Zeit konzentriere ich mich hauptsächlich auf gezielte Anpassungen und punktuelle Verbesserungen.',
        'J’ai travaillé sur plusieurs dizaines de projets OpenCart. Mes missions comprenaient l’amélioration des fonctionnalités, l’adaptation des thèmes, la modification des modèles et la correction de bugs. Dernièrement, je me concentre principalement sur des améliorations ciblées.'
    )
  },
  {
    id: 21,
    name: 'WordPress',
    experience: localized(
        '5+ років',
        '5+ years',
        '5+ lat',
        '5+ Jahre',
        '5+ ans'
    ),
    description: localized(
        'Маю досвід роботи з десятками проєктів на WordPress. Займався налаштуванням і доопрацюванням сайтів, модифікацією тем, адаптацією шаблонів та розширенням функціональності. Останнім часом переважно виконую точкові доопрацювання.',
        'I have experience working on dozens of WordPress projects. My work has included website configuration and improvements, theme modifications, template customization and functionality extensions. Recently, I have mainly focused on specific improvements and targeted modifications.',
        'Mam doświadczenie w pracy przy dziesiątkach projektów opartych na WordPress. Zajmowałem się konfiguracją i rozbudową stron, modyfikacją motywów, dostosowywaniem szablonów oraz rozszerzaniem funkcjonalności. Ostatnio skupiam się głównie na konkretnych poprawkach i punktowych modyfikacjach.',
        'Ich habe Erfahrung mit Dutzenden WordPress-Projekten. Zu meinen Aufgaben gehörten die Konfiguration und Erweiterung von Websites, die Anpassung von Themes und Templates sowie die Erweiterung der Funktionen. In letzter Zeit konzentriere ich mich hauptsächlich auf gezielte Anpassungen und punktuelle Verbesserungen.',
        'J’ai travaillé sur des dizaines de projets WordPress. Mes missions comprenaient la configuration et l’amélioration de sites web, la modification de thèmes, l’adaptation de modèles et l’extension des fonctionnalités. Dernièrement, je me concentre principalement sur des améliorations ciblées.'
    )
  }
];

export const skillsSection = {
  title: localized(
      'Технології, з якими я працюю',
      'Technologies I work with',
      'Technologie, z którymi pracuję',
      'Technologien, mit denen ich arbeite',
      'Technologies avec lesquelles je travaille'
  )
};
