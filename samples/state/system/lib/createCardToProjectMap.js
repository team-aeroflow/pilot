// @flow
import trello from '../../trello'

export function createCardToProjectMap(cardCustomFields: CardCustomField[]): {[string]: string} {
  return cardCustomFields.reduce((results, field) => {
    if (field.idCustomField !== trello.projectCustomFieldId) {
      return results
    }

    return {
      ...results,
      [field.idModel]: field.idValue,
    }
  }, {})
}