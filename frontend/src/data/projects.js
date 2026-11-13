
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
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Сайт кулінарної школи з сучасною структурою та анімаціями.',
        'A culinary school website with a modern structure and animations.',
        'Strona szkoły kulinarnej z nowoczesną strukturą i animacjami.',
        'Eine Website einer Kochschule mit moderner Struktur und Animationen.',
        'Site web d’une école de cuisine avec une structure moderne et des animations.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/culinary-school.mhp.com.ua.png',
    url: '#'
  },
  {
    id: 2,
    title: 'foodservice.mhp.ua',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Корпоративний сайт у сфері харчового обслуговування з сучасною структурою та анімаціями.',
        'A corporate website in the food service industry with a modern structure and animations.',
        'Strona korporacyjna z branży gastronomicznej z nowoczesną strukturą i animacjami.',
        'Eine Unternehmenswebsite aus dem Bereich Foodservice mit moderner Struktur und Animationen.',
        'Site web d’entreprise dans le secteur de la restauration, avec une structure moderne et des animations.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/foodservice.mhp.ua.png',
    url: '#'
  },
  {
    id: 3,
    title: 'life.mhp4u.com.ua-robota-v-mhp',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Сайт із вакансіями та інформацією про працевлаштування в компанії МХП.',
        'A website featuring job vacancies and employment information at MHP.',
        'Strona z ofertami pracy i informacjami o zatrudnieniu w firmie MHP.',
        'Eine Website mit Stellenangeboten und Informationen zu Karrieremöglichkeiten bei MHP.',
        'Site web présentant les offres d’emploi et les informations sur les possibilités de recrutement chez MHP.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/life.mhp4u.com.ua-robota-v-mhp.png',
    url: '#'
  },
  {
    id: 4,
    title: 'life.mhp4u.com.ua-young-gen',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Сайт молодіжної програми з інформацією про можливості для молодих фахівців.',
        'A youth program website presenting opportunities for young professionals.',
        'Strona programu młodzieżowego przedstawiająca możliwości dla młodych specjalistów.',
        'Eine Website eines Nachwuchsprogramms mit Informationen zu Möglichkeiten für junge Fachkräfte.',
        'Site web d’un programme destiné aux jeunes, présentant des opportunités pour les jeunes professionnels.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/life.mhp4u.com.ua-young-gen.png',
    url: '#'
  },
  {
    id: 5,
    title: 'mhpgromadi.org.ua',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Сайт проєкту МХП-Громаді з інформацією про соціальні ініціативи та підтримку громад.',
        'An MHP-Gromadi website featuring information about social initiatives and community support.',
        'Strona projektu MHP-Gromadi z informacjami o inicjatywach społecznych i wsparciu społeczności lokalnych.',
        'Eine Website des Projekts MHP-Gromadi mit Informationen zu sozialen Initiativen und zur Unterstützung lokaler Gemeinschaften.',
        'Site web du projet MHP-Gromadi présentant des informations sur les initiatives sociales et le soutien aux communautés locales.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/mhpgromadi.org.ua.png',
    url: '#'
  },
  {
    id: 6,
    title: 'Resume',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Персональний сайт-резюме для презентації професійного досвіду, навичок та виконаних проєктів.',
        'A personal resume website showcasing professional experience, skills and completed projects.',
        'Osobista strona CV prezentująca doświadczenie zawodowe, umiejętności i zrealizowane projekty.',
        'Eine persönliche Lebenslauf-Website zur Präsentation von Berufserfahrung, Fähigkeiten und abgeschlossenen Projekten.',
        'Site personnel de présentation du CV, mettant en valeur l’expérience professionnelle, les compétences et les projets réalisés.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/resume.png',
    url: '#'
  },
  {
    id: 7,
    title: 'resume-2.0',
    year: 2026,
    category: localized('Вебзастосунок', 'Web Application', 'Aplikacja internetowa', 'Webanwendung', 'Application web'),
    description: localized(
        'Персональний вебзастосунок-портфоліо з багатомовним інтерфейсом, інформацією про навички, досвід та реалізовані проєкти.',
        'A personal portfolio web application featuring a multilingual interface, professional skills, experience and completed projects.',
        'Osobista aplikacja internetowa typu portfolio z wielojęzycznym interfejsem, informacjami o umiejętnościach, doświadczeniu i zrealizowanych projektach.',
        'Eine persönliche Portfolio-Webanwendung mit mehrsprachiger Benutzeroberfläche sowie Informationen zu Fähigkeiten, Berufserfahrung und abgeschlossenen Projekten.',
        'Application web de portfolio personnel avec une interface multilingue et des informations sur les compétences, l’expérience professionnelle et les projets réalisés.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/resume-2.0.png',
    url: '#'
  },
  {
    id: 8,
    title: 'ryaba.ua',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Корпоративний вебсайт бренду «Ряба» з сучасною структурою та адаптивним інтерфейсом.',
        'A corporate website for the Ryaba brand featuring a modern structure and responsive interface.',
        'Strona korporacyjna marki Ryaba z nowoczesną strukturą i responsywnym interfejsem.',
        'Eine Unternehmenswebsite der Marke Ryaba mit moderner Struktur und responsiver Benutzeroberfläche.',
        'Site web institutionnel de la marque Ryaba, avec une structure moderne et une interface adaptative.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/ryaba.ua.png',
    url: '#'
  },
  {
    id: 9,
    title: 'superfileo.com.ua',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Вебсайт із сучасною структурою, адаптивною версткою та інтерактивними елементами.',
        'A website featuring a modern structure, responsive layout and interactive elements.',
        'Strona internetowa z nowoczesną strukturą, responsywnym układem i elementami interaktywnymi.',
        'Eine Website mit moderner Struktur, responsivem Layout und interaktiven Elementen.',
        'Site web avec une structure moderne, une mise en page adaptative et des éléments interactifs.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/superfileo.com.ua.png',
    url: '#'
  },
  {
    id: 10,
    title: 'syntech.software',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Сайт IT-компанії з презентацією послуг, сучасним дизайном та адаптивним інтерфейсом.',
        'An IT company website presenting its services through a modern design and responsive interface.',
        'Strona firmy IT prezentująca usługi za pomocą nowoczesnego projektu i responsywnego interfejsu.',
        'Eine Website eines IT-Unternehmens zur Präsentation seiner Dienstleistungen mit modernem Design und responsiver Benutzeroberfläche.',
        'Site web d’une entreprise informatique présentant ses services dans un design moderne avec une interface adaptative.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/syntech.software.png',
    url: '#'
  },
  {
    id: 11,
    title: 'toplead.com.ua',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Корпоративний сайт із презентацією послуг, сучасною структурою та адаптивною версткою.',
        'A corporate website presenting services through a modern structure and responsive layout.',
        'Strona korporacyjna prezentująca usługi z nowoczesną strukturą i responsywnym układem.',
        'Eine Unternehmenswebsite zur Präsentation von Dienstleistungen mit moderner Struktur und responsivem Layout.',
        'Site web institutionnel présentant des services avec une structure moderne et une mise en page adaptative.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/toplead.com.ua.png',
    url: '#'
  },
  {
    id: 12,
    title: 'treran.com',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Вебсайт із сучасним дизайном, структурованою подачею інформації та адаптивним інтерфейсом.',
        'A website featuring modern design, structured content presentation and a responsive interface.',
        'Strona internetowa z nowoczesnym designem, uporządkowaną prezentacją treści i responsywnym interfejsem.',
        'Eine Website mit modernem Design, strukturierter Inhaltsdarstellung und responsiver Benutzeroberfläche.',
        'Site web au design moderne, avec une présentation structurée des informations et une interface adaptative.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/treran.com.png',
    url: '#'
  },
  {
    id: 13,
    title: 'zakononline.ua',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Юридичний вебсайт із доступом до правової інформації та сучасним інтерфейсом.',
        'A legal website providing access to legal information through a modern interface.',
        'Serwis prawniczy zapewniający dostęp do informacji prawnych za pośrednictwem nowoczesnego interfejsu.',
        'Eine juristische Website mit Zugang zu Rechtsinformationen über eine moderne Benutzeroberfläche.',
        'Site web juridique donnant accès à des informations légales grâce à une interface moderne.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/zakononline.ua.png',
    url: '#'
  },
  {
    id: 14,
    title: 'zr-code.com',
    year: 2026,
    category: localized('Вебсайт', 'Website', 'Strona internetowa', 'Website', 'Site web'),
    description: localized(
        'Сайт із сучасним дизайном, структурованою подачею інформації та адаптивною версткою.',
        'A website featuring modern design, structured content presentation and responsive layout.',
        'Strona internetowa z nowoczesnym designem, uporządkowaną prezentacją treści i responsywnym układem.',
        'Eine Website mit modernem Design, strukturierter Inhaltsdarstellung und responsivem Layout.',
        'Site web au design moderne, avec une présentation structurée des informations et une mise en page adaptative.'
    ),
    technologies: ['SCSS'],
    image: 'https://raw.githubusercontent.com/SeryogaGitHub/resume-2.0/refs/heads/main/frontend/src/assets/image/projects-page/zr-code.com.png',
    url: '#'
  }
];
