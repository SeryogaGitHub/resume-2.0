const localized = (uk, en, pl, de) => ({
  uk,
  en,
  pl,
  de
});

export const header = {
  navigation: {
    home: localized(
        'Головна',
        'Home',
        'Strona główna',
        'Startseite'
    ),
    about: localized(
        'Про мене',
        'About me',
        'O mnie',
        'Über mich'
    ),
    projects: localized(
        'Портфоліо',
        'Portfolio',
        'Portfolio',
        'Portfolio'
    ),
    skills: localized(
        'Навички',
        'Skills',
        'Umiejętności',
        'Fähigkeiten'
    ),
    contacts: localized(
        'Контакти',
        'Contacts',
        'Kontakt',
        'Kontakt'
    ),
    blog: localized(
        'Блог',
        'Blog',
        'Blog',
        'Blog'
    )
  }
};