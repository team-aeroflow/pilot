// @flow
import type {Action} from '../../../state/types'

export type SetCardToProjectPayload = {
  cardToProject: {[string]: string}
}

const id = 'system/SET_CARD_TO_PROJECT'

export const setCardToProject = (cardToProject: {[string]: string}): Action<SetCardToProjectPayload> => ({
  type: id,
  payload: {
    cardToProject,
  }
})

setCardToProject.id = id
