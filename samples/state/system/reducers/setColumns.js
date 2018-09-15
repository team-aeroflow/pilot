// @flow

import type {Action} from '../../types'
import type {SystemState} from '../types'
import type {SetColumnsPayload} from '../actions/setColumns'

export function setColumnsReducer(state: SystemState, action: Action<SetColumnsPayload>): SystemState {

  return {
    ...state,
    columns: action.payload.columns,
  }
}
