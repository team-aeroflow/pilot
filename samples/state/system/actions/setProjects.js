// @flow
import type {Action} from '../../../state/types'

export type SetProjectsPayload = {
  projects: {[string]: Project},
  order: string[],
}

const id = 'system/SET_PROJECTS'

export const setProjects = (projects: {[string]: Project}, order: string[]): Action<SetProjectsPayload> => ({
  type: id,
  payload: {
    projects,
    order,
  }
})

setProjects.id = id
