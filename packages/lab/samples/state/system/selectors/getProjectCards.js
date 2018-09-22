// @flow

import type {ApplicationState} from '../../types'
import type {SystemState} from '../types'

import {createSelector} from 'reselect'

export function getProjectCards(appState: ApplicationState): {[string]: Card[]} {
  return _getProjectCards(appState.system)
}

const _getProjectCards: (SystemState) => {[string]: Card[]} = createSelector(
  (s: SystemState) => s.cards,
  (s: SystemState) => s.projectCards,
  (cards: {[string]: Card}, projectCards: {[string]: string[]}): {[string]: Card[]} => {
    let result = {}
    for (let projectId in projectCards) {
      const cs = projectCards[projectId]
      result[projectId] = cs.map(c => cards[c])
    }

    return result
  }
)

getProjectCards.internal = _getProjectCards
