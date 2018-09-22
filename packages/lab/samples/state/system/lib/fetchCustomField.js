// @flow
import trello from '../../trello'

export async function fetchCustomField(id: string): Promise<CustomField> {
  const url = `https://api.trello.com/1/customfields/${id}?${trello.params}`
  const response = await fetch(url)
  return await response.json()
}