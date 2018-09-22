// @flow
import trello from '../../trello'

export async function fetchCards(boardId: string): Promise<any[]> {
  const url = `https://api.trello.com/1/boards/${boardId}/cards/?${trello.params}`
  const response = await fetch(url)
  return await response.json()
}