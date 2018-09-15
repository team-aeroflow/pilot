// @flow

export function createProjectFromCustomFieldOption(option: CustomFieldOption): Project {
  return {
    id: option.id,
    name: option.value.text,
    __trello__customFieldOption__: option,
  }
}