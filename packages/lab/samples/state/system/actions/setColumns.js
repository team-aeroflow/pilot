// @flow
import type {Action} from '../../../state/types'

export type SetColumnsPayload = {
  columns: {[string]: BoardColumn}
}

const id = 'system/SET_COLUMNS'

export const setColumns = (columns: {[string]: BoardColumn}): Action<SetColumnsPayload> => ({
  type: id,
  payload: {
    columns,
  }
})

setColumns.id = id
