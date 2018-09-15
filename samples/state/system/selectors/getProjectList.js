// @flow

import type {ApplicationState} from '../../types'
import type {SystemState} from '../types'

import {createSelector} from 'reselect'

export function getProjectList(appState: ApplicationState): Project[] {
  return _getProjectList(appState.system)
}

const _getProjectList: (state: SystemState) => Project[] = createSelector(
  (s: SystemState) => s.projects,
  (s: SystemState) => s.projectOrder,
  (projects: {[string]: Project}, order: string[]): Project[] => {
    return order.map(id => projects[id])
  }
)

getProjectList.internal = _getProjectList
