
const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const projectsSection = {
  title: localized(
      'Проєкти',
      'Projects',
      'Projekty',
      'Projekte',
      'Projets'
  ),

  description: localized(
      'У портфоліо представлено лише невелику частину моїх робіт — приблизно 7% від усіх реалізованих проєктів.',
      'My portfolio showcases only a small selection of my work — approximately 7% of all completed projects.',
      'W portfolio prezentuję tylko niewielką część swoich prac — około 7% wszystkich zrealizowanych projektów.',
      'Mein Portfolio zeigt nur einen kleinen Teil meiner Arbeit — etwa 7 % aller abgeschlossenen Projekte.',
      'Mon portfolio présente seulement une petite partie de mes réalisations — environ 7 % de l’ensemble des projets réalisés.'
  ),

  allProjects: localized(
      'Усі проєкти',
      'All projects',
      'Wszystkie projekty',
      'Alle Projekte',
      'Tous les projets'
  )
};
