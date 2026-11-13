const localized = (uk, en, pl, de, fr) => ({
  uk,
  en,
  pl,
  de,
  fr
});

export const contactSection = {
  title: localized(
      'Контакти',
      'Contact',
      'Kontakt',
      'Kontakt',
      'Contact'
  ),

  location: localized(
      'Місцезнаходження — Житомир, Україна',
      'Location — Zhytomyr, Ukraine',
      'Lokalizacja — Żytomierz, Ukraina',
      'Standort — Schytomyr, Ukraine',
      'Localisation — Jytomyr, Ukraine'
  ),

  description: localized(
      'Працюю оперативно, зберігаю гостроту мислення та щоразу створюю продумані цифрові продукти.',
      'I work efficiently, maintain a sharp focus, and create well-thought-out digital products.',
      'Pracuję sprawnie, zachowuję świeżość myślenia i tworzę przemyślane produkty cyfrowe.',
      'Ich arbeite effizient, behalte einen klaren Blick und entwickle durchdachte digitale Produkte.',
      'Je travaille efficacement, garde l’esprit vif et crée des produits numériques bien pensés.'
  ),

  email: localized(
      'Електронна пошта',
      'Email',
      'Adres e-mail',
      'E-Mail',
      'E-mail'
  ),

  phone: localized(
      'Телефон',
      'Phone',
      'Telefon',
      'Telefon',
      'Téléphone'
  )
};