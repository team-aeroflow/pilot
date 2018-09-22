// @flow
import trello from '../../trello'

export async function fetchOrganization(id: string): Promise<Organization> {
  const url = `https://api.trello.com/1/organizations/${id}?${trello.params}`
  const response = await fetch(url)
  return await response.json()
}