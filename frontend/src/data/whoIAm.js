
const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const whoIAm = {
  title: localized(
      'Про мене',
      'About me',
      'O mnie',
      'Über mich',
      'À propos de moi'
  ),

  description: localized(
      'Маю професію, яка приносить задоволення. Коли починаю працювати, повністю занурююся в процес!',
      'I enjoy my profession. Once I start working, I become fully immersed in the process!',
      'Wykonuję zawód, który daje mi satysfakcję. Kiedy zaczynam pracę, całkowicie angażuję się w proces!',
      'Ich übe einen Beruf aus, der mir Freude bereitet. Sobald ich mit der Arbeit beginne, tauche ich vollständig in den Prozess ein!',
      'J’exerce un métier qui me passionne. Dès que je commence à travailler, je m’immerge complètement dans le processus !'
  ),

  workPreferences: localized(
      'Шукаю постійну роботу в офісі з офіційним працевлаштуванням і можливістю кар’єрного зростання. Також розглядаю віддалену роботу.',
      'I am looking for a long-term office position with official employment and opportunities for career growth. I am also open to remote work.',
      'Szukam stałej pracy w biurze z oficjalnym zatrudnieniem i możliwością rozwoju kariery. Rozważam również pracę zdalną.',
      'Ich suche eine langfristige Bürotätigkeit mit offizieller Anstellung und Entwicklungsmöglichkeiten. Auch eine Remote-Stelle kommt für mich infrage.',
      'Je recherche un emploi stable en présentiel, avec un contrat de travail officiel et des possibilités d’évolution professionnelle. Je suis également ouvert au télétravail.'
  )
};
