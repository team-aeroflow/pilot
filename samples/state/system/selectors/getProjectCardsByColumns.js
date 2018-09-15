// @flow

import type {ApplicationState} from '../../types'
import type {SystemState} from '../types'

import {createSelector} from 'reselect'

import {getProjectCards} from './getProjectCards'

type ProjectId = string
type ColumnId = string

type Output = {
  [ProjectId]: {
    [ColumnId]: Card[],
  }
}

export function getProjectCardsByColumns(appState: ApplicationState): Output {
  return _getProjectCardsByColumns(appState.system)
}


const _getProjectCardsByColumns: (SystemState) => Output = createSelector(
  getProjectCards.internal,
  (s: SystemState) => s.columns,
  (projectCards: $Call<typeof getProjectCards.internal, SystemState>, columns: $PropertyType<SystemState, 'columns'>): Output => {

    let result = {}

    for (let projectId in projectCards) {

      result[projectId] = {}

      for (let columnId in columns) {
        result[projectId][columnId] = []
      }

      const cards = projectCards[projectId]
      cards.forEach(card => {
        result[projectId][card.idList].push(card)
      })

    }

    return result
  }
)

getProjectCardsByColumns.internal = _getProjectCardsByColumns
