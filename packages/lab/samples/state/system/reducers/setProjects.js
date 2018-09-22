// @flow

import type {Action} from '../../types'
import type {SystemState} from '../types'
import type {SetProjectsPayload} from '../actions/setProjects'

export function setProjectsReducer(state: SystemState, action: Action<SetProjectsPayload>): SystemState {

  return {
    ...state,
    projects: action.payload.projects,
    projectOrder: action.payload.order,
  }
}
