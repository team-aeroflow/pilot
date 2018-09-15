// @flow

import type {Action} from '../../types'
import type {SystemState} from '../types'
import type {SetCardsPayload} from '../actions/setCards'

export function setCardsReducer(state: SystemState, action: Action<SetCardsPayload>): SystemState {

  return {
    ...state,
    cards: action.payload.cards,
  }
}
