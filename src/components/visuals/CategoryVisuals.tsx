import type { ComponentType } from 'react'

/**
 * Minimal line-art marks, one per category — same language as the
 * coffee-story visuals: 200×200 viewBox, currentColor strokes, no fills.
 *
 * Parts that move on hover carry `mk-*` classes; the keyframes live in
 * global.css and are triggered by hovering the offer card / menu band.
 */

const common = {
  viewBox: '0 0 200 200',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
} as const

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 3,
} as const

/** Espresso — cup, handle, saucer; steam rises on hover. */
export function EspressoMark() {
  return (
    <svg {...common}>
      <path
        d="M58 76 H138 L128 138 a14 14 0 0 1 -14 12 H86 a14 14 0 0 1 -14 -12 Z"
        {...stroke}
        strokeLinejoin="round"
      />
      <path d="M138 90 h10 a17 17 0 0 1 0 34 h-7" {...stroke} strokeLinecap="round" />
      <path d="M42 164 H158" {...stroke} strokeLinecap="round" />
      <path className="mk-steam mk-steam--1" d="M86 58 q7 -11 0 -22" {...stroke} strokeLinecap="round" />
      <path className="mk-steam mk-steam--2" d="M110 58 q7 -11 0 -22" {...stroke} strokeLinecap="round" />
    </svg>
  )
}

/** Milk — barista pitcher; tips to pour and drips on hover. */
export function MilkMark() {
  return (
    <svg {...common}>
      <g className="mk-pitcher">
        <path
          d="M64 66 H136 L126 152 a11 11 0 0 1 -11 10 H85 a11 11 0 0 1 -11 -10 Z"
          {...stroke}
          strokeLinejoin="round"
        />
        <path d="M64 66 q-12 -8 -20 -22 q18 2 30 12" {...stroke} strokeLinejoin="round" />
        <path d="M136 88 h10 a18 18 0 0 1 0 36 h-8" {...stroke} strokeLinecap="round" />
        <path d="M84 104 q16 12 32 0" {...stroke} strokeLinecap="round" />
      </g>
      <circle className="mk-milkdrop" cx="44" cy="72" r="4" fill="currentColor" />
    </svg>
  )
}

/** Filter — V60 cone and carafe; drips through on hover. */
export function FilterMark() {
  return (
    <svg {...common}>
      <path d="M50 44 L150 44 L108 106 L92 106 Z" {...stroke} strokeLinejoin="round" />
      <path d="M68 62 H132" {...stroke} strokeLinecap="round" />
      <circle className="mk-drop mk-drop--1" cx="100" cy="118" r="4" fill="currentColor" />
      <circle className="mk-drop mk-drop--2" cx="100" cy="118" r="3.5" fill="currentColor" />
      <circle className="mk-drop mk-drop--3" cx="100" cy="118" r="3" fill="currentColor" />
      <path
        d="M62 142 H138 L130 176 a6 6 0 0 1 -6 5 H76 a6 6 0 0 1 -6 -5 Z"
        {...stroke}
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Matcha — chawan bowl; the chasen whisks side to side on hover. */
export function MatchaMark() {
  return (
    <svg {...common}>
      <path d="M46 116 H154 a54 46 0 0 1 -108 0 Z" {...stroke} strokeLinejoin="round" />
      <g className="mk-whisk">
        <path d="M100 28 V84" {...stroke} strokeLinecap="round" />
        <path d="M78 84 q22 32 44 0" {...stroke} strokeLinecap="round" />
        <path d="M88 84 V112" {...stroke} strokeLinecap="round" />
        <path d="M100 84 V116" {...stroke} strokeLinecap="round" />
        <path d="M112 84 V112" {...stroke} strokeLinecap="round" />
      </g>
    </svg>
  )
}

/** Pastry — a cinnamon roll; the spiral turns on hover (the "obrót" motif). */
export function PastryMark() {
  return (
    <svg {...common}>
      <circle cx="100" cy="100" r="60" {...stroke} />
      <path
        className="mk-spiral"
        d="M100 92 a8 8 0 0 1 0 16 a16 16 0 0 1 0 -32 a24 24 0 0 1 0 48 a32 32 0 0 1 0 -64 a40 40 0 0 1 0 80"
        {...stroke}
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Menu category id (from data/menu.ts) → its mark. */
export const CATEGORY_MARKS: Record<string, ComponentType> = {
  espresso: EspressoMark,
  filter: FilterMark,
  'matcha-inne': MatchaMark,
  dodatki: PastryMark,
}

/** Offer tile id (from data/offer.ts) → its mark. */
export const OFFER_MARKS: Record<string, ComponentType> = {
  espresso: EspressoMark,
  'na-mleku': MilkMark,
  matcha: MatchaMark,
  wypieki: PastryMark,
}
