// @flow
import {createProjectFromCustomFieldOption} from './createProjectFromCustomFieldOption'

export function createProjectsFromCustomFieldOptionList(options: CustomFieldOption[]): Project[] {
  return options.map(createProjectFromCustomFieldOption)
}