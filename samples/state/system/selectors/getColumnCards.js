// @flow

import type {ApplicationState} from '../../types'
import type {SystemState} from '../types'

import {createSelector} from 'reselect'

export function getColumnCards(appState: ApplicationState): ApplicationState {
  return appState
}

const _getColumnCards: (state: SystemState) => {[string]: Card[]} = createSelector(
  (s: SystemState) => s.cards,
  (s: SystemState) => s.columns,
  (cards: {[string]: Card}, columns: {[string]: BoardColumn}): {[string]: Card[]} => {
    let result = {}
    for (let cardId in cards) {
      const card = cards[cardId]
      const columnCards = result[card.idList] || []
      result = {
        ...result,
        [card.idList]: [
          ...columnCards,
          card,
        ]
      }
    }

    return result
  }
)

getColumnCards.internal = _getColumnCards
