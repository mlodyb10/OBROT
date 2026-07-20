// Kafle sekcji "Oferta" na stronie głównej.
// image: ścieżka do zdjęcia w public/img/ (podmienimy na AI/prawdziwe).
// accent 'matcha' przełącza akcent kafla na zielony, reszta używa kobaltu.

export interface OfferItem {
  /** Also selects the card's line-art mark — see OFFER_MARKS. */
  id: string
  title: string
  description: string
  image: string
  accent?: 'cobalt' | 'matcha'
}

export const offer: OfferItem[] = [
  {
    id: 'espresso',
    title: 'Espresso',
    description:
      'Rotujące się ziarno od zaprzyjaźnionych palarni specialty. Krótkie, intensywne, wyciągnięte z precyzją co do sekundy.',
    image: '/img/espresso.jpg',
    accent: 'cobalt',
  },
  {
    id: 'na-mleku',
    title: 'Na mleku',
    description:
      'Flat white, cappuccino, latte — jedwabista mikropianka i latte art. Mleko krowie lub roślinne, do wyboru.',
    image: '/img/interior.jpg',
    accent: 'cobalt',
  },
  {
    id: 'matcha',
    title: 'Matcha',
    description:
      'Ceremonialna matcha ubijana chasenem. Na zimno lub gorąco, sama albo z mlekiem — łagodna, roślinna energia.',
    image: '/img/matcha.jpg',
    accent: 'matcha',
  },
  {
    id: 'wypieki',
    title: 'Wypieki',
    description:
      'Codziennie świeże, rzemieślnicze wypieki. Idealne dopełnienie filiżanki — najlepszy pretekst, by zostać dłużej.',
    image: '/img/wypieki.jpg',
    accent: 'cobalt',
  },
]
