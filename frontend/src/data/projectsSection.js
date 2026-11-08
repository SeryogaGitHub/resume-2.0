
const localized = (uk, en, pl, de) => ({
  uk,
  en,
  pl,
  de
});

export const projectsSection = {
  title: localized(
      'Проєкти',
      'Projects',
      'Projekty',
      'Projekte'
  ),

  description: localized(
      'У портфоліо представлено лише невелику частину моїх робіт — приблизно 7% від усіх реалізованих проєктів.',
      'My portfolio showcases only a small selection of my work — approximately 7% of all completed projects.',
      'W portfolio prezentuję tylko niewielką część swoich prac — około 7% wszystkich zrealizowanych projektów.',
      'Mein Portfolio zeigt nur einen kleinen Teil meiner Arbeit — etwa 7 % aller abgeschlossenen Projekte.'
  ),

  allProjects: localized(
      'Усі проєкти',
      'All projects',
      'Wszystkie projekty',
      'Alle Projekte'
  )
};
