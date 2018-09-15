// @flow

import type {Action} from '../../types'
import type {SystemState} from '../types'
import type {SetProjectCardsPayload} from '../actions/setProjectCards'

export function setProjectCardsReducer(state: SystemState, action: Action<SetProjectCardsPayload>): SystemState {

  return {
    ...state,
    projectCards: action.payload.projectCards,
  }
}
