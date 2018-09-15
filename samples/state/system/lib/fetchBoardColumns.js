// @flow
import trello from '../../trello'

export async function fetchBoardColumn(boardId: string): Promise<BoardColumn[]> {
  const url = `https://api.trello.com/1/boards/${boardId}/lists?${trello.params}`
  const response = await fetch(url)
  return await response.json()
}