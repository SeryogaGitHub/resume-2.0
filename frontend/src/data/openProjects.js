
const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const openProjects = {
  title: localized(
      'Я відкритий до нових проєктів',
      'I am open to new projects',
      'Jestem otwarty na nowe projekty',
      'Ich bin offen für neue Projekte',
      'Je suis ouvert à de nouveaux projets'
  ),

  description: localized(
      'Жодного візуального шуму чи типових шаблонів. Лише продуманий, індивідуальний дизайн, створений на основі вашої історії.',
      'No visual clutter or generic templates. Just thoughtful, custom design created around your story.',
      'Bez zbędnego chaosu wizualnego i typowych szablonów. Tylko przemyślany, indywidualny projekt stworzony na podstawie Twojej historii.',
      'Kein visuelles Durcheinander und keine gewöhnlichen Vorlagen. Nur durchdachtes, individuelles Design, das auf Ihrer Geschichte basiert.',
      'Pas de surcharge visuelle ni de modèles génériques. Un design soigné et personnalisé, conçu autour de votre histoire.'
  )
};
