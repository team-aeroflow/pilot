// @flow
import trello from '../../trello'

export function createProjectCardMap(customFields: CardCustomField[]): {[string]: string[]} {
  return customFields.reduce((result, field) => {
    if (!field.idValue || field.idCustomField !== trello.projectCustomFieldId) {
      return result
    }

    const projectCards = result[field.idValue] || []

    return {
      ...result,
      [field.idValue]: [
        ...projectCards,
        field.idModel,
      ]
    }
  }, {})
}