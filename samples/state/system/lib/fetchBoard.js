// @flow
import trello from '../../trello'

export async function fetchBoard(id: string): Promise<any> {
  const url = `https://api.trello.com/1/boards/${id}?${trello.params}`
  const response = await fetch(url)
  return await response.json()
}