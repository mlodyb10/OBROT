import type { OfferItem } from '../data/offer'
import { Media } from './Media'
import { OFFER_MARKS } from './visuals/CategoryVisuals'

export function OfferCard({ item }: { item: OfferItem }) {
  const Mark = OFFER_MARKS[item.id]

  return (
    <article
      className={['offer-card', item.accent === 'matcha' ? 'offer-card--matcha' : '']
        .filter(Boolean)
        .join(' ')}
    >
      <div className="offer-card__media">
        <Media src={item.image} alt={item.title} label={item.title} />
      </div>
      <div className="offer-card__body">
        <span className="offer-card__mark" aria-hidden="true">
          {Mark && <Mark />}
        </span>
        <h3 className="offer-card__title">{item.title}</h3>
        <p className="offer-card__desc">{item.description}</p>
      </div>
    </article>
  )
}
