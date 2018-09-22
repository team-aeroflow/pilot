// @flow
import * as R from 'ramda'
import {fetchCardCustomFields} from './fetchCardCustomFields'

export async function fetchCustomFieldsFromCardList(cards: Card[]): Promise<any> {
  const batches: Card[][] = R.splitEvery(10, cards)
  let fetchResults = []

  for (let i=0; i<batches.length; i++) {
    const r = await Promise.all(batches[i].map(card => {
      return fetchCardCustomFields(card.id)
    }))
    fetchResults = [
      ...fetchResults,
      ...r,
    ]
  }

  const customFields = R.flatten(fetchResults)
  return customFields
}