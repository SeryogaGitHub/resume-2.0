
const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const projects = [
  {
    id: 1,
    title: 'culinary-school.mhp.com.ua',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Сайт кулінарної школи з сучасною структурою та анімаціями.',
        'A culinary school website with a modern structure and animations.',
        'Strona szkoły kulinarnej z nowoczesną strukturą i animacjami.',
        'Eine Website einer Kochschule mit moderner Struktur und Animationen.',
        'Site web d’une école de cuisine avec une structure moderne et des animations.'
    ),

    seo: {
      title: localized(
          'Сайт кулінарної школи MHP — портфоліо веброзробника',
          'MHP Culinary School Website — Web Developer Portfolio',
          'Strona szkoły kulinarnej MHP — portfolio web developera',
          'Website der MHP-Kochschule — Webentwickler-Portfolio',
          'Site de l’école culinaire MHP — portfolio développeur web'
      ),
      description: localized(
          'Розробка сайту кулінарної школи MHP із сучасною структурою, адаптивним дизайном та анімаціями.',
          'Development of the MHP Culinary School website with a modern structure, responsive design and animations.',
          'Realizacja strony szkoły kulinarnej MHP z nowoczesną strukturą, responsywnym designem i animacjami.',
          'Entwicklung der Website der MHP-Kochschule mit moderner Struktur, responsivem Design und Animationen.',
          'Développement du site de l’école culinaire MHP avec une structure moderne, un design adaptatif et des animations.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/culinary-school.mhp.com.ua.webp',
    url: '#'
  },

  {
    id: 2,
    title: 'foodservice.mhp.ua',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Корпоративний сайт у сфері харчового обслуговування з сучасною структурою та анімаціями.',
        'A corporate website in the food service industry with a modern structure and animations.',
        'Strona korporacyjna z branży gastronomicznej z nowoczesną strukturą i animacjami.',
        'Eine Unternehmenswebsite aus dem Bereich Foodservice mit moderner Struktur und Animationen.',
        'Site web d’entreprise dans le secteur de la restauration, avec une structure moderne et des animations.'
    ),

    seo: {
      title: localized(
          'Foodservice MHP — корпоративний вебсайт',
          'Foodservice MHP — Corporate Website',
          'Foodservice MHP — strona korporacyjna',
          'Foodservice MHP — Unternehmenswebsite',
          'Foodservice MHP — site web institutionnel'
      ),
      description: localized(
          'Розробка корпоративного сайту Foodservice MHP у сфері харчового обслуговування з адаптивним інтерфейсом.',
          'Development of the Foodservice MHP corporate website in the food service industry with a responsive interface.',
          'Realizacja strony korporacyjnej Foodservice MHP z branży gastronomicznej z responsywnym interfejsem.',
          'Entwicklung der Foodservice-MHP-Unternehmenswebsite mit responsiver Benutzeroberfläche.',
          'Développement du site institutionnel Foodservice MHP dans le secteur de la restauration avec une interface adaptative.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/foodservice.mhp.ua.webp',
    url: '#'
  },

  {
    id: 3,
    title: 'life.mhp4u.com.ua-robota-v-mhp',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Сайт із вакансіями та інформацією про працевлаштування в компанії МХП.',
        'A website featuring job vacancies and employment information at MHP.',
        'Strona z ofertami pracy i informacjami o zatrudnieniu w firmie MHP.',
        'Eine Website mit Stellenangeboten und Informationen zu Karrieremöglichkeiten bei MHP.',
        'Site web présentant les offres d’emploi et les informations sur les possibilités de recrutement chez MHP.'
    ),

    seo: {
      title: localized(
          'Робота в MHP — сайт вакансій та кар’єрних можливостей',
          'Jobs at MHP — Careers and Vacancies Website',
          'Praca w MHP — strona ofert pracy i kariery',
          'Jobs bei MHP — Karriere- und Stellenwebsite',
          'Emplois chez MHP — site des offres et opportunités de carrière'
      ),
      description: localized(
          'Розробка сайту вакансій MHP з інформацією про працевлаштування та кар’єрні можливості.',
          'Development of the MHP jobs website featuring employment information and career opportunities.',
          'Realizacja strony z ofertami pracy w MHP oraz informacjami o możliwościach rozwoju kariery.',
          'Entwicklung der MHP-Karriereseite mit Informationen zu Stellenangeboten und beruflichen Möglichkeiten.',
          'Développement du site emploi de MHP présentant les offres et les possibilités de carrière.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/life.mhp4u.com.ua-robota-v-mhp.webp',
    url: '#'
  },

  {
    id: 4,
    title: 'life.mhp4u.com.ua-young-gen',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Сайт молодіжної програми з інформацією про можливості для молодих фахівців.',
        'A youth program website presenting opportunities for young professionals.',
        'Strona programu młodzieżowego przedstawiająca możliwości dla młodych specjalistów.',
        'Eine Website eines Nachwuchsprogramms mit Informationen zu Möglichkeiten für junge Fachkräfte.',
        'Site web d’un programme destiné aux jeunes, présentant des opportunités pour les jeunes professionnels.'
    ),

    seo: {
      title: localized(
          'Young Generation MHP — сайт молодіжної програми',
          'Young Generation MHP — Youth Program Website',
          'Young Generation MHP — strona programu dla młodych',
          'Young Generation MHP — Website des Nachwuchsprogramms',
          'Young Generation MHP — site du programme pour les jeunes'
      ),
      description: localized(
          'Розробка сайту молодіжної програми MHP з інформацією про можливості для молодих фахівців.',
          'Development of the MHP youth program website presenting opportunities for young professionals.',
          'Realizacja strony programu MHP prezentującej możliwości dla młodych specjalistów.',
          'Entwicklung der Website des MHP-Nachwuchsprogramms mit Möglichkeiten für junge Fachkräfte.',
          'Développement du site du programme jeunesse MHP présentant des opportunités pour les jeunes professionnels.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/life.mhp4u.com.ua-young-gen.webp',
    url: '#'
  },

  {
    id: 5,
    title: 'mhpgromadi.org.ua',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Сайт проєкту МХП-Громаді з інформацією про соціальні ініціативи та підтримку громад.',
        'An MHP-Gromadi website featuring information about social initiatives and community support.',
        'Strona projektu MHP-Gromadi z informacjami o inicjatywach społecznych i wsparciu społeczności lokalnych.',
        'Eine Website des Projekts MHP-Gromadi mit Informationen zu sozialen Initiativen und zur Unterstützung lokaler Gemeinschaften.',
        'Site web du projet MHP-Gromadi présentant des informations sur les initiatives sociales et le soutien aux communautés locales.'
    ),

    seo: {
      title: localized(
          'МХП-Громаді — сайт соціальних ініціатив та підтримки громад',
          'MHP-Gromadi — Community Support Website',
          'MHP-Gromadi — strona inicjatyw społecznych i wsparcia społeczności',
          'MHP-Gromadi — Website für soziale Initiativen und Gemeinschaftsförderung',
          'MHP-Gromadi — site des initiatives sociales et du soutien aux communautés'
      ),
      description: localized(
          'Розробка сайту МХП-Громаді про соціальні ініціативи, розвиток і підтримку місцевих громад.',
          'Development of the MHP-Gromadi website about social initiatives, development and support for local communities.',
          'Realizacja strony MHP-Gromadi poświęconej inicjatywom społecznym, rozwojowi i wsparciu lokalnych społeczności.',
          'Entwicklung der MHP-Gromadi-Website zu sozialen Initiativen, Entwicklung und Unterstützung lokaler Gemeinschaften.',
          'Développement du site MHP-Gromadi consacré aux initiatives sociales, au développement et au soutien des communautés locales.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/mhpgromadi.org.ua.webp',
    url: '#'
  },

  {
    id: 6,
    title: 'Resume',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Персональний сайт-резюме для презентації професійного досвіду, навичок та виконаних проєктів.',
        'A personal resume website showcasing professional experience, skills and completed projects.',
        'Osobista strona CV prezentująca doświadczenie zawodowe, umiejętności i zrealizowane projekty.',
        'Eine persönliche Lebenslauf-Website zur Präsentation von Berufserfahrung, Fähigkeiten und abgeschlossenen Projekten.',
        'Site personnel de présentation du CV, mettant en valeur l’expérience professionnelle, les compétences et les projets réalisés.'
    ),

    seo: {
      title: localized(
          'Персональний сайт-резюме — портфоліо веброзробника',
          'Personal Resume Website — Web Developer Portfolio',
          'Osobista strona CV — portfolio web developera',
          'Persönliche Lebenslauf-Website — Webentwickler-Portfolio',
          'Site CV personnel — portfolio développeur web'
      ),
      description: localized(
          'Розробка персонального сайту-резюме для презентації професійного досвіду, навичок та виконаних проєктів.',
          'Development of a personal resume website showcasing professional experience, skills and completed projects.',
          'Realizacja osobistej strony CV prezentującej doświadczenie zawodowe, umiejętności i wykonane projekty.',
          'Entwicklung einer persönlichen Lebenslauf-Website zur Präsentation von Berufserfahrung, Fähigkeiten und Projekten.',
          'Développement d’un site CV personnel présentant l’expérience professionnelle, les compétences et les projets réalisés.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/resume.webp',
    url: '#'
  },

  {
    id: 7,
    title: 'resume-2.0',
    year: 2026,

    category: localized(
        'Вебзастосунок',
        'Web Application',
        'Aplikacja internetowa',
        'Webanwendung',
        'Application web'
    ),

    description: localized(
        'Персональний вебзастосунок-портфоліо з багатомовним інтерфейсом, інформацією про навички, досвід та реалізовані проєкти.',
        'A personal portfolio web application featuring a multilingual interface, professional skills, experience and completed projects.',
        'Osobista aplikacja internetowa typu portfolio z wielojęzycznym interfejsem, informacjami o umiejętnościach, doświadczeniu i zrealizowanych projektach.',
        'Eine persönliche Portfolio-Webanwendung mit mehrsprachiger Benutzeroberfläche sowie Informationen zu Fähigkeiten, Berufserfahrung und abgeschlossenen Projekten.',
        'Application web de portfolio personnel avec une interface multilingue et des informations sur les compétences, l’expérience professionnelle et les projets réalisés.'
    ),

    seo: {
      title: localized(
          'Resume 2.0 — багатомовне вебпортфоліо на Vue.js',
          'Resume 2.0 — Multilingual Vue.js Portfolio',
          'Resume 2.0 — wielojęzyczne portfolio Vue.js',
          'Resume 2.0 — mehrsprachiges Vue.js-Portfolio',
          'Resume 2.0 — portfolio multilingue Vue.js'
      ),
      description: localized(
          'Розробка персонального вебпортфоліо на Vue.js із багатомовним інтерфейсом, інформацією про навички, досвід та проєкти.',
          'Development of a personal Vue.js portfolio with a multilingual interface, skills, experience and project information.',
          'Realizacja osobistego portfolio Vue.js z wielojęzycznym interfejsem oraz informacjami o umiejętnościach, doświadczeniu i projektach.',
          'Entwicklung eines persönlichen Vue.js-Portfolios mit mehrsprachiger Benutzeroberfläche sowie Informationen zu Fähigkeiten, Erfahrung und Projekten.',
          'Développement d’un portfolio personnel Vue.js avec une interface multilingue et des informations sur les compétences, l’expérience et les projets.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/resume-2.0.webp',
    url: '#'
  },

  {
    id: 8,
    title: 'ryaba.ua',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Корпоративний вебсайт бренду «Ряба» з сучасною структурою та адаптивним інтерфейсом.',
        'A corporate website for the Ryaba brand featuring a modern structure and responsive interface.',
        'Strona korporacyjna marki Ryaba z nowoczesną strukturą i responsywnym interfejsem.',
        'Eine Unternehmenswebsite der Marke Ryaba mit moderner Struktur und responsiver Benutzeroberfläche.',
        'Site web institutionnel de la marque Ryaba, avec une structure moderne et une interface adaptative.'
    ),

    seo: {
      title: localized(
          'Ряба — корпоративний сайт бренду',
          'Ryaba — Corporate Brand Website',
          'Ryaba — strona korporacyjna marki',
          'Ryaba — Unternehmenswebsite der Marke',
          'Ryaba — site institutionnel de la marque'
      ),
      description: localized(
          'Розробка корпоративного сайту бренду «Ряба» із сучасною структурою та адаптивним інтерфейсом.',
          'Development of the Ryaba brand corporate website with a modern structure and responsive interface.',
          'Realizacja strony korporacyjnej marki Ryaba z nowoczesną strukturą i responsywnym interfejsem.',
          'Entwicklung der Unternehmenswebsite der Marke Ryaba mit moderner Struktur und responsiver Benutzeroberfläche.',
          'Développement du site institutionnel de la marque Ryaba avec une structure moderne et une interface adaptative.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/ryaba.ua.webp',
    url: '#'
  },

  {
    id: 9,
    title: 'superfileo.com.ua',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Вебсайт із сучасною структурою, адаптивною версткою та інтерактивними елементами.',
        'A website featuring a modern structure, responsive layout and interactive elements.',
        'Strona internetowa z nowoczesną strukturą, responsywnym układem i elementami interaktywnymi.',
        'Eine Website mit moderner Struktur, responsivem Layout und interaktiven Elementen.',
        'Site web avec une structure moderne, une mise en page adaptative et des éléments interactifs.'
    ),

    seo: {
      title: localized(
          'Superfileo — розробка та адаптивний вебсайт',
          'Superfileo — Website Development',
          'Superfileo — realizacja strony internetowej',
          'Superfileo — Websiteentwicklung',
          'Superfileo — développement de site web'
      ),
      description: localized(
          'Розробка вебсайту Superfileo з адаптивною версткою, сучасною структурою та інтерактивними елементами.',
          'Development of the Superfileo website with responsive layout, modern structure and interactive elements.',
          'Realizacja strony Superfileo z responsywnym układem, nowoczesną strukturą i elementami interaktywnymi.',
          'Entwicklung der Superfileo-Website mit responsivem Layout, moderner Struktur und interaktiven Elementen.',
          'Développement du site Superfileo avec une mise en page adaptative, une structure moderne et des éléments interactifs.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/superfileo.com.ua.webp',
    url: '#'
  },

  {
    id: 10,
    title: 'syntech.software',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Сайт IT-компанії з презентацією послуг, сучасним дизайном та адаптивним інтерфейсом.',
        'An IT company website presenting its services through a modern design and responsive interface.',
        'Strona firmy IT prezentująca usługi za pomocą nowoczesnego projektu i responsywnego interfejsu.',
        'Eine Website eines IT-Unternehmens zur Präsentation seiner Dienstleistungen mit modernem Design und responsiver Benutzeroberfläche.',
        'Site web d’une entreprise informatique présentant ses services dans un design moderne avec une interface adaptative.'
    ),

    seo: {
      title: localized(
          'Syntech Software — сайт IT-компанії',
          'Syntech Software — IT Company Website',
          'Syntech Software — strona firmy IT',
          'Syntech Software — Website eines IT-Unternehmens',
          'Syntech Software — site web d’entreprise informatique'
      ),
      description: localized(
          'Розробка сайту IT-компанії Syntech Software для презентації послуг із сучасним дизайном та адаптивним інтерфейсом.',
          'Development of the Syntech Software IT company website presenting services with modern design and a responsive interface.',
          'Realizacja strony firmy IT Syntech Software prezentującej usługi z nowoczesnym designem i responsywnym interfejsem.',
          'Entwicklung der Syntech-Software-Website zur Präsentation von IT-Dienstleistungen mit modernem Design und responsiver Benutzeroberfläche.',
          'Développement du site de Syntech Software présentant ses services informatiques avec un design moderne et une interface adaptative.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/syntech.software.webp',
    url: '#'
  },

  {
    id: 11,
    title: 'toplead.com.ua',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Корпоративний сайт із презентацією послуг, сучасною структурою та адаптивною версткою.',
        'A corporate website presenting services through a modern structure and responsive layout.',
        'Strona korporacyjna prezentująca usługi z nowoczesną strukturą i responsywnym układem.',
        'Eine Unternehmenswebsite zur Präsentation von Dienstleistungen mit moderner Struktur und responsivem Layout.',
        'Site web institutionnel présentant des services avec une structure moderne et une mise en page adaptative.'
    ),

    seo: {
      title: localized(
          'TopLead — корпоративний вебсайт',
          'TopLead — Corporate Website',
          'TopLead — strona korporacyjna',
          'TopLead — Unternehmenswebsite',
          'TopLead — site web institutionnel'
      ),
      description: localized(
          'Розробка корпоративного сайту TopLead із презентацією послуг, сучасною структурою та адаптивною версткою.',
          'Development of the TopLead corporate website presenting services through a modern structure and responsive layout.',
          'Realizacja strony korporacyjnej TopLead prezentującej usługi z nowoczesną strukturą i responsywnym układem.',
          'Entwicklung der TopLead-Unternehmenswebsite zur Präsentation von Dienstleistungen mit moderner Struktur und responsivem Layout.',
          'Développement du site institutionnel TopLead présentant ses services avec une structure moderne et une mise en page adaptative.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/toplead.com.ua.webp',
    url: '#'
  },

  {
    id: 12,
    title: 'treran.com',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Вебсайт із сучасним дизайном, структурованою подачею інформації та адаптивним інтерфейсом.',
        'A website featuring modern design, structured content presentation and a responsive interface.',
        'Strona internetowa z nowoczesnym designem, uporządkowaną prezentacją treści i responsywnym interfejsem.',
        'Eine Website mit modernem Design, strukturierter Inhaltsdarstellung und responsiver Benutzeroberfläche.',
        'Site web au design moderne, avec une présentation structurée des informations et une interface adaptative.'
    ),

    seo: {
      title: localized(
          'Treran — розробка адаптивного вебсайту',
          'Treran — Responsive Website Development',
          'Treran — realizacja responsywnej strony internetowej',
          'Treran — Entwicklung einer responsiven Website',
          'Treran — développement d’un site web adaptatif'
      ),
      description: localized(
          'Розробка вебсайту Treran із сучасним дизайном, структурованою подачею інформації та адаптивним інтерфейсом.',
          'Development of the Treran website with modern design, structured content presentation and a responsive interface.',
          'Realizacja strony Treran z nowoczesnym designem, uporządkowaną prezentacją treści i responsywnym interfejsem.',
          'Entwicklung der Treran-Website mit modernem Design, strukturierter Inhaltsdarstellung und responsiver Benutzeroberfläche.',
          'Développement du site Treran avec un design moderne, une présentation structurée des informations et une interface adaptative.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/treran.com.webp',
    url: '#'
  },

  {
    id: 13,
    title: 'zakononline.ua',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Юридичний вебсайт із доступом до правової інформації та сучасним інтерфейсом.',
        'A legal website providing access to legal information through a modern interface.',
        'Serwis prawniczy zapewniający dostęp do informacji prawnych za pośrednictwem nowoczesnego interfejsu.',
        'Eine juristische Website mit Zugang zu Rechtsinformationen über eine moderne Benutzeroberfläche.',
        'Site web juridique donnant accès à des informations légales grâce à une interface moderne.'
    ),

    seo: {
      title: localized(
          'ZakonOnline — юридичний вебсайт',
          'ZakonOnline — Legal Website',
          'ZakonOnline — serwis prawniczy',
          'ZakonOnline — juristische Website',
          'ZakonOnline — site web juridique'
      ),
      description: localized(
          'Розробка юридичного вебсайту ZakonOnline для доступу до правової інформації через сучасний інтерфейс.',
          'Development of the ZakonOnline legal website providing access to legal information through a modern interface.',
          'Realizacja serwisu prawniczego ZakonOnline zapewniającego dostęp do informacji prawnych za pośrednictwem nowoczesnego interfejsu.',
          'Entwicklung der juristischen Website ZakonOnline mit Zugang zu Rechtsinformationen über eine moderne Benutzeroberfläche.',
          'Développement du site juridique ZakonOnline donnant accès aux informations légales grâce à une interface moderne.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/zakononline.ua.webp',
    url: '#'
  },

  {
    id: 14,
    title: 'zr-code.com',
    year: 2026,

    category: localized(
        'Вебсайт',
        'Website',
        'Strona internetowa',
        'Website',
        'Site web'
    ),

    description: localized(
        'Сайт із сучасним дизайном, структурованою подачею інформації та адаптивною версткою.',
        'A website featuring modern design, structured content presentation and responsive layout.',
        'Strona internetowa z nowoczesnym designem, uporządkowaną prezentacją treści i responsywnym układem.',
        'Eine Website mit modernem Design, strukturierter Inhaltsdarstellung und responsivem Layout.',
        'Site web au design moderne, avec une présentation structurée des informations et une mise en page adaptative.'
    ),

    seo: {
      title: localized(
          'ZR Code — розробка вебсайту',
          'ZR Code — Website Development',
          'ZR Code — realizacja strony internetowej',
          'ZR Code — Websiteentwicklung',
          'ZR Code — développement de site web'
      ),
      description: localized(
          'Розробка сайту ZR Code із сучасним дизайном, структурованою подачею інформації та адаптивною версткою.',
          'Development of the ZR Code website with modern design, structured content presentation and responsive layout.',
          'Realizacja strony ZR Code z nowoczesnym designem, uporządkowaną prezentacją informacji i responsywnym układem.',
          'Entwicklung der ZR-Code-Website mit modernem Design, strukturierter Inhaltsdarstellung und responsivem Layout.',
          'Développement du site ZR Code avec un design moderne, une présentation structurée des informations et une mise en page adaptative.'
      )
    },

    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/zr-code.com.webp',
    url: '#'
  }
];
