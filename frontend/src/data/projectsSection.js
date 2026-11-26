const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const projectsSection = {
  title: localized(
      'Портфоліо',
      'Portfolio',
      'Portfolio',
      'Portfolio',
      'Portfolio'
  ),

  description: localized(
      'У портфоліо представлено лише невелику частину моїх робіт, у яких моя роль — повна Frontend-розробка. Працював у команді з Backend-розробником, а також у тісній співпраці з дизайнером.',
      'My portfolio showcases only a small selection of my work, where I was responsible for full Frontend development. I worked in a team with a Backend developer and in close collaboration with a designer.',
      'W portfolio prezentuję tylko niewielką część swoich prac, w których odpowiadałem za pełną realizację Frontendu. Pracowałem w zespole z programistą Backend oraz ściśle współpracowałem z projektantem.',
      'Mein Portfolio zeigt nur einen kleinen Teil meiner Arbeiten, bei denen ich für die vollständige Frontend-Entwicklung verantwortlich war. Ich arbeitete im Team mit einem Backend-Entwickler und eng mit einem Designer zusammen.',
      'Mon portfolio présente seulement une petite partie de mes réalisations, pour lesquelles j’étais responsable du développement Frontend complet. J’ai travaillé en équipe avec un développeur Backend et en étroite collaboration avec un designer.'
  ),

  allProjects: localized(
      'Усі проєкти',
      'All projects',
      'Wszystkie projekty',
      'Alle Projekte',
      'Tous les projets'
  )
};
