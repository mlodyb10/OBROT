// Jedno źródło prawdy dla danych kontaktowych i faktów o lokalu.
// Dane realne (WebSearch / Specialty Atlas / KRS). Łatwe do podmiany.

export const site = {
  name: 'OBRÓT',
  fullName: 'OBRÓT COFFEE',
  tagline: 'Sprawy nabrały obrotu.',
  kicker: 'Specialty espresso bar · Katowice',
  established: '2025',

  address: {
    street: 'plac Miarki 1',
    postal: '40-224',
    city: 'Katowice',
    note: 'róg Kościuszki i placu Miarki',
  },

  hours: [
    { days: 'Poniedziałek – Piątek', time: '8:00 – 19:00' },
    { days: 'Sobota – Niedziela', time: '9:00 – 18:00' },
  ],
  // Godziny weekendowe są przybliżone — do potwierdzenia i podmiany.
  hoursShort: 'Codziennie 8:00 – 19:00',

  phone: {
    display: '788 074 196',
    href: 'tel:+48788074196',
  },
  email: {
    display: 'obrotcoffee@gmail.com',
    href: 'mailto:obrotcoffee@gmail.com',
  },

  socials: {
    instagram: {
      label: '@obrotcoffee',
      href: 'https://www.instagram.com/obrotcoffee/',
    },
    facebook: {
      label: 'OBRÓT Coffee',
      href: 'https://www.facebook.com/p/OBR%C3%93T-Coffee-61579796645069/',
    },
  },

  // Osadzona mapa Google (plac Miarki 1, Katowice) — tryb bez klucza API.
  mapEmbedSrc:
    'https://www.google.com/maps?q=plac%20Miarki%201,%2040-224%20Katowice&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=plac+Miarki+1+Katowice',
} as const
