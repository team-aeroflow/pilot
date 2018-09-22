// @flow
import trello from '../../trello'

export async function fetchOrganizations(): Promise<OrganizationListEntry[]> {
  const url = `https://api.trello.com/1/members/me/organizations?${trello.params}`
  const response = await fetch(url)
  return await response.json()
}