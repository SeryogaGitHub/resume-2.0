const localized = (uk, en, pl, de) => ({
  uk,
  en,
  pl,
  de
});

export const experienceSection = {
  title: localized(
      'Мій досвід',
      'My experience',
      'Moje doświadczenie',
      'Meine Erfahrung'
  ),

  paragraphs: [
    localized(
        'Мені подобається моя професія Full-stack Developer, і я хочу й надалі розвивати свої навички та професійно зростати в цьому напрямі.',
        'I enjoy working as a Full-stack Developer and want to continue developing my skills and growing professionally in this field.',
        'Lubię pracować jako Full-stack Developer i chcę nadal rozwijać swoje umiejętności oraz zdobywać doświadczenie zawodowe w tym kierunku.',
        'Ich arbeite gerne als Full-Stack-Entwickler und möchte meine Fähigkeiten weiterentwickeln und mich beruflich in diesem Bereich entfalten.'
    ),

    localized(
        'Зараз я шукаю не просто колег, а команду однодумців, яка справді цінує якість своєї роботи та продукту. Для мене важливо не працювати за принципом «швидко зробити, здати й забути», а створювати якісний і продуманий результат, за який не соромно.',
        'I am looking not just for colleagues, but for a team of like-minded people who genuinely value the quality of their work and product. I do not believe in simply rushing to finish a task and move on. I want to create thoughtful, high-quality results that I can be proud of.',
        'Szukam nie tylko współpracowników, ale także zespołu ludzi o podobnych wartościach, którzy naprawdę cenią jakość swojej pracy i produktu. Nie chcę działać według zasady „szybko zrobić, oddać i zapomnieć”, lecz tworzyć przemyślane rozwiązania wysokiej jakości.',
        'Ich suche nicht einfach nur Kollegen, sondern ein Team mit gemeinsamen Werten, das die Qualität seiner Arbeit und seines Produkts wirklich schätzt. Mir geht es nicht darum, Aufgaben möglichst schnell zu erledigen und zu vergessen, sondern durchdachte und hochwertige Ergebnisse zu schaffen.'
    ),

    localized(
        'До кожного проєкту підходжу відповідально та уважно до деталей. Прагну створювати чистий і структурований код без зайвих стилів, непотрібного коду чи тимчасових рішень за принципом «аби працювало».',
        'I approach every project responsibly and pay close attention to detail. I strive to write clean, well-structured code without unnecessary styles, redundant code, or temporary workarounds that simply make things work.',
        'Do każdego projektu podchodzę odpowiedzialnie i zwracam uwagę na szczegóły. Staram się tworzyć czysty, uporządkowany kod bez zbędnych stylów, niepotrzebnego kodu i tymczasowych rozwiązań stosowanych wyłącznie po to, aby coś działało.',
        'Ich gehe jedes Projekt verantwortungsbewusst an und achte auf Details. Mein Ziel ist sauberer, strukturierter Code ohne überflüssige Styles, unnötigen Code oder provisorische Lösungen nach dem Motto „Hauptsache, es funktioniert“.'
    ),

    localized(
        'Ініціативність — не просто виконую поставлені завдання, а пропоную власні ідеї та покращення, якщо бачу можливість зробити продукт або процес кращим. 💡',
        'Initiative — I do not just complete assigned tasks; I also suggest my own ideas and improvements whenever I see an opportunity to make a product or process better. 💡',
        'Inicjatywa — nie tylko realizuję powierzone zadania, ale również proponuję własne pomysły i usprawnienia, gdy widzę możliwość ulepszenia produktu lub procesu. 💡',
        'Eigeninitiative — ich erledige nicht nur die mir übertragenen Aufgaben, sondern schlage auch eigene Ideen und Verbesserungen vor, wenn ich Möglichkeiten sehe, ein Produkt oder einen Prozess zu optimieren. 💡'
    ),

    localized(
        'Завзятість — доводжу завдання до результату й не зупиняюся перед складнощами. Якщо виникає проблема, шукаю рішення, а не обхідний шлях. 💪',
        'Persistence — I see tasks through to completion and do not give up when challenges arise. When I encounter a problem, I look for a proper solution rather than a workaround. 💪',
        'Wytrwałość — doprowadzam zadania do końca i nie poddaję się w obliczu trudności. Gdy pojawia się problem, szukam rozwiązania, a nie drogi na skróty. 💪',
        'Durchhaltevermögen — ich bringe Aufgaben zu Ende und lasse mich von Schwierigkeiten nicht entmutigen. Wenn ein Problem auftritt, suche ich nach einer richtigen Lösung statt nach einem Umweg. 💪'
    ),

    localized(
        'Готовий розпочати роботу хоч із наступного дня. Так було і раніше: на попередньому місці роботи я пропрацював 7 років і, якби не війна, із задоволенням працював би там і далі.',
        'I am ready to start working as early as the next day. This has been my approach before: I spent 7 years at my previous workplace and would have gladly continued working there if it had not been for the war.',
        'Jestem gotowy rozpocząć pracę nawet następnego dnia. Tak było również wcześniej — w poprzednim miejscu pracy spędziłem 7 lat i z przyjemnością pracowałbym tam nadal, gdyby nie wojna.',
        'Ich kann bereits am nächsten Tag anfangen. Auch früher war das so: Bei meinem vorherigen Arbeitgeber war ich 7 Jahre tätig und hätte dort gerne weitergearbeitet, wenn es den Krieg nicht gegeben hätte.'
    ),

    localized(
        'Буду радий поспілкуватися та розповісти більше про свій досвід, проєкти й те, як можу бути корисним вашій команді.',
        'I would be happy to discuss my experience, projects, and how I could contribute to your team.',
        'Chętnie porozmawiam i opowiem więcej o swoim doświadczeniu, projektach oraz o tym, jak mogę wesprzeć Wasz zespół.',
        'Ich freue mich darauf, über meine Erfahrungen, Projekte und darüber zu sprechen, wie ich Ihr Team unterstützen kann.'
    )
  ],

  button: localized(
      'Детальніше',
      'Learn more',
      'Więcej informacji',
      'Mehr erfahren'
  ),

  items: [
    {
      id: 1,
      period: '08.2013 — 11.2013',
      logo: 'wua.png',
      position: localized(
          'Контент-менеджер',
          'Content Manager',
          'Content Manager',
          'Content Manager'
      ),
      company: 'wedding.ua',
      description: localized(
          'Розміщення контенту на порталі.',
          'Content publishing and management on the portal.',
          'Publikowanie i zarządzanie treścią na portalu.',
          'Veröffentlichung und Verwaltung von Inhalten auf dem Portal.'
      )
    },
    {
      id: 2,
      period: '12.2013 — 2026',
      logo: 'freelancer.png',
      position: localized(
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer'
      ),
      company: 'Freelance',
      description: localized(
          'Десятки проєктів паралельно з основною зайнятістю: верстка та розробка інтерактивних вебінтерфейсів.',
          'Dozens of projects alongside my main employment, including website development and interactive web interfaces.',
          'Dziesiątki projektów realizowanych równolegle z główną pracą, obejmujących tworzenie stron i interaktywnych interfejsów internetowych.',
          'Dutzende Projekte neben meiner Haupttätigkeit, darunter Webentwicklung und die Erstellung interaktiver Weboberflächen.'
      )
    },
    {
      id: 3,
      period: '2015 — 2016',
      logo: 'meets.png',
      position: localized(
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer'
      ),
      company: 'meets.com',
      description: localized(
          'Адаптивна верстка та JavaScript-розробка порталу знайомств.',
          'Responsive web development and JavaScript programming for a dating portal.',
          'Responsywne tworzenie stron i programowanie w JavaScript dla portalu randkowego.',
          'Responsive Webentwicklung und JavaScript-Programmierung für ein Dating-Portal.'
      )
    },
    {
      id: 4,
      period: '02.2016 — 12.2016',
      logo: 'zcode.svg',
      position: localized(
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer'
      ),
      company: 'ZR code',
      description: localized(
          'Розробка сайту компанії та кількох супутніх проєктів.',
          'Development of the company website and several related projects.',
          'Tworzenie strony internetowej firmy oraz kilku powiązanych projektów.',
          'Entwicklung der Unternehmenswebsite und mehrerer zugehöriger Projekte.'
      )
    },
    {
      id: 5,
      period: '2017 — 09.2017',
      logo: 'ss.svg',
      position: localized(
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer'
      ),
      company: 'Syntech software',
      description: localized(
          'Розробка сайту компанії та кількох супутніх проєктів.',
          'Development of the company website and several related projects.',
          'Tworzenie strony internetowej firmy oraz kilku powiązanych projektów.',
          'Entwicklung der Unternehmenswebsite und mehrerer zugehöriger Projekte.'
      )
    },
    {
      id: 6,
      period: '11.2018 — 09.2026',
      logo: 'web-t.jpeg',
      position: localized(
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer',
          'Frontend Developer'
      ),
      company: 'Web-t',
      description: localized(
          'Розробка проєктів різного масштабу для провідних компаній України та інших країн світу.',
          'Development of projects of various scales for leading companies in Ukraine and around the world.',
          'Tworzenie projektów o różnej skali dla czołowych firm z Ukrainy i innych krajów świata.',
          'Entwicklung von Projekten unterschiedlicher Größenordnung für führende Unternehmen in der Ukraine und weltweit.'
      )
    }
  ]
};