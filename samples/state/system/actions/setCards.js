// @flow
import type {Action} from '../../../state/types'

export type SetCardsPayload = {
  cards: {[string]: Card},
}

const id = 'system/SET_CARDS'

export const setCards = (cards: {[string]: Card}): Action<SetCardsPayload> => ({
  type: id,
  payload: {
    cards,
  }
})

setCards.id = id
