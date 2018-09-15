// @flow
import trello from '../../trello'

export async function fetchCardCustomFields(cardId: string): Promise<CardCustomField[]> {
  const url = `https://api.trello.com/1/cards/${cardId}/customFieldItems?${trello.params}`
  const response = await fetch(url)
  return await response.json()
}