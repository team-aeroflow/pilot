// @flow
import trello from '../../trello'

export async function fetchOrganizationBoards(orgId: string): Promise<Board[]> {
  const url = `https://api.trello.com/1/organizations/${orgId}/boards?${trello.params}`
  const response = await fetch(url)
  return await response.json()
}