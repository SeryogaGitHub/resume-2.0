
const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const header = {
  navigation: {
    home: localized(
        'Головна',
        'Home',
        'Strona główna',
        'Startseite',
        'Accueil'
    ),
    about: localized(
        'Про мене',
        'About me',
        'O mnie',
        'Über mich',
        'À propos'
    ),
    projects: localized(
        'Портфоліо',
        'Portfolio',
        'Portfolio',
        'Portfolio',
        'Portfolio'
    ),
    skills: localized(
        'Навички',
        'Skills',
        'Umiejętności',
        'Fähigkeiten',
        'Compétences'
    ),
    contacts: localized(
        'Контакти',
        'Contacts',
        'Kontakt',
        'Kontakt',
        'Contact'
    ),
    blog: localized(
        'Блог',
        'Blog',
        'Blog',
        'Blog',
        'Blog'
    )
  }
};
