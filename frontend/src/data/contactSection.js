
const localized = (uk, en, pl, de) => ({
  uk,
  en,
  pl,
  de
});

export const contactSection = {
  title: localized(
      'Контакти',
      'Contact',
      'Kontakt',
      'Kontakt'
  ),

  location: localized(
      'Місцезнаходження — Житомир, Україна',
      'Location — Zhytomyr, Ukraine',
      'Lokalizacja — Żytomierz, Ukraina',
      'Standort — Schytomyr, Ukraine'
  ),

  description: localized(
      'Працюю оперативно, зберігаю гостроту мислення та щоразу створюю продумані цифрові продукти.',
      'I work efficiently, maintain a sharp focus, and create well-thought-out digital products.',
      'Pracuję sprawnie, zachowuję świeżość myślenia i tworzę przemyślane produkty cyfrowe.',
      'Ich arbeite effizient, behalte einen klaren Blick und entwickle durchdachte digitale Produkte.'
  ),

  email: localized(
      'Електронна пошта',
      'Email',
      'Adres e-mail',
      'E-Mail'
  ),

  phone: localized(
      'Телефон',
      'Phone',
      'Telefon',
      'Telefon'
  )
};