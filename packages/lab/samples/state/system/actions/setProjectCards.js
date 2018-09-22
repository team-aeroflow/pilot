// @flow
import type {Action} from '../../../state/types'

export type SetProjectCardsPayload = {
  projectCards: {[string]: string[]}
}

const id = 'system/SET_PROJECT_CARDS'

export const setProjectCards = (projectCards: {[string]: string[]}): Action<SetProjectCardsPayload> => ({
  type: id,
  payload: {
    projectCards,
  }
})

setProjectCards.id = id
