// Dane podstrony /menu. CENY SĄ PRZYKŁADOWE — do podmiany na prawdziwe.
// Struktura: kategorie -> pozycje (nazwa, opis, cena, opcjonalnie tag matcha/nowość).

export interface MenuRow {
  name: string
  note?: string
  price: string
  tag?: 'matcha' | 'nowość' | 'roślinne'
}

export interface MenuCategory {
  id: string
  index: string
  title: string
  subtitle?: string
  rows: MenuRow[]
}

// Znacznik, żeby łatwo odnaleźć wartości do podmiany.
export const PRICES_ARE_PLACEHOLDER = true

export const menu: MenuCategory[] = [
  {
    id: 'espresso',
    index: '01',
    title: 'Na bazie espresso',
    subtitle: 'Ziarno specialty, zmienny wybór palarni',
    rows: [
      { name: 'Espresso', price: '9 zł' },
      { name: 'Doppio', note: 'podwójne espresso', price: '12 zł' },
      { name: 'Americano', price: '11 zł' },
      { name: 'Cortado', price: '13 zł' },
      { name: 'Flat white', price: '15 zł' },
      { name: 'Cappuccino', price: '14 zł' },
      { name: 'Latte', price: '16 zł' },
    ],
  },
  {
    id: 'filter',
    index: '02',
    title: 'Przelewy i alternatywy',
    subtitle: 'Jasno palone, zmienne pochodzenie',
    rows: [
      { name: 'Filtr / batch brew', price: '13 zł' },
      { name: 'V60', note: 'parzone ręcznie', price: '17 zł' },
      { name: 'Cold brew', note: 'nacią­gane 16 h', price: '16 zł', tag: 'roślinne' },
    ],
  },
  {
    id: 'matcha-inne',
    index: '03',
    title: 'Matcha i reszta',
    subtitle: 'Nie tylko kawa',
    rows: [
      { name: 'Matcha latte', price: '18 zł', tag: 'matcha' },
      { name: 'Matcha na zimno', note: 'iced', price: '18 zł', tag: 'matcha' },
      { name: 'Gorąca czekolada', price: '15 zł' },
      { name: 'Chai latte', price: '16 zł' },
      { name: 'Herbata', note: 'wybór liściastych', price: '12 zł' },
    ],
  },
  {
    id: 'dodatki',
    index: '04',
    title: 'Dodatki i wypieki',
    subtitle: 'Coś do filiżanki',
    rows: [
      { name: 'Mleko roślinne', note: 'owsiane / migdałowe', price: '+3 zł', tag: 'roślinne' },
      { name: 'Dodatkowy shot', price: '+4 zł' },
      { name: 'Ciasto dnia', note: 'zmienna oferta', price: '16 zł' },
      { name: 'Cynamonka', price: '14 zł', tag: 'nowość' },
      { name: 'Cookie', price: '10 zł' },
    ],
  },
]
