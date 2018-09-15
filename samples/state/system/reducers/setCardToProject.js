// @flow

import type {Action} from '../../types'
import type {SystemState} from '../types'
import type {SetCardToProjectPayload} from '../actions/setCardToProject'

export function setCardToProjectReducer(state: SystemState, action: Action<SetCardToProjectPayload>): SystemState {

  return {
    ...state,
  }
}
